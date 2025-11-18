#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const pdfParse = require('pdf-parse');

/**
 * Parse command-line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Error: No file path provided');
    console.error('Usage: node convert_pdf.js <file.pdf> [--output-dir <dir>] [--archive-dir <dir>]');
    process.exit(1);
  }

  const filePath = args[0];
  let outputDir = null;
  let archiveDir = null;

  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--output-dir' && i + 1 < args.length) {
      outputDir = args[i + 1];
      i++;
    } else if (args[i] === '--archive-dir' && i + 1 < args.length) {
      archiveDir = args[i + 1];
      i++;
    }
  }

  return { filePath, outputDir, archiveDir };
}

/**
 * Validate that file exists and is a PDF
 */
async function validateFile(filePath) {
  try {
    const stats = await fs.stat(filePath);
    if (!stats.isFile()) {
      throw new Error(`${filePath} is not a file`);
    }

    const ext = path.extname(filePath).toLowerCase();
    if (ext !== '.pdf') {
      throw new Error(`${filePath} is not a PDF file`);
    }

    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    }
    throw error;
  }
}

/**
 * Convert PDF to Markdown
 */
async function convertPdfToMarkdown(filePath) {
  try {
    const dataBuffer = await fs.readFile(filePath);
    const data = await pdfParse(dataBuffer);
    
    // Extract text and format as Markdown
    let markdown = '';
    
    // Add title if available
    if (data.info && data.info.Title) {
      markdown += `# ${data.info.Title}\n\n`;
    }
    
    // Add metadata if available
    if (data.info) {
      if (data.info.Author) {
        markdown += `**Author:** ${data.info.Author}\n`;
      }
      if (data.info.CreationDate) {
        markdown += `**Created:** ${data.info.CreationDate}\n`;
      }
      if (data.info.ModDate) {
        markdown += `**Modified:** ${data.info.ModDate}\n`;
      }
      if (data.info.Author || data.info.CreationDate || data.info.ModDate) {
        markdown += '\n';
      }
    }
    
    // Convert text content to Markdown
    // Split by double newlines to preserve paragraphs
    const paragraphs = data.text
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(p => p.length > 0);
    
    markdown += paragraphs
      .map(p => {
        // Try to detect headings (lines that are short and end without period)
        if (p.length < 100 && !p.includes('.') && p.split('\n').length === 1) {
          return `## ${p}`;
        }
        return p;
      })
      .join('\n\n');
    
    return markdown;
  } catch (error) {
    throw new Error(`Failed to convert PDF: ${error.message}`);
  }
}

/**
 * Get archive directory path based on file modification date
 */
async function getArchiveDirectory(filePath, archiveDir) {
  const stats = await fs.stat(filePath);
  const date = new Date(stats.mtime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  
  // If archiveDir is relative, make it relative to the file's directory
  // If absolute, use as-is
  const fileDir = path.dirname(path.resolve(filePath));
  const baseArchiveDir = archiveDir 
    ? (path.isAbsolute(archiveDir) ? archiveDir : path.resolve(fileDir, archiveDir))
    : path.resolve(fileDir, 'archive');
  
  return path.join(baseArchiveDir, String(year), month);
}

/**
 * Move file to archive directory
 */
async function archiveFile(filePath, archiveDir) {
  try {
    const archivePath = await getArchiveDirectory(filePath, archiveDir);
    await fs.mkdir(archivePath, { recursive: true });
    
    const fileName = path.basename(filePath);
    const destPath = path.join(archivePath, fileName);
    
    // If file exists, add timestamp
    let finalDestPath = destPath;
    try {
      await fs.access(finalDestPath);
      const ext = path.extname(fileName);
      const base = path.basename(fileName, ext);
      const timestamp = Date.now();
      finalDestPath = path.join(archivePath, `${base}-${timestamp}${ext}`);
    } catch {
      // File doesn't exist, use original path
    }
    
    await fs.rename(filePath, finalDestPath);
    return finalDestPath;
  } catch (error) {
    throw new Error(`Failed to archive file: ${error.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  try {
    const { filePath, outputDir, archiveDir } = parseArgs();
    
    // Resolve absolute path
    const absoluteFilePath = path.resolve(filePath);
    
    // Validate file
    await validateFile(absoluteFilePath);
    
    // Convert to Markdown
    console.log(`Converting ${absoluteFilePath} to Markdown...`);
    const markdown = await convertPdfToMarkdown(absoluteFilePath);
    
    // Determine output path
    const fileDir = path.dirname(absoluteFilePath);
    const fileName = path.basename(absoluteFilePath, '.pdf');
    const outputPath = outputDir
      ? path.resolve(outputDir, `${fileName}.md`)
      : path.join(fileDir, `${fileName}.md`);
    
    // Ensure output directory exists
    const outputDirPath = path.dirname(outputPath);
    await fs.mkdir(outputDirPath, { recursive: true });
    
    // Write Markdown file
    await fs.writeFile(outputPath, markdown, 'utf8');
    console.log(`Markdown file created: ${outputPath}`);
    
    // Delete original file
    await fs.unlink(absoluteFilePath);
    console.log(`Original file deleted: ${absoluteFilePath}`);
    
    console.log('Conversion completed successfully!');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { convertPdfToMarkdown, archiveFile };

