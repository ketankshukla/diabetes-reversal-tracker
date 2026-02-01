import React, { useState } from 'react';

export default function CostcoDrumstickPlan() {
  const [planType, setPlanType] = useState('eggs'); // 'eggs' or 'chicken'

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      fontFamily: "'Segoe UI', sans-serif",
      color: '#f1f5f9',
      padding: '0',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        padding: '25px 20px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>
          ⭐ A1C SUPER MEAL PLAN ⭐
        </h1>
        <p style={{ margin: '8px 0 0 0', opacity: 0.9 }}>
          Costco Wings & Drumsticks • 70g+ Protein • ~15g Carbs • Target: A1C 7%
        </p>
      </div>

      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>

        {/* Plan Selector */}
        <div style={{
          background: '#1e293b',
          borderRadius: '16px',
          padding: '15px',
          marginBottom: '20px',
          border: '1px solid #334155',
        }}>
          <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '10px', textAlign: 'center' }}>
            Choose Your Plan:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button
              onClick={() => setPlanType('eggs')}
              style={{
                background: planType === 'eggs' ? 'linear-gradient(135deg, #f97316, #ea580c)' : '#0f172a',
                border: planType === 'eggs' ? '2px solid #fb923c' : '2px solid #334155',
                borderRadius: '12px',
                padding: '15px 10px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>🥚🧀🫐</div>
              <div style={{ color: '#fff', fontWeight: 700, marginTop: '5px' }}>Eggs + Berries</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>74g protein</div>
            </button>
            <button
              onClick={() => setPlanType('chicken')}
              style={{
                background: planType === 'chicken' ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : '#0f172a',
                border: planType === 'chicken' ? '2px solid #f87171' : '2px solid #334155',
                borderRadius: '12px',
                padding: '15px 10px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>🍗🍗🍗</div>
              <div style={{ color: '#fff', fontWeight: 700, marginTop: '5px' }}>All Chicken</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>70g protein</div>
            </button>
          </div>
        </div>

        {/* EGGS + BERRIES PLAN */}
        {planType === 'eggs' && (
          <div style={{
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '20px',
            border: '3px solid #10b981',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
          }}>
            <h2 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.4rem', textAlign: 'center' }}>
              🥚 SUPER MEAL PLAN: Eggs + Berries
            </h2>
            <p style={{ color: '#d1fae5', margin: '0 0 20px 0', textAlign: 'center', fontSize: '0.85rem' }}>
              Best for variety • Stretches the chicken longer
            </p>

            {/* NOON MEAL */}
            <div style={{
              background: '#0f172a',
              borderRadius: '12px',
              padding: '15px',
              marginBottom: '15px',
              border: '2px solid #f97316',
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <div style={{ color: '#f97316', fontWeight: 800, fontSize: '1.1rem' }}>
                  ☀️ NOON (12pm)
                </div>
                <div style={{ 
                  background: '#f9731630', 
                  color: '#fb923c', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  + Metformin 1000mg
                </div>
              </div>
              
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🥚 <strong>4 boiled eggs</strong></span>
                  <span style={{ color: '#60a5fa', fontWeight: 600 }}>24g protein</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🧀 <strong>1" cheddar stick</strong></span>
                  <span style={{ color: '#60a5fa', fontWeight: 600 }}>7g protein</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🫐 <strong>1 cup raspberries</strong></span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>14g carbs</span>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '12px', 
                padding: '10px', 
                background: '#f9731620', 
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.1rem' }}>~32g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>PROTEIN</div>
                </div>
                <div>
                  <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>~29g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>FAT</div>
                </div>
                <div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '1.1rem' }}>~15g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CARBS</div>
                </div>
                <div>
                  <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>~430</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CAL</div>
                </div>
              </div>
            </div>

            {/* DINNER */}
            <div style={{
              background: '#0f172a',
              borderRadius: '12px',
              padding: '15px',
              marginBottom: '15px',
              border: '2px solid #8b5cf6',
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <div style={{ color: '#a78bfa', fontWeight: 800, fontSize: '1.1rem' }}>
                  🌙 DINNER (6pm)
                </div>
                <div style={{ 
                  background: '#8b5cf630', 
                  color: '#a78bfa', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  + Metformin 1000mg
                </div>
              </div>
              
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🍗🍗 <strong>2 small drumsticks</strong></span>
                  <span style={{ color: '#60a5fa', fontWeight: 600 }}>~22g protein</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🍗🍗🍗 <strong>3 small wings</strong></span>
                  <span style={{ color: '#60a5fa', fontWeight: 600 }}>~20g protein</span>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '12px', 
                padding: '10px', 
                background: '#8b5cf620', 
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.1rem' }}>~42g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>PROTEIN</div>
                </div>
                <div>
                  <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>~25g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>FAT</div>
                </div>
                <div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '1.1rem' }}>0g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CARBS</div>
                </div>
                <div>
                  <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>~420</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CAL</div>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '10px', 
                padding: '8px', 
                background: '#fbbf2420', 
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <span style={{ color: '#fef3c7', fontSize: '0.8rem' }}>
                  💡 <strong>5 pieces total</strong> — mix wings & drums however you like!
                </span>
              </div>
            </div>

            {/* Daily Totals - Eggs Plan */}
            <div style={{
              background: '#0f172a',
              borderRadius: '12px',
              padding: '15px',
              border: '2px solid #10b981',
            }}>
              <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1rem', marginBottom: '12px', textAlign: 'center' }}>
                📊 DAILY TOTALS
              </div>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '8px',
                textAlign: 'center'
              }}>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#60a5fa', fontWeight: 800, fontSize: '1.4rem' }}>~74g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>PROTEIN ✅</div>
                </div>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.4rem' }}>~54g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>FAT</div>
                </div>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.4rem' }}>~15g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>CARBS ✅</div>
                </div>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#f87171', fontWeight: 800, fontSize: '1.4rem' }}>~850</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>CALORIES</div>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '12px', 
                padding: '10px', 
                background: '#10b98120', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#86efac', fontSize: '0.85rem' }}>
                  🍗 <strong>Chicken usage:</strong> 5 pieces/day for dinner only
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ALL CHICKEN PLAN */}
        {planType === 'chicken' && (
          <div style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '20px',
            border: '3px solid #f87171',
            boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)',
          }}>
            <h2 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '1.4rem', textAlign: 'center' }}>
              🍗 SUPER MEAL PLAN: All Chicken
            </h2>
            <p style={{ color: '#fecaca', margin: '0 0 20px 0', textAlign: 'center', fontSize: '0.85rem' }}>
              Maximum simplicity • Chicken at both meals
            </p>

            {/* NOON MEAL - Chicken */}
            <div style={{
              background: '#0f172a',
              borderRadius: '12px',
              padding: '15px',
              marginBottom: '15px',
              border: '2px solid #f97316',
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <div style={{ color: '#f97316', fontWeight: 800, fontSize: '1.1rem' }}>
                  ☀️ NOON (12pm)
                </div>
                <div style={{ 
                  background: '#f9731630', 
                  color: '#fb923c', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  + Metformin 1000mg
                </div>
              </div>
              
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🍗 <strong>2 wings + 2 drumsticks</strong></span>
                  <span style={{ color: '#60a5fa', fontWeight: 600 }}>~34g protein</span>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🫐 <strong>1 cup raspberries</strong></span>
                  <span style={{ color: '#22c55e', fontWeight: 600 }}>14g carbs</span>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '12px', 
                padding: '10px', 
                background: '#f9731620', 
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.1rem' }}>~34g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>PROTEIN</div>
                </div>
                <div>
                  <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>~22g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>FAT</div>
                </div>
                <div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '1.1rem' }}>~16g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CARBS</div>
                </div>
                <div>
                  <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>~390</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CAL</div>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '10px', 
                padding: '8px', 
                background: '#fbbf2420', 
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <span style={{ color: '#fef3c7', fontSize: '0.8rem' }}>
                  💡 <strong>4 pieces total</strong> — need more than eggs plan to hit protein!
                </span>
              </div>
            </div>

            {/* DINNER - Chicken */}
            <div style={{
              background: '#0f172a',
              borderRadius: '12px',
              padding: '15px',
              marginBottom: '15px',
              border: '2px solid #8b5cf6',
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '12px'
              }}>
                <div style={{ color: '#a78bfa', fontWeight: 800, fontSize: '1.1rem' }}>
                  🌙 DINNER (6pm)
                </div>
                <div style={{ 
                  background: '#8b5cf630', 
                  color: '#a78bfa', 
                  padding: '4px 10px', 
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  + Metformin 1000mg
                </div>
              </div>
              
              <div style={{ display: 'grid', gap: '8px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: '#1e293b',
                  padding: '10px 12px',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#e2e8f0' }}>🍗 <strong>3 wings + 2 drumsticks</strong></span>
                  <span style={{ color: '#60a5fa', fontWeight: 600 }}>~40g protein</span>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '12px', 
                padding: '10px', 
                background: '#8b5cf620', 
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.1rem' }}>~40g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>PROTEIN</div>
                </div>
                <div>
                  <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>~25g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>FAT</div>
                </div>
                <div>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '1.1rem' }}>~2g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CARBS</div>
                </div>
                <div>
                  <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>~400</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>CAL</div>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '10px', 
                padding: '8px', 
                background: '#fbbf2420', 
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <span style={{ color: '#fef3c7', fontSize: '0.8rem' }}>
                  💡 <strong>5 pieces total</strong> — exactly what you had tonight!
                </span>
              </div>
            </div>

            {/* Daily Totals - Chicken Plan */}
            <div style={{
              background: '#0f172a',
              borderRadius: '12px',
              padding: '15px',
              border: '2px solid #f87171',
            }}>
              <div style={{ color: '#f87171', fontWeight: 800, fontSize: '1rem', marginBottom: '12px', textAlign: 'center' }}>
                📊 DAILY TOTALS
              </div>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '8px',
                textAlign: 'center'
              }}>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#60a5fa', fontWeight: 800, fontSize: '1.4rem' }}>~74g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>PROTEIN ✅</div>
                </div>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.4rem' }}>~47g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>FAT</div>
                </div>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.4rem' }}>~18g</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>CARBS ✅</div>
                </div>
                <div style={{ background: '#1e293b', padding: '10px 5px', borderRadius: '8px' }}>
                  <div style={{ color: '#f87171', fontWeight: 800, fontSize: '1.4rem' }}>~790</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}>CALORIES</div>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '12px', 
                padding: '10px', 
                background: '#f8717120', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ color: '#fca5a5', fontSize: '0.85rem' }}>
                  🍗 <strong>Chicken usage:</strong> 9 pieces/day = 20pc tray lasts ~2 days
                </div>
              </div>
            </div>

            {/* Note about this plan */}
            <div style={{ 
              marginTop: '15px', 
              padding: '12px', 
              background: '#0f172a', 
              borderRadius: '8px' 
            }}>
              <div style={{ color: '#fbbf24', fontWeight: 700, marginBottom: '5px' }}>💡 Why All Chicken Works:</div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: '#fecaca', fontSize: '0.85rem' }}>
                <li>Still keeps raspberries for fiber + nutrients</li>
                <li>~74g protein matches the Eggs plan</li>
                <li>Maximum simplicity — one protein source all day</li>
                <li>Goes through tray faster (~2 days vs ~4 days)</li>
              </ul>
            </div>
          </div>
        )}

        {/* Product Info */}
        <div style={{
          background: '#1e293b',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          border: '2px solid #dc2626',
        }}>
          <h2 style={{ color: '#f87171', margin: '0 0 15px 0', fontSize: '1.2rem' }}>
            🔥 Kirkland Garlic Pepper Seasoned Party Wings
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 15px 0' }}>
            Item #46481 • From deli warmer near rotisserie chickens
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
            gap: '10px' 
          }}>
            <div style={{ background: '#0f172a', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>🍗</div>
              <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>20 pieces</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>11 wings + 9 drums</div>
            </div>
            <div style={{ background: '#0f172a', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>⚖️</div>
              <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>2.37 lb</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Net weight</div>
            </div>
            <div style={{ background: '#0f172a', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>💵</div>
              <div style={{ color: '#f87171', fontWeight: 700, fontSize: '1.1rem' }}>$15.38</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>$6.49/lb</div>
            </div>
            <div style={{ background: '#0f172a', padding: '12px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>🔥</div>
              <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.9rem' }}>HOT & READY</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Deli warmer</div>
            </div>
          </div>
          
          {/* Protein per piece */}
          <div style={{
            marginTop: '15px',
            padding: '12px',
            background: '#0f172a',
            borderRadius: '8px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}>
            <div style={{ textAlign: 'center', padding: '8px', background: '#1e293b', borderRadius: '6px' }}>
              <div style={{ color: '#fbbf24', fontWeight: 700 }}>Wing</div>
              <div style={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: 700 }}>~6-7g protein</div>
            </div>
            <div style={{ textAlign: 'center', padding: '8px', background: '#1e293b', borderRadius: '6px' }}>
              <div style={{ color: '#fbbf24', fontWeight: 700 }}>Drumstick</div>
              <div style={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: 700 }}>~10-11g protein</div>
            </div>
          </div>

          <div style={{
            marginTop: '15px',
            padding: '12px',
            background: '#fbbf2420',
            borderRadius: '8px',
            border: '1px solid #fbbf2440',
          }}>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#fef3c7' }}>
              ⚠️ <strong>Note:</strong> Seasoning contains sugar, modified food starch & maltodextrin — adds ~1-2g carbs per serving. Still very low!
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div style={{
          background: '#1e293b',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          border: '1px solid #334155',
        }}>
          <h2 style={{ color: '#fbbf24', margin: '0 0 15px 0', fontSize: '1.2rem' }}>
            📊 Plan Comparison
          </h2>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ background: '#0f172a' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#94a3b8' }}>Plan</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#94a3b8' }}>Protein</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#94a3b8' }}>Carbs</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#94a3b8' }}>Pieces/Day</th>
                <th style={{ padding: '10px', textAlign: 'center', color: '#94a3b8' }}>Tray Lasts</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '10px', color: '#10b981' }}>🥚 Eggs + Berries</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#60a5fa', fontWeight: 700 }}>~74g</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#22c55e' }}>~17g</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#e2e8f0' }}>5 (dinner)</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#fbbf24' }}>~4 days</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', color: '#f87171' }}>🍗 All Chicken</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#60a5fa', fontWeight: 700 }}>~74g</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#22c55e' }}>~18g</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#e2e8f0' }}>9 (4+5)</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#fbbf24' }}>~2 days</td>
              </tr>
            </tbody>
          </table>

          <div style={{
            marginTop: '15px',
            padding: '12px',
            background: '#22c55e20',
            borderRadius: '8px',
          }}>
            <p style={{ margin: 0, color: '#86efac', fontSize: '0.85rem', textAlign: 'center' }}>
              ✅ Both plans hit <strong>~74g protein</strong> and <strong>&lt;20g carbs</strong> — choose based on preference!
            </p>
          </div>
        </div>

        {/* Metformin Timing */}
        <div style={{
          background: '#1e293b',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          border: '2px solid #8b5cf6',
        }}>
          <h2 style={{ color: '#a78bfa', margin: '0 0 15px 0', fontSize: '1.2rem' }}>
            💊 Metformin Timing
          </h2>
          
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ 
              background: '#0f172a', 
              padding: '15px', 
              borderRadius: '10px',
              borderLeft: '4px solid #fbbf24'
            }}>
              <div style={{ color: '#fbbf24', fontWeight: 700, marginBottom: '5px' }}>⚠️ Take MID-MEAL</div>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
                Eat half your food → Take Metformin 1000mg → Finish eating. This sandwiches the medication.
              </p>
            </div>

            <div style={{ 
              background: '#0f172a', 
              padding: '15px', 
              borderRadius: '10px',
              borderLeft: '4px solid #06b6d4'
            }}>
              <div style={{ color: '#06b6d4', fontWeight: 700, marginBottom: '5px' }}>💡 Remove Skin = Less GI Issues</div>
              <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.85rem' }}>
                Leaner chicken = less GI distress. Removing skin cuts ~5g fat per drumstick.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Savings */}
        <div style={{
          background: '#1e293b',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          border: '1px solid #334155',
        }}>
          <h2 style={{ color: '#22c55e', margin: '0 0 15px 0', fontSize: '1.2rem' }}>
            💰 Cost vs El Pollo Loco
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
            <div style={{ background: '#ef444420', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ color: '#fca5a5', fontSize: '0.8rem' }}>El Pollo Loco (8pc)</div>
              <div style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.5rem' }}>$18.99</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>per meal</div>
            </div>
            <div style={{ background: '#22c55e20', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
              <div style={{ color: '#86efac', fontSize: '0.8rem' }}>Costco (5 pieces)</div>
              <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.5rem' }}>~$3.85</div>
              <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>per dinner</div>
            </div>
          </div>

          <div style={{
            background: '#0f172a',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '15px',
          }}>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '8px' }}>Cost breakdown:</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
              <div style={{ color: '#e2e8f0' }}>• $15.38 ÷ 20 pieces = <strong style={{ color: '#fbbf24' }}>$0.77/piece</strong></div>
              <div style={{ color: '#e2e8f0' }}>• 5 pieces × $0.77 = <strong style={{ color: '#22c55e' }}>$3.85/dinner</strong></div>
            </div>
          </div>

          <div style={{
            padding: '15px',
            background: '#fbbf2420',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.3rem' }}>
              💰 Save ~$450/month
            </div>
            <div style={{ color: '#fef3c7', fontSize: '0.85rem' }}>
              ($18.99 - $3.85) × 30 days = $453 saved on dinners alone!
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div style={{
          background: '#dc262620',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px',
          border: '1px solid #dc262640',
        }}>
          <h2 style={{ color: '#f87171', margin: '0 0 15px 0', fontSize: '1.2rem' }}>
            ⚠️ Important Notes
          </h2>
          
          <div style={{ display: 'grid', gap: '10px' }}>
            {[
              { icon: '🔥', text: 'HOT from deli warmer near rotisserie chickens — Item #46481' },
              { icon: '🍗', text: 'Mixed tray: ~11 wings + ~9 drumsticks (varies by tray)' },
              { icon: '⚠️', text: 'Seasoning has sugar/starch — adds ~1-2g carbs per serving' },
              { icon: '❄️', text: 'Sell by tomorrow — eat today or refrigerate (2-3 days max)' },
              { icon: '🧂', text: 'Already well-seasoned — watch sodium with elevated potassium (5.7)' },
              { icon: '📦', text: 'Popular item — sells out fast, especially afternoons!' },
            ].map((note, idx) => (
              <div key={idx} style={{
                background: '#0f172a',
                padding: '10px 12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{ fontSize: '1.1rem' }}>{note.icon}</span>
                <span style={{ color: '#e2e8f0', fontSize: '0.85rem' }}>{note.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div style={{
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          borderRadius: '16px',
          padding: '25px',
          textAlign: 'center',
        }}>
          <h2 style={{ color: '#fff', margin: '0 0 10px 0', fontSize: '1.3rem' }}>
            🎯 The Goal
          </h2>
          <p style={{ color: '#d1fae5', fontSize: '1rem', margin: 0 }}>
            <span style={{ fontSize: '1.3rem', color: '#fff' }}>
              <strong>A1C 11.5% → 7%</strong> in 3 months
            </span><br/><br/>
            Either plan works — pick what fits your life!<br/>
            <span style={{ fontSize: '0.9rem', color: '#86efac' }}>
              70-74g protein • 14-15g carbs • ~$500/mo savings
            </span>
          </p>
        </div>

        <div style={{ 
          textAlign: 'center', 
          padding: '20px', 
          color: '#64748b', 
          fontSize: '0.8rem' 
        }}>
          📅 Created: January 31, 2026 • For Ketan's A1C Protocol
        </div>
      </div>
    </div>
  );
}
