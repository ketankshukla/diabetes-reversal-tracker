"use client";

import React, { useState, useEffect } from "react";
import { WeightEntry, SaturdayWeek, WeightStats } from "@/types";
import { getWeightEntries, upsertWeightEntry, supabase } from "@/lib/supabase";
import {
  generateAllSaturdays,
  mapEntriesToSaturdays,
  calculateWeightStats,
  STARTING_WEIGHT,
  STARTING_WAIST,
  TARGET_REMISSION,
} from "@/lib/calculations";
import WeightEntryCard from "@/components/WeightEntryCard";
import {
  Scale,
  TrendingDown,
  Calendar,
  Target,
  Ruler,
  Trophy,
  Flame,
  Activity,
  Heart,
} from "lucide-react";

export default function WeightLogPage() {
  const [saturdays, setSaturdays] = useState<SaturdayWeek[]>([]);
  const [stats, setStats] = useState<WeightStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const entries = await getWeightEntries();
      const allSaturdays = generateAllSaturdays();
      const mappedSaturdays = mapEntriesToSaturdays(allSaturdays, entries);
      setSaturdays(mappedSaturdays);

      if (entries.length > 0) {
        setStats(calculateWeightStats(entries));
      }
    } catch (error) {
      console.error("Failed to load data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Subscribe to real-time updates on the weekly_measurements table
    const channel = supabase
      .channel("weight_log_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "weekly_measurements" },
        () => {
          // Refetch all data when any change occurs
          loadData();
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSave = async (
    dateString: string,
    data: {
      weight_lbs: number;
      waist_inches?: number | null;
      systolic_mmhg?: number | null;
      diastolic_mmhg?: number | null;
      notes?: string | null;
    }
  ) => {
    await upsertWeightEntry({
      measurement_date: dateString,
      ...data,
    });
    await loadData();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00d4aa] mx-auto mb-4"></div>
          <p className="text-gray-400">Loading weight data...</p>
        </div>
      </div>
    );
  }

  // Calculate progress percentage
  const currentWeight = stats?.currentWeight || STARTING_WEIGHT;
  const progressPercent = Math.min(
    100,
    ((STARTING_WEIGHT - currentWeight) / (STARTING_WEIGHT - TARGET_REMISSION)) *
      100
  );

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Hero Header */}
      <div
        className="relative overflow-hidden rounded-2xl mb-6 p-6 md:p-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,212,170,0.15) 0%, rgba(79,172,254,0.15) 50%, rgba(251,191,36,0.15) 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d4aa]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4facfe]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-[#00d4aa]/20 border border-[#00d4aa]/30">
              <Scale className="w-8 h-8 text-[#00d4aa]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Health Metrics</h1>
              <p className="text-gray-400">
                Track your weekly weight, waist & blood pressure
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">
                Progress to Remission (165 lbs)
              </span>
              <span className="text-sm font-bold text-[#00d4aa]">
                {progressPercent.toFixed(1)}%
              </span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progressPercent}%`,
                  background: "linear-gradient(90deg, #00d4aa, #4facfe)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Starting Weight */}
        <div
          className="relative overflow-hidden rounded-xl p-5 border border-white/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-white/10">
              <Scale size={16} className="text-gray-400" />
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Starting Weight
            </span>
          </div>
          <p className="text-3xl font-bold text-white">
            {STARTING_WEIGHT.toFixed(0)}
          </p>
          <p className="text-sm text-gray-500">lbs</p>
        </div>

        {/* Starting Waist */}
        <div
          className="relative overflow-hidden rounded-xl p-5 border border-white/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#fbbf24]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-[#fbbf24]/20">
              <Ruler size={16} className="text-[#fbbf24]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Starting Waist
            </span>
          </div>
          <p className="text-3xl font-bold text-[#fbbf24]">
            {STARTING_WAIST.toFixed(0)}
          </p>
          <p className="text-sm text-gray-500">inches</p>
        </div>

        {/* Current Weight */}
        <div
          className="relative overflow-hidden rounded-xl p-5 border border-[#00d4aa]/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,212,170,0.15) 0%, rgba(0,212,170,0.05) 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#00d4aa]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-[#00d4aa]/20">
              <Target size={16} className="text-[#00d4aa]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Current Weight
            </span>
          </div>
          <p className="text-3xl font-bold text-[#00d4aa]">
            {currentWeight.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">lbs</p>
        </div>

        {/* Total Lost */}
        <div
          className="relative overflow-hidden rounded-xl p-5 border border-[#4facfe]/30"
          style={{
            background:
              "linear-gradient(135deg, rgba(79,172,254,0.15) 0%, rgba(79,172,254,0.05) 100%)",
          }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#4facfe]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-3">
            <div className="p-2 rounded-lg bg-[#4facfe]/20">
              <Flame size={16} className="text-[#4facfe]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
              Total Lost
            </span>
          </div>
          <p className="text-3xl font-bold text-[#4facfe]">
            {stats?.totalLost?.toFixed(2) || "0.00"}
          </p>
          <p className="text-sm text-gray-500">lbs</p>
        </div>
      </div>

      {/* Secondary Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <Activity size={20} className="text-[#00d4aa] mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">
            {stats?.weeksRecorded || 0}
            <span className="text-sm text-gray-500">/52</span>
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Weeks Logged
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <TrendingDown size={20} className="text-[#4facfe] mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">
            {stats?.avgWeeklyLoss?.toFixed(2) || "0.00"}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Avg lbs/week
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <Heart size={20} className="text-[#f472b6] mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">
            {stats?.currentSystolic && stats?.currentDiastolic
              ? `${stats.currentSystolic.toFixed(
                  0
                )}/${stats.currentDiastolic.toFixed(0)}`
              : "—/—"}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Blood Pressure
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <Trophy size={20} className="text-[#fbbf24] mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">
            {Math.max(0, currentWeight - 170).toFixed(1)}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            lbs to 6-Pack
          </p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
          <Target size={20} className="text-[#f5576c] mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">
            {Math.max(0, currentWeight - 165).toFixed(1)}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            lbs to Remission
          </p>
        </div>
      </div>

      {/* Weekly Entries */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Calendar className="text-[#00d4aa]" size={20} />
          Weekly Measurements
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          January 31, 2026 – January 23, 2027 (52 Saturdays)
        </p>
      </div>

      <div className="space-y-2">
        {saturdays.map((week, index) => {
          const previousWeek = index > 0 ? saturdays[index - 1] : null;
          const previousWeight =
            previousWeek?.entry?.weight_lbs ||
            (index === 0 ? null : STARTING_WEIGHT);
          const previousWaist =
            previousWeek?.entry?.waist_inches ||
            (index === 0 ? null : STARTING_WAIST);
          const previousSystolic = previousWeek?.entry?.systolic_mmhg || null;
          const previousDiastolic = previousWeek?.entry?.diastolic_mmhg || null;

          return (
            <WeightEntryCard
              key={week.dateString}
              week={week}
              previousWeight={previousWeight}
              previousWaist={previousWaist}
              previousSystolic={previousSystolic}
              previousDiastolic={previousDiastolic}
              onSave={(data) => handleSave(week.dateString, data)}
            />
          );
        })}
      </div>
    </div>
  );
}
