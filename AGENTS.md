# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (eslint-config-next)
```

## Architecture Overview

This is a **Next.js 16 App Router** health tracking application with **Supabase** backend for a 52-week diabetes reversal program. The app tracks weekly measurements (weight, waist, blood pressure) every Saturday and projects health improvements based on weight loss.

### Key Architectural Patterns

**Client/Server Split**: The app uses a hybrid architecture where:
- `src/app/layout.tsx` - Server component (metadata, fonts)
- `src/app/client-layout.tsx` - Client wrapper with Sidebar, Toaster, and global state (current weight)
- Page components fetch data server-side then pass to client components

**Data Flow**: 
1. Pages call `src/lib/supabase.ts` functions to fetch from Supabase
2. Data passes to client components as props
3. Components use `src/lib/calculations.ts` for health projections
4. Real-time updates via Supabase subscriptions

### Core Modules

| Path | Purpose |
|------|---------|
| `src/lib/supabase.ts` | Database operations (CRUD for `weekly_measurements`) |
| `src/lib/calculations.ts` | Health formulas, projections, Saturday date generation |
| `src/types/index.ts` | TypeScript interfaces (`WeightEntry`, `SaturdayWeek`, `HealthProjections`) |
| `src/components/DiabetesReversalTracker.tsx` | Main dashboard with countdown timers, exercises, achievements |
| `src/components/WeightEntryCard.tsx` | Weekly measurement entry form |

### Domain-Specific Constants (in `calculations.ts`)

- Journey starts January 24, 2026; measurements recorded every Saturday starting Jan 31
- Starting values: 210 lbs, A1C 11.5%, Fasting Glucose 184 mg/dL
- Goal weights: 170 lbs (6-pack), 165 lbs (remission), 160 lbs (ultimate)
- Lean mass estimate: 150 lbs (used for body fat calculations)
- Projection formulas: A1C drops ~0.116% per lb lost; Glucose drops ~1.88 mg/dL per lb lost

### Database Schema

Single table `weekly_measurements` in Supabase with columns:
- `id` (UUID), `measurement_date` (DATE, unique, always Saturday)
- `weight_lbs`, `waist_inches`, `systolic_mmhg`, `diastolic_mmhg`, `notes`
- RLS enabled with open policy (no auth currently)

Upsert on `measurement_date` conflict allows editing existing entries.

## Styling

- **Tailwind CSS 4** for utility classes
- Inline styles in `DiabetesReversalTracker.tsx` for complex dynamic styling
- Dark theme with gradient backgrounds (`#0a0a0f`, `#1a1a2e`, `#0f0f1a`)
- Accent colors: teal (`#00d4aa`), blue (`#4facfe`), coral (`#f5576c`), gold (`#fbbf24`)

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
