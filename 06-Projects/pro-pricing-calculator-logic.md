---
type: project
title: "Pro Pricing Calculator Logic"
tags: [pricing-calculator, pro, billing, shards, high-availability]
---

# Pro Pricing Calculator Logic

## What This Function Does

This function calculates the monthly cost for a "Pro" tier Redis database subscription. It figures out how many database shards you need, calculates the total cost, and applies regional minimum pricing rules (if necessary).

## The Inputs (What You Feed Into It)

1. **memorySizeGb** - How much memory you want (e.g., 100GB)
2. **shardPricing** - Detailed pricing info for your specific shard type and region, including:
   1. shard_type_region_price: Cost per shard per hour (e.g., $0.585/hour)
   2. shards_count: How many shards needed for your memory size (e.g., 4 shards)
   3. shard_type_id: The database configuration type (e.g., 25 = "Large")
3. **regionPricing** - Regional minimum pricing rules (e.g., $0.274/hour minimum)
4. **shardTypesData** - Reference data to convert shard type IDs to names ("Large", "Medium", etc.)
5. **quantity** - How many database instances you want (defaults to 1)

## The Calculations (What Happens Inside)

### Step 1: Calculate Base Hourly Cost

Total hourly cost = (price per shard) × (number of shards) × (quantity of instances)
Example: $0.585 × 4 shards × 1 instance = $2.34/hour

### Step 2: Convert to Monthly Cost

Monthly cost = hourly cost × 730 hours per month
Example: $2.34/hour × 730 = $1,708.20/month

### Step 3: Apply Regional Minimum (If Needed)

Regional minimum = minimum hourly rate × 730 hours
Example: $0.274/hour × 730 = $200.02/month
If calculated cost < regional minimum:
→ Use regional minimum price
→ Set minimum_price_applied = true
Else:
→ Keep calculated price
→ Set minimum_price_applied = false

## The Output (What you get back)

A detailed pricing breakdown with all the info the frontend needs:

```json
{
  "available": true,
  "billing_unit": "Shard",
  "hourly_price": 2.34,
  "minimum_price_applied": false,
  "monthly_price": 1708,
  "plan_name": "Pro",
  "price_per_unit": 0.585,
  "reason": "Minimum price not applied",
  "quantity": 4,
  "shard_type_name": "Large",
  "shard_type": 25
}
```

## Real-World Example: 100GB Database

Your Request: 100GB Redis Pro database in US East (Virginia)

What the system calculates:

- You need 4 "Large" shards (25GB each)
- Each shard costs $0.585/hour
- Total: $2.34/hour × 730 hours = $1,708/month
- Regional minimum is only $200/month, so no adjustment needed

What you pay: $1,708/month for 4 Large shards

Large databases need multiple high-performance shards, so they cost more than the regional minimums (which are designed for tiny databases).

## When Minimum Pricing Kicks In

If you requested a small database (like 2GB) that only needs 1 shard at $0.10/hour:

- Calculated cost: $0.10 × 730 = $73/month
- Regional minimum: $200/month
- You'd pay: $200/month (minimum applied)
- Reason: "Minimum price applied"

This ensures Redis gets a baseline revenue even for very small databases.

## High Availability Scenario Analysis

### Key Observations: Replication ON vs OFF

**What Stayed the Same:**

```javascript
// Pro pricing is identical in both scenarios
{
  hourly_price: 2.34,
  monthly_price: 1708,
  price_per_unit: 0.585,
  quantity: 4, // Still 4 shards
  shard_type_name: "Large" // Still Large shards
}
```

**What Changed:**

```javascript
// Infrastructure differences
{
  // WITHOUT replication:
  throughput: 100000, // 100k ops/sec
  high_availability: false,

  // WITH replication:
  throughput: 50000, // 50k ops/sec (halved!)
  high_availability: true
}
```

### What This Tells Us About the Function

The calculateProPricing function doesn't handle high availability pricing logic directly. Here's what's actually happening:

#### 1. High Availability = Same Hardware Cost

- You still get 4 Large shards at $0.585/hour each
- Redis uses master-replica pairs, but you're not charged extra for the replica infrastructure
- The pricing model treats HA as a "configuration" rather than "additional resources"

#### 2. Throughput Trade-off

- Without HA: Each shard can deliver full performance (25k ops/sec × 4 = 100k total)
- With HA: Each shard needs to maintain replication, reducing effective throughput to 12.5k ops/sec × 4 = 50k total
- Same cost, different performance characteristics

#### 3. The Function's Role

The calculateProPricing function receives the same shard pricing data in both scenarios because:

- Same region (us-east-1)
- Same memory requirement (100GB)
- Same shard type needed (Large)
- High availability is handled at the infrastructure level, not the pricing level

**Customer perspective:**

- "I want 100GB with high availability"
- You get: 4 Large shards configured as master-replica pairs
- You pay: $1,708/month (same as without HA)
- Trade-off: Lower throughput (50k vs 100k ops/sec) but zero downtime if a shard fails
