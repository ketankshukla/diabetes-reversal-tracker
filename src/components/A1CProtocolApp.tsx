"use client";

import React, { useState } from "react";

export default function A1CProtocolApp() {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);

  const sections = [
    { id: "overview", label: "📊 Overview", emoji: "📊" },
    { id: "meals", label: "🍽️ Meals", emoji: "🍽️" },
    { id: "restaurants", label: "🏪 Restaurants", emoji: "🏪" },
    { id: "avoid", label: "🚫 Avoid", emoji: "🚫" },
    { id: "berries", label: "🫐 Berries", emoji: "🫐" },
    { id: "metformin", label: "💊 Metformin", emoji: "💊" },
    { id: "supplements", label: "💪 Supplements", emoji: "💪" },
    { id: "schedule", label: "📅 Daily Schedule", emoji: "📅" },
    { id: "rotation", label: "🔄 Weekly Rotation", emoji: "🔄" },
    { id: "slip", label: "🔧 Slip Recovery", emoji: "🔧" },
  ];

  const noonOptions = [
    {
      id: "eggs-cheese",
      title: "Eggs + Cheese + Berries",
      emoji: "🥚🧀🫐",
      items: [
        { name: "2 eggs", protein: "12g", fat: "10g", carbs: "0g" },
        {
          name: "1 oz cheddar (thumb-sized)",
          protein: "7g",
          fat: "9g",
          carbs: "<1g",
        },
        {
          name: "1 cup berries (fist-sized)",
          protein: "1g",
          fat: "0g",
          carbs: "14g",
        },
      ],
      totals: { protein: "20g", fat: "19g", carbs: "~15g" },
    },
    {
      id: "eggs-bacon",
      title: "Eggs + Bacon + Berries",
      emoji: "🥚🥓🫐",
      items: [
        { name: "2 eggs", protein: "12g", fat: "10g", carbs: "0g" },
        { name: "2 strips bacon", protein: "6g", fat: "8g", carbs: "0g" },
        { name: "1 cup berries", protein: "1g", fat: "0g", carbs: "14g" },
      ],
      totals: { protein: "19g", fat: "18g", carbs: "~14g" },
    },
    {
      id: "chicken-berries",
      title: "Chicken + Berries",
      emoji: "🍗🫐",
      items: [
        {
          name: "2-3 pc chicken (thigh/leg)",
          protein: "25-35g",
          fat: "12-18g",
          carbs: "0g",
        },
        { name: "1 cup berries", protein: "1g", fat: "0g", carbs: "14g" },
      ],
      totals: { protein: "26-36g", fat: "12-18g", carbs: "~14g" },
    },
    {
      id: "eggs-large",
      title: "Large Protein (No Berries)",
      emoji: "🥚🥚🥚🥚",
      items: [
        { name: "4 eggs", protein: "24g", fat: "20g", carbs: "0g" },
        { name: "1 oz cheese", protein: "7g", fat: "9g", carbs: "<1g" },
      ],
      totals: { protein: "31g", fat: "29g", carbs: "~1g" },
    },
  ];

  const dinnerOptions = [
    {
      name: "0.5 lb brisket (Abbey's)",
      protein: "~50g",
      fat: "~48-55g",
      carbs: "0g",
      emoji: "🥩",
    },
    {
      name: "7-8 pc El Pollo Loco",
      protein: "~75g",
      fat: "~40g",
      carbs: "0g",
      emoji: "🍗",
    },
    {
      name: "4 eggs + cheese",
      protein: "31g",
      fat: "29g",
      carbs: "<1g",
      emoji: "🥚",
    },
    {
      name: "6 oz steak",
      protein: "~42g",
      fat: "varies",
      carbs: "0g",
      emoji: "🥩",
    },
    {
      name: "0.5 lb ground beef patties",
      protein: "~40g",
      fat: "~30g",
      carbs: "0g",
      emoji: "🍔",
    },
    {
      name: "2 medium pork chops",
      protein: "~40g",
      fat: "~20g",
      carbs: "0g",
      emoji: "🍖",
    },
  ];

  const restaurants = [
    {
      name: "El Pollo Loco",
      emoji: "🐔",
      rating: "Best Option",
      color: "#10b981",
      orders: [
        {
          item: "Leg & thigh pieces (any qty)",
          carbs: "0g",
          note: "Just ask for pieces, no sides",
        },
        {
          item: "Add salsa (red or green)",
          carbs: "2-3g",
          note: "Fine to use",
        },
        { item: "Add jalapeños", carbs: "0g", note: "Free flavor" },
      ],
      avoid: [
        "Rice",
        "Beans",
        "Tortillas",
        "Mango habanero glaze",
        "Tortilla soup",
      ],
    },
    {
      name: "Chick-fil-A",
      emoji: "🐓",
      rating: "Limited Options",
      color: "#f59e0b",
      orders: [
        {
          item: "Grilled nuggets (8 or 12 ct)",
          carbs: "2-3g",
          note: "Only grilled works",
        },
        {
          item: "Grilled chicken filet (no bun)",
          carbs: "1-2g",
          note: "Ask for it plain",
        },
      ],
      avoid: ["All breaded chicken", "Hash browns", "Biscuits", "Wraps"],
    },
    {
      name: "Taquerias",
      emoji: "🌮",
      rating: "Great Option",
      color: "#10b981",
      orders: [
        {
          item: "Carne asada plate, meat only",
          carbs: "0g",
          note: "No tortillas/rice/beans",
        },
        { item: "Carnitas plate, meat only", carbs: "0g", note: "Same deal" },
        {
          item: "Pollo asado, meat only",
          carbs: "0-2g",
          note: "Slight marinade carbs",
        },
      ],
      avoid: ["Tortillas", "Rice", "Beans", "Chips"],
    },
    {
      name: "Other Fast Food",
      emoji: "🍔",
      rating: "Options Available",
      color: "#6366f1",
      orders: [
        {
          item: "In-N-Out: Protein style burger",
          carbs: "3-5g",
          note: "Lettuce wrap",
        },
        {
          item: "Five Guys: Bunless burger + bacon",
          carbs: "2-4g",
          note: "Bowl style",
        },
        {
          item: "Chipotle: Meat + salsa + cheese only",
          carbs: "3-5g",
          note: "NO rice/beans",
        },
        { item: "Costco: Rotisserie chicken", carbs: "0g", note: "$4.99" },
      ],
      avoid: ["Buns", "Fries", "Rice", "Beans", "Soda"],
    },
  ];

  const avoidFoods = [
    {
      food: "Potatoes (any form)",
      carbs: "35g+",
      reason: "Pure starch → glucose",
      emoji: "🥔",
    },
    { food: "Rice", carbs: "45g/cup", reason: "Pure starch", emoji: "🍚" },
    {
      food: "Bread/tortillas",
      carbs: "15-30g each",
      reason: "Starch",
      emoji: "🍞",
    },
    {
      food: "Cereal (any kind)",
      carbs: "35-45g/bowl",
      reason: "Sugar bomb",
      emoji: "🥣",
    },
    {
      food: "Pancakes/waffles",
      carbs: "45-60g",
      reason: "Flour = starch",
      emoji: "🥞",
    },
    { food: "Pasta", carbs: "40g/cup", reason: "Starch", emoji: "🍝" },
    { food: "Bananas", carbs: "27g", reason: "High sugar fruit", emoji: "🍌" },
    { food: "Grapes", carbs: "27g", reason: "Worst fruit", emoji: "🍇" },
    {
      food: "Orange juice",
      carbs: "26g/cup",
      reason: "Liquid sugar",
      emoji: "🍊",
    },
    {
      food: "Soda/sweet drinks",
      carbs: "40g+",
      reason: "Pure sugar",
      emoji: "🥤",
    },
  ];

  const berries = [
    {
      name: "Raspberries",
      carbs: "14g",
      sugar: "5g",
      verdict: "Best — most fiber",
      color: "#ec4899",
      emoji: "🫐",
    },
    {
      name: "Blackberries",
      carbs: "14g",
      sugar: "7g",
      verdict: "Great",
      color: "#7c3aed",
      emoji: "🫐",
    },
    {
      name: "Strawberries",
      carbs: "12g",
      sugar: "7g",
      verdict: "Great",
      color: "#ef4444",
      emoji: "🍓",
    },
    {
      name: "Blueberries",
      carbs: "21g",
      sugar: "15g",
      verdict: "Limit — highest sugar",
      color: "#3b82f6",
      emoji: "🫐",
    },
  ];

  const supplements = [
    {
      name: "Magnesium Glycinate",
      dose: "400mg",
      when: "Bedtime",
      why: "Kidney function, BP, sleep",
      emoji: "💊",
    },
    {
      name: "Omega-3 Fish Oil",
      dose: "2,000-3,000mg",
      when: "With meal",
      why: "Kidney protection, inflammation",
      emoji: "🐟",
    },
    {
      name: "Vitamin D3",
      dose: "2,000-4,000 IU",
      when: "With meal",
      why: "Diabetics often deficient",
      emoji: "☀️",
    },
    {
      name: "B12 (Methylcobalamin)",
      dose: "1,000mcg",
      when: "Any time",
      why: "Metformin depletes it",
      emoji: "💉",
    },
    {
      name: "CoQ10",
      dose: "100-200mg",
      when: "With meal",
      why: "Kidney protection",
      emoji: "❤️",
    },
  ];

  const dailySchedule = [
    {
      time: "5:00 AM",
      action: "Wake up",
      detail: "16-20 oz water",
      emoji: "🌅",
    },
    {
      time: "5AM - 12PM",
      action: "Fasting Window",
      detail: "Water, black coffee, plain tea OK",
      emoji: "⏳",
    },
    {
      time: "12:00 PM",
      action: "NOON MEAL",
      detail: "2 eggs + cheese + berries + Metformin",
      emoji: "🍽️",
      highlight: true,
    },
    {
      time: "12PM - 6PM",
      action: "Stay Hydrated",
      detail: "Water throughout",
      emoji: "💧",
    },
    {
      time: "6:00 PM",
      action: "DINNER",
      detail: "Protein only + Metformin",
      emoji: "🥩",
      highlight: true,
    },
    {
      time: "6PM onwards",
      action: "18-Hour Fast Begins",
      detail: "Until noon tomorrow",
      emoji: "🌙",
    },
    {
      time: "Bedtime",
      action: "Supplements",
      detail: "Magnesium 400mg",
      emoji: "💊",
    },
  ];

  const weeklyRotation = [
    {
      day: "Monday",
      noon: "Eggs + cheese + berries",
      dinner: "El Pollo Loco chicken",
      noonEmoji: "🥚",
      dinnerEmoji: "🍗",
    },
    {
      day: "Tuesday",
      noon: "Eggs + bacon + berries",
      dinner: "Carne asada (taqueria)",
      noonEmoji: "🥓",
      dinnerEmoji: "🥩",
    },
    {
      day: "Wednesday",
      noon: "Leftover chicken + berries",
      dinner: "Beef patties + cheese",
      noonEmoji: "🍗",
      dinnerEmoji: "🍔",
    },
    {
      day: "Thursday",
      noon: "Eggs + cheese + berries",
      dinner: "Brisket (Abbey's)",
      noonEmoji: "🥚",
      dinnerEmoji: "🥩",
    },
    {
      day: "Friday",
      noon: "Grilled nuggets + berries",
      dinner: "Steak",
      noonEmoji: "🐔",
      dinnerEmoji: "🥩",
    },
    {
      day: "Saturday",
      noon: "Eggs + bacon + berries",
      dinner: "Bunless burger",
      noonEmoji: "🥓",
      dinnerEmoji: "🍔",
    },
    {
      day: "Sunday",
      noon: "Eggs + cheese + berries",
      dinner: "Rotisserie chicken",
      noonEmoji: "🥚",
      dinnerEmoji: "🍗",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        fontFamily: "'Nunito', 'Segoe UI', sans-serif",
        color: "#f1f5f9",
        padding: "0",
        margin: "0",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .card {
          animation: fadeIn 0.4s ease-out;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .nav-btn:hover {
          transform: scale(1.05);
        }

        .nav-btn.active {
          animation: pulse 2s infinite;
        }

        .meal-card:hover {
          border-color: #f97316;
        }

        .progress-bar {
          animation: slideIn 0.8s ease-out;
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)",
          padding: "30px 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.5,
          }}
        />
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "2.5rem",
            fontWeight: 800,
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            position: "relative",
          }}
        >
          🎯 A1C Lowering Protocol
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            margin: "10px 0 0 0",
            opacity: 0.95,
            fontWeight: 600,
            position: "relative",
          }}
        >
          Your 3-Month Plan to Better Health
        </p>
      </div>

      {/* Stats Bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #1e293b 0%, #334155 100%)",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          borderBottom: "1px solid #475569",
        }}
      >
        {[
          {
            label: "Starting A1C",
            value: "11.5%",
            emoji: "📍",
            color: "#ef4444",
          },
          {
            label: "Target A1C",
            value: "7.5-8.5%",
            emoji: "🎯",
            color: "#22c55e",
          },
          {
            label: "Metformin",
            value: "2000mg/day",
            emoji: "💊",
            color: "#8b5cf6",
          },
          {
            label: "Daily Carbs",
            value: "15-20g max",
            emoji: "📊",
            color: "#f97316",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: "#0f172a",
              borderRadius: "12px",
              padding: "12px 20px",
              textAlign: "center",
              minWidth: "140px",
              border: `2px solid ${stat.color}40`,
              boxShadow: `0 4px 15px ${stat.color}20`,
            }}
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>
              {stat.emoji}
            </div>
            <div
              style={{ color: stat.color, fontWeight: 700, fontSize: "1.2rem" }}
            >
              {stat.value}
            </div>
            <div
              style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 600 }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* A1C Progress Visual */}
      <div
        className="progress-bar"
        style={{
          background: "#1e293b",
          padding: "20px",
          margin: "20px",
          borderRadius: "16px",
          border: "1px solid #334155",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontWeight: 700, color: "#ef4444" }}>
            🔴 11.5% (Jan)
          </span>
          <span style={{ fontWeight: 700, color: "#22c55e" }}>
            🟢 7.5% Target (Apr)
          </span>
        </div>
        <div
          style={{
            height: "24px",
            background: "#0f172a",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "70%",
              background:
                "linear-gradient(90deg, #ef4444 0%, #f97316 50%, #22c55e 100%)",
              borderRadius: "12px",
              transition: "width 1s ease-out",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "70%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "#fff",
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            YOUR JOURNEY →
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "8px",
            color: "#94a3b8",
            fontSize: "0.85rem",
          }}
        >
          Projected drop:{" "}
          <span style={{ color: "#22c55e", fontWeight: 700 }}>3-4 points</span>{" "}
          in 3 months
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px",
          padding: "10px 20px 20px",
        }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-btn ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => setActiveSection(section.id)}
            style={{
              background:
                activeSection === section.id
                  ? "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
                  : "#1e293b",
              border:
                activeSection === section.id ? "none" : "1px solid #475569",
              borderRadius: "20px",
              padding: "8px 16px",
              color: "#fff",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow:
                activeSection === section.id
                  ? "0 4px 15px rgba(249, 115, 22, 0.4)"
                  : "none",
            }}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div style={{ padding: "0 20px 40px" }}>
        {/* Overview */}
        {activeSection === "overview" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
              transition: "all 0.3s ease",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#f97316",
                marginTop: 0,
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              📊 Your Protocol Overview
            </h2>

            <div
              style={{
                background: "#0f172a",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #22c55e40",
              }}
            >
              <h3
                style={{
                  color: "#22c55e",
                  margin: "0 0 15px 0",
                  fontSize: "1.1rem",
                }}
              >
                ✅ The Simple Version
              </h3>
              <div style={{ display: "grid", gap: "12px" }}>
                <div
                  style={{
                    background: "#1e293b",
                    padding: "15px",
                    borderRadius: "10px",
                    borderLeft: "4px solid #f97316",
                  }}
                >
                  <div
                    style={{
                      color: "#f97316",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    🌞 NOON (12pm)
                  </div>
                  <div style={{ color: "#e2e8f0" }}>
                    2 eggs + thumb-sized cheese + fist of berries + Metformin
                  </div>
                </div>
                <div
                  style={{
                    background: "#1e293b",
                    padding: "15px",
                    borderRadius: "10px",
                    borderLeft: "4px solid #8b5cf6",
                  }}
                >
                  <div
                    style={{
                      color: "#8b5cf6",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    🌙 DINNER (6pm)
                  </div>
                  <div style={{ color: "#e2e8f0" }}>
                    Protein only (rotate: chicken, beef, eggs) + Metformin
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "#0f172a",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #f9731640",
              }}
            >
              <h3
                style={{
                  color: "#f97316",
                  margin: "0 0 15px 0",
                  fontSize: "1.1rem",
                }}
              >
                ⏰ Eating Window
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem" }}>🍽️</div>
                  <div style={{ color: "#22c55e", fontWeight: 700 }}>
                    12pm - 6pm
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                    Eating Window
                  </div>
                </div>
                <div style={{ fontSize: "2rem", color: "#475569" }}>→</div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem" }}>⏳</div>
                  <div style={{ color: "#f97316", fontWeight: 700 }}>
                    18 Hours
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                    Fasting Window
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Meals */}
        {activeSection === "meals" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#f97316",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              🍽️ Meal Options
            </h2>

            {/* Noon Options */}
            <h3 style={{ color: "#fbbf24", marginBottom: "15px" }}>
              🌞 Noon Meal Options
            </h3>
            <div style={{ display: "grid", gap: "12px", marginBottom: "30px" }}>
              {noonOptions.map((option) => (
                <div
                  key={option.id}
                  className="meal-card"
                  onClick={() =>
                    setExpandedMeal(
                      expandedMeal === option.id ? null : option.id
                    )
                  }
                  style={{
                    background: "#0f172a",
                    borderRadius: "12px",
                    padding: "15px",
                    border: "2px solid #334155",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "1.2rem", marginRight: "10px" }}>
                        {option.emoji}
                      </span>
                      <span style={{ fontWeight: 700, color: "#e2e8f0" }}>
                        {option.title}
                      </span>
                    </div>
                    <div
                      style={{
                        background: "#22c55e20",
                        color: "#22c55e",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                      }}
                    >
                      {option.totals.carbs} carbs
                    </div>
                  </div>

                  {expandedMeal === option.id && (
                    <div
                      style={{
                        marginTop: "15px",
                        paddingTop: "15px",
                        borderTop: "1px solid #334155",
                      }}
                    >
                      <table style={{ width: "100%", fontSize: "0.85rem" }}>
                        <thead>
                          <tr style={{ color: "#94a3b8" }}>
                            <th style={{ textAlign: "left", padding: "5px 0" }}>
                              Item
                            </th>
                            <th style={{ textAlign: "right" }}>Protein</th>
                            <th style={{ textAlign: "right" }}>Fat</th>
                            <th style={{ textAlign: "right" }}>Carbs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {option.items.map((item, idx) => (
                            <tr key={idx} style={{ color: "#cbd5e1" }}>
                              <td style={{ padding: "5px 0" }}>{item.name}</td>
                              <td
                                style={{ textAlign: "right", color: "#60a5fa" }}
                              >
                                {item.protein}
                              </td>
                              <td
                                style={{ textAlign: "right", color: "#fbbf24" }}
                              >
                                {item.fat}
                              </td>
                              <td
                                style={{ textAlign: "right", color: "#f87171" }}
                              >
                                {item.carbs}
                              </td>
                            </tr>
                          ))}
                          <tr
                            style={{
                              fontWeight: 700,
                              color: "#fff",
                              borderTop: "1px solid #475569",
                            }}
                          >
                            <td style={{ paddingTop: "10px" }}>TOTAL</td>
                            <td
                              style={{
                                textAlign: "right",
                                paddingTop: "10px",
                                color: "#60a5fa",
                              }}
                            >
                              {option.totals.protein}
                            </td>
                            <td
                              style={{
                                textAlign: "right",
                                paddingTop: "10px",
                                color: "#fbbf24",
                              }}
                            >
                              {option.totals.fat}
                            </td>
                            <td
                              style={{
                                textAlign: "right",
                                paddingTop: "10px",
                                color: "#22c55e",
                              }}
                            >
                              {option.totals.carbs}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Dinner Options */}
            <h3 style={{ color: "#a78bfa", marginBottom: "15px" }}>
              🌙 Dinner Options (Protein Only)
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "12px",
              }}
            >
              {dinnerOptions.map((option, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#0f172a",
                    borderRadius: "12px",
                    padding: "15px",
                    border: "1px solid #334155",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
                    {option.emoji}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#e2e8f0",
                      marginBottom: "8px",
                    }}
                  >
                    {option.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                    <span style={{ color: "#60a5fa" }}>
                      {option.protein} protein
                    </span>
                    {" • "}
                    <span style={{ color: "#22c55e" }}>
                      {option.carbs} carbs
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Restaurants */}
        {activeSection === "restaurants" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#f97316",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              🏪 Restaurant Guide
            </h2>

            <div style={{ display: "grid", gap: "20px" }}>
              {restaurants.map((restaurant, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#0f172a",
                    borderRadius: "16px",
                    padding: "20px",
                    border: `2px solid ${restaurant.color}40`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>{restaurant.emoji}</span>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "1.2rem",
                          color: "#e2e8f0",
                        }}
                      >
                        {restaurant.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: restaurant.color,
                          fontWeight: 600,
                        }}
                      >
                        {restaurant.rating}
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: "15px" }}>
                    <div
                      style={{
                        color: "#22c55e",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        marginBottom: "8px",
                      }}
                    >
                      ✅ ORDER THESE:
                    </div>
                    {restaurant.orders.map((order, oidx) => (
                      <div
                        key={oidx}
                        style={{
                          background: "#1e293b",
                          padding: "10px 12px",
                          borderRadius: "8px",
                          marginBottom: "6px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        <div>
                          <span style={{ color: "#e2e8f0", fontWeight: 600 }}>
                            {order.item}
                          </span>
                          <span
                            style={{
                              color: "#64748b",
                              fontSize: "0.8rem",
                              marginLeft: "8px",
                            }}
                          >
                            ({order.note})
                          </span>
                        </div>
                        <span
                          style={{
                            background: "#22c55e20",
                            color: "#22c55e",
                            padding: "2px 8px",
                            borderRadius: "10px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                          }}
                        >
                          {order.carbs}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div
                      style={{
                        color: "#ef4444",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        marginBottom: "8px",
                      }}
                    >
                      🚫 AVOID:
                    </div>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {restaurant.avoid.map((item, aidx) => (
                        <span
                          key={aidx}
                          style={{
                            background: "#ef444420",
                            color: "#f87171",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Avoid */}
        {activeSection === "avoid" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#ef4444",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              🚫 Foods to Avoid Completely
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "12px",
              }}
            >
              {avoidFoods.map((food, idx) => (
                <div
                  key={idx}
                  style={{
                    background:
                      "linear-gradient(135deg, #450a0a 0%, #1e293b 100%)",
                    borderRadius: "12px",
                    padding: "15px",
                    border: "1px solid #ef444440",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "8px" }}>
                    {food.emoji}
                  </div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#fca5a5",
                      marginBottom: "4px",
                    }}
                  >
                    {food.food}
                  </div>
                  <div
                    style={{
                      color: "#ef4444",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      marginBottom: "4px",
                    }}
                  >
                    {food.carbs}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                    {food.reason}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Berries */}
        {activeSection === "berries" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#ec4899",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              🫐 Berry Guide (Best to Limit)
            </h2>

            <div
              style={{
                background: "#0f172a",
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "20px",
                border: "1px solid #475569",
              }}
            >
              <p style={{ margin: 0, color: "#94a3b8" }}>
                <span style={{ fontSize: "1.2rem" }}>✊</span>{" "}
                <strong style={{ color: "#e2e8f0" }}>
                  1 cup = fist-sized handful
                </strong>{" "}
                — that's your daily max
              </p>
            </div>

            <div style={{ display: "grid", gap: "12px" }}>
              {berries.map((berry, idx) => (
                <div
                  key={idx}
                  style={{
                    background: `linear-gradient(90deg, ${berry.color}20 0%, #0f172a 100%)`,
                    borderRadius: "12px",
                    padding: "15px 20px",
                    border: `2px solid ${berry.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span style={{ fontSize: "1.5rem" }}>{berry.emoji}</span>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: berry.color,
                          fontSize: "1.1rem",
                        }}
                      >
                        {berry.name}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                        {berry.verdict}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ color: "#e2e8f0", fontWeight: 700 }}>
                        {berry.carbs}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "#64748b" }}>
                        carbs/cup
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ color: "#fbbf24", fontWeight: 700 }}>
                        {berry.sugar}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "#64748b" }}>
                        sugar
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metformin */}
        {activeSection === "metformin" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#8b5cf6",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              💊 Metformin Protocol
            </h2>

            <div
              style={{
                background: "#0f172a",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #8b5cf640",
              }}
            >
              <h3 style={{ color: "#a78bfa", margin: "0 0 15px 0" }}>
                Your Dosage
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    background: "#1e293b",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#f97316",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    🌞 12:00 PM
                  </div>
                  <div
                    style={{
                      color: "#e2e8f0",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                    }}
                  >
                    1000mg HCL
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                    with noon meal
                  </div>
                </div>
                <div
                  style={{
                    background: "#1e293b",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#8b5cf6",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    🌙 6:00 PM
                  </div>
                  <div
                    style={{
                      color: "#e2e8f0",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                    }}
                  >
                    1000mg HCL
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.8rem" }}>
                    with dinner
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  padding: "10px",
                  background: "#8b5cf620",
                  borderRadius: "8px",
                }}
              >
                <span style={{ color: "#a78bfa", fontWeight: 700 }}>
                  Total: 2000mg/day
                </span>
                <span style={{ color: "#94a3b8" }}> (Maximum dose)</span>
              </div>
            </div>

            <div
              style={{
                background: "#0f172a",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #fbbf2440",
              }}
            >
              <h3 style={{ color: "#fbbf24", margin: "0 0 15px 0" }}>
                ⚠️ GI Survival Tips (Next 2-3 Weeks)
              </h3>
              <div style={{ display: "grid", gap: "10px" }}>
                {[
                  {
                    tip: "Take pill MID-MEAL, not before or after",
                    emoji: "🍽️",
                  },
                  {
                    tip: "Leaner protein = less nausea (chicken > brisket)",
                    emoji: "🍗",
                  },
                  { tip: "Know where bathrooms are", emoji: "🚻" },
                  { tip: "Don't trust a fart", emoji: "💨" },
                  {
                    tip: "Stay hydrated — diarrhea depletes fluids",
                    emoji: "💧",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#1e293b",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{item.emoji}</span>
                    <span style={{ color: "#e2e8f0" }}>{item.tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(135deg, #22c55e20 0%, #0f172a 100%)",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #22c55e40",
              }}
            >
              <h3 style={{ color: "#22c55e", margin: "0 0 10px 0" }}>
                📅 GI Adjustment Timeline
              </h3>
              <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                <div style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#ef4444" }}>Days 1-5:</strong> Worst
                  of it — diarrhea, urgency
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#f97316" }}>Days 5-10:</strong>{" "}
                  Starting to calm down
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#fbbf24" }}>Days 10-14:</strong>{" "}
                  Noticeably better
                </div>
                <div>
                  <strong style={{ color: "#22c55e" }}>Week 3-4:</strong> Should
                  be mostly normal ✓
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supplements */}
        {activeSection === "supplements" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#22c55e",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              💪 Daily Supplements
            </h2>

            <div style={{ display: "grid", gap: "12px" }}>
              {supplements.map((supp, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#0f172a",
                    borderRadius: "12px",
                    padding: "15px 20px",
                    border: "1px solid #334155",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>{supp.emoji}</span>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#e2e8f0",
                        marginBottom: "4px",
                      }}
                    >
                      {supp.name}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                      {supp.why}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#22c55e", fontWeight: 700 }}>
                      {supp.dose}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                      {supp.when}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "20px",
                background: "#ef444420",
                padding: "15px",
                borderRadius: "12px",
                border: "1px solid #ef444440",
              }}
            >
              <p style={{ margin: 0, color: "#fca5a5" }}>
                <strong>⚠️ Important:</strong> Use regular salt, NOT Lite Salt —
                it's potassium, and yours is already elevated (5.7 mmol/L)
              </p>
            </div>
          </div>
        )}

        {/* Daily Schedule */}
        {activeSection === "schedule" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#06b6d4",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              📅 Daily Schedule
            </h2>

            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "24px",
                  top: "30px",
                  bottom: "30px",
                  width: "3px",
                  background:
                    "linear-gradient(180deg, #06b6d4 0%, #8b5cf6 50%, #1e293b 100%)",
                  borderRadius: "2px",
                }}
              />

              <div style={{ display: "grid", gap: "8px" }}>
                {dailySchedule.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "12px 15px",
                      background: item.highlight
                        ? "linear-gradient(90deg, #f9731630 0%, #0f172a 100%)"
                        : "#0f172a",
                      borderRadius: "12px",
                      border: item.highlight
                        ? "2px solid #f97316"
                        : "1px solid #334155",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        background: item.highlight ? "#f97316" : "#1e293b",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        border: "3px solid #0f172a",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {item.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          color: item.highlight ? "#f97316" : "#06b6d4",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                        }}
                      >
                        {item.time}
                      </div>
                      <div style={{ color: "#e2e8f0", fontWeight: 600 }}>
                        {item.action}
                      </div>
                      <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Weekly Rotation */}
        {activeSection === "rotation" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#f97316",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              🔄 Weekly Rotation (Avoid Boredom!)
            </h2>

            <div style={{ display: "grid", gap: "10px" }}>
              {weeklyRotation.map((day, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#0f172a",
                    borderRadius: "12px",
                    padding: "15px",
                    border: "1px solid #334155",
                    display: "grid",
                    gridTemplateColumns: "100px 1fr 1fr",
                    gap: "15px",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color:
                        idx === new Date().getDay() - 1 ? "#f97316" : "#e2e8f0",
                      fontSize:
                        idx === new Date().getDay() - 1 ? "1.1rem" : "1rem",
                    }}
                  >
                    {day.day}
                  </div>
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #fbbf24",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#fbbf24",
                        fontWeight: 600,
                      }}
                    >
                      NOON {day.noonEmoji}
                    </div>
                    <div style={{ color: "#e2e8f0", fontSize: "0.85rem" }}>
                      {day.noon}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      borderLeft: "3px solid #8b5cf6",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#8b5cf6",
                        fontWeight: 600,
                      }}
                    >
                      DINNER {day.dinnerEmoji}
                    </div>
                    <div style={{ color: "#e2e8f0", fontSize: "0.85rem" }}>
                      {day.dinner}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slip Recovery */}
        {activeSection === "slip" && (
          <div
            className="card"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #334155",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                color: "#fbbf24",
                marginTop: 0,
                fontSize: "1.5rem",
              }}
            >
              🔧 Slip Day Recovery Protocol
            </h2>

            <div
              style={{
                background:
                  "linear-gradient(135deg, #fbbf2420 0%, #0f172a 100%)",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #fbbf2440",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#fef3c7",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                }}
              >
                ✨ The goal is 85-90% compliance, not perfection.
              </p>
            </div>

            <h3 style={{ color: "#e2e8f0", marginBottom: "15px" }}>
              If You Slip (potato, cereal, pancakes, etc.):
            </h3>
            <div style={{ display: "grid", gap: "10px", marginBottom: "25px" }}>
              {[
                { step: "Don't spiral — one slip ≠ failure", emoji: "🛑" },
                { step: "Next meal: protein only, zero carbs", emoji: "🥩" },
                {
                  step: 'Don\'t "punish" yourself with extended fasting',
                  emoji: "❌",
                },
                { step: "Get back to the protocol immediately", emoji: "✅" },
                {
                  step: "Takes ~12-16 hours to clear the glucose spike",
                  emoji: "⏰",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#0f172a",
                    padding: "12px 15px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    border: "1px solid #334155",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.3rem",
                      width: "35px",
                      height: "35px",
                      background: "#1e293b",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.emoji}
                  </span>
                  <span style={{ color: "#e2e8f0" }}>{item.step}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#ef444420",
                borderRadius: "12px",
                padding: "20px",
                border: "1px solid #ef444440",
              }}
            >
              <h3 style={{ color: "#fca5a5", margin: "0 0 15px 0" }}>
                🚨 Warning Signs — Contact Doctor If:
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "8px",
                }}
              >
                {[
                  "Swelling in ankles, feet, or face",
                  "Foamy or bubbly urine",
                  "Blood in urine",
                  "Irregular heartbeat",
                  "Persistent fatigue",
                  "Diarrhea after 3-4 weeks",
                ].map((warning, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#1e293b",
                      padding: "10px",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      color: "#fca5a5",
                    }}
                  >
                    ⚠️ {warning}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          background: "#0f172a",
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #334155",
        }}
      >
        <p style={{ margin: 0, color: "#64748b", fontSize: "0.85rem" }}>
          📅 Created: January 31, 2026 • 🎯 Next A1C Test: April 2026
        </p>
        <p style={{ margin: "8px 0 0 0", color: "#22c55e", fontWeight: 700 }}>
          Goal: 11.5% → 7.5-8.5% 💪
        </p>
      </div>
    </div>
  );
}
