import {
  WeightEntry,
  WeightStats,
  HealthProjections,
  SaturdayWeek,
} from "@/types";
import { format, addWeeks, isSameWeek, isBefore, parseISO } from "date-fns";

// Key constants
export const STARTING_WEIGHT = 210;
export const STARTING_A1C = 11.5;
export const STARTING_GLUCOSE = 184;
export const LEAN_MASS_ESTIMATE = 150;
export const TARGET_SIX_PACK = 170;
export const TARGET_REMISSION = 165;
export const TARGET_ULTIMATE = 160;
export const STARTING_WAIST = 45.0;

// Journey start: January 24, 2026 (Saturday) - when tracking begins
// First weigh-in: January 31, 2026 (Saturday) - end of Week 1
export const JOURNEY_START_DATE = new Date("2026-01-24");
export const FIRST_WEIGHIN_DATE = new Date("2026-01-31"); // End of Week 1
export const END_DATE = new Date("2027-01-24"); // 52 weeks from first weigh-in

// A1C projection: ~0.116% drop per pound lost
export const A1C_PER_POUND =
  (STARTING_A1C - 5.7) / (STARTING_WEIGHT - TARGET_ULTIMATE);

// Glucose projection: ~1.88 mg/dL drop per pound lost
export const GLUCOSE_PER_POUND =
  (STARTING_GLUCOSE - 90) / (STARTING_WEIGHT - TARGET_ULTIMATE);

export function calculateProjectedA1C(currentWeight: number): number {
  const weightLost = STARTING_WEIGHT - currentWeight;
  const projectedA1C = Math.max(5.0, STARTING_A1C - weightLost * A1C_PER_POUND);
  return Number(projectedA1C.toFixed(1));
}

export function calculateProjectedGlucose(currentWeight: number): number {
  const weightLost = STARTING_WEIGHT - currentWeight;
  const projectedGlucose = Math.max(
    85,
    Math.round(STARTING_GLUCOSE - weightLost * GLUCOSE_PER_POUND)
  );
  return projectedGlucose;
}

export function calculateBodyFatPercent(currentWeight: number): number {
  const bodyFat = ((currentWeight - LEAN_MASS_ESTIMATE) / currentWeight) * 100;
  return Number(bodyFat.toFixed(1));
}

export function calculateWeeksToGoal(
  currentWeight: number,
  targetWeight: number,
  avgWeeklyLoss: number
): number | string {
  const weightToLose = currentWeight - targetWeight;
  if (weightToLose <= 0) return 0;
  if (avgWeeklyLoss <= 0) return "∞";
  return Math.ceil(weightToLose / avgWeeklyLoss);
}

export function calculateProgressPercent(
  startWeight: number,
  currentWeight: number,
  targetWeight: number
): number {
  const totalToLose = startWeight - targetWeight;
  const actualLost = startWeight - currentWeight;
  const progress = (actualLost / totalToLose) * 100;
  return Number(Math.min(100, Math.max(0, progress)).toFixed(1));
}

export function calculateDaysElapsed(): number {
  const now = new Date();
  const diff = now.getTime() - JOURNEY_START_DATE.getTime();
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
}

export function isTodaySaturday(): boolean {
  return new Date().getDay() === 6; // 6 = Saturday
}

export function generateAllSaturdays(): SaturdayWeek[] {
  const saturdays: SaturdayWeek[] = [];
  const now = new Date();
  let currentDate = new Date(FIRST_WEIGHIN_DATE); // Start from Jan 31, 2026
  let weekNumber = 1;

  while (weekNumber <= 52) {
    const dateString = format(currentDate, "yyyy-MM-dd");
    const isCurrentWeek = isSameWeek(currentDate, now, { weekStartsOn: 6 });
    const isPast = isBefore(currentDate, now) && !isCurrentWeek;

    saturdays.push({
      weekNumber,
      date: new Date(currentDate),
      dateString,
      formattedDate: format(currentDate, "EEEE, MMMM d, yyyy"),
      entry: null,
      isCurrentWeek,
      isPast,
    });

    currentDate = addWeeks(currentDate, 1);
    weekNumber++;
  }

  return saturdays;
}

export function mapEntriesToSaturdays(
  saturdays: SaturdayWeek[],
  entries: WeightEntry[]
): SaturdayWeek[] {
  const entryMap = new Map(
    entries.map((entry) => [entry.measurement_date, entry])
  );

  return saturdays.map((saturday) => ({
    ...saturday,
    entry: entryMap.get(saturday.dateString) || null,
  }));
}

export function calculateWeightStats(entries: WeightEntry[]): WeightStats {
  const sortedEntries = [...entries].sort(
    (a, b) =>
      new Date(a.measurement_date).getTime() -
      new Date(b.measurement_date).getTime()
  );

  const firstEntry = sortedEntries[0];
  const lastEntry = sortedEntries[sortedEntries.length - 1];

  const startingWeight = firstEntry?.weight_lbs || STARTING_WEIGHT;
  const currentWeight = lastEntry?.weight_lbs || STARTING_WEIGHT;
  const totalLost = startingWeight - currentWeight;

  const weeksRecorded = sortedEntries.length;
  const totalWeeks = 52;

  const avgWeeklyLoss = weeksRecorded > 1 ? totalLost / (weeksRecorded - 1) : 0;

  const startingWaist = firstEntry?.waist_inches || STARTING_WAIST;
  const currentWaist = lastEntry?.waist_inches || null;
  const totalWaistLost =
    currentWaist !== null ? startingWaist - currentWaist : null;

  return {
    startingWeight,
    currentWeight,
    totalLost,
    weeksRecorded,
    totalWeeks,
    avgWeeklyLoss: Number(avgWeeklyLoss.toFixed(2)),
    startingWaist,
    currentWaist,
    totalWaistLost:
      totalWaistLost !== null ? Number(totalWaistLost.toFixed(1)) : null,
  };
}

export function calculateHealthProjections(
  currentWeight: number,
  avgWeeklyLoss: number
): HealthProjections {
  return {
    projectedA1C: calculateProjectedA1C(currentWeight),
    projectedGlucose: calculateProjectedGlucose(currentWeight),
    estimatedBodyFat: calculateBodyFatPercent(currentWeight),
    weightToSixPack: Math.max(0, currentWeight - TARGET_SIX_PACK),
    weightToRemission: Math.max(0, currentWeight - TARGET_REMISSION),
    weightToUltimate: Math.max(0, currentWeight - TARGET_ULTIMATE),
    weeksToSixPack: calculateWeeksToGoal(
      currentWeight,
      TARGET_SIX_PACK,
      avgWeeklyLoss
    ),
    weeksToRemission: calculateWeeksToGoal(
      currentWeight,
      TARGET_REMISSION,
      avgWeeklyLoss
    ),
    weeksToUltimate: calculateWeeksToGoal(
      currentWeight,
      TARGET_ULTIMATE,
      avgWeeklyLoss
    ),
    progressToSixPack: calculateProgressPercent(
      STARTING_WEIGHT,
      currentWeight,
      TARGET_SIX_PACK
    ),
    progressToRemission: calculateProgressPercent(
      STARTING_WEIGHT,
      currentWeight,
      TARGET_REMISSION
    ),
    progressToUltimate: calculateProgressPercent(
      STARTING_WEIGHT,
      currentWeight,
      TARGET_ULTIMATE
    ),
  };
}
