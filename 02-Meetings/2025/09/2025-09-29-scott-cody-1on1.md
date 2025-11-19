# Scott / Cody 1-on-1

**Date:** Monday, September 29, 2025

**Participants:**
- cody.henshaw@redis.com

## Hero Component Development

- Two column hero with code block doesn't work natively
- Scott creating simple version today to test concept
- Will use image-based approach as fallback if needed
- Megan also asking for updates on this feature

## Team Management & Operations

- Cody managing multiple teams with growing complexity
- Keeps alignment through morning note reviews (1 hour daily)
- Currently finalizing OKRs across all teams
- Redoing open source positioning and enablement

## Granola Tool Discussion

- Both using it extensively for meeting productivity
- Scott transitioned from heavy note-taking to full meeting focus
- Real-time querying capability during meetings is key differentiator
- Can catch up on missed conversation segments instantly

## Medical AI Application (Cody's Uncle's Project)

- Building note-taking app for cancer patients using Deepgram API
- Goal: democratize medical advocacy through AI assistance
- Key insight: best cancer outcomes correlate with having good advocates

- **Technical approach:**
  - Real-time transcription via WebSocket
  - Semantic caching for efficiency
  - Post-visit AI chatbot for follow-up questions

- **Adoption challenges:**
  - Patient discomfort asking to record
  - Doctor resistance to recording
  - HIPAA compliance requirements

- Pivot from in-appointment to post-appointment assistance
- Uncle has 6 exits including pace tattoo company (Boston Marathon advertising)

## Technical Implementation Details

- Cody built prototype clone using LangGraph agent
- Deepgram handles real-time transcription and translation
- OpenAI Whisper requires sentence detection workarounds
- System avoids medical advice, refers back to doctors
- Integration with existing patient portals being explored

