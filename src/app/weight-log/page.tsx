'use client';

import React, { useState, useEffect } from 'react';
import { WeightEntry, SaturdayWeek, WeightStats } from '@/types';
import { getWeightEntries, upsertWeightEntry } from '@/lib/supabase';
import { generateAllSaturdays, mapEntriesToSaturdays, calculateWeightStats, STARTING_WEIGHT, STARTING_WAIST } from '@/lib/calculations';
import WeightEntryCard from '@/components/WeightEntryCard';
import { Scale, TrendingDown, Calendar, Target } from 'lucide-react';

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
      console.error('Failed to load data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSave = async (dateString: string, data: { weight_lbs: number; waist_inches?: number | null; notes?: string | null }) => {
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

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-3">
          <Scale className="text-[#00d4aa]" />
          Weight Log
        </h1>
        <p className="text-gray-400 mt-1">Track your weekly weigh-ins every Saturday</p>
      </div>

      {/* Stats Summary */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
              <Scale size={14} />
              Starting
            </div>
            <p className="text-2xl font-bold text-white">{stats.startingWeight} <span className="text-sm font-normal text-gray-400">lbs</span></p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
              <Target size={14} />
              Current
            </div>
            <p className="text-2xl font-bold text-[#00d4aa]">{stats.currentWeight} <span className="text-sm font-normal text-gray-400">lbs</span></p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
              <TrendingDown size={14} />
              Total Lost
            </div>
            <p className="text-2xl font-bold text-[#4facfe]">{stats.totalLost.toFixed(1)} <span className="text-sm font-normal text-gray-400">lbs</span></p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wider mb-1">
              <Calendar size={14} />
              Weeks
            </div>
            <p className="text-2xl font-bold text-[#fbbf24]">{stats.weeksRecorded} <span className="text-sm font-normal text-gray-400">/ 52</span></p>
          </div>
        </div>
      )}

      {/* Detailed Stats */}
      {stats && (
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">📊 Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Avg Weekly Loss</p>
              <p className="text-lg font-bold text-[#00d4aa]">{stats.avgWeeklyLoss} lbs/week</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Starting Waist</p>
              <p className="text-lg font-bold text-white">{stats.startingWaist || STARTING_WAIST} in</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Current Waist</p>
              <p className="text-lg font-bold text-white">{stats.currentWaist || '—'} in</p>
            </div>
            {stats.totalWaistLost !== null && (
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Waist Lost</p>
                <p className="text-lg font-bold text-[#4facfe]">{stats.totalWaistLost} in</p>
              </div>
            )}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">To 6-Pack (170)</p>
              <p className="text-lg font-bold text-[#4facfe]">{Math.max(0, stats.currentWeight - 170).toFixed(1)} lbs</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">To Remission (165)</p>
              <p className="text-lg font-bold text-[#00d4aa]">{Math.max(0, stats.currentWeight - 165).toFixed(1)} lbs</p>
            </div>
          </div>
        </div>
      )}

      {/* Weekly Entries */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Calendar className="text-[#00d4aa]" size={20} />
          Weekly Weigh-ins
        </h2>
        <p className="text-sm text-gray-400 mt-1">January 24, 2026 – January 23, 2027 (52 weeks)</p>
      </div>

      <div className="space-y-2">
        {saturdays.map((week, index) => {
          const previousWeek = index > 0 ? saturdays[index - 1] : null;
          const previousWeight = previousWeek?.entry?.weight_lbs || (index === 0 ? null : STARTING_WEIGHT);
          const previousWaist = previousWeek?.entry?.waist_inches || (index === 0 ? null : STARTING_WAIST);

          return (
            <WeightEntryCard
              key={week.dateString}
              week={week}
              previousWeight={previousWeight}
              previousWaist={previousWaist}
              onSave={(data) => handleSave(week.dateString, data)}
            />
          );
        })}
      </div>
    </div>
  );
}
