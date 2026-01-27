"use client";

import React, { useState, useEffect } from "react";
import { WeightEntry } from "@/types";

interface DiabetesReversalTrackerProps {
  weightEntries: WeightEntry[];
}

const DiabetesReversalTracker = ({
  weightEntries: propEntries,
}: DiabetesReversalTrackerProps) => {
  // Dates
  const startDate = new Date("2026-01-23");
  const labDate = new Date("2026-04-15T09:00:00");
  const sixPackDate = new Date("2026-08-31");
  const remissionDate = new Date("2027-01-23");

  // State
  const [activeTab, setActiveTab] = useState("dashboard");
  const [timeLeft, setTimeLeft] = useState<any>({
    labDays: 0,
    labHours: 0,
    labMinutes: 0,
    labSeconds: 0,
    sixPackDays: 0,
    sixPackHours: 0,
    sixPackMinutes: 0,
    sixPackSeconds: 0,
    remissionDays: 0,
    remissionHours: 0,
    remissionMinutes: 0,
    remissionSeconds: 0,
    daysElapsed: 0,
  });

  const checklistItems = [
    {
      id: "morningVacuum",
      label: "Morning Vacuum (6:00 AM)",
      time: "6:00 AM",
      emoji: "🌀",
    },
    {
      id: "morningPlank",
      label: "Morning Plank (6:15 AM)",
      time: "6:15 AM",
      emoji: "🧱",
    },
    {
      id: "fasted",
      label: "Stayed Fasted Until Noon",
      time: "7 AM-12 PM",
      emoji: "⏳",
    },
    {
      id: "breakfast",
      label: "Lunch: 4 Eggs + Metformin",
      time: "12:00 PM",
      emoji: "🍳",
    },
    {
      id: "middayCore",
      label: "Midday Core Circuit",
      time: "12:30 PM",
      emoji: "💪",
    },
    {
      id: "afternoonResistance",
      label: "Afternoon Resistance Training",
      time: "3:00 PM",
      emoji: "🏋️",
    },
    {
      id: "dinner",
      label: "Dinner: 4x4 Protein + Metformin",
      time: "5-6 PM",
      emoji: "🍔",
    },
    {
      id: "eatingWindowClosed",
      label: "Eating Window Closed",
      time: "6:00 PM",
      emoji: "🚫",
    },
    {
      id: "eveningVacuum",
      label: "Evening Vacuum (8:30 PM)",
      time: "8:30 PM",
      emoji: "🌙",
    },
  ];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const labDiff = labDate.getTime() - now.getTime();
      const sixPackDiff = sixPackDate.getTime() - now.getTime();
      const remissionDiff = remissionDate.getTime() - now.getTime();
      const elapsed = now.getTime() - startDate.getTime();

      setTimeLeft({
        labDays: Math.max(0, Math.floor(labDiff / (1000 * 60 * 60 * 24))),
        labHours: Math.max(0, Math.floor((labDiff / (1000 * 60 * 60)) % 24)),
        labMinutes: Math.max(0, Math.floor((labDiff / 1000 / 60) % 60)),
        labSeconds: Math.max(0, Math.floor((labDiff / 1000) % 60)),
        sixPackDays: Math.max(
          0,
          Math.floor(sixPackDiff / (1000 * 60 * 60 * 24))
        ),
        sixPackHours: Math.max(
          0,
          Math.floor((sixPackDiff / (1000 * 60 * 60)) % 24)
        ),
        sixPackMinutes: Math.max(0, Math.floor((sixPackDiff / 1000 / 60) % 60)),
        sixPackSeconds: Math.max(0, Math.floor((sixPackDiff / 1000) % 60)),
        remissionDays: Math.max(
          0,
          Math.floor(remissionDiff / (1000 * 60 * 60 * 24))
        ),
        remissionHours: Math.max(
          0,
          Math.floor((remissionDiff / (1000 * 60 * 60)) % 24)
        ),
        remissionMinutes: Math.max(
          0,
          Math.floor((remissionDiff / 1000 / 60) % 60)
        ),
        remissionSeconds: Math.max(0, Math.floor((remissionDiff / 1000) % 60)),
        daysElapsed: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Convert prop entries to local format
  const weightEntries = propEntries.map((e) => ({
    date: e.measurement_date,
    weight: e.weight_lbs,
    note: e.notes || "",
  }));

  // Calculations
  const currentWeight =
    weightEntries.length > 0
      ? weightEntries[weightEntries.length - 1].weight
      : 210;
  const startingWeight = 210;
  const totalWeightLost = startingWeight - currentWeight;
  const daysElapsed = timeLeft.daysElapsed || 1;
  const weeksElapsed = Math.max(1, Math.floor(daysElapsed / 7));
  const avgWeeklyLoss = totalWeightLost / weeksElapsed;

  // Goals
  const sixPackWeight = 170;
  const remissionWeight = 165;
  const ultimateWeight = 160;

  // Projections
  const weightToSixPack = Math.max(0, currentWeight - sixPackWeight);
  const weightToRemission = Math.max(0, currentWeight - remissionWeight);
  const weightToUltimate = Math.max(0, currentWeight - ultimateWeight);

  const weeksToSixPack =
    avgWeeklyLoss > 0 ? Math.ceil(weightToSixPack / avgWeeklyLoss) : "∞";
  const weeksToRemission =
    avgWeeklyLoss > 0 ? Math.ceil(weightToRemission / avgWeeklyLoss) : "∞";
  const weeksToUltimate =
    avgWeeklyLoss > 0 ? Math.ceil(weightToUltimate / avgWeeklyLoss) : "∞";

  // Body fat estimation (rough): BF% ≈ (weight - lean mass) / weight * 100
  // Assuming ~150 lbs lean mass for your frame
  const estimatedLeanMass = 150;
  const estimatedBodyFat = (
    ((currentWeight - estimatedLeanMass) / currentWeight) *
    100
  ).toFixed(1);

  // A1C projection based on weight loss (rough correlation from studies)
  // Starting: 11.5% at 210 lbs, targeting ~5.7% at 160 lbs
  const a1cStart = 11.5;
  const a1cPerPound = (11.5 - 5.7) / (210 - 160); // ~0.116% per pound
  const projectedA1C = Math.max(
    5.0,
    a1cStart - totalWeightLost * a1cPerPound
  ).toFixed(1);

  // Fasting glucose projection
  const glucoseStart = 184;
  const glucosePerPound = (184 - 90) / (210 - 160); // ~1.88 per pound
  const projectedGlucose = Math.max(
    85,
    Math.round(glucoseStart - totalWeightLost * glucosePerPound)
  );

  // Progress percentages
  const progressToSixPack = Math.min(
    100,
    ((startingWeight - currentWeight) / (startingWeight - sixPackWeight)) * 100
  ).toFixed(1);
  const progressToRemission = Math.min(
    100,
    ((startingWeight - currentWeight) / (startingWeight - remissionWeight)) *
      100
  ).toFixed(1);
  const progressToUltimate = Math.min(
    100,
    ((startingWeight - currentWeight) / (startingWeight - ultimateWeight)) * 100
  ).toFixed(1);

  // Exercise schedule by day
  const getExercisesForDay = (dayOfWeek: number) => {
    const exercises: any = {
      morning: [
        {
          name: "Stomach Vacuum",
          sets: "5 sets",
          reps: "30 sec hold",
          rest: "30 sec",
        },
        { name: "Plank", sets: "3 sets", reps: "45-60 sec", rest: "30 sec" },
      ],
      midday: {
        0: [
          // Sunday - Rest day, light core only
          {
            name: "Dead Bug",
            sets: "2 sets",
            reps: "8 each side",
            rest: "30 sec",
          },
          {
            name: "Bird Dog",
            sets: "2 sets",
            reps: "8 each side",
            rest: "30 sec",
          },
        ],
        1: [
          // Monday - Full Core + Lower Body
          {
            name: "Dead Bug",
            sets: "3 sets",
            reps: "10 each side",
            rest: "30 sec",
          },
          {
            name: "Leg Raises",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          {
            name: "Bicycle Crunches",
            sets: "3 sets",
            reps: "20 reps",
            rest: "30 sec",
          },
          {
            name: "Mountain Climbers",
            sets: "3 sets",
            reps: "30 sec",
            rest: "30 sec",
          },
          {
            name: "Reverse Crunches",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
        ],
        2: [
          // Tuesday - Core + Upper Push
          { name: "Plank", sets: "3 sets", reps: "60 sec", rest: "30 sec" },
          {
            name: "Leg Raises",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          {
            name: "Side Plank",
            sets: "3 sets",
            reps: "30 sec each",
            rest: "30 sec",
          },
          {
            name: "Hollow Body Hold",
            sets: "3 sets",
            reps: "20 sec",
            rest: "30 sec",
          },
        ],
        3: [
          // Wednesday - Full Core + Lower Body
          {
            name: "Dead Bug",
            sets: "3 sets",
            reps: "10 each side",
            rest: "30 sec",
          },
          {
            name: "Bicycle Crunches",
            sets: "3 sets",
            reps: "20 reps",
            rest: "30 sec",
          },
          {
            name: "Reverse Crunches",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          {
            name: "Mountain Climbers",
            sets: "3 sets",
            reps: "30 sec",
            rest: "30 sec",
          },
          {
            name: "Leg Raises",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
        ],
        4: [
          // Thursday - Core + Upper Pull focus
          { name: "Plank", sets: "3 sets", reps: "60 sec", rest: "30 sec" },
          {
            name: "Side Plank",
            sets: "3 sets",
            reps: "30 sec each",
            rest: "30 sec",
          },
          {
            name: "Dead Bug",
            sets: "3 sets",
            reps: "10 each side",
            rest: "30 sec",
          },
          {
            name: "Hollow Body Hold",
            sets: "3 sets",
            reps: "25 sec",
            rest: "30 sec",
          },
        ],
        5: [
          // Friday - Full Core + Lower Body
          {
            name: "Leg Raises",
            sets: "4 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          {
            name: "Bicycle Crunches",
            sets: "4 sets",
            reps: "20 reps",
            rest: "30 sec",
          },
          {
            name: "Reverse Crunches",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          {
            name: "Mountain Climbers",
            sets: "3 sets",
            reps: "45 sec",
            rest: "30 sec",
          },
          { name: "Plank", sets: "3 sets", reps: "60 sec", rest: "30 sec" },
        ],
        6: [
          // Saturday - Full Core Challenge
          {
            name: "Dead Bug",
            sets: "3 sets",
            reps: "12 each side",
            rest: "30 sec",
          },
          {
            name: "Leg Raises",
            sets: "4 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          {
            name: "Bicycle Crunches",
            sets: "4 sets",
            reps: "24 reps",
            rest: "30 sec",
          },
          {
            name: "Hollow Body Hold",
            sets: "3 sets",
            reps: "30 sec",
            rest: "30 sec",
          },
          {
            name: "Side Plank",
            sets: "3 sets",
            reps: "45 sec each",
            rest: "30 sec",
          },
        ],
      },
      afternoon: {
        0: [], // Sunday - Rest
        1: [
          // Monday - Squats & Lunges
          {
            name: "Bodyweight Squats",
            sets: "4 sets",
            reps: "20 reps",
            rest: "45 sec",
          },
          {
            name: "Lunges",
            sets: "3 sets",
            reps: "12 each leg",
            rest: "45 sec",
          },
          {
            name: "Glute Bridges",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          { name: "Wall Sit", sets: "3 sets", reps: "45 sec", rest: "30 sec" },
        ],
        2: [
          // Tuesday - Push
          {
            name: "Push-Ups",
            sets: "4 sets",
            reps: "10-15 reps",
            rest: "45 sec",
          },
          {
            name: "Diamond Push-Ups",
            sets: "3 sets",
            reps: "8-10 reps",
            rest: "45 sec",
          },
          {
            name: "Pike Push-Ups",
            sets: "3 sets",
            reps: "8-10 reps",
            rest: "45 sec",
          },
          {
            name: "Plank Shoulder Taps",
            sets: "3 sets",
            reps: "10 each",
            rest: "30 sec",
          },
        ],
        3: [
          // Wednesday - Squats & Lunges
          {
            name: "Bodyweight Squats",
            sets: "4 sets",
            reps: "20 reps",
            rest: "45 sec",
          },
          {
            name: "Bulgarian Split Squats",
            sets: "3 sets",
            reps: "10 each leg",
            rest: "45 sec",
          },
          {
            name: "Glute Bridges",
            sets: "4 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
          {
            name: "Calf Raises",
            sets: "3 sets",
            reps: "20 reps",
            rest: "30 sec",
          },
        ],
        4: [
          // Thursday - Pull (bodyweight)
          {
            name: "Superman Hold",
            sets: "4 sets",
            reps: "15 sec",
            rest: "30 sec",
          },
          {
            name: "Prone Y Raises",
            sets: "3 sets",
            reps: "12 reps",
            rest: "30 sec",
          },
          {
            name: "Reverse Snow Angels",
            sets: "3 sets",
            reps: "10 reps",
            rest: "30 sec",
          },
          {
            name: "Glute Bridges",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
        ],
        5: [
          // Friday - Squats & Lunges
          {
            name: "Bodyweight Squats",
            sets: "4 sets",
            reps: "25 reps",
            rest: "45 sec",
          },
          {
            name: "Lunges",
            sets: "4 sets",
            reps: "12 each leg",
            rest: "45 sec",
          },
          {
            name: "Step-Ups (stairs)",
            sets: "3 sets",
            reps: "12 each leg",
            rest: "45 sec",
          },
          { name: "Wall Sit", sets: "3 sets", reps: "60 sec", rest: "30 sec" },
        ],
        6: [
          // Saturday - Full Body
          {
            name: "Burpees (no jump)",
            sets: "3 sets",
            reps: "10 reps",
            rest: "45 sec",
          },
          { name: "Push-Ups", sets: "3 sets", reps: "12 reps", rest: "45 sec" },
          {
            name: "Bodyweight Squats",
            sets: "3 sets",
            reps: "20 reps",
            rest: "45 sec",
          },
          {
            name: "Glute Bridges",
            sets: "3 sets",
            reps: "15 reps",
            rest: "30 sec",
          },
        ],
      },
      evening: [
        {
          name: "Stomach Vacuum",
          sets: "5 sets",
          reps: "30 sec hold",
          rest: "30 sec",
        },
      ],
    };
    return exercises;
  };

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const todayDayOfWeek = today.getDay();
  const todayExercises = getExercisesForDay(todayDayOfWeek);

  // Styles
  const styles: any = {
    container: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      background:
        "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)",
      minHeight: "100vh",
      padding: "15px",
      color: "#fff",
    },
    card: {
      background: "rgba(255,255,255,0.03)",
      borderRadius: "16px",
      padding: "16px",
      marginBottom: "12px",
      border: "1px solid rgba(255,255,255,0.08)",
    },
    tabs: {
      display: "flex",
      gap: "6px",
      marginBottom: "16px",
      overflowX: "auto" as const,
      paddingBottom: "8px",
    },
    tab: (active: boolean) => ({
      padding: "10px 14px",
      borderRadius: "20px",
      border: "none",
      cursor: "pointer",
      fontSize: "0.8rem",
      fontWeight: "600",
      background: active
        ? "linear-gradient(135deg, #00d4aa, #00a080)"
        : "rgba(255,255,255,0.08)",
      color: active ? "#000" : "#888",
      whiteSpace: "nowrap" as const,
      transition: "all 0.2s",
    }),
    table: {
      width: "100%",
      borderCollapse: "collapse" as const,
      fontSize: "0.85rem",
    },
    th: {
      textAlign: "left" as const,
      padding: "10px 8px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      color: "#888",
      fontWeight: "600",
      fontSize: "0.75rem",
      textTransform: "uppercase" as const,
    },
    td: {
      padding: "10px 8px",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    },
    input: {
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "8px",
      padding: "10px 12px",
      color: "#fff",
      fontSize: "0.9rem",
      width: "100%",
      boxSizing: "border-box" as const,
    },
    button: {
      background: "linear-gradient(135deg, #00d4aa, #00a080)",
      border: "none",
      borderRadius: "8px",
      padding: "12px 20px",
      color: "#000",
      fontWeight: "700",
      cursor: "pointer",
      fontSize: "0.9rem",
      width: "100%",
    },
    progressBar: (percent?: number, color?: string) => ({
      width: "100%",
      height: "8px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "4px",
      overflow: "hidden",
      position: "relative" as const,
    }),
    progressFill: (percent: number, color: string) => ({
      width: `${Math.min(100, percent)}%`,
      height: "100%",
      background: color,
      borderRadius: "4px",
      transition: "width 0.5s ease",
    }),
    statBox: (color: string) => ({
      background: `${color}15`,
      borderRadius: "12px",
      padding: "12px",
      textAlign: "center" as const,
      border: `1px solid ${color}30`,
    }),
    checkItem: (checked: boolean) => ({
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px",
      background: checked ? "rgba(0,212,170,0.1)" : "rgba(255,255,255,0.02)",
      borderRadius: "10px",
      marginBottom: "8px",
      cursor: "pointer",
      border: checked
        ? "1px solid rgba(0,212,170,0.3)"
        : "1px solid transparent",
    }),
    checkbox: (checked: boolean) => ({
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      border: checked ? "none" : "2px solid #444",
      background: checked
        ? "linear-gradient(135deg, #00d4aa, #00a080)"
        : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      color: "#000",
      flexShrink: 0,
    }),
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "5px" }}>🎯</div>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "800",
            background: "linear-gradient(90deg, #00d4aa, #00a080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 5px 0",
          }}
        >
          DIABETES REVERSAL TRACKER
        </h1>
        <p style={{ color: "#666", fontSize: "0.85rem", margin: 0 }}>
          Day {daysElapsed + 1} • Current: {currentWeight} lbs • Goal: 160 lbs
        </p>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {[
          { id: "dashboard", label: "📊 Dashboard" },
          { id: "exercises", label: "💪 Exercises" },
          { id: "reports", label: "📋 Reports" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={styles.tab(activeTab === tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* DASHBOARD TAB */}
      {activeTab === "dashboard" && (
        <>
          {/* Countdown Timers - Big Cards */}
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "1rem",
                color: "#00d4aa",
                fontWeight: "700",
              }}
            >
              🏁 COUNTDOWN TIMERS
            </h3>

            {/* Lab Test Countdown Card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,87,108,0.15) 0%, rgba(245,87,108,0.05) 100%)",
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "12px",
                border: "1px solid rgba(245,87,108,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🩺</span>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Lab Test
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#f5576c",
                      fontWeight: "600",
                    }}
                  >
                    April 15, 2026
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#f5576c",
                  textAlign: "center",
                  marginBottom: "12px",
                  fontFamily: "monospace",
                }}
              >
                {timeLeft.labDays}d {timeLeft.labHours}h {timeLeft.labMinutes}m{" "}
                {timeLeft.labSeconds}s
              </div>
              <div
                style={{
                  ...styles.progressBar(),
                  height: "10px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    ...styles.progressFill(
                      100 - (timeLeft.labDays / 82) * 100,
                      "#f5576c"
                    ),
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>

            {/* 6-Pack Countdown Card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(79,172,254,0.15) 0%, rgba(79,172,254,0.05) 100%)",
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "12px",
                border: "1px solid rgba(79,172,254,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>💪</span>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    6-Pack Goal
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#4facfe",
                      fontWeight: "600",
                    }}
                  >
                    August 31, 2026
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#4facfe",
                  textAlign: "center",
                  marginBottom: "12px",
                  fontFamily: "monospace",
                }}
              >
                {timeLeft.sixPackDays}d {timeLeft.sixPackHours}h{" "}
                {timeLeft.sixPackMinutes}m {timeLeft.sixPackSeconds}s
              </div>
              <div
                style={{
                  ...styles.progressBar(),
                  height: "10px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    ...styles.progressFill(
                      100 - (timeLeft.sixPackDays / 220) * 100,
                      "#4facfe"
                    ),
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>

            {/* Remission Countdown Card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,170,0.15) 0%, rgba(0,212,170,0.05) 100%)",
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "12px",
                border: "1px solid rgba(0,212,170,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🏆</span>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Metformin Freedom
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#00d4aa",
                      fontWeight: "600",
                    }}
                  >
                    January 23, 2027
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#00d4aa",
                  textAlign: "center",
                  marginBottom: "12px",
                  fontFamily: "monospace",
                }}
              >
                {timeLeft.remissionDays}d {timeLeft.remissionHours}h{" "}
                {timeLeft.remissionMinutes}m {timeLeft.remissionSeconds}s
              </div>
              <div
                style={{
                  ...styles.progressBar(),
                  height: "10px",
                  borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    ...styles.progressFill(
                      100 - (timeLeft.remissionDays / 365) * 100,
                      "#00d4aa"
                    ),
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Current Stats - Redesigned with explanations */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: "1rem",
                color: "#00d4aa",
                fontWeight: "700",
              }}
            >
              📈 YOUR HEALTH SNAPSHOT
            </h3>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#666",
                marginBottom: "16px",
                lineHeight: "1.4",
              }}
            >
              Based on your weight loss progress, here's how your health markers
              are estimated to improve:
            </p>

            {/* Weight Stats Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  background: "rgba(0,212,170,0.1)",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "1px solid rgba(0,212,170,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "4px",
                  }}
                >
                  Current Weight
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#00d4aa",
                  }}
                >
                  {currentWeight}{" "}
                  <span style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                    lbs
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#666",
                    marginTop: "4px",
                  }}
                >
                  Started at {startingWeight} lbs
                </div>
              </div>

              <div
                style={{
                  background: "rgba(245,87,108,0.1)",
                  borderRadius: "12px",
                  padding: "16px",
                  border: "1px solid rgba(245,87,108,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "4px",
                  }}
                >
                  Total Lost
                </div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#f5576c",
                  }}
                >
                  {totalWeightLost}{" "}
                  <span style={{ fontSize: "0.9rem", fontWeight: "400" }}>
                    lbs
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#666",
                    marginTop: "4px",
                  }}
                >
                  ~{avgWeeklyLoss.toFixed(1)} lbs/week average
                </div>
              </div>
            </div>

            {/* Health Projections */}
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#888",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}
              >
                Estimated Health Improvements
              </div>

              {/* A1C Projection */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Projected A1C
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#666" }}>
                    Started at 11.5% • Goal: under 5.7%
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: "#4facfe",
                    }}
                  >
                    {projectedA1C}%
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color:
                        parseFloat(projectedA1C) <= 5.7 ? "#00d4aa" : "#fbbf24",
                    }}
                  >
                    {parseFloat(projectedA1C) <= 5.7
                      ? "✓ In remission range!"
                      : `${(parseFloat(projectedA1C) - 5.7).toFixed(1)}% to go`}
                  </div>
                </div>
              </div>

              {/* Body Fat Estimate */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Estimated Body Fat
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#666" }}>
                    Based on ~150 lbs lean mass
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: "#fbbf24",
                    }}
                  >
                    {estimatedBodyFat}%
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#666" }}>
                    {parseFloat(estimatedBodyFat) <= 15
                      ? "Athletic range"
                      : parseFloat(estimatedBodyFat) <= 20
                      ? "Fit range"
                      : "Working on it"}
                  </div>
                </div>
              </div>

              {/* Fasting Glucose */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Projected Fasting Glucose
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "#666" }}>
                    Started at 184 mg/dL • Goal: under 100
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: "#00d4aa",
                    }}
                  >
                    {projectedGlucose}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: projectedGlucose <= 100 ? "#00d4aa" : "#fbbf24",
                    }}
                  >
                    {projectedGlucose <= 100
                      ? "✓ Normal range!"
                      : `${projectedGlucose - 100} mg/dL to go`}
                  </div>
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.7rem",
                color: "#555",
                marginTop: "12px",
                fontStyle: "italic",
              }}
            >
              * Projections are estimates based on research showing weight loss
              correlation with A1C and glucose improvements. Actual results may
              vary.
            </p>
          </div>

          {/* Goals Progress */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              🎯 GOALS PROGRESS
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Goal</th>
                  <th style={styles.th}>Target</th>
                  <th style={styles.th}>To Go</th>
                  <th style={styles.th}>Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>💪 6-Pack Abs</td>
                  <td style={styles.td}>170 lbs</td>
                  <td style={{ ...styles.td, color: "#4facfe" }}>
                    {weightToSixPack} lbs
                  </td>
                  <td style={styles.td}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div style={{ ...styles.progressBar(), width: "60px" }}>
                        <div
                          style={styles.progressFill(
                            parseFloat(progressToSixPack),
                            "#4facfe"
                          )}
                        />
                      </div>
                      <span style={{ fontSize: "0.75rem" }}>
                        {progressToSixPack}%
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={styles.td}>🩺 Remission</td>
                  <td style={styles.td}>165 lbs</td>
                  <td style={{ ...styles.td, color: "#00d4aa" }}>
                    {weightToRemission} lbs
                  </td>
                  <td style={styles.td}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div style={{ ...styles.progressBar(), width: "60px" }}>
                        <div
                          style={styles.progressFill(
                            parseFloat(progressToRemission),
                            "#00d4aa"
                          )}
                        />
                      </div>
                      <span style={{ fontSize: "0.75rem" }}>
                        {progressToRemission}%
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={styles.td}>🏆 Ultimate</td>
                  <td style={styles.td}>160 lbs</td>
                  <td style={{ ...styles.td, color: "#fbbf24" }}>
                    {weightToUltimate} lbs
                  </td>
                  <td style={styles.td}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div style={{ ...styles.progressBar(), width: "60px" }}>
                        <div
                          style={styles.progressFill(
                            parseFloat(progressToUltimate),
                            "#fbbf24"
                          )}
                        />
                      </div>
                      <span style={{ fontSize: "0.75rem" }}>
                        {progressToUltimate}%
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* EXERCISES TAB */}
      {activeTab === "exercises" && (
        <>
          {/* Daily Routine Reference */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              📋 DAILY ROUTINE REFERENCE
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {checklistItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 12px",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{item.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: "500",
                        color: "#fff",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#666" }}>
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Morning Session */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#f093fb",
              }}
            >
              🌅 MORNING (6:00-6:30 AM) - Fasted
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Exercise</th>
                  <th style={styles.th}>Sets</th>
                  <th style={styles.th}>Reps/Time</th>
                  <th style={styles.th}>Rest</th>
                </tr>
              </thead>
              <tbody>
                {todayExercises.morning.map((ex: any, i: number) => (
                  <tr key={i}>
                    <td style={{ ...styles.td, fontWeight: "600" }}>
                      {ex.name}
                    </td>
                    <td style={styles.td}>{ex.sets}</td>
                    <td style={{ ...styles.td, color: "#f093fb" }}>
                      {ex.reps}
                    </td>
                    <td style={{ ...styles.td, color: "#888" }}>{ex.rest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Midday Core */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#4facfe",
              }}
            >
              ☀️ MIDDAY CORE (12:30 PM)
            </h3>
            {todayExercises.midday[todayDayOfWeek]?.length > 0 ? (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Exercise</th>
                    <th style={styles.th}>Sets</th>
                    <th style={styles.th}>Reps/Time</th>
                    <th style={styles.th}>Rest</th>
                  </tr>
                </thead>
                <tbody>
                  {todayExercises.midday[todayDayOfWeek].map(
                    (ex: any, i: number) => (
                      <tr key={i}>
                        <td style={{ ...styles.td, fontWeight: "600" }}>
                          {ex.name}
                        </td>
                        <td style={styles.td}>{ex.sets}</td>
                        <td style={{ ...styles.td, color: "#4facfe" }}>
                          {ex.reps}
                        </td>
                        <td style={{ ...styles.td, color: "#888" }}>
                          {ex.rest}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            ) : (
              <p
                style={{ color: "#888", textAlign: "center", padding: "20px" }}
              >
                🧘 Rest day - skip midday core
              </p>
            )}
          </div>

          {/* Afternoon Resistance */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              🏋️ AFTERNOON RESISTANCE (3:00 PM) - No Equipment
            </h3>
            {todayExercises.afternoon[todayDayOfWeek]?.length > 0 ? (
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Exercise</th>
                    <th style={styles.th}>Sets</th>
                    <th style={styles.th}>Reps/Time</th>
                    <th style={styles.th}>Rest</th>
                  </tr>
                </thead>
                <tbody>
                  {todayExercises.afternoon[todayDayOfWeek].map(
                    (ex: any, i: number) => (
                      <tr key={i}>
                        <td style={{ ...styles.td, fontWeight: "600" }}>
                          {ex.name}
                        </td>
                        <td style={styles.td}>{ex.sets}</td>
                        <td style={{ ...styles.td, color: "#00d4aa" }}>
                          {ex.reps}
                        </td>
                        <td style={{ ...styles.td, color: "#888" }}>
                          {ex.rest}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            ) : (
              <p
                style={{ color: "#888", textAlign: "center", padding: "20px" }}
              >
                🧘 Rest day - skip resistance
              </p>
            )}
          </div>

          {/* Evening Session */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#a78bfa",
              }}
            >
              🌙 EVENING (8:30 PM)
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Exercise</th>
                  <th style={styles.th}>Sets</th>
                  <th style={styles.th}>Reps/Time</th>
                  <th style={styles.th}>Rest</th>
                </tr>
              </thead>
              <tbody>
                {todayExercises.evening.map((ex: any, i: number) => (
                  <tr key={i}>
                    <td style={{ ...styles.td, fontWeight: "600" }}>
                      {ex.name}
                    </td>
                    <td style={styles.td}>{ex.sets}</td>
                    <td style={{ ...styles.td, color: "#a78bfa" }}>
                      {ex.reps}
                    </td>
                    <td style={{ ...styles.td, color: "#888" }}>{ex.rest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Weekly Overview */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              📆 WEEKLY OVERVIEW
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Day</th>
                  <th style={styles.th}>Core</th>
                  <th style={styles.th}>Resistance</th>
                  <th style={styles.th}>Focus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    day: "Sun",
                    core: "Light",
                    resistance: "Rest",
                    focus: "🧘 Recovery",
                    color: "#888",
                  },
                  {
                    day: "Mon",
                    core: "Full",
                    resistance: "Legs",
                    focus: "🦵 Lower Body",
                    color: "#00d4aa",
                  },
                  {
                    day: "Tue",
                    core: "Full",
                    resistance: "Push",
                    focus: "💪 Upper Push",
                    color: "#4facfe",
                  },
                  {
                    day: "Wed",
                    core: "Full",
                    resistance: "Legs",
                    focus: "🦵 Lower Body",
                    color: "#00d4aa",
                  },
                  {
                    day: "Thu",
                    core: "Full",
                    resistance: "Pull",
                    focus: "🔙 Upper Pull",
                    color: "#f5576c",
                  },
                  {
                    day: "Fri",
                    core: "Full",
                    resistance: "Legs",
                    focus: "🦵 Lower Body",
                    color: "#00d4aa",
                  },
                  {
                    day: "Sat",
                    core: "Challenge",
                    resistance: "Full",
                    focus: "🔥 Full Body",
                    color: "#fbbf24",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background:
                        i === todayDayOfWeek
                          ? "rgba(0,212,170,0.1)"
                          : "transparent",
                    }}
                  >
                    <td
                      style={{
                        ...styles.td,
                        fontWeight: i === todayDayOfWeek ? "700" : "400",
                        color: i === todayDayOfWeek ? "#00d4aa" : "#fff",
                      }}
                    >
                      {row.day} {i === todayDayOfWeek && "👈"}
                    </td>
                    <td style={styles.td}>{row.core}</td>
                    <td style={styles.td}>{row.resistance}</td>
                    <td style={{ ...styles.td, color: row.color }}>
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* REPORTS TAB */}
      {activeTab === "reports" && (
        <>
          {/* Key Numbers */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              🔢 KEY NUMBERS FOR YOUR GOALS
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Metric</th>
                  <th style={styles.th}>Current</th>
                  <th style={styles.th}>6-Pack Goal</th>
                  <th style={styles.th}>Remission Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Weight</td>
                  <td style={{ ...styles.td, fontWeight: "700" }}>
                    {currentWeight} lbs
                  </td>
                  <td style={{ ...styles.td, color: "#4facfe" }}>170 lbs</td>
                  <td style={{ ...styles.td, color: "#00d4aa" }}>
                    160-165 lbs
                  </td>
                </tr>
                <tr>
                  <td style={styles.td}>Body Fat %</td>
                  <td style={{ ...styles.td, fontWeight: "700" }}>
                    {estimatedBodyFat}%
                  </td>
                  <td style={{ ...styles.td, color: "#4facfe" }}>10-12%</td>
                  <td style={{ ...styles.td, color: "#00d4aa" }}>12-15%</td>
                </tr>
                <tr>
                  <td style={styles.td}>A1C</td>
                  <td style={{ ...styles.td, fontWeight: "700" }}>
                    {projectedA1C}%
                  </td>
                  <td style={{ ...styles.td, color: "#4facfe" }}>N/A</td>
                  <td style={{ ...styles.td, color: "#00d4aa" }}>&lt; 5.7%</td>
                </tr>
                <tr>
                  <td style={styles.td}>Fasting Glucose</td>
                  <td style={{ ...styles.td, fontWeight: "700" }}>
                    {projectedGlucose} mg/dL
                  </td>
                  <td style={{ ...styles.td, color: "#4facfe" }}>N/A</td>
                  <td style={{ ...styles.td, color: "#00d4aa" }}>
                    &lt; 100 mg/dL
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Milestones Report */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              🏁 MILESTONE TRACKER
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Milestone</th>
                  <th style={styles.th}>Weight</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "5 lbs lost", target: 205, emoji: "🎯" },
                  { name: "10 lbs lost", target: 200, emoji: "💪" },
                  { name: "15 lbs lost", target: 195, emoji: "🔥" },
                  { name: "20 lbs lost", target: 190, emoji: "⭐" },
                  { name: "25 lbs lost", target: 185, emoji: "🌟" },
                  { name: "30 lbs lost", target: 180, emoji: "💫" },
                  { name: "6-Pack Zone", target: 170, emoji: "💪" },
                  { name: "Remission Zone", target: 165, emoji: "🩺" },
                  { name: "Ultimate Goal", target: 160, emoji: "🏆" },
                ].map((milestone, i) => {
                  const achieved = currentWeight <= milestone.target;
                  return (
                    <tr key={i}>
                      <td style={styles.td}>
                        {milestone.emoji} {milestone.name}
                      </td>
                      <td style={styles.td}>{milestone.target} lbs</td>
                      <td
                        style={{
                          ...styles.td,
                          color: achieved ? "#00d4aa" : "#888",
                        }}
                      >
                        {achieved
                          ? "✅ ACHIEVED"
                          : `${(currentWeight - milestone.target).toFixed(
                              1
                            )} lbs to go`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Timeline Projections */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              📅 PROJECTED TIMELINE
            </h3>
            <p
              style={{
                color: "#888",
                fontSize: "0.8rem",
                marginBottom: "12px",
              }}
            >
              Based on your current rate of {avgWeeklyLoss.toFixed(2)} lbs/week
            </p>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Goal</th>
                  <th style={styles.th}>Target Weight</th>
                  <th style={styles.th}>Weeks Away</th>
                  <th style={styles.th}>Est. Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "💪 6-Pack Visible",
                    weight: 170,
                    weeks: weeksToSixPack,
                    color: "#4facfe",
                  },
                  {
                    name: "🩺 Diabetes Remission",
                    weight: 165,
                    weeks: weeksToRemission,
                    color: "#00d4aa",
                  },
                  {
                    name: "🏆 Ultimate Freedom",
                    weight: 160,
                    weeks: weeksToUltimate,
                    color: "#fbbf24",
                  },
                ].map((goal, i) => {
                  const estDate = new Date();
                  estDate.setDate(
                    estDate.getDate() +
                      (typeof goal.weeks === "number" ? goal.weeks * 7 : 365)
                  );
                  return (
                    <tr key={i}>
                      <td style={{ ...styles.td, color: goal.color }}>
                        {goal.name}
                      </td>
                      <td style={styles.td}>{goal.weight} lbs</td>
                      <td style={{ ...styles.td, fontWeight: "700" }}>
                        {goal.weeks} weeks
                      </td>
                      <td style={{ ...styles.td, color: "#888" }}>
                        {typeof goal.weeks === "number"
                          ? estDate.toLocaleDateString()
                          : "TBD"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Health Projections */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              🩺 HEALTH PROJECTIONS BY WEIGHT
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Weight</th>
                  <th style={styles.th}>Est. A1C</th>
                  <th style={styles.th}>Est. Glucose</th>
                  <th style={styles.th}>Est. Body Fat</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[210, 200, 190, 180, 170, 165, 160].map((w, i) => {
                  const a1c = Math.max(
                    5.0,
                    11.5 - (210 - w) * a1cPerPound
                  ).toFixed(1);
                  const glucose = Math.max(
                    85,
                    Math.round(184 - (210 - w) * glucosePerPound)
                  );
                  const bf = (((w - estimatedLeanMass) / w) * 100).toFixed(1);
                  const isCurrent = Math.abs(w - currentWeight) < 2;
                  return (
                    <tr
                      key={i}
                      style={{
                        background: isCurrent
                          ? "rgba(0,212,170,0.1)"
                          : "transparent",
                      }}
                    >
                      <td
                        style={{
                          ...styles.td,
                          fontWeight: isCurrent ? "700" : "400",
                          color: isCurrent ? "#00d4aa" : "#fff",
                        }}
                      >
                        {w} lbs {isCurrent && "👈"}
                      </td>
                      <td
                        style={{
                          ...styles.td,
                          color:
                            parseFloat(a1c) < 6.5
                              ? "#00d4aa"
                              : parseFloat(a1c) < 7
                              ? "#fbbf24"
                              : "#f5576c",
                        }}
                      >
                        {a1c}%
                      </td>
                      <td
                        style={{
                          ...styles.td,
                          color:
                            glucose < 100
                              ? "#00d4aa"
                              : glucose < 126
                              ? "#fbbf24"
                              : "#f5576c",
                        }}
                      >
                        {glucose} mg/dL
                      </td>
                      <td
                        style={{
                          ...styles.td,
                          color: parseFloat(bf) < 15 ? "#4facfe" : "#888",
                        }}
                      >
                        {bf}%
                      </td>
                      <td style={{ ...styles.td, fontSize: "0.75rem" }}>
                        {w === 210 && "🔴 Starting"}
                        {w === 200 && "🟠 Progress"}
                        {w === 190 && "🟡 Improving"}
                        {w === 180 && "🟢 Good"}
                        {w === 170 && "💪 6-Pack"}
                        {w === 165 && "🩺 Remission"}
                        {w === 160 && "🏆 Ultimate"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Rules Summary */}
          <div style={styles.card}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "0.9rem",
                color: "#00d4aa",
              }}
            >
              📜 THE RULES (NON-NEGOTIABLE)
            </h3>
            <table style={styles.table}>
              <tbody>
                {[
                  {
                    rule: "Carbs per day",
                    value: "< 20g (zero-carb)",
                    color: "#f5576c",
                  },
                  {
                    rule: "Protein per day",
                    value: "100g+ minimum",
                    color: "#00d4aa",
                  },
                  {
                    rule: "Eating window",
                    value: "12 PM - 6 PM (6 hours)",
                    color: "#4facfe",
                  },
                  {
                    rule: "Fasting window",
                    value: "6 PM - 12 PM (18 hours)",
                    color: "#fbbf24",
                  },
                  {
                    rule: "Stomach vacuum",
                    value: "2x daily (AM + PM)",
                    color: "#f093fb",
                  },
                  {
                    rule: "Core workout",
                    value: "6 days/week",
                    color: "#4facfe",
                  },
                  {
                    rule: "Resistance training",
                    value: "6 days/week (bodyweight)",
                    color: "#00d4aa",
                  },
                  {
                    rule: "Metformin",
                    value: "With each meal (until remission)",
                    color: "#888",
                  },
                  {
                    rule: "Weigh-in",
                    value: "Weekly (same day/time)",
                    color: "#fbbf24",
                  },
                ].map((item, i) => (
                  <tr key={i}>
                    <td style={styles.td}>{item.rule}</td>
                    <td
                      style={{
                        ...styles.td,
                        textAlign: "right",
                        fontWeight: "700",
                        color: item.color,
                      }}
                    >
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "20px", marginTop: "10px" }}>
        <p
          style={{
            fontSize: "0.9rem",
            fontWeight: "800",
            background: "linear-gradient(90deg, #00d4aa, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ZERO CARBS • 18:6 FASTING • METFORMIN FREEDOM
        </p>
        <p style={{ color: "#444", fontSize: "0.75rem", marginTop: "5px" }}>
          Every day closer to 160 lbs is a day closer to freedom.
        </p>
      </div>
    </div>
  );
};

export default DiabetesReversalTracker;
