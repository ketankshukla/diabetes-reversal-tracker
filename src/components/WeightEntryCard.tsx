"use client";

import React, { useState, useEffect } from "react";
import { SaturdayWeek } from "@/types";
import { Check, Edit2, X, Save, Lock } from "lucide-react";
import { isTodaySaturday } from "@/lib/calculations";

interface WeightEntryCardProps {
  week: SaturdayWeek;
  previousWeight: number | null;
  previousWaist: number | null;
  previousSystolic: number | null;
  previousDiastolic: number | null;
  onSave: (data: {
    weight_lbs: number;
    waist_inches?: number | null;
    systolic_mmhg?: number | null;
    diastolic_mmhg?: number | null;
    notes?: string | null;
  }) => Promise<void>;
}

// Format number to 2 decimal places
function formatTo2Decimals(value: number | undefined | null): string {
  if (value === undefined || value === null) return "";
  return value.toFixed(2);
}

export default function WeightEntryCard({
  week,
  previousWeight,
  previousWaist,
  previousSystolic,
  previousDiastolic,
  onSave,
}: WeightEntryCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [weight, setWeight] = useState(
    formatTo2Decimals(week.entry?.weight_lbs) || ""
  );
  const [waist, setWaist] = useState(
    formatTo2Decimals(week.entry?.waist_inches) || ""
  );
  const [systolic, setSystolic] = useState(
    formatTo2Decimals(week.entry?.systolic_mmhg) || ""
  );
  const [diastolic, setDiastolic] = useState(
    formatTo2Decimals(week.entry?.diastolic_mmhg) || ""
  );
  const [notes, setNotes] = useState(week.entry?.notes || "");
  const [isSaving, setIsSaving] = useState(false);
  const [isSaturday, setIsSaturday] = useState(false);

  // Check if today is Saturday only on client side to avoid hydration mismatch
  useEffect(() => {
    setIsSaturday(isTodaySaturday());
  }, []);

  const hasEntry = week.entry !== null;
  const canEnterData = isSaturday && (week.isPast || week.isCurrentWeek);
  const weightChange =
    hasEntry && previousWeight ? week.entry!.weight_lbs - previousWeight : null;
  const waistChange =
    hasEntry && previousWaist && week.entry?.waist_inches
      ? week.entry.waist_inches - previousWaist
      : null;
  const systolicChange =
    hasEntry && previousSystolic && week.entry?.systolic_mmhg
      ? week.entry.systolic_mmhg - previousSystolic
      : null;
  const diastolicChange =
    hasEntry && previousDiastolic && week.entry?.diastolic_mmhg
      ? week.entry.diastolic_mmhg - previousDiastolic
      : null;

  // Format weight on blur to 2 decimal places
  const handleWeightBlur = () => {
    if (weight) {
      setWeight(parseFloat(weight).toFixed(2));
    }
  };

  // Format waist on blur to 2 decimal places
  const handleWaistBlur = () => {
    if (waist) {
      setWaist(parseFloat(waist).toFixed(2));
    }
  };

  // Format systolic on blur to 2 decimal places
  const handleSystolicBlur = () => {
    if (systolic) {
      setSystolic(parseFloat(systolic).toFixed(2));
    }
  };

  // Format diastolic on blur to 2 decimal places
  const handleDiastolicBlur = () => {
    if (diastolic) {
      setDiastolic(parseFloat(diastolic).toFixed(2));
    }
  };

  const handleSave = async () => {
    const weightNum = parseFloat(weight);
    if (!weight || isNaN(weightNum) || weightNum <= 0) {
      alert("Please enter a valid weight greater than 0");
      return;
    }

    // Format to 2 decimal places before saving
    const formattedWeight = parseFloat(weightNum.toFixed(2));
    const formattedWaist = waist
      ? parseFloat(parseFloat(waist).toFixed(2))
      : null;
    const formattedSystolic = systolic
      ? parseFloat(parseFloat(systolic).toFixed(2))
      : null;
    const formattedDiastolic = diastolic
      ? parseFloat(parseFloat(diastolic).toFixed(2))
      : null;

    setIsSaving(true);
    try {
      await onSave({
        weight_lbs: formattedWeight,
        waist_inches: formattedWaist,
        systolic_mmhg: formattedSystolic,
        diastolic_mmhg: formattedDiastolic,
        notes: notes || null,
      });
      setIsEditing(false);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      alert(`Failed to save: ${errorMessage}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setWeight(formatTo2Decimals(week.entry?.weight_lbs) || "");
    setWaist(formatTo2Decimals(week.entry?.waist_inches) || "");
    setSystolic(formatTo2Decimals(week.entry?.systolic_mmhg) || "");
    setDiastolic(formatTo2Decimals(week.entry?.diastolic_mmhg) || "");
    setNotes(week.entry?.notes || "");
    setIsEditing(false);
  };

  return (
    <div
      className={`rounded-xl p-4 mb-3 border transition-all ${
        week.isCurrentWeek
          ? "bg-[#00d4aa]/10 border-[#00d4aa]/50 ring-2 ring-[#00d4aa]/30"
          : hasEntry
          ? "bg-white/5 border-white/10"
          : "bg-white/[0.02] border-white/5"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#00d4aa]">
              Week {week.weekNumber}
            </span>
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
              <label className="text-xs text-gray-500 uppercase tracking-wider">
                Weight (lbs) *
              </label>
              <input
                type="number"
                step="0.01"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                onBlur={handleWeightBlur}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4aa]"
                placeholder="210.00"
                autoFocus
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wider">
                Waist (in)
              </label>
              <input
                type="number"
                step="0.01"
                value={waist}
                onChange={(e) => setWaist(e.target.value)}
                onBlur={handleWaistBlur}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4aa]"
                placeholder="45.00"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wider">
                Systolic (mmHg)
              </label>
              <input
                type="number"
                step="0.01"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
                onBlur={handleSystolicBlur}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4aa]"
                placeholder="120.00"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-wider">
                Diastolic (mmHg)
              </label>
              <input
                type="number"
                step="0.01"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
                onBlur={handleDiastolicBlur}
                className="w-full mt-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4aa]"
                placeholder="80.00"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-wider">
              Notes
            </label>
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
              type="button"
              onClick={handleSave}
              disabled={isSaving || !weight}
              className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold ${
                isSaving || !weight
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-[#00d4aa] hover:bg-[#00b894] text-black cursor-pointer"
              }`}
            >
              <Save size={16} />
              {isSaving ? "Saving..." : !weight ? "Enter Weight" : "Save"}
            </button>
            <button
              type="button"
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Weight
                  </p>
                  <p className="text-xl font-bold text-white">
                    {week.entry!.weight_lbs.toFixed(2)} lbs
                  </p>
                  {weightChange !== null && (
                    <p
                      className={`text-sm ${
                        weightChange <= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {weightChange <= 0 ? "↓" : "↑"}{" "}
                      {Math.abs(weightChange).toFixed(2)} lbs
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Waist
                  </p>
                  {week.entry!.waist_inches ? (
                    <>
                      <p className="text-xl font-bold text-white">
                        {week.entry!.waist_inches.toFixed(2)} in
                      </p>
                      {waistChange !== null && (
                        <p
                          className={`text-sm ${
                            waistChange <= 0 ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {waistChange <= 0 ? "↓" : "↑"}{" "}
                          {Math.abs(waistChange).toFixed(2)} in
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500">—</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Blood Pressure
                  </p>
                  {week.entry!.systolic_mmhg && week.entry!.diastolic_mmhg ? (
                    <>
                      <p className="text-xl font-bold text-white">
                        {week.entry!.systolic_mmhg.toFixed(0)}/
                        {week.entry!.diastolic_mmhg.toFixed(0)}
                      </p>
                      {(systolicChange !== null ||
                        diastolicChange !== null) && (
                        <p
                          className={`text-sm ${
                            (systolicChange || 0) <= 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {(systolicChange || 0) <= 0 ? "↓" : "↑"}{" "}
                          {Math.abs(systolicChange || 0).toFixed(0)}/
                          {Math.abs(diastolicChange || 0).toFixed(0)}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-500">—</p>
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Notes
                  </p>
                  <p className="text-sm text-gray-300 truncate">
                    {week.entry!.notes || "—"}
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 text-gray-500">
                <div>
                  <p className="text-xs uppercase tracking-wider">Weight</p>
                  <p className="text-lg">___._</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider">Waist</p>
                  <p className="text-lg">__._</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider">BP</p>
                  <p className="text-lg">___/___</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider">Notes</p>
                  <p className="text-lg">—</p>
                </div>
              </div>
              {(week.isPast || week.isCurrentWeek) &&
                (canEnterData ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="ml-4 bg-[#00d4aa] hover:bg-[#00b894] text-black font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Enter Data
                  </button>
                ) : (
                  <div className="ml-4 flex items-center gap-2 text-gray-500 text-sm">
                    <Lock size={14} />
                    <span>Saturdays only</span>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
