"use client";

import React, { useState, useEffect } from "react";

const HealthCountdown = () => {
  const startDate = new Date("2026-01-23T00:00:00");
  const labDate = new Date("2026-04-15T09:00:00");
  const sixPackDate = new Date("2026-08-31");
  const remissionDate = new Date("2027-01-23");

  const [timeLeft, setTimeLeft] = useState({
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
  const [progress, setProgress] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [activeTab, setActiveTab] = useState("countdown");
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const quotes = [
    { text: "Every second without sugar, your body heals.", emoji: "✨" },
    { text: "You're not losing weight. You're gaining LIFE.", emoji: "🦁" },
    { text: "Your future self is thanking you right now.", emoji: "🙏" },
    {
      text: "Discipline is choosing what you WANT over what you want NOW.",
      emoji: "💎",
    },
    { text: "You didn't come this far to only come this far.", emoji: "🚀" },
    {
      text: "The pain of discipline weighs ounces. The pain of regret weighs tons.",
      emoji: "⚖️",
    },
    { text: "Your doctor won't believe their eyes in April.", emoji: "👀" },
    { text: "Zero carbs. Zero sugar. ZERO LIMITS.", emoji: "🔥" },
    { text: "You are literally breathing out fat right now.", emoji: "💨" },
    { text: "82 days to transform. A lifetime to enjoy.", emoji: "🌟" },
  ];

  const achievements = [
    { id: 1, name: "Day One Warrior", icon: "🎯", day: 1 },
    { id: 2, name: "Sugar Free", icon: "🍬", day: 1 },
    { id: 3, name: "Metformin Master", icon: "💊", day: 7 },
    { id: 4, name: "Fat Burner", icon: "🔥", day: 3 },
    { id: 5, name: "5 Pound Club", icon: "⚖️", day: 5 },
    { id: 6, name: "Two Week Titan", icon: "💪", day: 14 },
    { id: 7, name: "10 Pound Legend", icon: "🏆", day: 14 },
    { id: 8, name: "Month One Champion", icon: "👑", day: 30 },
    { id: 9, name: "Halfway Hero", icon: "🦸", day: 41 },
    { id: 10, name: "20 Pound Destroyer", icon: "💥", day: 45 },
    { id: 11, name: "Two Month Warrior", icon: "⚔️", day: 60 },
    { id: 12, name: "Victory Lap", icon: "🎉", day: 82 },
  ];

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const labDiff = labDate.getTime() - now.getTime();
      const sixPackDiff = sixPackDate.getTime() - now.getTime();
      const remissionDiff = remissionDate.getTime() - now.getTime();
      const elapsed = now.getTime() - startDate.getTime();
      const totalDuration = labDate.getTime() - startDate.getTime();
      const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);

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
      setProgress(progressPercent);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, [quotes.length]);

  const getProjectedStats = () => {
    const daysIn = timeLeft.daysElapsed || 0;
    const weightLoss = Math.min(daysIn * 0.4, 35);
    const glucoseDrop = Math.min(daysIn * 1.1, 90);
    const a1cDrop = Math.min(daysIn * 0.045, 4);

    return {
      weight: Math.max(210 - weightLoss, 175).toFixed(1),
      glucose: Math.max(184 - glucoseDrop, 95).toFixed(0),
      a1c: Math.max(11.5 - a1cDrop, 7.0).toFixed(1),
      weightLost: weightLoss.toFixed(1),
    };
  };

  const stats = getProjectedStats();
  const daysElapsed = timeLeft.daysElapsed || 0;
  const unlockedCount = achievements.filter((a) => daysElapsed >= a.day).length;

  const styles: Record<
    string,
    | React.CSSProperties
    | ((arg: boolean | number | string) => React.CSSProperties)
  > = {
    container: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      background:
        "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f0f1a 100%)",
      minHeight: "100vh",
      padding: isMobile ? "10px" : "15px",
      color: "#fff",
      maxWidth: "100vw",
      overflowX: "hidden",
      boxSizing: "border-box",
    },
    card: {
      background: "rgba(255,255,255,0.03)",
      borderRadius: isMobile ? "12px" : "16px",
      padding: isMobile ? "12px" : "16px",
      marginBottom: "12px",
      border: "1px solid rgba(255,255,255,0.08)",
    },
    tabs: {
      display: "flex",
      gap: "6px",
      marginBottom: "16px",
      overflowX: "auto",
      paddingBottom: "8px",
      WebkitOverflowScrolling: "touch",
    },
    progressBar: {
      width: "100%",
      height: "10px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "5px",
      overflow: "hidden",
    },
  };

  const tabStyle = (active: boolean): React.CSSProperties => ({
    padding: isMobile ? "10px 12px" : "10px 14px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontSize: isMobile ? "0.75rem" : "0.8rem",
    fontWeight: "600",
    background: active
      ? "linear-gradient(135deg, #00d4aa, #00a080)"
      : "rgba(255,255,255,0.08)",
    color: active ? "#000" : "#888",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
    flexShrink: 0,
  });

  const progressFillStyle = (
    percent: number,
    color: string
  ): React.CSSProperties => ({
    width: `${Math.min(100, percent)}%`,
    height: "100%",
    background: color,
    borderRadius: "5px",
    transition: "width 0.5s ease",
  });

  const statBoxStyle = (color: string): React.CSSProperties => ({
    background: `${color}15`,
    borderRadius: "12px",
    padding: isMobile ? "10px" : "12px",
    textAlign: "center",
    border: `1px solid ${color}30`,
  });

  return (
    <div style={styles.container as React.CSSProperties}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: "800",
            background: "linear-gradient(90deg, #00d4aa, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "8px",
          }}
        >
          🏆 HEALTH VICTORY COUNTDOWN
        </h1>
        <p style={{ color: "#888", fontSize: isMobile ? "0.85rem" : "1rem" }}>
          Day{" "}
          <span style={{ color: "#00d4aa", fontWeight: "700" }}>
            {daysElapsed + 1}
          </span>{" "}
          of Your Transformation
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabs as React.CSSProperties}>
        {[
          { id: "countdown", label: "🏁 Timers" },
          { id: "stats", label: "📊 Stats" },
          {
            id: "achievements",
            label: `🏅 Badges (${unlockedCount}/${achievements.length})`,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={tabStyle(activeTab === tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Motivational Quote */}
      <div style={styles.card as React.CSSProperties}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: isMobile ? "1.5rem" : "2rem" }}>
            {quotes[currentQuote].emoji}
          </span>
          <p
            style={{
              fontSize: isMobile ? "0.85rem" : "1rem",
              fontWeight: "500",
              margin: 0,
              fontStyle: "italic",
              color: "#ccc",
            }}
          >
            &quot;{quotes[currentQuote].text}&quot;
          </p>
        </div>
      </div>

      {/* COUNTDOWN TAB */}
      {activeTab === "countdown" && (
        <>
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                margin: "0 0 16px",
                fontSize: isMobile ? "0.9rem" : "1rem",
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
                borderRadius: isMobile ? "12px" : "16px",
                padding: isMobile ? "14px" : "20px",
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
                <span style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
                  🩺
                </span>
                <div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.65rem" : "0.75rem",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Lab Test
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
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
                  fontSize: isMobile ? "1.5rem" : "2.5rem",
                  fontWeight: "800",
                  color: "#f5576c",
                  textAlign: "center",
                  marginBottom: "12px",
                  fontFamily: "monospace",
                }}
              >
                {isClient
                  ? `${timeLeft.labDays}d ${timeLeft.labHours}h ${timeLeft.labMinutes}m ${timeLeft.labSeconds}s`
                  : "Loading..."}
              </div>
              <div style={styles.progressBar as React.CSSProperties}>
                <div
                  style={progressFillStyle(
                    100 - (timeLeft.labDays / 82) * 100,
                    "#f5576c"
                  )}
                />
              </div>
            </div>

            {/* 6-Pack Countdown Card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(79,172,254,0.15) 0%, rgba(79,172,254,0.05) 100%)",
                borderRadius: isMobile ? "12px" : "16px",
                padding: isMobile ? "14px" : "20px",
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
                <span style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
                  💪
                </span>
                <div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.65rem" : "0.75rem",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    6-Pack Goal
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
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
                  fontSize: isMobile ? "1.5rem" : "2.5rem",
                  fontWeight: "800",
                  color: "#4facfe",
                  textAlign: "center",
                  marginBottom: "12px",
                  fontFamily: "monospace",
                }}
              >
                {isClient
                  ? `${timeLeft.sixPackDays}d ${timeLeft.sixPackHours}h ${timeLeft.sixPackMinutes}m ${timeLeft.sixPackSeconds}s`
                  : "Loading..."}
              </div>
              <div style={styles.progressBar as React.CSSProperties}>
                <div
                  style={progressFillStyle(
                    100 - (timeLeft.sixPackDays / 220) * 100,
                    "#4facfe"
                  )}
                />
              </div>
            </div>

            {/* Metformin Freedom Countdown Card */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,170,0.15) 0%, rgba(0,212,170,0.05) 100%)",
                borderRadius: isMobile ? "12px" : "16px",
                padding: isMobile ? "14px" : "20px",
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
                <span style={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }}>
                  🏆
                </span>
                <div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.65rem" : "0.75rem",
                      color: "#888",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Metformin Freedom
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
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
                  fontSize: isMobile ? "1.5rem" : "2.5rem",
                  fontWeight: "800",
                  color: "#00d4aa",
                  textAlign: "center",
                  marginBottom: "12px",
                  fontFamily: "monospace",
                }}
              >
                {isClient
                  ? `${timeLeft.remissionDays}d ${timeLeft.remissionHours}h ${timeLeft.remissionMinutes}m ${timeLeft.remissionSeconds}s`
                  : "Loading..."}
              </div>
              <div style={styles.progressBar as React.CSSProperties}>
                <div
                  style={progressFillStyle(
                    100 - (timeLeft.remissionDays / 365) * 100,
                    "#00d4aa"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Journey Progress */}
          <div style={styles.card as React.CSSProperties}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: isMobile ? "0.85rem" : "0.9rem",
                color: "#00d4aa",
              }}
            >
              🚀 JOURNEY PROGRESS
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  color: "#888",
                  fontSize: isMobile ? "0.7rem" : "0.8rem",
                }}
              >
                Jan 23
              </span>
              <span
                style={{
                  color: "#00d4aa",
                  fontWeight: "700",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                }}
              >
                {progress.toFixed(1)}% Complete
              </span>
              <span
                style={{
                  color: "#888",
                  fontSize: isMobile ? "0.7rem" : "0.8rem",
                }}
              >
                Apr 15
              </span>
            </div>
            <div style={styles.progressBar as React.CSSProperties}>
              <div
                style={progressFillStyle(
                  progress,
                  "linear-gradient(90deg, #00d4aa, #4facfe)"
                )}
              />
            </div>
          </div>
        </>
      )}

      {/* STATS TAB */}
      {activeTab === "stats" && (
        <>
          <div style={styles.card as React.CSSProperties}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: isMobile ? "0.85rem" : "0.9rem",
                color: "#00d4aa",
              }}
            >
              📈 PROJECTED HEALTH STATS
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: isMobile ? "10px" : "12px",
              }}
            >
              <div style={statBoxStyle("#00d4aa")}>
                <div
                  style={{
                    fontSize: isMobile ? "1.3rem" : "1.5rem",
                    fontWeight: "800",
                    color: "#00d4aa",
                  }}
                >
                  {stats.weight} lbs
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "0.65rem" : "0.7rem",
                    color: "#888",
                  }}
                >
                  CURRENT WEIGHT
                </div>
              </div>
              <div style={statBoxStyle("#f5576c")}>
                <div
                  style={{
                    fontSize: isMobile ? "1.3rem" : "1.5rem",
                    fontWeight: "800",
                    color: "#f5576c",
                  }}
                >
                  {stats.weightLost} lbs
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "0.65rem" : "0.7rem",
                    color: "#888",
                  }}
                >
                  TOTAL LOST
                </div>
              </div>
              <div style={statBoxStyle("#4facfe")}>
                <div
                  style={{
                    fontSize: isMobile ? "1.3rem" : "1.5rem",
                    fontWeight: "800",
                    color: "#4facfe",
                  }}
                >
                  {stats.a1c}%
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "0.65rem" : "0.7rem",
                    color: "#888",
                  }}
                >
                  PROJECTED A1C
                </div>
              </div>
              <div style={statBoxStyle("#fbbf24")}>
                <div
                  style={{
                    fontSize: isMobile ? "1.3rem" : "1.5rem",
                    fontWeight: "800",
                    color: "#fbbf24",
                  }}
                >
                  {stats.glucose}
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "0.65rem" : "0.7rem",
                    color: "#888",
                  }}
                >
                  FASTING GLUCOSE
                </div>
              </div>
            </div>
          </div>

          <div style={styles.card as React.CSSProperties}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: isMobile ? "0.85rem" : "0.9rem",
                color: "#00d4aa",
              }}
            >
              📅 DAILY STATS
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 1fr)",
                gap: isMobile ? "10px" : "12px",
              }}
            >
              {[
                {
                  label: "Days In",
                  value: daysElapsed + 1,
                  emoji: "📅",
                  color: "#f093fb",
                },
                {
                  label: "Days Left",
                  value: timeLeft.labDays || 0,
                  emoji: "⏳",
                  color: "#4facfe",
                },
                {
                  label: "Hours Fasted",
                  value: ((daysElapsed + 1) * 18).toLocaleString(),
                  emoji: "🕐",
                  color: "#fbbf24",
                },
                {
                  label: "Carbs Avoided",
                  value: `${((daysElapsed + 1) * 250).toLocaleString()}g`,
                  emoji: "🚫",
                  color: "#f5576c",
                },
                {
                  label: "Fat Burned",
                  value: `${(parseFloat(stats.weightLost) * 0.7).toFixed(
                    1
                  )} lbs`,
                  emoji: "🔥",
                  color: "#00d4aa",
                },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: "center", padding: "10px" }}>
                  <div
                    style={{
                      fontSize: isMobile ? "1.2rem" : "1.5rem",
                      marginBottom: "4px",
                    }}
                  >
                    {stat.emoji}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "1rem" : "1.2rem",
                      fontWeight: "800",
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.6rem" : "0.7rem",
                      color: "#888",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* April 15 Projections */}
          <div style={styles.card as React.CSSProperties}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: isMobile ? "0.85rem" : "0.9rem",
                color: "#00d4aa",
              }}
            >
              🩺 APRIL 15 LAB PROJECTIONS
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                {
                  test: "A1C",
                  before: "11.5%",
                  after: "7.0-8.0%",
                  color: "#f5576c",
                },
                {
                  test: "Fasting Glucose",
                  before: "184",
                  after: "95-115",
                  color: "#4facfe",
                },
                {
                  test: "Weight",
                  before: "210 lbs",
                  after: "175-185 lbs",
                  color: "#00d4aa",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: isMobile ? "10px" : "12px",
                    background: "rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                    }}
                  >
                    {item.test}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span
                      style={{
                        color: "#888",
                        textDecoration: "line-through",
                        fontSize: isMobile ? "0.75rem" : "0.85rem",
                      }}
                    >
                      {item.before}
                    </span>
                    <span style={{ color: "#888" }}>→</span>
                    <span
                      style={{
                        color: item.color,
                        fontWeight: "700",
                        fontSize: isMobile ? "0.85rem" : "0.95rem",
                      }}
                    >
                      {item.after}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ACHIEVEMENTS TAB */}
      {activeTab === "achievements" && (
        <div style={styles.card as React.CSSProperties}>
          <h3
            style={{
              margin: "0 0 12px",
              fontSize: isMobile ? "0.85rem" : "0.9rem",
              color: "#00d4aa",
            }}
          >
            🏅 ACHIEVEMENTS ({unlockedCount}/{achievements.length})
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(2, 1fr)"
                : "repeat(3, 1fr)",
              gap: isMobile ? "8px" : "10px",
            }}
          >
            {achievements.map((a) => {
              const unlocked = daysElapsed >= a.day;
              return (
                <div
                  key={a.id}
                  style={{
                    background: unlocked
                      ? "rgba(0,212,170,0.1)"
                      : "rgba(255,255,255,0.02)",
                    borderRadius: isMobile ? "10px" : "12px",
                    padding: isMobile ? "10px" : "14px",
                    textAlign: "center",
                    border: unlocked
                      ? "1px solid rgba(0,212,170,0.3)"
                      : "1px solid rgba(255,255,255,0.05)",
                    opacity: unlocked ? 1 : 0.5,
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "1.5rem" : "2rem",
                      marginBottom: "6px",
                      filter: unlocked ? "none" : "grayscale(100%)",
                    }}
                  >
                    {a.icon}
                  </div>
                  <div
                    style={{
                      fontWeight: "700",
                      fontSize: isMobile ? "0.7rem" : "0.8rem",
                      color: unlocked ? "#fff" : "#666",
                      marginBottom: "4px",
                    }}
                  >
                    {a.name}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "0.6rem" : "0.65rem",
                      color: unlocked ? "#00d4aa" : "#555",
                    }}
                  >
                    {unlocked ? "✓ Unlocked!" : `Day ${a.day}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          padding: isMobile ? "16px" : "20px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: isMobile ? "12px" : "16px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: isMobile ? "1.5rem" : "2rem",
            marginBottom: "8px",
          }}
        >
          🦁
        </div>
        <p
          style={{
            fontSize: isMobile ? "0.85rem" : "1rem",
            fontWeight: "700",
            background: "linear-gradient(90deg, #00d4aa, #4facfe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: "0 0 4px",
          }}
        >
          ZERO CARBS • ZERO SUGAR • ZERO LIMITS
        </p>
        <p
          style={{
            color: "#888",
            fontSize: isMobile ? "0.75rem" : "0.85rem",
            margin: 0,
          }}
        >
          You&apos;re on a{" "}
          <span style={{ color: "#00d4aa", fontWeight: "700" }}>MISSION</span>.
        </p>
      </div>
    </div>
  );
};

export default HealthCountdown;
