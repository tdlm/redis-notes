# Lancash Product Page Design Variations and Testing Strategy

**Date:** Thursday, September 25, 2025

## ETL Project Timeline

- Soft deadline: end of next week
- Scott needs to examine the API first
- Still working through pricing calculator logic

## Deepgram API Discovery

- **OpenAI Whisper API had noticeable lag issues**
  - Smaller models weren't accurate enough

- **Deepgram provides real-time transcription via WebSocket**
  - Handles callbacks automatically
  - Extracts stop words and summaries
  - Integrates LLM functionality
  - Cost-effective solution
  - Minor issue: prompts to start recording whenever microphone is active

## LangChain Landing Page Design

- Target design: terminal embedded in hero section

- **Current capability assessment:**
  - Terminal can handle single language display
  - Most components already built, need configuration

- **A/B testing variations planned:**
  - Text changes ("cut your LLM cost")
  - Button visibility (try it for free placement)
  - Different code samples/images

- Concern: try button may get pushed below fold

## Testing Implementation Strategy

- Three potential approaches:
  - Build three full page variations
  - Create segment variations only
  - Use MutateMe for client-side testing (less ideal)

- Scott will test segment variation feasibility
- Landing page option available with header/footer controls

## Technical Infrastructure Issues

- **Broken links monitoring:** transitioning from Growth Place to Screaming Frog
  - Need automated Slack notifications

- **Database backups:** status unknown
  - Not sure if Sanity backups are enabled
  - Could be manual process or paid add-on
  - Reached out to Sam and Lana for clarification
  - Backup frequency needed: daily vs monthly cadence

