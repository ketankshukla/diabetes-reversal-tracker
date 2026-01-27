# WINDSURF PROMPT: Diabetes Reversal Tracker - Next.js App

## OVERVIEW

I need you to create a Next.js application called **diabetes-reversal-tracker** that helps me track my journey to achieve 2 main goals:
1. **6-Pack Abs** - Target weight: 170 lbs, body fat 10-12%
2. **Diabetes Remission** - Target weight: 160-165 lbs, A1C < 5.7%, off Metformin

I have existing React JSX components that I will provide. DO NOT refactor these JSX files - integrate them as-is into the Next.js app structure.

---

## PROJECT SETUP

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest diabetes-reversal-tracker --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### 2. Install Dependencies
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs lucide-react date-fns
```

### 3. Folder Structure
```
diabetes-reversal-tracker/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Main layout with sidebar
│   │   ├── page.tsx                # Dashboard (DiabetesReversalTracker)
│   │   ├── supplements/
│   │   │   └── page.tsx            # SupplementsGuide
│   │   ├── countdown/
│   │   │   └── page.tsx            # HealthCountdown
│   │   ├── lab-tests/
│   │   │   └── page.tsx            # LabTestsGuide
│   │   └── weight-log/
│   │       └── page.tsx            # Weekly weight/waist entry
│   ├── components/
│   │   ├── Sidebar.tsx             # Left navigation menu
│   │   ├── DiabetesReversalTracker.tsx  # (provided JSX)
│   │   ├── SupplementsGuide.tsx         # (provided JSX)
│   │   ├── HealthCountdown.tsx          # (provided JSX)
│   │   ├── LabTestsGuide.tsx            # (provided JSX)
│   │   └── WeightEntryCard.tsx     # Saturday weight entry component
│   ├── lib/
│   │   ├── supabase.ts             # Supabase client
│   │   └── calculations.ts         # All projection calculations
│   └── types/
│       └── index.ts                # TypeScript types
├── .env.local                      # Supabase credentials
└── supabase/
    └── schema.sql                  # Database schema
