"use client";

import React, { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface GradientCardProps extends CardProps {
  gradient: string;
}

export default function EgglessMealPlan() {
  const [beefNights, setBeefNights] = useState(3);
  const [extraChicken, setExtraChicken] = useState(false);
  const [weeks, setWeeks] = useState(2);

  // Calculations
  const dailyChickenServings = extraChicken ? 5 : 4;
  const chickenOnlyDays = 7 - beefNights;
  
  // Weekly servings
  const weeklyChickenFromChickenDays = chickenOnlyDays * dailyChickenServings;
  const weeklyChickenFromBeefDays = beefNights * (extraChicken ? 2 : 1); // 1 chicken serving on beef dinner nights (or 2 if extra)
  const weeklyChickenBreakfast = beefNights * 1; // breakfast still has 1 chicken on beef nights
  const totalWeeklyChicken = weeklyChickenFromChickenDays + weeklyChickenFromBeefDays + weeklyChickenBreakfast;
  const totalWeeklyBeef = beefNights * 2;
  
  // Shopping
  const chickenBags = Math.ceil((totalWeeklyChicken * weeks) / 5);
  const beefBoxes = Math.ceil((totalWeeklyBeef * weeks) / 5);
  const raspberryCups = weeks * 7; // 1 cup per day

  const Card = ({ children, className = '' }: CardProps) => (
    <div className={`bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/50 ${className}`}>
      {children}
    </div>
  );

  const GradientCard = ({ children, gradient, className = '' }: GradientCardProps) => (
    <div className={`bg-gradient-to-br ${gradient} rounded-2xl border border-white/10 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            🥗 Eggless Meal Plan
          </h1>
          <p className="text-slate-400 text-sm mt-1">Final Recommendation • Costco-focused • BP-friendly</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-4 space-y-6">
        
        {/* Hero - The Core Plan */}
        <GradientCard gradient="from-emerald-600/40 via-emerald-600/20 to-teal-600/30" className="p-6">
          <div className="text-center mb-6">
            <span className="text-5xl">🎯</span>
            <h2 className="text-2xl font-bold text-emerald-200 mt-2">The Daily Plan</h2>
            <p className="text-emerald-100/60 text-sm">Stick to this every day</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Breakfast */}
            <div className="bg-slate-900/60 rounded-xl p-5 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🌅</span>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">Breakfast</h3>
                  <span className="text-cyan-200/60 text-sm">Light</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🫐</span>
                  <span className="text-white">½ cup raspberries</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍗</span>
                  <div>
                    <span className="text-white">1 serving chicken</span>
                    <span className="text-slate-400 text-sm block">≈ 3-4 strips</span>
                  </div>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-700">
                <span className="text-cyan-300/80 text-sm">~260 mg sodium</span>
              </div>
            </div>

            {/* Dinner */}
            <div className="bg-slate-900/60 rounded-xl p-5 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🌙</span>
                <div>
                  <h3 className="text-xl font-bold text-emerald-300">Dinner</h3>
                  <span className="text-emerald-200/60 text-sm">Big</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🫐</span>
                  <span className="text-white">½ cup raspberries</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍗🍗🍗</span>
                  <div>
                    <span className="text-white">3 servings chicken</span>
                    <span className="text-slate-400 text-sm block">≈ 9-12 strips</span>
                  </div>
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-700">
                <span className="text-emerald-300/80 text-sm">~780 mg sodium</span>
              </div>
            </div>
          </div>

          {/* Daily Total */}
          <div className="mt-6 bg-slate-900/80 rounded-xl p-4 text-center">
            <div className="text-slate-400 text-sm mb-1">Daily Total (chicken-only day)</div>
            <div className="flex items-center justify-center gap-6">
              <div>
                <span className="text-3xl font-bold text-emerald-400">4</span>
                <span className="text-emerald-300 ml-2">chicken servings</span>
              </div>
              <div className="text-slate-600">|</div>
              <div>
                <span className="text-3xl font-bold text-cyan-400">~1040</span>
                <span className="text-cyan-300 ml-2">mg sodium</span>
              </div>
            </div>
          </div>
        </GradientCard>

        {/* Raspberries Reminder */}
        <GradientCard gradient="from-pink-600/30 to-rose-600/20" className="p-5">
          <div className="flex items-center gap-4">
            <span className="text-5xl">🫐</span>
            <div>
              <h3 className="text-xl font-bold text-pink-300">Every Single Meal</h3>
              <p className="text-pink-100">½ cup organic raspberries with breakfast AND dinner</p>
              <p className="text-pink-200/50 text-sm mt-1">= 1 cup total per day</p>
            </div>
          </div>
        </GradientCard>

        {/* Optional Beef Variety */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🥩</span>
            <div>
              <h2 className="text-xl font-bold text-amber-300">Optional: Beef Dinner</h2>
              <p className="text-amber-200/60 text-sm">Use 2-4 nights per week for variety (not required)</p>
            </div>
          </div>

          <div className="bg-amber-500/10 rounded-xl p-5 border border-amber-500/30">
            <h4 className="text-amber-200 font-semibold mb-3">Beef Dinner Swap</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3">
                <span className="text-xl">🫐</span>
                <span className="text-white">½ cup raspberries</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🥩🥩</span>
                <div>
                  <span className="text-white">2 servings beef</span>
                  <span className="text-slate-400 text-sm block">≈ 10 slices</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">🍗</span>
                <div>
                  <span className="text-white">1 serving chicken</span>
                  <span className="text-slate-400 text-sm block">≈ 3-4 strips</span>
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-amber-500/30">
              <span className="text-amber-300/80 text-sm">Dinner sodium: ~880 mg</span>
              <span className="text-slate-500 text-sm ml-2">((2 × 310) + 260)</span>
            </div>
          </div>
        </Card>

        {/* Hunger / Muscle Section */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💪</span>
            <div>
              <h2 className="text-xl font-bold text-violet-300">Feeling Hungry?</h2>
              <p className="text-violet-200/60 text-sm">Or worried about muscle loss</p>
            </div>
          </div>

          <div className="bg-violet-500/10 rounded-xl p-5 border border-violet-500/30">
            <div className="flex items-start gap-4">
              <span className="text-3xl">➕</span>
              <div>
                <h4 className="text-violet-200 font-semibold">Add +1 chicken serving to dinner</h4>
                <p className="text-slate-400 text-sm mt-1">≈ 3-4 extra strips • +260 mg sodium</p>
                <p className="text-violet-300/60 text-sm mt-2">Keep breakfast light if you get nausea/bloating in the morning</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Sodium Guide */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">🧂</span>
            <div>
              <h2 className="text-xl font-bold text-cyan-300">Sodium Reference</h2>
              <p className="text-cyan-200/60 text-sm">Keep BP predictable</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30 text-center">
              <span className="text-3xl">🍗</span>
              <div className="text-emerald-200 font-medium mt-2">Chicken (per serving)</div>
              <div className="text-white font-bold text-2xl">260 mg</div>
            </div>
            <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30 text-center">
              <span className="text-3xl">🥩</span>
              <div className="text-amber-200 font-medium mt-2">Beef (per serving)</div>
              <div className="text-white font-bold text-2xl">310 mg</div>
            </div>
          </div>

          <div className="mt-4 bg-slate-900/60 rounded-xl p-4">
            <p className="text-slate-300 text-sm">
              <span className="text-yellow-400">⚠️</span> If you add salty items (cheese, sauces, pickles, deli foods), sodium adds up fast — keep those minimal.
            </p>
          </div>
        </Card>

        {/* Shopping Calculator */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">🛒</span>
            <div>
              <h2 className="text-xl font-bold text-blue-300">Shopping Calculator</h2>
              <p className="text-blue-200/60 text-sm">So you don&apos;t keep going to Costco</p>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4 mb-6">
            <div className="bg-slate-900/60 rounded-xl p-4">
              <label className="text-slate-300 text-sm block mb-2">How many weeks?</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map(w => (
                  <button
                    key={w}
                    onClick={() => setWeeks(w)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                      weeks === w
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-4">
              <label className="text-slate-300 text-sm block mb-2">Beef dinners per week?</label>
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map(n => (
                  <button
                    key={n}
                    onClick={() => setBeefNights(n)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-all ${
                      beefNights === n
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 rounded-xl p-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={extraChicken}
                  onChange={(e) => setExtraChicken(e.target.checked)}
                  className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-violet-500 focus:ring-violet-500"
                />
                <span className="text-slate-300">Add +1 chicken serving to dinner (hunger/muscle)</span>
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="grid gap-4 sm:grid-cols-2">
            <GradientCard gradient="from-emerald-600/30 to-emerald-500/10" className="p-5 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🍗</span>
                <span className="text-emerald-200 font-medium">Chicken Strips</span>
              </div>
              <div className="text-4xl font-bold text-white">{chickenBags} bags</div>
              <div className="text-emerald-300/60 text-sm mt-1">
                {totalWeeklyChicken * weeks} servings • ~5 per bag
              </div>
            </GradientCard>

            <GradientCard gradient="from-amber-600/30 to-amber-500/10" className="p-5 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🥩</span>
                <span className="text-amber-200 font-medium">Beef Sirloin</span>
              </div>
              <div className="text-4xl font-bold text-white">{beefBoxes} boxes</div>
              <div className="text-amber-300/60 text-sm mt-1">
                {totalWeeklyBeef * weeks} servings • ~5 per box
              </div>
            </GradientCard>

            <GradientCard gradient="from-pink-600/30 to-pink-500/10" className="p-5 border border-pink-500/30 sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🫐</span>
                  <span className="text-pink-200 font-medium">Raspberries</span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">{raspberryCups} cups</div>
                  <div className="text-pink-300/60 text-sm">1 cup/day × {weeks * 7} days</div>
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Weekly Breakdown */}
          <div className="mt-4 bg-slate-900/60 rounded-xl p-4">
            <div className="text-slate-400 text-sm mb-2">Weekly breakdown</div>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-emerald-300">🍗 {totalWeeklyChicken} chicken/week</span>
              <span className="text-amber-300">🥩 {totalWeeklyBeef} beef/week</span>
              <span className="text-pink-300">🫐 7 cups/week</span>
            </div>
          </div>
        </Card>

        {/* Storage */}
        <Card className="p-5">
          <div className="flex items-center gap-4">
            <span className="text-4xl">❄️</span>
            <div>
              <h3 className="text-lg font-bold text-cyan-300">Storage Tip</h3>
              <p className="text-slate-300">Keep 1-2 weeks in the fridge, freeze the rest</p>
            </div>
          </div>
        </Card>

        {/* Serving Reference */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-4xl">📏</span>
            <div>
              <h2 className="text-xl font-bold text-slate-200">Quick Serving Reference</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-emerald-400 font-semibold flex items-center gap-2">
                <span>🍗</span> Chicken Strips
              </h4>
              <div className="bg-slate-900/60 rounded-lg p-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">1 serving</span><span className="text-white">3-4 strips</span></div>
              </div>
              <div className="bg-slate-900/60 rounded-lg p-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">3 servings</span><span className="text-white">9-12 strips</span></div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-amber-400 font-semibold flex items-center gap-2">
                <span>🥩</span> Beef Sirloin
              </h4>
              <div className="bg-slate-900/60 rounded-lg p-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">1 serving</span><span className="text-white">5 slices</span></div>
              </div>
              <div className="bg-slate-900/60 rounded-lg p-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">2 servings</span><span className="text-white">10 slices</span></div>
              </div>
              <div className="text-slate-500 text-xs mt-1">Box = ~25 slices total (5 servings)</div>
            </div>
          </div>
        </Card>

        {/* Drinks */}
        <Card className="p-5">
          <div className="flex items-center gap-4">
            <span className="text-4xl">💧</span>
            <div>
              <h3 className="text-lg font-bold text-cyan-300">Drinks</h3>
              <p className="text-slate-300">Water • Unsweetened tea • Black coffee</p>
              <p className="text-slate-500 text-sm mt-1">No sugar</p>
            </div>
          </div>
        </Card>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-600 text-sm">
        <p>🥗 Eggless Meal Plan • Final Recommendation</p>
        <p className="text-slate-700 mt-1">Costco-focused • Low-carb • BP-friendly</p>
      </footer>
    </div>
  );
}
