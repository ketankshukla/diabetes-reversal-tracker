# Diabetes Reversal Tracker

A comprehensive health monitoring and motivation web application designed to help users reverse Type 2 Diabetes through weight loss tracking, educational guides, and personalized health projections.

## Overview

This 52-week program combines real-time health metrics tracking, educational resources, and motivational tools to support diabetes reversal through lifestyle modifications. The application tracks weekly measurements, calculates health projections, and provides detailed guides on supplements, lab tests, kidney health, skin health, and meal planning.

## Features

- **Health Metrics Tracking**: Log weekly weight, waist circumference, and blood pressure measurements (every Saturday)
- **Health Projections**: Automatically calculate projected A1C, glucose levels, body fat percentage, and weeks to goals
- **Progress Dashboard**: Visual progress bars toward goals with countdown timers to key milestones
- **OMAD Meal Planning**: Detailed One Meal A Day protocol with recipes, metformin timing, and microwave instructions
- **Supplements Guide**: Categorized supplement recommendations (Essential, Recommended, Optional) with dosing and timing
- **Lab Tests Guide**: Test scheduling, reference ranges, costs, and shopping cart for test selection
- **Kidney Health Guide**: Recovery strategies for CKD Stage 2 with eGFR monitoring
- **Skin Transformation**: Track skin improvements with supplement timelines and shopping lists
- **Exercise Library**: 25+ exercise instructions including stomach vacuums, planks, and dead bugs
- **Achievement System**: Unlock badges for reaching milestones
- **Real-Time Updates**: Supabase real-time subscriptions for instant data sync

## Tech Stack

### Frontend
- **Next.js 16.1.5** - Full-stack React framework with App Router
- **React 19.2.3** - UI library with React Compiler optimization
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling

### Backend & Database
- **Supabase** - PostgreSQL database with real-time subscriptions
- **Row Level Security (RLS)** - Secure data access

### Libraries
- **Lucide React** - Icon library
- **Sonner** - Toast notifications
- **date-fns** - Date manipulation

## Project Structure

```
diabetes-reversal-tracker/
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── page.tsx                      # Dashboard home
│   │   ├── layout.tsx                    # Root layout
│   │   ├── client-layout.tsx             # Client-side wrapper
│   │   ├── weight-log/page.tsx           # Health Metrics page
│   │   ├── supplements/page.tsx          # Supplements guide
│   │   ├── lab-tests/page.tsx            # Lab tests guide
│   │   ├── kidney-health/page.tsx        # Kidney health guide
│   │   ├── skin-transformation/page.tsx  # Skin health guide
│   │   ├── omad-meal/page.tsx            # OMAD meal planning
│   │   └── globals.css                   # Global styles
│   ├── components/                       # React components
│   │   ├── DiabetesReversalTracker.tsx   # Main dashboard
│   │   ├── WeightEntryCard.tsx           # Weekly entry form
│   │   ├── Sidebar.tsx                   # Navigation menu
│   │   ├── BloodPressureChart.tsx        # BP reference chart
│   │   ├── OMADMeal.tsx                  # Meal planning
│   │   ├── SupplementsGuide.tsx          # Supplement info
│   │   ├── LabTestsGuide.tsx             # Lab test info
│   │   ├── KidneyHealthGuide.tsx         # Kidney recovery
│   │   └── SkinTransformation.tsx        # Skin tracking
│   ├── lib/
│   │   ├── calculations.ts               # Health calculations
│   │   └── supabase.ts                   # Database operations
│   └── types/
│       └── index.ts                      # TypeScript interfaces
├── supabase/
│   └── schema.sql                        # Database schema
├── public/                               # Static assets
├── package.json                          # Dependencies
├── tsconfig.json                         # TypeScript config
└── next.config.ts                        # Next.js config
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/diabetes-reversal-tracker.git
   cd diabetes-reversal-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Set up the database:

   Run the SQL schema in your Supabase project (see `supabase/schema.sql`)

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Schema

### weekly_measurements Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| measurement_date | DATE | Measurement date (unique, always Saturday) |
| weight_lbs | DECIMAL(6,2) | Weight in pounds |
| waist_inches | DECIMAL(5,2) | Waist circumference in inches |
| systolic_mmhg | DECIMAL(5,2) | Blood pressure systolic |
| diastolic_mmhg | DECIMAL(5,2) | Blood pressure diastolic |
| notes | TEXT | Optional notes |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Dashboard with progress overview, countdowns, and achievements |
| `/weight-log` | Weekly health metrics entry and tracking |
| `/supplements` | Supplement recommendations with dosing guides |
| `/lab-tests` | Lab test scheduling with reference ranges |
| `/kidney-health` | Kidney recovery protocol and monitoring |
| `/skin-transformation` | Skin health tracking and supplements |
| `/omad-meal` | OMAD meal planning with recipes and timing |

## Health Calculations

The application uses the following baseline values and formulas:

### Starting Values
- Weight: 210 lbs
- A1C: 11.5%
- Fasting Glucose: 184 mg/dL
- Waist: 45 inches
- Lean Mass Estimate: 150 lbs

### Goal Targets
- 6-Pack Goal: 170 lbs (40 lbs to lose)
- Diabetes Remission: 165 lbs (45 lbs to lose)
- Ultimate Goal: 160 lbs (50 lbs to lose)

### Projection Formulas
- **Projected A1C**: `11.5% - (lbs_lost × 0.116)`
- **Projected Glucose**: `184 - (lbs_lost × 1.88)` mg/dL
- **Body Fat %**: `((current_weight - 150) / current_weight) × 100`
- **Weekly Loss Rate**: `total_lost / (weeks_recorded - 1)`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

The application is designed for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## License

This project is for personal health tracking use.

---

Built with Next.js and Supabase
