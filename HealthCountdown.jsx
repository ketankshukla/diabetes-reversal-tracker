import React, { useState, useEffect } from 'react';

const HealthCountdown = () => {
  const startDate = new Date('2026-01-23T00:00:00');
  const labDate = new Date('2026-04-15T09:00:00');
  const [timeLeft, setTimeLeft] = useState({});
  const [progress, setProgress] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [activeTab, setActiveTab] = useState('countdown');
  const [particles, setParticles] = useState([]);

  const quotes = [
    { text: "Every second without sugar, your body heals.", emoji: "✨" },
    { text: "You're not losing weight. You're gaining LIFE.", emoji: "🦁" },
    { text: "Your future self is thanking you right now.", emoji: "🙏" },
    { text: "Discipline is choosing what you WANT over what you want NOW.", emoji: "💎" },
    { text: "You didn't come this far to only come this far.", emoji: "🚀" },
    { text: "The pain of discipline weighs ounces. The pain of regret weighs tons.", emoji: "⚖️" },
    { text: "Your doctor won't believe their eyes in April.", emoji: "👀" },
    { text: "Zero carbs. Zero sugar. ZERO LIMITS.", emoji: "🔥" },
    { text: "You are literally breathing out fat right now.", emoji: "💨" },
    { text: "82 days to transform. A lifetime to enjoy.", emoji: "🌟" },
  ];

  const achievements = [
    { id: 1, name: "Day One Warrior", desc: "Started the journey", icon: "🎯", unlocked: true, day: 1 },
    { id: 2, name: "Sugar Free", desc: "24 hours no sugar", icon: "🍬", unlocked: true, day: 1 },
    { id: 3, name: "Metformin Master", desc: "First week on medication", icon: "💊", unlocked: false, day: 7 },
    { id: 4, name: "Fat Burner", desc: "Body entered ketosis", icon: "🔥", unlocked: false, day: 3 },
    { id: 5, name: "5 Pound Club", desc: "Lost first 5 lbs", icon: "⚖️", unlocked: false, day: 5 },
    { id: 6, name: "Two Week Titan", desc: "14 days strong", icon: "💪", unlocked: false, day: 14 },
    { id: 7, name: "10 Pound Legend", desc: "Double digits down", icon: "🏆", unlocked: false, day: 14 },
    { id: 8, name: "Month One Champion", desc: "30 days completed", icon: "👑", unlocked: false, day: 30 },
    { id: 9, name: "Halfway Hero", desc: "41 days - halfway there!", icon: "🦸", unlocked: false, day: 41 },
    { id: 10, name: "20 Pound Destroyer", desc: "20 lbs obliterated", icon: "💥", unlocked: false, day: 45 },
    { id: 11, name: "Two Month Warrior", desc: "60 days of discipline", icon: "⚔️", unlocked: false, day: 60 },
    { id: 12, name: "Victory Lap", desc: "Lab test day arrived!", icon: "🎉", unlocked: false, day: 82 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = labDate - now;
      const totalDuration = labDate - startDate;
      const elapsed = now - startDate;
      const progressPercent = Math.min((elapsed / totalDuration) * 100, 100);
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          totalDays: Math.ceil(difference / (1000 * 60 * 60 * 24)),
          daysElapsed: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
        });
        setProgress(progressPercent);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        emoji: ['✨', '⭐', '💫', '🌟', '⚡', '🔥', '💪', '🎯'][Math.floor(Math.random() * 8)],
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
      };
      setParticles(prev => [...prev.slice(-15), newParticle]);
    };
    const particleTimer = setInterval(createParticle, 800);
    return () => clearInterval(particleTimer);
  }, []);

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

  const CircularProgress = ({ value, max, size, strokeWidth, color, label, sublabel }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / max) * circumference;
    
    return (
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease', filter: `drop-shadow(0 0 10px ${color})` }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: size / 4, fontWeight: '800', color: '#fff' }}>{label}</div>
          <div style={{ fontSize: size / 10, color: '#aaa', marginTop: 4 }}>{sublabel}</div>
        </div>
      </div>
    );
  };

  const styles = {
    container: {
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      minHeight: '100vh',
      padding: '20px',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    },
    particle: (p) => ({
      position: 'fixed',
      left: `${p.x}%`,
      bottom: '-50px',
      fontSize: '24px',
      animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
      pointerEvents: 'none',
      zIndex: 1,
      opacity: 0.6,
    }),
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      position: 'relative',
      zIndex: 10,
    },
    mainTitle: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      fontWeight: '900',
      background: 'linear-gradient(90deg, #f093fb, #f5576c, #4facfe, #00f2fe)',
      backgroundSize: '300% 300%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'gradient 4s ease infinite',
      marginBottom: '10px',
      letterSpacing: '-1px',
    },
    countdownBox: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(10px, 3vw, 25px)',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    timeUnit: {
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: 'clamp(15px, 4vw, 30px)',
      minWidth: 'clamp(70px, 18vw, 120px)',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
    },
    timeValue: {
      fontSize: 'clamp(2rem, 8vw, 4rem)',
      fontWeight: '800',
      background: 'linear-gradient(180deg, #fff 0%, #a0a0a0 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1,
    },
    timeLabel: {
      fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginTop: '8px',
    },
    quoteBox: {
      background: 'linear-gradient(135deg, rgba(240,147,251,0.2) 0%, rgba(245,87,108,0.2) 100%)',
      borderRadius: '20px',
      padding: '25px',
      margin: '30px auto',
      maxWidth: '700px',
      textAlign: 'center',
      border: '1px solid rgba(240,147,251,0.3)',
      animation: 'pulse 2s ease-in-out infinite',
    },
    tabContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '30px',
      flexWrap: 'wrap',
    },
    tab: (active) => ({
      padding: '12px 24px',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.95rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      background: active 
        ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' 
        : 'rgba(255,255,255,0.1)',
      color: '#fff',
      boxShadow: active ? '0 10px 30px rgba(240,147,251,0.4)' : 'none',
    }),
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '30px',
    },
    statCard: {
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '25px',
      border: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
    },
    achievementGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '15px',
    },
    achievement: (unlocked) => ({
      background: unlocked 
        ? 'linear-gradient(135deg, rgba(74,222,128,0.2) 0%, rgba(34,197,94,0.2) 100%)'
        : 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      padding: '20px 15px',
      textAlign: 'center',
      border: unlocked ? '2px solid #4ade80' : '1px solid rgba(255,255,255,0.1)',
      opacity: unlocked ? 1 : 0.5,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    }),
    progressBar: {
      width: '100%',
      height: '12px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '10px',
      overflow: 'hidden',
      marginTop: '20px',
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #f093fb, #f5576c, #4facfe)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s linear infinite',
      borderRadius: '10px',
      transition: 'width 0.5s ease',
    },
  };

  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.6; }
      100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(240,147,251,0.4); }
      50% { transform: scale(1.02); box-shadow: 0 0 30px 10px rgba(240,147,251,0.2); }
    }
    @keyframes shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @keyframes glow {
      0%, 100% { filter: drop-shadow(0 0 20px rgba(240,147,251,0.5)); }
      50% { filter: drop-shadow(0 0 40px rgba(240,147,251,0.8)); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `;

  const unlockedCount = achievements.filter(a => daysElapsed >= a.day).length;

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      
      {/* Floating Particles */}
      {particles.map(p => (
        <div key={p.id} style={styles.particle(p)}>{p.emoji}</div>
      ))}

      {/* Header */}
      <div style={styles.header}>
        <div style={{ fontSize: '4rem', marginBottom: '10px', animation: 'bounce 2s ease-in-out infinite' }}>
          🏆
        </div>
        <h1 style={styles.mainTitle}>YOUR HEALTH VICTORY</h1>
        <p style={{ color: '#a0aec0', fontSize: '1.1rem' }}>
          Day <span style={{ color: '#4ade80', fontWeight: '700', fontSize: '1.3rem' }}>{daysElapsed + 1}</span> of Your Transformation
        </p>
      </div>

      {/* Main Countdown */}
      <div style={styles.countdownBox}>
        {[
          { value: timeLeft.days, label: 'Days' },
          { value: timeLeft.hours, label: 'Hours' },
          { value: timeLeft.minutes, label: 'Minutes' },
          { value: timeLeft.seconds, label: 'Seconds' },
        ].map((unit, i) => (
          <div key={i} style={styles.timeUnit}>
            <div style={styles.timeValue}>
              {String(unit.value || 0).padStart(2, '0')}
            </div>
            <div style={styles.timeLabel}>{unit.label}</div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div style={{ maxWidth: '800px', margin: '0 auto 30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ color: '#888' }}>🚀 Jan 23</span>
          <span style={{ color: '#4ade80', fontWeight: '700' }}>{progress.toFixed(1)}% Complete</span>
          <span style={{ color: '#888' }}>🏁 Apr 15</span>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
      </div>

      {/* Motivational Quote */}
      <div style={styles.quoteBox}>
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{quotes[currentQuote].emoji}</div>
        <p style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
          fontWeight: '600',
          margin: 0,
          lineHeight: 1.6,
        }}>
          "{quotes[currentQuote].text}"
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        {[
          { id: 'countdown', label: '📊 Live Stats', icon: '📊' },
          { id: 'projections', label: '🎯 Projections', icon: '🎯' },
          { id: 'achievements', label: `🏅 Achievements (${unlockedCount}/${achievements.length})`, icon: '🏅' },
          { id: 'timeline', label: '📅 Timeline', icon: '📅' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={styles.tab(activeTab === tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Live Stats Tab */}
        {activeTab === 'countdown' && (
          <div>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#888' }}>PROJECTED CURRENT WEIGHT</span>
                </div>
                <CircularProgress 
                  value={210 - parseFloat(stats.weight)} 
                  max={35} 
                  size={180} 
                  strokeWidth={12}
                  color="#4ade80"
                  label={`${stats.weight}`}
                  sublabel="lbs"
                />
                <div style={{ marginTop: '15px', color: '#4ade80', fontWeight: '700', fontSize: '1.2rem' }}>
                  ↓ {stats.weightLost} lbs lost!
                </div>
              </div>

              <div style={styles.statCard}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#888' }}>PROJECTED A1C</span>
                </div>
                <CircularProgress 
                  value={11.5 - parseFloat(stats.a1c)} 
                  max={4.5} 
                  size={180} 
                  strokeWidth={12}
                  color="#f5576c"
                  label={`${stats.a1c}%`}
                  sublabel="A1C"
                />
                <div style={{ marginTop: '15px', color: '#f5576c', fontWeight: '700', fontSize: '1.2rem' }}>
                  ↓ {(11.5 - parseFloat(stats.a1c)).toFixed(1)} points down!
                </div>
              </div>

              <div style={styles.statCard}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#888' }}>PROJECTED FASTING GLUCOSE</span>
                </div>
                <CircularProgress 
                  value={184 - parseFloat(stats.glucose)} 
                  max={90} 
                  size={180} 
                  strokeWidth={12}
                  color="#4facfe"
                  label={stats.glucose}
                  sublabel="mg/dL"
                />
                <div style={{ marginTop: '15px', color: '#4facfe', fontWeight: '700', fontSize: '1.2rem' }}>
                  ↓ {(184 - parseFloat(stats.glucose)).toFixed(0)} mg/dL drop!
                </div>
              </div>
            </div>

            {/* Daily Stats */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              padding: '25px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '20px',
              textAlign: 'center',
            }}>
              {[
                { label: 'Days In', value: daysElapsed + 1, emoji: '📅', color: '#f093fb' },
                { label: 'Days Left', value: timeLeft.totalDays, emoji: '⏳', color: '#4facfe' },
                { label: 'Hours Fasted', value: ((daysElapsed + 1) * 18).toLocaleString(), emoji: '🕐', color: '#fbbf24' },
                { label: 'Carbs Avoided', value: `${((daysElapsed + 1) * 250).toLocaleString()}g`, emoji: '🚫', color: '#f5576c' },
                { label: 'Fat Burned', value: `${(parseFloat(stats.weightLost) * 0.7).toFixed(1)} lbs`, emoji: '🔥', color: '#4ade80' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{stat.emoji}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: stat.color }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projections Tab */}
        {activeTab === 'projections' && (
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '24px',
            padding: '30px',
            border: '1px solid rgba(74,222,128,0.3)',
          }}>
            <h2 style={{ textAlign: 'center', color: '#4ade80', marginBottom: '30px', fontSize: '1.8rem' }}>
              🩺 April 15, 2026 Lab Test Projections
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { test: 'A1C', before: '11.5%', after: '7.0-8.0%', change: '↓ 3-4 points', emoji: '🎯', color: '#f5576c' },
                { test: 'Fasting Glucose', before: '184 mg/dL', after: '95-115 mg/dL', change: '↓ 70-90 pts', emoji: '📉', color: '#4facfe' },
                { test: 'Weight', before: '210 lbs', after: '175-185 lbs', change: '↓ 25-35 lbs', emoji: '⚖️', color: '#4ade80' },
                { test: 'Triglycerides', before: 'Elevated', after: 'Normal', change: '↓ 40-60%', emoji: '❤️', color: '#f093fb' },
                { test: 'Energy', before: 'Low', after: 'EXPLOSIVE', change: '🚀🚀🚀', emoji: '⚡', color: '#fbbf24' },
                { test: 'Confidence', before: 'Worried', after: 'UNSTOPPABLE', change: '∞', emoji: '💪', color: '#00f2fe' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1.5fr 1fr 1fr 1fr',
                  alignItems: 'center',
                  gap: '15px',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '12px',
                  padding: '15px',
                }}>
                  <div style={{ fontSize: '2rem' }}>{item.emoji}</div>
                  <div style={{ fontWeight: '600' }}>{item.test}</div>
                  <div style={{ color: '#f87171', textDecoration: 'line-through', fontSize: '0.9rem' }}>{item.before}</div>
                  <div style={{ color: item.color, fontWeight: '700' }}>{item.after}</div>
                  <div style={{
                    background: `${item.color}22`,
                    color: item.color,
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    textAlign: 'center',
                  }}>{item.change}</div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: 'linear-gradient(135deg, rgba(74,222,128,0.2) 0%, rgba(34,197,94,0.1) 100%)',
              borderRadius: '16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏆</div>
              <p style={{ fontSize: '1.3rem', fontWeight: '700', color: '#4ade80', margin: 0 }}>
                Your doctor will NOT believe these numbers!
              </p>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <p style={{ color: '#888', fontSize: '1.1rem' }}>
                🏅 <span style={{ color: '#4ade80', fontWeight: '700' }}>{unlockedCount}</span> of {achievements.length} achievements unlocked
              </p>
            </div>
            <div style={styles.achievementGrid}>
              {achievements.map(a => {
                const unlocked = daysElapsed >= a.day;
                return (
                  <div key={a.id} style={styles.achievement(unlocked)}>
                    <div style={{ 
                      fontSize: '2.5rem', 
                      marginBottom: '10px',
                      filter: unlocked ? 'none' : 'grayscale(100%)',
                    }}>
                      {a.icon}
                    </div>
                    <div style={{ 
                      fontWeight: '700', 
                      fontSize: '0.95rem',
                      color: unlocked ? '#fff' : '#666',
                      marginBottom: '5px',
                    }}>
                      {a.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: unlocked ? '#4ade80' : '#555' }}>
                      {unlocked ? '✓ Unlocked!' : `Day ${a.day}`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { week: 'Week 1-2', date: 'Jan 23 - Feb 6', status: daysElapsed >= 14 ? 'complete' : daysElapsed >= 0 ? 'active' : 'pending', color: '#f5576c', items: ['5-10 lbs water weight gone', 'Blood sugar dropping fast', 'Cravings breaking', 'Metformin adaptation'] },
              { week: 'Week 3-4', date: 'Feb 7 - Feb 20', status: daysElapsed >= 28 ? 'complete' : daysElapsed >= 14 ? 'active' : 'pending', color: '#4facfe', items: ['Fat adaptation complete', '15 lbs down', 'Energy SURGING', 'Mental clarity'] },
              { week: 'Month 2', date: 'Feb 21 - Mar 20', status: daysElapsed >= 56 ? 'complete' : daysElapsed >= 28 ? 'active' : 'pending', color: '#4ade80', items: ['20+ lbs down', 'Clothes getting loose', 'People noticing', 'Sleep improved'] },
              { week: 'Month 3', date: 'Mar 21 - Apr 15', status: daysElapsed >= 82 ? 'complete' : daysElapsed >= 56 ? 'active' : 'pending', color: '#fbbf24', items: ['25-35 lbs total loss', 'A1C transformed', 'LAB TEST DAY', "Doctor's jaw drops"] },
            ].map((phase, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: phase.status === 'complete' ? '#4ade80' : phase.status === 'active' ? phase.color : '#333',
                    border: `3px solid ${phase.status === 'active' ? phase.color : 'transparent'}`,
                    boxShadow: phase.status === 'active' ? `0 0 20px ${phase.color}` : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                  }}>
                    {phase.status === 'complete' && '✓'}
                  </div>
                  {i < 3 && <div style={{ width: '2px', flex: 1, background: phase.status === 'complete' ? '#4ade80' : '#333', minHeight: '80px' }} />}
                </div>
                <div style={{
                  flex: 1,
                  background: phase.status === 'active' ? `${phase.color}15` : 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  padding: '20px',
                  marginBottom: '15px',
                  border: phase.status === 'active' ? `2px solid ${phase.color}` : '1px solid rgba(255,255,255,0.1)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ margin: 0, color: phase.color }}>{phase.week}</h3>
                    <span style={{ fontSize: '0.85rem', color: '#888' }}>{phase.date}</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {phase.items.map((item, j) => (
                      <span key={j} style={{
                        background: 'rgba(0,0,0,0.3)',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        color: phase.status === 'pending' ? '#666' : '#ccc',
                      }}>
                        {phase.status === 'complete' ? '✓ ' : ''}{item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        padding: '30px',
        background: 'rgba(0,0,0,0.2)',
        borderRadius: '20px',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🦁</div>
        <p style={{ 
          fontSize: '1.5rem', 
          fontWeight: '800',
          background: 'linear-gradient(90deg, #f093fb, #f5576c, #4facfe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px',
        }}>
          ZERO CARBS • ZERO SUGAR • ZERO LIMITS
        </p>
        <p style={{ color: '#888', fontSize: '1rem' }}>
          You're not on a diet. You're on a <span style={{ color: '#4ade80', fontWeight: '700' }}>MISSION</span>.
        </p>
      </div>
    </div>
  );
};

export default HealthCountdown;
