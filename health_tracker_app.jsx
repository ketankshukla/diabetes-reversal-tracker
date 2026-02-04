import React, { useState } from 'react';

export default function HealthTrackerApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Calculate days until April 15 labs
  const today = new Date();
  const labDate = new Date('2026-04-15');
  const daysUntilLabs = Math.ceil((labDate - today) / (1000 * 60 * 60 * 24));
  
  // A1C Progress calculation
  const startA1C = 11.5;
  const targetA1C = 7.0;
  const predictedA1C = 7.25; // midpoint of realistic prediction
  const progressPercent = ((startA1C - predictedA1C) / (startA1C - targetA1C)) * 100;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      fontFamily: "'Segoe UI', sans-serif",
      color: '#f1f5f9',
      padding: '0',
      margin: '0',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
        padding: '25px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5,
        }} />
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          margin: 0,
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          position: 'relative',
        }}>
          📊 Health Command Center
        </h1>
        <p style={{
          fontSize: '0.95rem',
          margin: '8px 0 0 0',
          opacity: 0.95,
          fontWeight: 500,
          position: 'relative',
        }}>
          BP • A1C • OMAD Protocol
        </p>
      </div>

      {/* Countdown Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #7c3aed 0%, #6d28d9 100%)',
        padding: '15px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
      }}>
        <span style={{ fontSize: '1.5rem' }}>🧪</span>
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#e9d5ff', fontSize: '0.8rem' }}>NEXT LAB WORK</div>
          <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem' }}>
            {daysUntilLabs} days until April 15
          </div>
        </div>
        <span style={{ fontSize: '1.5rem' }}>📅</span>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        background: '#1e293b',
        borderBottom: '1px solid #334155',
      }}>
        {[
          { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
          { id: 'bp', label: '❤️ Blood Pressure', icon: '❤️' },
          { id: 'a1c', label: '🎯 A1C Progress', icon: '🎯' },
          { id: 'protocol', label: '🍽️ Protocol', icon: '🍽️' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              padding: '15px 10px',
              background: activeTab === tab.id ? '#0f172a' : 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? '3px solid #3b82f6' : '3px solid transparent',
              color: activeTab === tab.id ? '#fff' : '#94a3b8',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>

        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div>
            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              marginBottom: '20px',
            }}>
              {/* BP Card */}
              <div style={{
                background: 'linear-gradient(135deg, #ef444420 0%, #0f172a 100%)',
                borderRadius: '16px',
                padding: '20px',
                border: '2px solid #ef444450',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>❤️</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '5px' }}>BLOOD PRESSURE</div>
                <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.6rem' }}>117/79</div>
                <div style={{ 
                  background: '#22c55e30', 
                  color: '#86efac', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  marginTop: '8px',
                  display: 'inline-block'
                }}>
                  ✓ OPTIMAL
                </div>
              </div>

              {/* Heart Rate Card */}
              <div style={{
                background: 'linear-gradient(135deg, #f9731620 0%, #0f172a 100%)',
                borderRadius: '16px',
                padding: '20px',
                border: '2px solid #f9731650',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💓</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '5px' }}>HEART RATE</div>
                <div style={{ color: '#fb923c', fontWeight: 800, fontSize: '1.6rem' }}>79 bpm</div>
                <div style={{ 
                  background: '#22c55e30', 
                  color: '#86efac', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  marginTop: '8px',
                  display: 'inline-block'
                }}>
                  ✓ NORMAL
                </div>
              </div>

              {/* A1C Progress Card */}
              <div style={{
                background: 'linear-gradient(135deg, #3b82f620 0%, #0f172a 100%)',
                borderRadius: '16px',
                padding: '20px',
                border: '2px solid #3b82f650',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🎯</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '5px' }}>A1C PREDICTION</div>
                <div style={{ color: '#60a5fa', fontWeight: 800, fontSize: '1.6rem' }}>7.0-7.5%</div>
                <div style={{ 
                  background: '#3b82f630', 
                  color: '#93c5fd', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  marginTop: '8px',
                  display: 'inline-block'
                }}>
                  FROM 11.5%
                </div>
              </div>

              {/* Daily Carbs Card */}
              <div style={{
                background: 'linear-gradient(135deg, #22c55e20 0%, #0f172a 100%)',
                borderRadius: '16px',
                padding: '20px',
                border: '2px solid #22c55e50',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🫐</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '5px' }}>DAILY CARBS</div>
                <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.6rem' }}>~7g</div>
                <div style={{ 
                  background: '#22c55e30', 
                  color: '#86efac', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  marginTop: '8px',
                  display: 'inline-block'
                }}>
                  CARNIVORE-LEVEL
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div style={{
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              border: '2px solid #10b981',
            }}>
              <h3 style={{ color: '#fff', margin: '0 0 15px 0', fontSize: '1.1rem' }}>
                📈 Your Progress at a Glance
              </h3>
              <div style={{ display: 'grid', gap: '10px' }}>
                <div style={{
                  background: '#0f172a80',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ color: '#d1fae5' }}>Blood Pressure</span>
                  <span style={{ color: '#22c55e', fontWeight: 700 }}>130/84 → 117/79 ✓</span>
                </div>
                <div style={{
                  background: '#0f172a80',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ color: '#d1fae5' }}>A1C (predicted)</span>
                  <span style={{ color: '#fbbf24', fontWeight: 700 }}>11.5% → ~7.25% 📉</span>
                </div>
                <div style={{
                  background: '#0f172a80',
                  padding: '12px 15px',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{ color: '#d1fae5' }}>Protocol Adherence</span>
                  <span style={{ color: '#22c55e', fontWeight: 700 }}>OMAD + Low-Sodium ✓</span>
                </div>
              </div>
            </div>

            {/* Today's Protocol Quick View */}
            <div style={{
              background: '#0f172a',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #334155',
            }}>
              <h3 style={{ color: '#e2e8f0', margin: '0 0 15px 0', fontSize: '1rem' }}>
                🍽️ Today's OMAD Dinner
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                textAlign: 'center',
              }}>
                <div style={{
                  background: '#1e293b',
                  padding: '12px',
                  borderRadius: '10px',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🫐</div>
                  <div style={{ color: '#f472b6', fontWeight: 700, fontSize: '0.85rem' }}>½ cup</div>
                  <div style={{ color: '#64748b', fontSize: '0.7rem' }}>Raspberries</div>
                </div>
                <div style={{
                  background: '#1e293b',
                  padding: '12px',
                  borderRadius: '10px',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🥩</div>
                  <div style={{ color: '#f87171', fontWeight: 700, fontSize: '0.85rem' }}>5 slices</div>
                  <div style={{ color: '#64748b', fontSize: '0.7rem' }}>Beef Sirloin</div>
                </div>
                <div style={{
                  background: '#1e293b',
                  padding: '12px',
                  borderRadius: '10px',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>🍗</div>
                  <div style={{ color: '#fb923c', fontWeight: 700, fontSize: '0.85rem' }}>12-16</div>
                  <div style={{ color: '#64748b', fontSize: '0.7rem' }}>Chicken Strips</div>
                </div>
              </div>
              <div style={{
                marginTop: '15px',
                padding: '10px',
                background: '#8b5cf620',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <span style={{ color: '#c4b5fd', fontSize: '0.85rem' }}>
                  💊 <strong>2 × 500mg Metformin ER</strong> mid-meal
                </span>
              </div>
            </div>
          </div>
        )}

        {/* BLOOD PRESSURE TAB */}
        {activeTab === 'bp' && (
          <div>
            {/* Current Reading */}
            <div style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              borderRadius: '20px',
              padding: '30px',
              marginBottom: '20px',
              textAlign: 'center',
              border: '3px solid #4ade80',
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)',
            }}>
              <div style={{ color: '#dcfce7', fontSize: '0.9rem', marginBottom: '10px' }}>CURRENT READING</div>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: '3rem', letterSpacing: '-2px' }}>
                117/79
              </div>
              <div style={{ color: '#bbf7d0', fontSize: '1.1rem', marginTop: '5px' }}>
                HR: 79 bpm
              </div>
              <div style={{
                background: '#ffffff30',
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginTop: '15px',
                display: 'inline-block',
              }}>
                ✓ OPTIMAL RANGE
              </div>
            </div>

            {/* BP Ranges Reference */}
            <div style={{
              background: '#0f172a',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              border: '1px solid #334155',
            }}>
              <h3 style={{ color: '#e2e8f0', margin: '0 0 15px 0', fontSize: '1rem' }}>
                📏 BP Categories
              </h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                {[
                  { range: '<120/80', label: 'Optimal', color: '#22c55e', yours: true },
                  { range: '120-129/<80', label: 'Elevated', color: '#fbbf24', yours: false },
                  { range: '130-139/80-89', label: 'Stage 1 Hypertension', color: '#f97316', yours: false },
                  { range: '≥140/≥90', label: 'Stage 2 Hypertension', color: '#ef4444', yours: false },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: item.yours ? `${item.color}20` : '#1e293b',
                    padding: '12px 15px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: item.yours ? `2px solid ${item.color}` : 'none',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: item.color,
                      }} />
                      <span style={{ color: '#e2e8f0', fontWeight: item.yours ? 700 : 400 }}>{item.range}</span>
                    </div>
                    <span style={{ color: item.color, fontSize: '0.85rem', fontWeight: 600 }}>
                      {item.label} {item.yours && '← YOU'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress from Before */}
            <div style={{
              background: '#0f172a',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              border: '2px solid #3b82f640',
            }}>
              <h3 style={{ color: '#60a5fa', margin: '0 0 15px 0', fontSize: '1rem' }}>
                📉 Your BP Improvement
              </h3>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '15px 0',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#f97316', fontSize: '0.8rem', marginBottom: '5px' }}>BEFORE</div>
                  <div style={{ color: '#fb923c', fontWeight: 800, fontSize: '1.5rem' }}>130/84</div>
                  <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Elevated</div>
                </div>
                <div style={{ fontSize: '2rem', color: '#22c55e' }}>→</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: '#22c55e', fontSize: '0.8rem', marginBottom: '5px' }}>NOW</div>
                  <div style={{ color: '#4ade80', fontWeight: 800, fontSize: '1.5rem' }}>117/79</div>
                  <div style={{ color: '#86efac', fontSize: '0.75rem' }}>Optimal ✓</div>
                </div>
              </div>
              <div style={{
                background: '#1e293b',
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'center',
                marginTop: '10px',
              }}>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  Systolic: <strong style={{ color: '#22c55e' }}>-13 mmHg</strong> • 
                  Diastolic: <strong style={{ color: '#22c55e' }}>-5 mmHg</strong>
                </span>
              </div>
            </div>

            {/* Why It Matters */}
            <div style={{
              background: '#1e293b',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #334155',
            }}>
              <h3 style={{ color: '#e2e8f0', margin: '0 0 15px 0', fontSize: '1rem' }}>
                💪 What This Means for You
              </h3>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { icon: '🫀', text: 'Lower cardiovascular strain' },
                  { icon: '🫘', text: 'Reduced kidney stress (supports eGFR 63)' },
                  { icon: '⚡', text: 'Better potassium management (5.7 elevated)' },
                  { icon: '🧂', text: 'Low-sodium protocol working' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: '#0f172a',
                    padding: '12px 15px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                    <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* A1C PROGRESS TAB */}
        {activeTab === 'a1c' && (
          <div>
            {/* Prediction Card */}
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '20px',
              padding: '25px',
              marginBottom: '20px',
              textAlign: 'center',
              border: '3px solid #60a5fa',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
            }}>
              <div style={{ color: '#bfdbfe', fontSize: '0.9rem', marginBottom: '10px' }}>APRIL 2026 PREDICTION</div>
              <div style={{ color: '#fff', fontWeight: 800, fontSize: '3rem' }}>
                7.0 - 7.5%
              </div>
              <div style={{ color: '#93c5fd', fontSize: '1rem', marginTop: '5px' }}>
                From 11.5% → <strong>~4 point drop</strong>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{
              background: '#0f172a',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              border: '1px solid #334155',
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '10px',
                fontSize: '0.85rem'
              }}>
                <span style={{ color: '#ef4444' }}>Started: 11.5%</span>
                <span style={{ color: '#22c55e' }}>Target: 7.0%</span>
              </div>
              <div style={{
                height: '24px',
                background: '#1e293b',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${Math.min(progressPercent, 100)}%`,
                  background: 'linear-gradient(90deg, #ef4444 0%, #f97316 30%, #fbbf24 60%, #22c55e 100%)',
                  borderRadius: '12px',
                  transition: 'width 1s ease-out',
                }} />
                <div style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}>
                  ~{Math.round(progressPercent)}% to goal
                </div>
              </div>
              <div style={{ 
                textAlign: 'center', 
                marginTop: '10px',
                color: '#94a3b8',
                fontSize: '0.85rem'
              }}>
                Predicted: <strong style={{ color: '#fbbf24' }}>7.25%</strong> (midpoint estimate)
              </div>
            </div>

            {/* Prediction Scenarios */}
            <div style={{
              background: '#0f172a',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              border: '1px solid #334155',
            }}>
              <h3 style={{ color: '#e2e8f0', margin: '0 0 15px 0', fontSize: '1rem' }}>
                🎯 Prediction Scenarios
              </h3>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { label: 'Conservative', range: '8.0-8.5%', desc: 'Still excellent (3+ point drop)', color: '#f97316' },
                  { label: 'Realistic', range: '7.0-7.5%', desc: 'Hit your target', color: '#22c55e', highlight: true },
                  { label: 'Optimistic', range: '6.5-7.0%', desc: 'Near non-diabetic range', color: '#3b82f6' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: item.highlight ? `${item.color}20` : '#1e293b',
                    padding: '15px',
                    borderRadius: '12px',
                    border: item.highlight ? `2px solid ${item.color}` : '1px solid #334155',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ color: item.color, fontWeight: 700, fontSize: '0.9rem' }}>{item.label}</div>
                        <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{item.desc}</div>
                      </div>
                      <div style={{ 
                        color: item.color, 
                        fontWeight: 800, 
                        fontSize: '1.3rem',
                        background: `${item.color}20`,
                        padding: '5px 12px',
                        borderRadius: '8px'
                      }}>
                        {item.range}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why This Prediction */}
            <div style={{
              background: '#1e293b',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #334155',
            }}>
              <h3 style={{ color: '#e2e8f0', margin: '0 0 15px 0', fontSize: '1rem' }}>
                🔬 Why I'm Confident
              </h3>
              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  { icon: '🥩', factor: '~7g carbs/day', impact: 'Virtually no glucose spikes' },
                  { icon: '⏰', factor: 'OMAD (23hr fast)', impact: 'Improved insulin sensitivity' },
                  { icon: '💊', factor: 'Metformin ER', impact: 'Reduces liver glucose output' },
                  { icon: '💧', factor: 'Hydration', impact: 'Supports kidney function' },
                  { icon: '📅', factor: '3 months', impact: 'Full red blood cell turnover' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: '#0f172a',
                    padding: '12px 15px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>{item.factor}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{item.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROTOCOL TAB */}
        {activeTab === 'protocol' && (
          <div>
            {/* OMAD Dinner */}
            <div style={{
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              borderRadius: '20px',
              padding: '25px',
              marginBottom: '20px',
              border: '3px solid #10b981',
            }}>
              <div style={{
                background: '#fbbf24',
                color: '#0f172a',
                padding: '5px 14px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 800,
                display: 'inline-block',
                marginBottom: '12px',
              }}>
                ⭐ DAILY OMAD DINNER
              </div>
              <h2 style={{ color: '#fff', margin: '0 0 20px 0', fontSize: '1.3rem' }}>
                Costco Low-Sodium Protocol
              </h2>

              <div style={{
                background: '#0f172a',
                borderRadius: '16px',
                padding: '20px',
              }}>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {/* Raspberries */}
                  <div style={{
                    background: '#1e293b',
                    padding: '15px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderLeft: '4px solid #ec4899',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.8rem' }}>🫐</span>
                      <div>
                        <div style={{ color: '#f472b6', fontWeight: 700 }}>Organic Raspberries</div>
                        <div style={{ color: '#64748b', fontSize: '0.8rem' }}>~7g net carbs</div>
                      </div>
                    </div>
                    <div style={{
                      background: '#ec489930',
                      color: '#f9a8d4',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                    }}>
                      ½ cup
                    </div>
                  </div>

                  {/* Beef */}
                  <div style={{
                    background: '#1e293b',
                    padding: '15px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderLeft: '4px solid #ef4444',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.8rem' }}>🥩</span>
                      <div>
                        <div style={{ color: '#f87171', fontWeight: 700 }}>Beef Sirloin Strips</div>
                        <div style={{ color: '#64748b', fontSize: '0.8rem' }}>~30g protein • 0g carbs</div>
                      </div>
                    </div>
                    <div style={{
                      background: '#ef444430',
                      color: '#fca5a5',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                    }}>
                      5 slices
                    </div>
                  </div>

                  {/* Chicken */}
                  <div style={{
                    background: '#1e293b',
                    padding: '15px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderLeft: '4px solid #f97316',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.8rem' }}>🍗</span>
                      <div>
                        <div style={{ color: '#fb923c', fontWeight: 700 }}>Chicken Strips</div>
                        <div style={{ color: '#64748b', fontSize: '0.8rem' }}>~77g protein • 0g carbs</div>
                      </div>
                    </div>
                    <div style={{
                      background: '#f9731630',
                      color: '#fdba74',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                    }}>
                      12-16 strips
                    </div>
                  </div>
                </div>

                {/* Macro Totals */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  marginTop: '20px',
                }}>
                  <div style={{
                    background: '#3b82f620',
                    padding: '12px',
                    borderRadius: '10px',
                    textAlign: 'center',
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>PROTEIN</div>
                    <div style={{ color: '#60a5fa', fontWeight: 800, fontSize: '1.4rem' }}>~107g</div>
                  </div>
                  <div style={{
                    background: '#22c55e20',
                    padding: '12px',
                    borderRadius: '10px',
                    textAlign: 'center',
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CARBS</div>
                    <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.4rem' }}>~7g</div>
                  </div>
                  <div style={{
                    background: '#fbbf2420',
                    padding: '12px',
                    borderRadius: '10px',
                    textAlign: 'center',
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>SODIUM</div>
                    <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.4rem' }}>~1350mg</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metformin */}
            <div style={{
              background: '#0f172a',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '20px',
              border: '2px solid #8b5cf640',
            }}>
              <h3 style={{ color: '#a78bfa', margin: '0 0 15px 0', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>💊</span> Metformin ER Protocol
              </h3>
              <div style={{
                background: 'linear-gradient(135deg, #8b5cf630 0%, #1e293b 100%)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #8b5cf6',
                textAlign: 'center',
              }}>
                <div style={{ color: '#c4b5fd', fontSize: '0.9rem', marginBottom: '8px' }}>Take with dinner</div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem' }}>
                  2 × Metformin ER 500mg = 1000mg
                </div>
              </div>
              <div style={{ 
                marginTop: '15px', 
                color: '#94a3b8', 
                fontSize: '0.85rem',
                textAlign: 'center'
              }}>
                Take mid-meal • Swallow whole (don't crush)
              </div>
            </div>

            {/* What to Avoid */}
            <div style={{
              background: '#ef444420',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #ef444440',
            }}>
              <h3 style={{ color: '#f87171', margin: '0 0 15px 0', fontSize: '1rem' }}>
                🚫 Avoided (High Sodium)
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {[
                  "Abbey's Brisket",
                  "El Pollo Loco",
                  "Costco Rotisserie",
                  "Drumsticks/Wings Tray",
                  "Sauces/Condiments",
                  "Pickles/Deli Sides",
                ].map((item, idx) => (
                  <div key={idx} style={{
                    background: '#0f172a',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    color: '#fca5a5',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <span>✗</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{
        background: '#0f172a',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #334155',
        marginTop: '20px',
      }}>
        <p style={{ margin: 0, color: '#64748b', fontSize: '0.8rem' }}>
          📅 Last Updated: February 4, 2026
        </p>
        <p style={{ margin: '8px 0 0 0', color: '#22c55e', fontWeight: 600, fontSize: '0.9rem' }}>
          🎯 Goal: A1C 11.5% → 7.0% by April 2026
        </p>
      </div>
    </div>
  );
}
