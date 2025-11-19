# Redis.io Sizing Tool Updates Continued

**Date:** Wednesday, October 8, 2025

**Participants:**
- yoav.haresh@redis.com
- sowmya.narayanan@redis.com
- mac.mcdonald@redis.com
- cody.henshaw@redis.com

## Pricing Display Changes

- Show actual database per-hour price when hourly price is under minimum $0.274/hr
  - Currently showing $0.274/hr which looks expensive vs competitors
  - Change to show $0.043/hr with "$200/month minimum" disclaimer
  - Apply to both pricing calculator and main pricing page
- Fundamental issue: Redis appears very expensive compared to ElastiCache and Memorystore
- Update main pricing page "from" pricing to align with calculator (currently shows $0.014/hr for lowest tier)

## Calculator UI Improvements

- Remove Query Performance Factor (QPF) from main calculator view
  - Keep QPF in breakdown section only for Pro tier
  - Default QPF to 1 for simplified user experience
- **Rearrange field layout:**
  - Move High Availability toggle next to Dataset field
  - Visual connection helps users understand memory doubling calculation
  - Keep Dataset, Throughput, High Availability on main view

## Sample Sizing Scenarios

- John Bridge (new CPO) requested preset configuration examples
- Show scenarios like 6x 1GB databases under $200 minimum
- Demonstrate Redis value vs competitors requiring multiple nodes
- Implementation approach to be determined in follow-up discussion

## Redis Flex Integration

- Auto-tiering feature delayed until Redis Flex pricing finalized
- Pricing proposal expected approval this week (per Sid)
- Previous October 15 launch target appears unrealistic
- Will integrate once pricing and development complete

## Next Steps

- **Yoav:** Provide written brief of requested changes via Google Doc
- **Scott:** Implement pricing display and UI layout changes
- **Yoav:** Schedule API endpoint testing meeting with Scott after Jewish holidays (next 2 weeks)
- **Team:** Follow up on Redis Flex timing and pricing approval

