"use client";

import React from "react";

interface BloodPressureCategory {
  category: string;
  systolic: string;
  connector: string;
  diastolic: string;
  color: string;
  textColor: string;
}

const categories: BloodPressureCategory[] = [
  {
    category: "NORMAL",
    systolic: "LESS THAN 120",
    connector: "and",
    diastolic: "LESS THAN 80",
    color: "#2ecc71", // Green
    textColor: "#ffffff",
  },
  {
    category: "ELEVATED",
    systolic: "120–129",
    connector: "and",
    diastolic: "LESS THAN 80",
    color: "#f1c40f", // Yellow
    textColor: "#000000",
  },
  {
    category: "HIGH BLOOD PRESSURE\n(HYPERTENSION) STAGE 1",
    systolic: "130–139",
    connector: "or",
    diastolic: "80–89",
    color: "#e67e22", // Orange
    textColor: "#ffffff",
  },
  {
    category: "HIGH BLOOD PRESSURE\n(HYPERTENSION) STAGE 2",
    systolic: "140 OR HIGHER",
    connector: "or",
    diastolic: "90 OR HIGHER",
    color: "#e74c3c", // Red
    textColor: "#ffffff",
  },
  {
    category: "HYPERTENSIVE CRISIS\nConsult your doctor immediately",
    systolic: "HIGHER THAN 180",
    connector: "and/or",
    diastolic: "HIGHER THAN 120",
    color: "#c0392b", // Dark Red
    textColor: "#ffffff",
  },
];

export default function BloodPressureChart() {
  return (
    <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#c0392b] to-[#e74c3c] p-4">
        <h3 className="text-xl font-bold text-white text-center tracking-wide">
          BLOOD PRESSURE CATEGORIES
        </h3>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-4 bg-white/10 border-b border-white/20">
        <div className="p-3 text-center border-r border-white/20">
          <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            Blood Pressure
          </p>
          <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            Category
          </p>
        </div>
        <div className="p-3 text-center border-r border-white/20">
          <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            Systolic
          </p>
          <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            mm Hg (upper #)
          </p>
        </div>
        <div className="p-3 text-center border-r border-white/20">
          <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            &nbsp;
          </p>
        </div>
        <div className="p-3 text-center">
          <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            Diastolic
          </p>
          <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
            mm Hg (lower #)
          </p>
        </div>
      </div>

      {/* Categories */}
      {categories.map((cat, index) => (
        <div
          key={index}
          className="grid grid-cols-4 border-b border-white/10 last:border-b-0"
          style={{ backgroundColor: cat.color }}
        >
          <div
            className="p-3 flex items-center justify-center border-r border-white/20"
            style={{ color: cat.textColor }}
          >
            <p className="text-xs font-bold text-center whitespace-pre-line leading-tight">
              {cat.category}
            </p>
          </div>
          <div
            className="p-3 flex items-center justify-center border-r border-white/20"
            style={{ color: cat.textColor }}
          >
            <p className="text-sm font-bold text-center">{cat.systolic}</p>
          </div>
          <div
            className="p-3 flex items-center justify-center border-r border-white/20"
            style={{ color: cat.textColor }}
          >
            <p className="text-xs font-semibold text-center italic">
              {cat.connector}
            </p>
          </div>
          <div
            className="p-3 flex items-center justify-center"
            style={{ color: cat.textColor }}
          >
            <p className="text-sm font-bold text-center">{cat.diastolic}</p>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="bg-white/5 p-3 border-t border-white/10">
        <p className="text-xs text-gray-400 text-center">
          Source: American Heart Association (AHA) Guidelines
        </p>
      </div>
    </div>
  );
}