```

---

## SUPABASE DATABASE SCHEMA

Create a single table to store weekly measurements. This is the ONLY data we persist - all other calculations are done on the fly.

```sql
-- Create the weekly_measurements table
CREATE TABLE weekly_measurements (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  measurement_date DATE NOT NULL UNIQUE,  -- Always a Saturday
  weight_lbs DECIMAL(5,1) NOT NULL,       -- e.g., 210.0
  waist_inches DECIMAL(4,1),              -- e.g., 38.5 (optional initially)
  notes TEXT,                              -- Optional notes
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster date queries
CREATE INDEX idx_measurements_date ON weekly_measurements(measurement_date DESC);

-- Insert the starting measurement (January 24, 2026 - Saturday)
INSERT INTO weekly_measurements (measurement_date, weight_lbs, waist_inches, notes)
VALUES ('2026-01-24', 210.0, 40.0, 'Starting weight - Day 1 of journey');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_weekly_measurements_updated_at
  BEFORE UPDATE ON weekly_measurements
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

---

## ARCHITECTURE DETAILS

### Sidebar Navigation (Left Menu)

Create a permanent left sidebar with the following menu items:

| Menu Item | Route | Component | Icon |
|-----------|-------|-----------|------|
| 📊 Dashboard | `/` | DiabetesReversalTracker | LayoutDashboard |
| ⚖️ Weight Log | `/weight-log` | WeightLog | Scale |
| 💊 Supplements | `/supplements` | SupplementsGuide | Pill |
| ⏱️ Countdown | `/countdown` | HealthCountdown | Timer |
| 🩺 Lab Tests | `/lab-tests` | LabTestsGuide | TestTube |

The sidebar should:
- Be fixed on the left (width: 250px on desktop, collapsible on mobile)
- Highlight the active route
- Use a dark theme matching the JSX components (#0f0c29 to #1a1a2e gradient)
- Include the app title "DIABETES REVERSAL TRACKER" at the top
- Show current weight and days elapsed at the bottom

### Main Content Area

- Takes remaining width (calc(100% - 250px) on desktop)
- Scrollable independently of sidebar
- Dark background to match existing JSX components
- Renders the appropriate component based on route

---

## WEIGHT LOG PAGE REQUIREMENTS

This is the ONLY page that interacts with Supabase. It should:

### 1. Display All Saturdays from Jan 24, 2026 to Jan 23, 2027

Generate a list of ALL Saturday dates programmatically:
- Start: January 24, 2026 (Saturday)
- End: January 23, 2027 (52 weeks)

### 2. Display Format for Each Saturday

For each Saturday, show a row/card with:

```
┌─────────────────────────────────────────────────────────────────────┐
│ Week 1 • Saturday, January 24, 2026                                 │
│                                                                     │
│ Weight: [210.0 lbs] ✓    Waist: [40.0 in] ✓    Notes: Starting...  │
│                                                                     │
│ [EDIT]                                         Status: ✅ Recorded  │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ Week 2 • Saturday, January 31, 2026                                 │
│                                                                     │
│ Weight: [___._]         Waist: [__._]          Notes:              │
│                                                                     │
│ [ENTER DATA]                                   Status: ⏳ Pending   │
└─────────────────────────────────────────────────────────────────────┘
```

### 3. Data Entry Modal/Inline Edit

When clicking "ENTER DATA" or "EDIT":
- Show input fields for weight (required) and waist (optional)
- Optional notes field
- Save to Supabase
- NO date picker - the date is fixed to that Saturday

### 4. Visual Indicators

- ✅ Green check for recorded weeks
- ⏳ Pending for future/unrecorded weeks
- Show change from previous week (+/- lbs, +/- inches)
- Highlight current week

### 5. Summary Stats at Top of Weight Log Page

Display a summary table:

| Stat | Value |
|------|-------|
| Starting Weight | 210.0 lbs |
| Current Weight | [latest] lbs |
| Total Lost | [calculated] lbs |
| Weeks Recorded | X / 52 |
| Avg Weekly Loss | [calculated] lbs/week |
| Starting Waist | 40.0 in |
| Current Waist | [latest] in |
| Total Lost | [calculated] in |

---

## CALCULATIONS (All Done On-The-Fly)

Create a `calculations.ts` file with these functions. All calculations use ONLY the weight and waist data from Supabase:

```typescript
// Key constants
const STARTING_WEIGHT = 210;
const STARTING_A1C = 11.5;
const STARTING_GLUCOSE = 184;
const LEAN_MASS_ESTIMATE = 150;
const TARGET_SIX_PACK = 170;
const TARGET_REMISSION = 165;
const TARGET_ULTIMATE = 160;

// A1C projection: ~0.116% drop per pound lost
const A1C_PER_POUND = (11.5 - 5.7) / (210 - 160);

// Glucose projection: ~1.88 mg/dL drop per pound lost  
const GLUCOSE_PER_POUND = (184 - 90) / (210 - 160);

// Functions to implement:
function calculateProjectedA1C(currentWeight: number): number
function calculateProjectedGlucose(currentWeight: number): number
function calculateBodyFatPercent(currentWeight: number): number
function calculateWeeksToGoal(currentWeight: number, targetWeight: number, avgWeeklyLoss: number): number
function calculateProgressPercent(startWeight: number, currentWeight: number, targetWeight: number): number
```

---

## COMPONENT INTEGRATION

### How to Integrate Provided JSX Files

1. **Copy each JSX file** into `src/components/`
2. **Rename extension** from `.jsx` to `.tsx`
3. **Add 'use client'** directive at the top of each file
4. **Update imports** if needed (React imports)
5. **Pass weight data as props** where needed

### Modifying DiabetesReversalTracker.tsx

The main tracker needs to receive weight data from Supabase instead of using local state:

```typescript
// Add props interface
interface DiabetesReversalTrackerProps {
  weightEntries: WeightEntry[];
}

// The component should accept weightEntries as a prop
// Remove the local useState for weightEntries
// Remove the "Add Weight Entry" form (this is now on Weight Log page)
// Keep all calculations but use the prop data
```

### Data Flow

```
Supabase (weekly_measurements table)
         ↓
    Weight Log Page (CRUD operations)
         ↓
    Layout fetches latest data
         ↓
    Pass to DiabetesReversalTracker as props
         ↓
    All calculations done in real-time
```

---

## ENVIRONMENT VARIABLES

Create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## GITHUB REPOSITORY SETUP

After the app is complete, run these commands to create the GitHub repo:

```bash
# Initialize git if not already
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Diabetes Reversal Tracker Next.js app"

# Create remote repo using GitHub CLI
gh repo create diabetes-reversal-tracker --public --source=. --remote=origin --push

# Verify
gh repo view diabetes-reversal-tracker --web
```

---

## STYLING REQUIREMENTS

- Use the existing dark theme from the JSX components
- Background: gradient from #0a0a0f to #1a1a2e
- Primary accent: #00d4aa (teal/green)
- Secondary accents: #f5576c (red), #4facfe (blue), #fbbf24 (yellow)
- All text white/gray on dark background
- Use existing component styles - do not override them
- Sidebar should match the dark theme

---

## IMPORTANT CONSTRAINTS

1. **DO NOT REFACTOR** the provided JSX components - use them as-is with minimal modifications
2. **NO DATE PICKERS** - Saturdays are pre-listed, user just clicks to enter data for that specific Saturday
3. **ONLY STORE** weight_lbs, waist_inches, notes, and measurement_date in Supabase
4. **ALL CALCULATIONS** (A1C projections, body fat %, progress %, weeks to goal, etc.) are computed on-the-fly
5. **WEEKLY ENTRY ONLY** - Every Saturday from Jan 24, 2026 to Jan 23, 2027
6. **STARTING DATE** - January 24, 2026 was the first Saturday (starting weight 210 lbs)

---

## DELIVERABLES CHECKLIST

- [ ] Next.js 14+ app with App Router
- [ ] Supabase integration with schema
- [ ] Left sidebar navigation
- [ ] Dashboard page (DiabetesReversalTracker)
- [ ] Weight Log page with Saturday list
- [ ] Supplements page (SupplementsGuide)
- [ ] Countdown page (HealthCountdown)
- [ ] Lab Tests page (LabTestsGuide)
- [ ] All calculations working from Supabase data
- [ ] GitHub repo created via `gh` CLI
- [ ] Ready for Vercel deployment

---

## FILES I WILL PROVIDE

I will drop these files into the project folder for you to integrate:

1. `DiabetesReversalTracker.jsx` - Main dashboard tracker
2. `SupplementsGuide.jsx` - Supplement recommendations
3. `HealthCountdown.jsx` - Motivational countdowns
4. `LabTestsGuide.jsx` - Lab test preparation guide

Please read this entire prompt and confirm you understand the requirements before starting. Then proceed to create the Next.js application step by step.

---

## START COMMAND

After I create the folder and drop the files, begin with:

```bash
cd diabetes-reversal-tracker
```

Then follow the setup steps in order.
