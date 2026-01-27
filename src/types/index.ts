export interface WeightEntry {
  id: string;
  measurement_date: string;
  weight_lbs: number;
  waist_inches: number | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface WeightEntryInput {
  measurement_date: string;
  weight_lbs: number;
  waist_inches?: number | null;
  notes?: string | null;
}

export interface SaturdayWeek {
  weekNumber: number;
  date: Date;
  dateString: string;
  formattedDate: string;
  entry: WeightEntry | null;
  isCurrentWeek: boolean;
  isPast: boolean;
}

export interface WeightStats {
  startingWeight: number;
  currentWeight: number;
  totalLost: number;
  weeksRecorded: number;
  totalWeeks: number;
  avgWeeklyLoss: number;
  startingWaist: number | null;
  currentWaist: number | null;
  totalWaistLost: number | null;
}

export interface HealthProjections {
  projectedA1C: number;
  projectedGlucose: number;
  estimatedBodyFat: number;
  weightToSixPack: number;
  weightToRemission: number;
  weightToUltimate: number;
  weeksToSixPack: number | string;
  weeksToRemission: number | string;
  weeksToUltimate: number | string;
  progressToSixPack: number;
  progressToRemission: number;
  progressToUltimate: number;
}
