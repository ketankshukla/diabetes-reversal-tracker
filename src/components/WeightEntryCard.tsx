'use client';

import React, { useState } from 'react';
import { SaturdayWeek } from '@/types';
import { Check, Edit2, X, Save } from 'lucide-react';

interface WeightEntryCardProps {
  week: SaturdayWeek;
  previousWeight: number | null;
  previousWaist: number | null;
  onSave: (data: { weight_lbs: number; waist_inches?: number | null; notes?: string | null }) => Promise<void>;
}

export default function WeightEntryCard({ week, previousWeight, previousWaist, onSave }: WeightEntryCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [weight, setWeight] = useState(week.entry?.weight_lbs?.toString() || '');
  const [waist, setWaist] = useState(week.entry?.waist_inches?.toString() || '');
  const [notes, setNotes] = useState(week.entry?.notes || '');
  const [isSaving, setIsSaving] = useState(false);

  const hasEntry = week.entry !== null;
  const weightChange = hasEntry && previousWeight ? week.entry!.weight_lbs - previousWeight : null;
  const waistChange = hasEntry && previousWaist && week.entry?.waist_inches 
    ? week.entry.waist_inches - previousWaist 
    : null;

  const handleSave = async () => {
    if (!weight || parseFloat(weight) <= 0) return;
    
    setIsSaving(true);
    try {
      await onSave({
        weight_lbs: parseFloat(weight),
        waist_inches: waist ? parseFloat(waist) : null,
        notes: notes || null,
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setWeight(week.entry?.weight_lbs?.toString() || '');
    setWaist(week.entry?.waist_inches?.toString() || '');
    setNotes(week.entry?.notes || '');
    setIsEditing(false);
  };

  return (
    <div
      className={`rounded-xl p-4 mb-3 border transition-all ${
        week.isCurrentWeek
          ? 'bg-[#00d4aa]/10 border-[#00d4aa]/50 ring-2 ring-[#00d4aa]/30'
          : hasEntry
          ? 'bg-white/5 border-white/10'
          : 'bg-white/[0.02] border-white/5'
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#00d4aa]">Week {week.weekNumber}</span>
            {week.isCurrentWeek && (
              <span className="text-xs bg-[#00d4aa] text-black px-2 py-0.5 rounded-full font-semibold">
                CURRENT
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm mt-0.5">{week.formattedDate}</p>
        </div>
        <div className="flex items-center gap-2">
          {hasEntry ? (
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full flex items-center gap-1">
              <Check size={12} /> Recorded
            </span>
          ) : week.isPast || week.isCurrentWeek ? (
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
              ⏳ Pending
            </span>
          ) : (
            <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full">
              Upcoming
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      {isEditing ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wider">Weight (lbs) *</label>
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4aa]"
                placeholder="210.0"
                autoFocus
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wider">Waist (in)</label>
              <input
                type="number"
                step="0.1"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4aa]"
                placeholder="40.0"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider">Notes</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4aa]"
              placeholder="Optional notes..."
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={isSaving || !weight}
              className="flex-1 bg-[#00d4aa] hover:bg-[#00b894] disabled:opacity-50 text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Save size={16} />
              {isSaving ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-2 transition-colors"
            >
              <X size={16} />
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          {hasEntry ? (
            <div className="flex items-center justify-between">
              <div className="grid grid-cols-3 gap-4 flex-1">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Weight</p>
                  <p className="text-xl font-bold text-white">{week.entry!.weight_lbs} lbs</p>
                  {weightChange !== null && (
                    <p className={`text-sm ${weightChange <= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {weightChange <= 0 ? '↓' : '↑'} {Math.abs(weightChange).toFixed(1)} lbs
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Waist</p>
                  {week.entry!.waist_inches ? (
                    <>
                      <p className="text-xl font-bold text-white">{week.entry!.waist_inches} in</p>
                      {waistChange !== null && (
                        <p className={`text-sm ${waistChange <= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {waistChange <= 0 ? '↓' : '↑'} {Math.abs(waistChange).toFixed(1)} in
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500">—</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Notes</p>
                  <p className="text-sm text-gray-300 truncate">
                    {week.entry!.notes || '—'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className="ml-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <Edit2 size={16} />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="grid grid-cols-3 gap-4 flex-1 text-gray-500">
                <div>
                  <p className="text-xs uppercase tracking-wider">Weight</p>
                  <p className="text-lg">___._</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider">Waist</p>
                  <p className="text-lg">__._</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider">Notes</p>
                  <p className="text-lg">—</p>
                </div>
              </div>
              {(week.isPast || week.isCurrentWeek) && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="ml-4 bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Enter Data
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
