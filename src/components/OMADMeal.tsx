"use client";

import React, { useState } from "react";

type TabType = "meal" | "metformin" | "bp" | "microwave" | "targets";

export default function OMADMeal() {
  const [showSwap, setShowSwap] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("meal");

  const tabs: { id: TabType; label: string; emoji: string }[] = [
    { id: "meal", label: "Meal", emoji: "🍽️" },
    { id: "metformin", label: "Meds", emoji: "💊" },
    { id: "bp", label: "BP", emoji: "❤️" },
    { id: "microwave", label: "Heat", emoji: "🔥" },
    { id: "targets", label: "Targets", emoji: "🎯" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        fontFamily: "'Segoe UI', 'Nunito', sans-serif",
        color: "#f1f5f9",
        padding: "0",
        margin: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%)",
          padding: "20px 20px 15px",
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
            fontSize: "1.6rem",
            fontWeight: 800,
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            position: "relative",
          }}
        >
          🍽️ OMAD Dinner + Metformin ER
        </h1>
        <p
          style={{
            fontSize: "0.85rem",
            margin: "8px 0 0 0",
            opacity: 0.95,
            fontWeight: 600,
            position: "relative",
          }}
        >
          Low-Sodium • High-Protein • Final Protocol
        </p>
      </div>

      {/* Tab Navigation */}
      <div
        style={{
          background: "#0f172a",
          padding: "10px 10px 0",
          display: "flex",
          justifyContent: "center",
          gap: "4px",
          borderBottom: "1px solid #334155",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? "#1e293b" : "transparent",
              border: "none",
              borderRadius: "8px 8px 0 0",
              padding: "10px 12px",
              color: activeTab === tab.id ? "#10b981" : "#64748b",
              fontSize: "0.75rem",
              fontWeight: activeTab === tab.id ? 700 : 500,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2px",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid #10b981"
                  : "2px solid transparent",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>{tab.emoji}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        {/* MEAL TAB */}
        {activeTab === "meal" && (
          <>
            {/* Main Dinner Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                border: "3px solid #10b981",
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
              }}
            >
              <div
                style={{
                  background: "#fbbf24",
                  color: "#0f172a",
                  padding: "5px 14px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "inline-block",
                  marginBottom: "12px",
                }}
              >
                ⭐ DAILY DEFAULT
              </div>
              <h2
                style={{
                  color: "#fff",
                  margin: "0 0 20px 0",
                  fontSize: "1.4rem",
                }}
              >
                Your Single Best OMAD Dinner
              </h2>

              <div
                style={{
                  background: "#0f172a",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <div style={{ display: "grid", gap: "12px" }}>
                  {/* Raspberries */}
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "15px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      borderLeft: "4px solid #ec4899",
                    }}
                  >
                    <span style={{ fontSize: "2rem" }}>🫐</span>
                    <div>
                      <div
                        style={{
                          color: "#f472b6",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        ½ cup organic raspberries
                      </div>
                    </div>
                  </div>

                  {/* Beef */}
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "15px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderLeft: "4px solid #ef4444",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <span style={{ fontSize: "2rem" }}>🥩</span>
                      <div>
                        <div
                          style={{
                            color: "#f87171",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                          }}
                        >
                          Beef Sirloin
                        </div>
                        <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                          1 serving
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#ef444430",
                        color: "#fca5a5",
                        padding: "8px 14px",
                        borderRadius: "10px",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                      }}
                    >
                      5 slices
                    </div>
                  </div>

                  {/* Chicken */}
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "15px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderLeft: "4px solid #f97316",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <span style={{ fontSize: "2rem" }}>🍗</span>
                      <div>
                        <div
                          style={{
                            color: "#fb923c",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                          }}
                        >
                          Chicken Strips
                        </div>
                        <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                          4 servings
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#f9731630",
                        color: "#fdba74",
                        padding: "8px 14px",
                        borderRadius: "10px",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                      }}
                    >
                      12–16 strips
                    </div>
                  </div>
                </div>

                {/* Totals */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginTop: "20px",
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f620 0%, #1e293b 100%)",
                      padding: "15px",
                      borderRadius: "12px",
                      textAlign: "center",
                      border: "1px solid #3b82f640",
                    }}
                  >
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.8rem",
                        marginBottom: "4px",
                      }}
                    >
                      Protein
                    </div>
                    <div
                      style={{
                        color: "#60a5fa",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                      }}
                    >
                      ~107g
                    </div>
                  </div>
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, #fbbf2420 0%, #1e293b 100%)",
                      padding: "15px",
                      borderRadius: "12px",
                      textAlign: "center",
                      border: "1px solid #fbbf2440",
                    }}
                  >
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "0.8rem",
                        marginBottom: "4px",
                      }}
                    >
                      Sodium
                    </div>
                    <div
                      style={{
                        color: "#fbbf24",
                        fontWeight: 800,
                        fontSize: "1.8rem",
                      }}
                    >
                      ~1350mg
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    marginTop: "8px",
                  }}
                >
                  (meat only estimates)
                </div>
              </div>
            </div>
          </>
        )}

        {/* METFORMIN TAB */}
        {activeTab === "metformin" && (
          <>
            {/* Metformin ER Card */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                border: "2px solid #8b5cf640",
              }}
            >
              <h2
                style={{
                  color: "#a78bfa",
                  margin: "0 0 20px 0",
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>💊</span> Metformin ER Dose
              </h2>

              <div
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf630 0%, #1e293b 100%)",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  border: "2px solid #8b5cf6",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#c4b5fd",
                    fontSize: "0.9rem",
                    marginBottom: "8px",
                  }}
                >
                  Take with dinner
                </div>
                <div
                  style={{ color: "#fff", fontWeight: 800, fontSize: "1.6rem" }}
                >
                  2 × Metformin ER 500mg
                </div>
                <div
                  style={{
                    color: "#a78bfa",
                    fontSize: "1.1rem",
                    marginTop: "5px",
                  }}
                >
                  = <strong>1000mg total</strong>
                </div>
              </div>

              <div style={{ display: "grid", gap: "10px" }}>
                <div
                  style={{
                    background: "#1e293b",
                    padding: "12px 15px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>🍽️</span>
                  <span style={{ color: "#e2e8f0", fontSize: "0.9rem" }}>
                    Take <strong>mid-meal</strong> if it feels better on your
                    stomach
                  </span>
                </div>
                <div
                  style={{
                    background: "#1e293b",
                    padding: "12px 15px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>💊</span>
                  <span style={{ color: "#e2e8f0", fontSize: "0.9rem" }}>
                    Swallow tablets <strong>whole</strong> — don&apos;t crush or
                    chew
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* BP TAB */}
        {activeTab === "bp" && (
          <>
            {/* BP Rules Card */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                border: "2px solid #ef444440",
              }}
            >
              <h2
                style={{
                  color: "#f87171",
                  margin: "0 0 20px 0",
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>❤️</span> Keep BP Low
                (Rules)
              </h2>

              <div style={{ display: "grid", gap: "12px" }}>
                <div
                  style={{
                    background: "#1e293b",
                    padding: "15px",
                    borderRadius: "12px",
                    borderLeft: "4px solid #ef4444",
                  }}
                >
                  <div
                    style={{
                      color: "#fca5a5",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    🚫 No sauces/condiments
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                    Avoid salty add-ons: cheese-heavy items, pickles, deli sides
                  </div>
                </div>

                <div
                  style={{
                    background: "#1e293b",
                    padding: "15px",
                    borderRadius: "12px",
                    borderLeft: "4px solid #f97316",
                  }}
                >
                  <div
                    style={{
                      color: "#fdba74",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    📉 If BP trends up:
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                    <strong>First:</strong> Reduce beef (skip beef, add +1
                    chicken serving)
                    <br />
                    <strong>Then:</strong> Reduce total chicken servings if
                    still needed
                  </div>
                </div>

                <div
                  style={{
                    background: "#1e293b",
                    padding: "15px",
                    borderRadius: "12px",
                    borderLeft: "4px solid #22c55e",
                  }}
                >
                  <div
                    style={{
                      color: "#86efac",
                      fontWeight: 700,
                      marginBottom: "5px",
                    }}
                  >
                    🥗 Make meal feel bigger:
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                    Add steam-in-bag veggies (no sauce) or big salad with olive
                    oil + pepper
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* MICROWAVE TAB */}
        {activeTab === "microwave" && (
          <>
            {/* Microwave Warming Card */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                border: "2px solid #f59e0b40",
              }}
            >
              <h2
                style={{
                  color: "#fbbf24",
                  margin: "0 0 20px 0",
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🔥</span> Microwave Warming
              </h2>

              <div
                style={{
                  background:
                    "linear-gradient(135deg, #f59e0b20 0%, #1e293b 100%)",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "15px",
                  border: "1px solid #f59e0b40",
                }}
              >
                <div
                  style={{
                    color: "#fcd34d",
                    fontWeight: 700,
                    marginBottom: "12px",
                    fontSize: "1rem",
                  }}
                >
                  ✅ Best Method (one plate, no fuss)
                </div>
                <div
                  style={{
                    color: "#e2e8f0",
                    fontSize: "0.9rem",
                    marginBottom: "15px",
                  }}
                >
                  Warm beef + chicken together on one paper plate. Spread in a{" "}
                  <strong>single layer</strong> (don&apos;t pile).
                </div>

                <div style={{ display: "grid", gap: "10px" }}>
                  <div
                    style={{
                      background: "#0f172a",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        background: "#f59e0b",
                        color: "#0f172a",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                      }}
                    >
                      1
                    </span>
                    <span style={{ color: "#e2e8f0", fontSize: "0.9rem" }}>
                      Cover plate, microwave <strong>25–30 seconds</strong>
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#0f172a",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        background: "#f59e0b",
                        color: "#0f172a",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                      }}
                    >
                      2
                    </span>
                    <span style={{ color: "#e2e8f0", fontSize: "0.9rem" }}>
                      Stir/flip (move outside pieces to center)
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#0f172a",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        background: "#f59e0b",
                        color: "#0f172a",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                      }}
                    >
                      3
                    </span>
                    <span style={{ color: "#e2e8f0", fontSize: "0.9rem" }}>
                      Microwave <strong>10–15 seconds</strong> more
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#0f172a",
                      padding: "12px 15px",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        background: "#f59e0b",
                        color: "#0f172a",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        fontWeight: 800,
                        fontSize: "0.8rem",
                      }}
                    >
                      4
                    </span>
                    <span style={{ color: "#e2e8f0", fontSize: "0.9rem" }}>
                      Rest <strong>20–30 seconds</strong> covered
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "15px",
                    padding: "12px",
                    background: "#22c55e20",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <span style={{ color: "#86efac", fontSize: "0.85rem" }}>
                    ⏱️ Total: <strong>~30–45 seconds</strong> for 5 beef slices
                    + 12–16 chicken strips
                  </span>
                </div>
              </div>

              <div
                style={{
                  background: "#1e293b",
                  padding: "15px",
                  borderRadius: "12px",
                  borderLeft: "4px solid #94a3b8",
                }}
              >
                <div
                  style={{
                    color: "#e2e8f0",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  📝 When to separate them:
                </div>
                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.85rem",
                    marginBottom: "8px",
                  }}
                >
                  Only separate if you want beef very well done, or chicken
                  pieces are much thicker/colder than usual.
                </div>
                <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                  <strong>If separating:</strong> Beef 20–25 sec, Chicken 25–35
                  sec (each covered)
                </div>
              </div>
            </div>
          </>
        )}

        {/* TARGETS TAB */}
        {activeTab === "targets" && (
          <>
            {/* Daily Targets Card */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                border: "2px solid #8b5cf640",
              }}
            >
              <h2
                style={{
                  color: "#a78bfa",
                  margin: "0 0 20px 0",
                  fontSize: "1.3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>🎯</span> Daily Targets
              </h2>

              {/* Sodium Target */}
              <div
                style={{
                  background: "#1e293b",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  borderLeft: "4px solid #ef4444",
                }}
              >
                <div
                  style={{
                    color: "#fca5a5",
                    fontWeight: 700,
                    marginBottom: "8px",
                    fontSize: "1rem",
                  }}
                >
                  🧂 Sodium (for BP)
                </div>
                <div style={{ display: "grid", gap: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                      Best target:
                    </span>
                    <span style={{ color: "#22c55e", fontWeight: 700 }}>
                      ≤ 1,500 mg/day
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                      Hard ceiling:
                    </span>
                    <span style={{ color: "#f97316", fontWeight: 700 }}>
                      ≤ 2,300 mg/day
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "0.8rem",
                    marginTop: "10px",
                    fontStyle: "italic",
                  }}
                >
                  If BP is #1 priority, aim as close to 1,500 mg as possible.
                </div>
              </div>

              {/* Protein Target */}
              <div
                style={{
                  background: "#1e293b",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  borderLeft: "4px solid #3b82f6",
                }}
              >
                <div
                  style={{
                    color: "#93c5fd",
                    fontWeight: 700,
                    marginBottom: "8px",
                    fontSize: "1rem",
                  }}
                >
                  💪 Protein (muscle preservation)
                </div>
                <div style={{ display: "grid", gap: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                      Optimal range:
                    </span>
                    <span style={{ color: "#60a5fa", fontWeight: 700 }}>
                      1.0–1.2 g/kg/day
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                      At 210 lb (~95 kg):
                    </span>
                    <span style={{ color: "#22c55e", fontWeight: 700 }}>
                      ~95–114 g/day
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "0.8rem",
                    marginTop: "10px",
                    fontStyle: "italic",
                  }}
                >
                  OMAD dinner should land around ~100–115g protein.
                </div>
              </div>

              {/* Carb Target */}
              <div
                style={{
                  background: "#1e293b",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  borderLeft: "4px solid #f59e0b",
                }}
              >
                <div
                  style={{
                    color: "#fcd34d",
                    fontWeight: 700,
                    marginBottom: "8px",
                    fontSize: "1rem",
                  }}
                >
                  🍞 Carbs (for A1C)
                </div>
                <div style={{ display: "grid", gap: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                      Very low-carb:
                    </span>
                    <span style={{ color: "#22c55e", fontWeight: 700 }}>
                      ~20–50 g net/day
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "#94a3b8", fontSize: "0.85rem" }}>
                      Low-carb (ADA):
                    </span>
                    <span style={{ color: "#f59e0b", fontWeight: 700 }}>
                      26–45% of calories
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    color: "#64748b",
                    fontSize: "0.8rem",
                    marginTop: "10px",
                    fontStyle: "italic",
                  }}
                >
                  ½ cup raspberries = ~7.3g carbs (won&apos;t break your A1C
                  plan).
                </div>
              </div>
            </div>

            {/* How Your Plan Fits Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                borderRadius: "20px",
                padding: "25px",
                marginBottom: "20px",
                border: "3px solid #10b981",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  margin: "0 0 20px 0",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>✅</span> Your Costco Meat
                Plan Results
              </h2>

              <div
                style={{
                  background: "#0f172a",
                  borderRadius: "12px",
                  padding: "15px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.8rem",
                    marginBottom: "10px",
                  }}
                >
                  5 slices beef + 4 servings chicken + ½ cup raspberries:
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "12px",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                      Protein
                    </div>
                    <div
                      style={{
                        color: "#60a5fa",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                      }}
                    >
                      ~107g
                    </div>
                    <div style={{ color: "#22c55e", fontSize: "0.7rem" }}>
                      ✓ Sweet spot
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#1e293b",
                      padding: "12px",
                      borderRadius: "8px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                      Sodium
                    </div>
                    <div
                      style={{
                        color: "#fbbf24",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                      }}
                    >
                      ~1,350mg
                    </div>
                    <div style={{ color: "#22c55e", fontSize: "0.7rem" }}>
                      ✓ Under 1,500
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "#fbbf2420",
                  padding: "12px",
                  borderRadius: "8px",
                  borderLeft: "4px solid #fbbf24",
                }}
              >
                <div
                  style={{
                    color: "#fcd34d",
                    fontWeight: 700,
                    marginBottom: "5px",
                    fontSize: "0.9rem",
                  }}
                >
                  ⚠️ Important
                </div>
                <div style={{ color: "#e2e8f0", fontSize: "0.85rem" }}>
                  If you keep everything else unsalted/no sauces, it&apos;s a
                  strong BP/A1C plan. Adding anything salty can blow past
                  1,500mg quickly.
                </div>
              </div>
            </div>

            {/* Lower Sodium Option */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: "20px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #06b6d440",
              }}
            >
              <div
                style={{
                  color: "#22d3ee",
                  fontWeight: 700,
                  marginBottom: "12px",
                  fontSize: "1rem",
                }}
              >
                🍗 Want Even Lower Sodium?
              </div>
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "0.9rem",
                  marginBottom: "12px",
                }}
              >
                Go chicken-only for the volume:{" "}
                <strong>5 servings chicken strips</strong> instead of adding
                beef.
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.8rem",
                  fontStyle: "italic",
                }}
              >
                This usually improves &quot;protein per mg sodium&quot; vs beef.
              </div>
            </div>
          </>
        )}

        {/* Optional Swap Toggle - visible in Meal tab */}
        {activeTab === "meal" && (
          <>
            {/* Optional Swap Toggle */}
            <div
              style={{
                background: "#0f172a",
                borderRadius: "20px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #334155",
              }}
            >
              <button
                onClick={() => setShowSwap(!showSwap)}
                style={{
                  width: "100%",
                  background: showSwap
                    ? "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
                    : "#1e293b",
                  border: showSwap ? "none" : "1px solid #475569",
                  borderRadius: "12px",
                  padding: "15px",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{showSwap ? "✓" : "+"}</span>
                Optional: Lowest-Sodium Swap
                <span
                  style={{
                    background: "#06b6d430",
                    padding: "3px 8px",
                    borderRadius: "10px",
                    fontSize: "0.75rem",
                    color: "#22d3ee",
                  }}
                >
                  if you want it later
                </span>
              </button>

              {showSwap && (
                <div
                  style={{
                    marginTop: "15px",
                    background:
                      "linear-gradient(135deg, #06b6d420 0%, #1e293b 100%)",
                    borderRadius: "12px",
                    padding: "20px",
                    border: "2px solid #06b6d440",
                  }}
                >
                  <div
                    style={{
                      color: "#22d3ee",
                      fontWeight: 700,
                      marginBottom: "15px",
                      fontSize: "1.1rem",
                    }}
                  >
                    🍗 Chicken-Only Dinner
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "10px",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      style={{
                        background: "#0f172a",
                        padding: "12px 15px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span style={{ fontSize: "1.3rem" }}>🫐</span>
                        <span style={{ color: "#e2e8f0" }}>
                          ½ cup organic raspberries
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#0f172a",
                        padding: "12px 15px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span style={{ fontSize: "1.3rem" }}>🍗</span>
                        <span style={{ color: "#e2e8f0" }}>
                          5 servings chicken strips
                        </span>
                      </div>
                      <span style={{ color: "#22d3ee", fontWeight: 600 }}>
                        15–20 strips
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        background: "#0f172a",
                        padding: "12px",
                        borderRadius: "8px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                        Protein
                      </div>
                      <div
                        style={{
                          color: "#60a5fa",
                          fontWeight: 700,
                          fontSize: "1.2rem",
                        }}
                      >
                        ~110g
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#0f172a",
                        padding: "12px",
                        borderRadius: "8px",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                        Sodium
                      </div>
                      <div
                        style={{
                          color: "#22c55e",
                          fontWeight: 700,
                          fontSize: "1.2rem",
                        }}
                      >
                        ~1300mg ↓
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Reference Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
                borderRadius: "16px",
                padding: "20px",
                marginBottom: "20px",
                border: "1px solid #475569",
              }}
            >
              <h3
                style={{
                  color: "#e2e8f0",
                  margin: "0 0 15px 0",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                📋 Quick Reference
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "10px",
                  textAlign: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>
                    🫐
                  </div>
                  <div
                    style={{
                      color: "#f472b6",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    ½ cup
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.7rem" }}>
                    Raspberries
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>
                    🥩
                  </div>
                  <div
                    style={{
                      color: "#f87171",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    5 slices
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.7rem" }}>
                    Beef
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>
                    🍗
                  </div>
                  <div
                    style={{
                      color: "#fb923c",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    12–16
                  </div>
                  <div style={{ color: "#64748b", fontSize: "0.7rem" }}>
                    Chicken strips
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  padding: "10px",
                  background: "#8b5cf620",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "#c4b5fd", fontSize: "0.85rem" }}>
                  💊 <strong>2 × 500mg Metformin ER</strong> mid-meal
                </span>
              </div>
            </div>
          </>
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
          📅 Updated: February 3, 2026
        </p>
        <p style={{ margin: "8px 0 0 0", color: "#10b981", fontWeight: 700 }}>
          OMAD • Low-Sodium • High-Protein 💪
        </p>
      </div>
    </div>
  );
}
