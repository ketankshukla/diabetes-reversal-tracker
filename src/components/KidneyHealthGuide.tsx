'use client';

import React, { useState } from 'react';
import { 
  Droplets, 
  Heart, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  ChevronDown, 
  ChevronUp, 
  Beaker,
  Pill,
  Clock,
  TrendingUp,
  TrendingDown,
  Shield,
  Zap,
  Target,
  Calendar,
  Info,
  AlertCircle
} from 'lucide-react';

export default function KidneyHealthGuide() {
  const [expandedSection, setExpandedSection] = useState<string | null>('status');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <Droplets size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Kidney Health & GFR Recovery</h1>
              <p className="text-cyan-100 text-lg">How to get your eGFR from 63 back to normal (90+)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        
        {/* Current Status Card */}
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleSection('status')}
          >
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Activity className="text-amber-400" size={24} />
              Your Current Kidney Status
            </h2>
            {expandedSection === 'status' ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </div>
          
          {expandedSection === 'status' && (
            <div className="mt-4 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-xl p-4 border border-amber-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">eGFR</span>
                    <span className="text-xs bg-amber-500/30 text-amber-300 px-2 py-1 rounded-full">Stage 2 CKD</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-amber-400">63</span>
                    <span className="text-gray-400">mL/min</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Normal: 90+</p>
                </div>
                
                <div className="bg-black/30 rounded-xl p-4 border border-red-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Potassium</span>
                    <span className="text-xs bg-red-500/30 text-red-300 px-2 py-1 rounded-full flex items-center gap-1">
                      <AlertTriangle size={12} /> Elevated
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-red-400">5.7</span>
                    <span className="text-gray-400">mmol/L</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Normal: 3.5-5.0</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                <p className="text-green-300 flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span><strong>The Good News:</strong> At Stage 2, kidney function can often <strong>improve significantly</strong> if you address the root causes. Kidneys have remarkable regenerative capacity.</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Damage Process Visual */}
        <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl p-6 border border-red-500/30">
          <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
            <TrendingDown className="text-red-400" size={24} />
            What&apos;s Damaging Your Kidneys
          </h2>
          
          <p className="text-gray-300 mb-4">
            Your kidney reduction is almost certainly caused by <strong className="text-red-400">diabetic nephropathy</strong> - kidney damage from years of high blood sugar.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                <TrendingDown size={18} /> Damage Path
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-red-500/20 rounded-lg p-2 text-red-300">HIGH BLOOD SUGAR (A1C 11.5%)</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-red-500/15 rounded-lg p-2 text-red-200">Damages tiny blood vessels</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-red-500/10 rounded-lg p-2 text-red-200">Kidneys work harder</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-red-500/10 rounded-lg p-2 text-red-200">Filters become scarred</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-red-500/20 rounded-lg p-2 text-red-300">eGFR drops (yours: 63)</div>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                <TrendingUp size={18} /> Reversal Path
              </h3>
              <div className="space-y-2 text-sm">
                <div className="bg-green-500/20 rounded-lg p-2 text-green-300">BLOOD SUGAR NORMALIZED (&lt;6.5%)</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-green-500/15 rounded-lg p-2 text-green-200">Damage stops progressing</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-green-500/15 rounded-lg p-2 text-green-200">Inflammation reduces</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-green-500/15 rounded-lg p-2 text-green-200">Kidney tissue heals</div>
                <div className="text-center text-gray-500">↓</div>
                <div className="bg-green-500/20 rounded-lg p-2 text-green-300">eGFR IMPROVES (75-90+)</div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Pillars Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6">
            <Shield className="text-purple-400" size={28} />
            The 7 Pillars of Kidney Recovery
          </h2>

          {/* Pillar 1: Blood Sugar */}
          <div className="bg-black/30 rounded-xl p-5 mb-4 border border-green-500/20">
            <h3 className="text-lg font-bold text-green-400 flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
              BLOOD SUGAR CONTROL (Most Important - 80% of the battle)
            </h3>
            <div className="grid md:grid-cols-3 gap-3 mb-3">
              <div className="bg-green-500/10 rounded-lg p-3">
                <div className="flex items-center gap-2 text-green-400 font-medium">
                  <CheckCircle size={16} /> Zero carbs
                </div>
                <p className="text-xs text-gray-400 mt-1">Stops glucose damage immediately</p>
              </div>
              <div className="bg-green-500/10 rounded-lg p-3">
                <div className="flex items-center gap-2 text-green-400 font-medium">
                  <CheckCircle size={16} /> Metformin
                </div>
                <p className="text-xs text-gray-400 mt-1">Reduces insulin resistance</p>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-3">
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                  <Target size={16} /> A1C dropping
                </div>
                <p className="text-xs text-gray-400 mt-1">Every 1% drop = ~25% less damage</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-3 text-sm">
              <p className="text-gray-300"><strong>Expected benefit:</strong></p>
              <ul className="text-gray-400 space-y-1 mt-2">
                <li>• A1C 11.5% → 8%: Damage progression <strong className="text-amber-400">STOPS</strong></li>
                <li>• A1C 8% → 6.5%: Kidneys <strong className="text-green-400">begin healing</strong></li>
                <li>• A1C &lt;6%: <strong className="text-cyan-400">Maximum recovery potential</strong></li>
              </ul>
            </div>
          </div>

          {/* Pillar 2: Hydration */}
          <div className="bg-black/30 rounded-xl p-5 mb-4 border border-cyan-500/20">
            <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
              HYDRATION (Critical for Kidney Function)
            </h3>
            <div className="grid md:grid-cols-3 gap-3 mb-3">
              <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-cyan-400">80-100 oz</p>
                <p className="text-xs text-gray-400">Daily water (2.5-3L)</p>
              </div>
              <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-cyan-400">8-12 oz</p>
                <p className="text-xs text-gray-400">Every 1-2 hours</p>
              </div>
              <div className="bg-cyan-500/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-cyan-400">16-20 oz</p>
                <p className="text-xs text-gray-400">First thing AM</p>
              </div>
            </div>
            <div className="bg-amber-500/10 rounded-lg p-3 text-sm">
              <p className="text-amber-300 flex items-start gap-2">
                <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
                <span><strong>Signs of dehydration:</strong> Dark yellow urine, urinating &lt;6x/day, fatigue, headaches</span>
              </p>
            </div>
          </div>

          {/* Pillar 3: Blood Pressure */}
          <div className="bg-black/30 rounded-xl p-5 mb-4 border border-pink-500/20">
            <h3 className="text-lg font-bold text-pink-400 flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
              BLOOD PRESSURE CONTROL
            </h3>
            <p className="text-gray-300 mb-3">High blood pressure is the #2 kidney killer after diabetes.</p>
            <div className="bg-pink-500/10 rounded-lg p-4 mb-3">
              <p className="text-pink-300 font-bold text-lg">Target: &lt;130/80 mmHg (ideally &lt;120/80)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="bg-black/30 rounded-lg p-3">
                <p className="text-gray-400 font-medium mb-2">BP-lowering strategies:</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• Weight loss (10 lbs = 5-10 point BP drop)</li>
                  <li>• Moderate sodium</li>
                  <li>• Magnesium glycinate</li>
                  <li>• Walking/exercise</li>
                </ul>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-3">
                <p className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                  <Info size={14} /> Buy a home BP monitor (~$30)
                </p>
                <p className="text-gray-400 text-xs">Check it regularly and track your readings</p>
              </div>
            </div>
          </div>

          {/* Pillar 4: Protein */}
          <div className="bg-black/30 rounded-xl p-5 mb-4 border border-emerald-500/20">
            <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
              PROTEIN INTAKE (Your Level is Good!)
            </h3>
            <div className="bg-emerald-500/10 rounded-lg p-4 mb-3">
              <p className="text-gray-300 mb-2">There&apos;s a myth protein damages kidneys - <strong className="text-emerald-400">only true for Stage 4-5</strong>.</p>
              <div className="grid md:grid-cols-3 gap-3 mt-3">
                <div className="bg-black/30 rounded-lg p-2 text-center">
                  <p className="text-emerald-400 font-bold">4 eggs</p>
                  <p className="text-xs text-gray-500">~24g protein ✅</p>
                </div>
                <div className="bg-black/30 rounded-lg p-2 text-center">
                  <p className="text-emerald-400 font-bold">0.5 lb brisket</p>
                  <p className="text-xs text-gray-500">~50g protein ✅</p>
                </div>
                <div className="bg-black/30 rounded-lg p-2 text-center">
                  <p className="text-emerald-400 font-bold">~74g/day</p>
                  <p className="text-xs text-gray-500">Perfect! ✅</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400">Recommended: 60-100g/day. Stay around 70-90g until eGFR improves.</p>
          </div>

          {/* Pillar 5: Potassium */}
          <div className="bg-black/30 rounded-xl p-5 mb-4 border border-orange-500/20">
            <h3 className="text-lg font-bold text-orange-400 flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</span>
              POTASSIUM MANAGEMENT (Important for You!)
            </h3>
            <div className="bg-red-500/10 rounded-lg p-3 mb-3">
              <p className="text-red-300 flex items-center gap-2">
                <AlertTriangle size={18} />
                Your potassium is 5.7 mmol/L - <strong>elevated, needs attention!</strong>
              </p>
              <p className="text-xs text-gray-400 mt-1">High potassium + reduced kidney function = heart rhythm risk</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-red-400 font-bold mb-2 text-sm">❌ Foods to AVOID/LIMIT:</p>
                <div className="space-y-1 text-xs">
                  <div className="bg-red-500/10 rounded p-2 flex justify-between">
                    <span className="text-gray-300">Bananas</span>
                    <span className="text-red-400">422mg - Avoid</span>
                  </div>
                  <div className="bg-red-500/10 rounded p-2 flex justify-between">
                    <span className="text-gray-300">Potatoes</span>
                    <span className="text-red-400">900mg - Avoid</span>
                  </div>
                  <div className="bg-red-500/10 rounded p-2 flex justify-between">
                    <span className="text-gray-300">Spinach</span>
                    <span className="text-red-400">840mg - Avoid</span>
                  </div>
                  <div className="bg-red-500/10 rounded p-2 flex justify-between">
                    <span className="text-gray-300">Lite Salt</span>
                    <span className="text-red-400 font-bold">AVOID!</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-green-400 font-bold mb-2 text-sm">✅ Your diet is GOOD:</p>
                <div className="space-y-1 text-xs">
                  <div className="bg-green-500/10 rounded p-2 flex justify-between">
                    <span className="text-gray-300">Eggs (4)</span>
                    <span className="text-green-400">~280mg ✓</span>
                  </div>
                  <div className="bg-green-500/10 rounded p-2 flex justify-between">
                    <span className="text-gray-300">Brisket</span>
                    <span className="text-green-400">~400mg ✓</span>
                  </div>
                  <div className="bg-green-500/10 rounded p-2 flex justify-between">
                    <span className="text-gray-300">Ginger tea</span>
                    <span className="text-green-400">~50mg ✓</span>
                  </div>
                  <div className="bg-green-500/10 rounded p-2 flex justify-between font-bold">
                    <span className="text-gray-300">Daily total</span>
                    <span className="text-green-400">~730mg ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 6: Sodium */}
          <div className="bg-black/30 rounded-xl p-5 mb-4 border border-blue-500/20">
            <h3 className="text-lg font-bold text-blue-400 flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">6</span>
              SODIUM (Moderate, Don&apos;t Eliminate)
            </h3>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-400">1,500-2,300mg</p>
                <p className="text-xs text-gray-400">Daily goal</p>
              </div>
              <div className="bg-blue-500/10 rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-blue-400">500-750mg</p>
                <p className="text-xs text-gray-400">Per meal</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">On zero-carb, you need some sodium. Salt food to taste, but don&apos;t add extra salt to water.</p>
          </div>

          {/* Pillar 7: Supplements */}
          <div className="bg-black/30 rounded-xl p-5 border border-violet-500/20">
            <h3 className="text-lg font-bold text-violet-400 flex items-center gap-2 mb-3">
              <span className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm font-bold">7</span>
              SUPPLEMENTS FOR KIDNEY HEALTH
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-green-400 font-bold mb-2 flex items-center gap-2">
                  <CheckCircle size={16} /> TAKE THESE (Kidney-Protective)
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="bg-green-500/10 rounded-lg p-2">
                    <span className="text-green-300 font-medium">Omega-3 Fish Oil</span>
                    <span className="text-gray-400 text-xs block">2,000-3,000mg - Reduces kidney inflammation</span>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-2">
                    <span className="text-green-300 font-medium">Vitamin D3</span>
                    <span className="text-gray-400 text-xs block">2,000-4,000 IU - Protects kidneys</span>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-2">
                    <span className="text-green-300 font-medium">Magnesium Glycinate</span>
                    <span className="text-gray-400 text-xs block">300-400mg bedtime - Supports kidney function</span>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-2">
                    <span className="text-green-300 font-medium">CoQ10</span>
                    <span className="text-gray-400 text-xs block">100-200mg - Protects mitochondria</span>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-2">
                    <span className="text-green-300 font-medium">B12 (Methylcobalamin)</span>
                    <span className="text-gray-400 text-xs block">1,000mcg - Metformin depletes it</span>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-red-400 font-bold mb-2 flex items-center gap-2">
                  <XCircle size={16} /> AVOID THESE
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="bg-red-500/10 rounded-lg p-2">
                    <span className="text-red-300 font-medium">Creatine</span>
                    <span className="text-gray-400 text-xs block">Stresses kidneys</span>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-2">
                    <span className="text-red-300 font-medium">Potassium supplements</span>
                    <span className="text-gray-400 text-xs block">Already elevated</span>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-2">
                    <span className="text-red-300 font-medium">High-dose Vitamin A</span>
                    <span className="text-gray-400 text-xs block">Can accumulate</span>
                  </div>
                  <div className="bg-red-500/10 rounded-lg p-2">
                    <span className="text-red-300 font-medium">Herbal &quot;kidney cleanses&quot;</span>
                    <span className="text-gray-400 text-xs block">Unregulated, can be toxic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medications to Avoid */}
        <div className="bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-2xl p-6 border border-red-500/30">
          <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
            <XCircle className="text-red-400" size={24} />
            Medications to AVOID
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-black/30 rounded-xl p-4">
              <p className="text-red-400 font-bold">NSAIDs</p>
              <p className="text-gray-400 text-sm">Ibuprofen (Advil), Naproxen (Aleve)</p>
              <p className="text-green-400 text-xs mt-1">✓ Use Tylenol instead</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4">
              <p className="text-red-400 font-bold">Contrast Dye</p>
              <p className="text-gray-400 text-sm">Used in CT scans, angiograms</p>
              <p className="text-green-400 text-xs mt-1">✓ Request kidney-safe protocols</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4">
              <p className="text-red-400 font-bold">Certain Antibiotics</p>
              <p className="text-gray-400 text-sm">Gentamicin, some others</p>
              <p className="text-green-400 text-xs mt-1">✓ Doctor will choose safe options</p>
            </div>
            <div className="bg-black/30 rounded-xl p-4">
              <p className="text-red-400 font-bold">PPIs Long-term</p>
              <p className="text-gray-400 text-sm">Prilosec, Nexium</p>
              <p className="text-green-400 text-xs mt-1">✓ Use short-term only</p>
            </div>
          </div>
          <div className="bg-amber-500/20 rounded-lg p-3 mt-4">
            <p className="text-amber-300 flex items-center gap-2 text-sm">
              <AlertTriangle size={16} />
              <strong>Always tell any doctor your eGFR is 63</strong> so they avoid kidney-toxic medications.
            </p>
          </div>
        </div>

        {/* Recovery Timeline */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-teal-600/20 rounded-2xl p-6 border border-cyan-500/30">
          <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
            <Clock className="text-cyan-400" size={24} />
            Your Kidney Recovery Timeline
          </h2>
          <div className="space-y-3">
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-4">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-xl flex flex-col items-center justify-center">
                <span className="text-cyan-400 font-bold text-lg">1-2</span>
                <span className="text-gray-500 text-xs">months</span>
              </div>
              <div>
                <p className="text-white font-medium">Blood sugar normalizing, damage stops</p>
                <p className="text-cyan-400">eGFR: 63 → 63-65 (stable)</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-4">
              <div className="w-20 h-20 bg-teal-500/20 rounded-xl flex flex-col items-center justify-center">
                <span className="text-teal-400 font-bold text-lg">3-4</span>
                <span className="text-gray-500 text-xs">months</span>
              </div>
              <div>
                <p className="text-white font-medium">Inflammation reducing, early healing</p>
                <p className="text-teal-400">eGFR: 65 → 68-72</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-4">
              <div className="w-20 h-20 bg-green-500/20 rounded-xl flex flex-col items-center justify-center">
                <span className="text-green-400 font-bold text-lg">6</span>
                <span className="text-gray-500 text-xs">months</span>
              </div>
              <div>
                <p className="text-white font-medium">Significant healing if A1C &lt;7%</p>
                <p className="text-green-400">eGFR: 70 → 75-80</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-xl p-4 flex items-center gap-4">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-xl flex flex-col items-center justify-center">
                <span className="text-emerald-400 font-bold text-lg">12</span>
                <span className="text-gray-500 text-xs">months</span>
              </div>
              <div>
                <p className="text-white font-medium">Maximum recovery potential</p>
                <p className="text-emerald-400">eGFR: Could reach 80-90+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Protocol */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-6 border border-indigo-500/30">
          <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
            <Calendar className="text-indigo-400" size={24} />
            Daily Protocol for Kidney Health
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                <Zap size={18} /> Morning
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-amber-500/50"></div>
                  16-20 oz water upon waking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-amber-500/50"></div>
                  4 boiled eggs + Metformin
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-amber-500/50"></div>
                  Ginger tea for nausea
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-amber-500/50"></div>
                  Supplements: Omega-3, D3, B12, CoQ10
                </li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <Droplets size={18} /> Throughout Day
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-cyan-500/50"></div>
                  8-12 oz water every 1-2 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-cyan-500/50"></div>
                  Total water: 80-100 oz
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-cyan-500/50"></div>
                  Monitor urine color (light yellow)
                </li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                <Activity size={18} /> Evening
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-purple-500/50"></div>
                  0.5 lb lean brisket + Metformin
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-purple-500/50"></div>
                  Ginger tea if needed
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-purple-500/50"></div>
                  Salt food (regular salt, NOT Lite Salt)
                </li>
              </ul>
            </div>
            
            <div className="bg-black/30 rounded-xl p-4">
              <h3 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                <Pill size={18} /> Bedtime & Weekly
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-indigo-500/50"></div>
                  Magnesium Glycinate 400mg
                </li>
                <li className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-700">
                  <div className="w-4 h-4 rounded border border-indigo-500/50"></div>
                  Weekly: Check blood pressure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-indigo-500/50"></div>
                  Weekly: Weigh yourself (Saturday AM)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-gradient-to-r from-rose-600/20 to-red-600/20 rounded-2xl p-6 border border-rose-500/30">
          <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
            <AlertCircle className="text-rose-400" size={24} />
            Warning Signs - Contact Doctor If:
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-black/30 rounded-lg p-3 flex items-center gap-3">
              <XCircle className="text-red-400 flex-shrink-0" size={20} />
              <span className="text-gray-300">Swelling in ankles, feet, or face</span>
            </div>
            <div className="bg-black/30 rounded-lg p-3 flex items-center gap-3">
              <XCircle className="text-red-400 flex-shrink-0" size={20} />
              <span className="text-gray-300">Foamy or bubbly urine</span>
            </div>
            <div className="bg-black/30 rounded-lg p-3 flex items-center gap-3">
              <XCircle className="text-red-400 flex-shrink-0" size={20} />
              <span className="text-gray-300">Blood in urine</span>
            </div>
            <div className="bg-black/30 rounded-lg p-3 flex items-center gap-3">
              <XCircle className="text-red-400 flex-shrink-0" size={20} />
              <span className="text-gray-300">Significant decrease in urination</span>
            </div>
            <div className="bg-black/30 rounded-lg p-3 flex items-center gap-3">
              <XCircle className="text-red-400 flex-shrink-0" size={20} />
              <span className="text-gray-300">Persistent fatigue beyond normal</span>
            </div>
            <div className="bg-black/30 rounded-lg p-3 flex items-center gap-3">
              <XCircle className="text-red-400 flex-shrink-0" size={20} />
              <span className="text-gray-300">Irregular heartbeat (potassium issue)</span>
            </div>
          </div>
        </div>

        {/* Expected Outcome */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-2xl p-6 border border-emerald-500/30">
          <h2 className="text-xl font-bold text-white flex items-center gap-3 mb-4">
            <TrendingUp className="text-emerald-400" size={24} />
            Expected Outcome
          </h2>
          <p className="text-gray-300 mb-4">With your current zero-carb protocol + proper hydration + kidney-protective supplements:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Metric</th>
                  <th className="text-center py-2 text-gray-400">Now (Jan 2026)</th>
                  <th className="text-center py-2 text-gray-400">April 2026</th>
                  <th className="text-center py-2 text-gray-400">1 Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 text-white font-medium">A1C</td>
                  <td className="py-3 text-center text-red-400">11.5%</td>
                  <td className="py-3 text-center text-amber-400">7-8%</td>
                  <td className="py-3 text-center text-green-400">&lt;6.5%</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 text-white font-medium">eGFR</td>
                  <td className="py-3 text-center text-amber-400">63</td>
                  <td className="py-3 text-center text-cyan-400">65-68</td>
                  <td className="py-3 text-center text-green-400">75-85+</td>
                </tr>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 text-white font-medium">Potassium</td>
                  <td className="py-3 text-center text-red-400">5.7</td>
                  <td className="py-3 text-center text-amber-400">5.0-5.2</td>
                  <td className="py-3 text-center text-green-400">4.5-5.0</td>
                </tr>
                <tr>
                  <td className="py-3 text-white font-medium">Weight</td>
                  <td className="py-3 text-center text-gray-400">210 lbs</td>
                  <td className="py-3 text-center text-cyan-400">175-185</td>
                  <td className="py-3 text-center text-green-400">165-170</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
            <p className="text-green-300 text-lg flex items-start gap-3">
              <CheckCircle size={24} className="flex-shrink-0 mt-0.5" />
              <span><strong>Your kidneys CAN recover.</strong> The damage from diabetes is largely reversible at Stage 2 if blood sugar is controlled. You&apos;re already on the right path.</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm py-4">
          <p>Document created: January 2026</p>
          <p>For personal health tracking - consult your physician for medical decisions</p>
        </div>
      </div>
    </div>
  );
}
