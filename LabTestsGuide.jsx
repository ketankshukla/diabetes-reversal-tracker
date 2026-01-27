import React, { useState } from 'react';
import { FlaskConical, Heart, Droplets, Activity, TrendingUp, ChevronDown, ChevronUp, Calendar, DollarSign, AlertTriangle, CheckCircle, Info, Beaker, ShoppingCart } from 'lucide-react';

export default function LabTestsGuide() {
  const [expandedTest, setExpandedTest] = useState(null);
  const [cart, setCart] = useState({
    a1c: true,
    cmp: true,
    microalbumin: true,
    lipid: true,
    homair: true
  });

  const toggleCart = (testId) => {
    setCart(prev => ({ ...prev, [testId]: !prev[testId] }));
  };

  const tests = [
    {
      id: 'a1c',
      name: 'A1c Test with eAG',
      searchTerm: 'hemoglobin a1c',
      price: 23.95,
      icon: Activity,
      color: 'red',
      frequency: 'Every 3 months',
      nextDue: 'April 2026',
      category: 'Diabetes Monitoring',
      description: 'The Hemoglobin A1c test measures your average blood sugar levels over the past 2-3 months. It shows how well your diabetes is being controlled and whether your treatment plan is working.',
      whyYouNeedIt: [
        'Your A1C is currently 11.5% — severely elevated (target is <7%)',
        'Tracks whether Metformin and diet changes are working',
        'Shows long-term blood sugar control, not just daily fluctuations',
        'Helps predict risk of diabetes complications'
      ],
      whenToTake: 'Every 3 months while A1C is above 7%. Once stabilized, can reduce to every 6 months.',
      preparation: 'No fasting required. Can be taken any time of day.',
      markers: [
        {
          name: 'Hemoglobin A1c (HbA1c)',
          description: 'Percentage of hemoglobin proteins coated with sugar',
          yourValue: '11.5%',
          normalRange: '<5.7%',
          diabeticTarget: '<7%',
          status: 'critical'
        },
        {
          name: 'Estimated Average Glucose (eAG)',
          description: 'Converts A1c to an average blood sugar number in mg/dL for easier understanding',
          yourValue: '283 mg/dL',
          normalRange: '<117 mg/dL',
          diabeticTarget: '<154 mg/dL',
          status: 'critical'
        }
      ]
    },
    {
      id: 'cmp',
      name: 'Comprehensive Metabolic Panel (CMP)',
      searchTerm: 'comprehensive metabolic panel',
      price: 22.95,
      icon: Beaker,
      color: 'blue',
      frequency: 'Every 3 months',
      nextDue: 'April 2026',
      category: 'Organ Function & Electrolytes',
      description: 'A comprehensive blood test that evaluates kidney function, liver function, electrolyte balance, and blood sugar. Essential for monitoring how your body is handling diabetes and Metformin.',
      whyYouNeedIt: [
        'Your eGFR is 63 — borderline Stage 2 CKD, needs monitoring',
        'Your potassium is 5.7 — elevated, needs to come down',
        'Monitors liver function while on Metformin',
        'Tracks fasting glucose between A1C tests'
      ],
      whenToTake: 'Every 3 months with your A1C test. Critical while kidney function is borderline.',
      preparation: 'Fasting for 10-12 hours required for accurate glucose reading.',
      markers: [
        {
          name: 'Glucose (Fasting)',
          description: 'Blood sugar level after fasting — shows if liver is overproducing glucose',
          yourValue: '184 mg/dL',
          normalRange: '65-99 mg/dL',
          diabeticTarget: '<130 mg/dL',
          status: 'critical'
        },
        {
          name: 'Creatinine',
          description: 'Waste product filtered by kidneys — elevated means kidneys are struggling',
          yourValue: '1.32 mg/dL',
          normalRange: '0.70-1.30 mg/dL',
          diabeticTarget: '<1.30 mg/dL',
          status: 'warning'
        },
        {
          name: 'eGFR (Estimated Glomerular Filtration Rate)',
          description: 'Measures how well kidneys filter blood — the key kidney health number',
          yourValue: '63 mL/min',
          normalRange: '>90 mL/min',
          diabeticTarget: '>60 mL/min',
          status: 'warning'
        },
        {
          name: 'BUN (Blood Urea Nitrogen)',
          description: 'Another kidney waste product — helps confirm kidney function status',
          yourValue: '11 mg/dL',
          normalRange: '7-25 mg/dL',
          diabeticTarget: '7-25 mg/dL',
          status: 'normal'
        },
        {
          name: 'Sodium',
          description: 'Essential electrolyte for fluid balance and nerve function',
          yourValue: '141 mmol/L',
          normalRange: '136-145 mmol/L',
          diabeticTarget: '136-145 mmol/L',
          status: 'normal'
        },
        {
          name: 'Potassium',
          description: 'Critical electrolyte for heart rhythm — too high can be dangerous',
          yourValue: '5.7 mmol/L',
          normalRange: '3.5-5.3 mmol/L',
          diabeticTarget: '<5.3 mmol/L',
          status: 'warning'
        },
        {
          name: 'Chloride',
          description: 'Electrolyte that helps maintain fluid balance',
          yourValue: '102 mmol/L',
          normalRange: '98-106 mmol/L',
          diabeticTarget: '98-106 mmol/L',
          status: 'normal'
        },
        {
          name: 'CO2 (Carbon Dioxide/Bicarbonate)',
          description: 'Measures acid-base balance in blood',
          yourValue: '24 mmol/L',
          normalRange: '23-29 mmol/L',
          diabeticTarget: '23-29 mmol/L',
          status: 'normal'
        },
        {
          name: 'Calcium',
          description: 'Essential for bones, muscles, and nerve function',
          yourValue: '9.5 mg/dL',
          normalRange: '8.5-10.5 mg/dL',
          diabeticTarget: '8.5-10.5 mg/dL',
          status: 'normal'
        },
        {
          name: 'Total Protein',
          description: 'Measures albumin and globulin — indicators of nutrition and liver function',
          yourValue: '7.0 g/dL',
          normalRange: '6.0-8.3 g/dL',
          diabeticTarget: '6.0-8.3 g/dL',
          status: 'normal'
        },
        {
          name: 'Albumin',
          description: 'Protein made by liver — low levels indicate liver or kidney problems',
          yourValue: '4.2 g/dL',
          normalRange: '3.5-5.0 g/dL',
          diabeticTarget: '3.5-5.0 g/dL',
          status: 'normal'
        },
        {
          name: 'Globulin',
          description: 'Proteins including antibodies — part of immune function',
          yourValue: '2.8 g/dL',
          normalRange: '2.0-3.5 g/dL',
          diabeticTarget: '2.0-3.5 g/dL',
          status: 'normal'
        },
        {
          name: 'A/G Ratio (Albumin/Globulin)',
          description: 'Ratio of two protein types — abnormal may indicate disease',
          yourValue: '1.5',
          normalRange: '1.1-2.5',
          diabeticTarget: '1.1-2.5',
          status: 'normal'
        },
        {
          name: 'Bilirubin (Total)',
          description: 'Waste product from red blood cell breakdown — elevated indicates liver issues',
          yourValue: '0.8 mg/dL',
          normalRange: '0.1-1.2 mg/dL',
          diabeticTarget: '0.1-1.2 mg/dL',
          status: 'normal'
        },
        {
          name: 'ALP (Alkaline Phosphatase)',
          description: 'Enzyme found in liver and bones — elevated may indicate liver or bone disease',
          yourValue: '65 U/L',
          normalRange: '44-147 U/L',
          diabeticTarget: '44-147 U/L',
          status: 'normal'
        },
        {
          name: 'AST (Aspartate Aminotransferase)',
          description: 'Liver enzyme — elevated indicates liver damage or disease',
          yourValue: '17 U/L',
          normalRange: '10-35 U/L',
          diabeticTarget: '10-35 U/L',
          status: 'normal'
        },
        {
          name: 'ALT (Alanine Aminotransferase)',
          description: 'Primary liver enzyme — most specific indicator of liver cell damage',
          yourValue: '16 U/L',
          normalRange: '9-46 U/L',
          diabeticTarget: '9-46 U/L',
          status: 'normal'
        }
      ]
    },
    {
      id: 'microalbumin',
      name: 'Albumin Random Urine Test with Creatinine',
      searchTerm: 'microalbumin',
      price: 44.95,
      icon: Droplets,
      color: 'purple',
      frequency: 'Every 3-6 months',
      nextDue: 'April 2026',
      category: 'Kidney Damage Detection',
      description: 'This urine test detects tiny amounts of protein (albumin) leaking into your urine — an early warning sign of diabetic kidney disease, often before eGFR drops significantly.',
      whyYouNeedIt: [
        'Catches kidney damage EARLIER than blood tests like eGFR',
        'Your eGFR (63) is already borderline — need to catch any worsening early',
        'Diabetes is the #1 cause of kidney failure — must monitor closely',
        'Protein in urine is reversible if caught early'
      ],
      whenToTake: 'Every 3-6 months for diabetics with borderline kidney function. This is the test most often MISSED — you must specifically request it.',
      preparation: 'No fasting required. Random urine sample (no 24-hour collection needed).',
      markers: [
        {
          name: 'Microalbumin (Urine)',
          description: 'Tiny amounts of albumin protein in urine — healthy kidneys don\'t leak protein',
          yourValue: 'Not yet tested',
          normalRange: '<30 mg/L',
          diabeticTarget: '<30 mg/L',
          status: 'unknown'
        },
        {
          name: 'Creatinine (Urine)',
          description: 'Used to calculate the albumin-to-creatinine ratio for accuracy',
          yourValue: 'Not yet tested',
          normalRange: 'Varies',
          diabeticTarget: 'Used for ratio',
          status: 'unknown'
        },
        {
          name: 'Albumin/Creatinine Ratio (ACR)',
          description: 'The key number — adjusts for urine concentration to give accurate protein measurement',
          yourValue: 'Not yet tested',
          normalRange: '<30 mg/g',
          diabeticTarget: '<30 mg/g',
          status: 'unknown'
        }
      ]
    },
    {
      id: 'lipid',
      name: 'Lipid Panel Test with Ratios',
      searchTerm: 'lipid panel',
      price: 22.95,
      icon: Heart,
      color: 'pink',
      frequency: 'Every 6-12 months',
      nextDue: 'April 2026',
      category: 'Heart Disease Risk',
      description: 'Measures cholesterol and triglycerides to assess your risk of heart disease and stroke. Diabetics have 2-4x higher risk of heart disease, making this essential.',
      whyYouNeedIt: [
        'Diabetes doubles your risk of heart disease and stroke',
        'High triglycerides are common with uncontrolled blood sugar',
        'Zero-carb diet may improve lipid profile — good to have baseline',
        'May determine if you need a statin medication in addition to Metformin'
      ],
      whenToTake: 'Every 6-12 months for diabetics. Get baseline now, then recheck after 3-6 months of diet changes.',
      preparation: 'Fasting for 9-12 hours required for accurate triglyceride reading.',
      markers: [
        {
          name: 'Total Cholesterol',
          description: 'Sum of all cholesterol types — gives overall picture but less useful alone',
          yourValue: 'Not yet tested',
          normalRange: '<200 mg/dL',
          diabeticTarget: '<200 mg/dL',
          status: 'unknown'
        },
        {
          name: 'LDL Cholesterol ("Bad")',
          description: 'Deposits in artery walls causing blockages — lower is better',
          yourValue: 'Not yet tested',
          normalRange: '<100 mg/dL',
          diabeticTarget: '<70 mg/dL (high risk)',
          status: 'unknown'
        },
        {
          name: 'HDL Cholesterol ("Good")',
          description: 'Removes cholesterol from arteries — higher is better',
          yourValue: 'Not yet tested',
          normalRange: '>40 mg/dL (men)',
          diabeticTarget: '>40 mg/dL',
          status: 'unknown'
        },
        {
          name: 'Triglycerides',
          description: 'Fat in blood — often elevated with high blood sugar and poor diet',
          yourValue: 'Not yet tested',
          normalRange: '<150 mg/dL',
          diabeticTarget: '<150 mg/dL',
          status: 'unknown'
        },
        {
          name: 'Non-HDL Cholesterol',
          description: 'Total cholesterol minus HDL — all the "bad" cholesterol combined',
          yourValue: 'Not yet tested',
          normalRange: '<130 mg/dL',
          diabeticTarget: '<100 mg/dL',
          status: 'unknown'
        },
        {
          name: 'Total Cholesterol/HDL Ratio',
          description: 'Risk ratio — lower is better for heart health',
          yourValue: 'Not yet tested',
          normalRange: '<5.0',
          diabeticTarget: '<4.0',
          status: 'unknown'
        },
        {
          name: 'LDL/HDL Ratio',
          description: 'Another risk ratio comparing bad to good cholesterol',
          yourValue: 'Not yet tested',
          normalRange: '<3.5',
          diabeticTarget: '<2.5',
          status: 'unknown'
        }
      ]
    },
    {
      id: 'homair',
      name: 'HOMA-IR Calculation (Insulin Resistance) Panel',
      searchTerm: 'fasting insulin',
      price: 32.90,
      icon: TrendingUp,
      color: 'orange',
      frequency: 'Every 6-12 months',
      nextDue: 'April 2026',
      category: 'Insulin Resistance',
      description: 'Measures fasting insulin AND calculates your HOMA-IR score — a direct measurement of how insulin resistant you are. This tells you how hard your pancreas is working.',
      whyYouNeedIt: [
        'Type 2 diabetes is caused by insulin resistance — this measures it directly',
        'Shows if your pancreas is exhausted from overproducing insulin',
        'Zero-carb diet should improve insulin sensitivity — track the improvement',
        'Better than basic insulin test because it calculates the resistance score'
      ],
      whenToTake: 'Every 6-12 months. Get baseline now, then recheck to see if diet and Metformin are reducing insulin resistance.',
      preparation: 'Fasting for 10-12 hours required. Take in the morning before eating.',
      markers: [
        {
          name: 'Fasting Insulin',
          description: 'Amount of insulin in blood after fasting — high means your body needs more insulin to control sugar',
          yourValue: 'Not yet tested',
          normalRange: '2.6-24.9 µIU/mL',
          diabeticTarget: '<10 µIU/mL (optimal)',
          status: 'unknown'
        },
        {
          name: 'Fasting Glucose',
          description: 'Blood sugar after fasting — used with insulin to calculate HOMA-IR',
          yourValue: '184 mg/dL (from CMP)',
          normalRange: '65-99 mg/dL',
          diabeticTarget: '<130 mg/dL',
          status: 'critical'
        },
        {
          name: 'HOMA-IR Score',
          description: 'Calculated insulin resistance score — the lower the better',
          yourValue: 'Not yet tested',
          normalRange: '<1.0 (optimal)',
          diabeticTarget: '<2.0 (acceptable)',
          status: 'unknown'
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'critical': return <AlertTriangle size={14} className="text-red-500" />;
      case 'warning': return <AlertTriangle size={14} className="text-amber-500" />;
      case 'normal': return <CheckCircle size={14} className="text-green-500" />;
      default: return <Info size={14} className="text-gray-500" />;
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      red: { bg: 'bg-red-500', light: 'bg-red-50', border: 'border-red-200', text: 'text-red-600' },
      blue: { bg: 'bg-blue-500', light: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
      pink: { bg: 'bg-pink-500', light: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600' }
    };
    return colors[color] || colors.blue;
  };

  const selectedTests = tests.filter(t => cart[t.id]);
  const totalCost = selectedTests.reduce((sum, t) => sum + t.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical size={28} />
            <h1 className="text-2xl font-bold">Lab Tests Guide</h1>
          </div>
          <p className="text-blue-100">Complete guide for diabetes monitoring at Ulta Lab Tests</p>
        </div>
      </div>

      {/* Shopping Cart Summary */}
      <div className="max-w-4xl mx-auto px-4 -mt-4">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingCart className="text-blue-600" size={24} />
              <div>
                <p className="font-bold text-gray-900">{selectedTests.length} Tests Selected</p>
                <p className="text-sm text-gray-500">ultalabtests.com</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">${totalCost.toFixed(2)}</p>
              <p className="text-xs text-gray-500">Total Cost</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testing Schedule */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-5 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Calendar size={20} />
            <h2 className="font-bold">Testing Schedule</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-purple-200 text-xs">EVERY 3 MONTHS</p>
              <p className="font-medium">A1C + CMP + Microalbumin</p>
              <p className="text-purple-200 text-xs mt-1">Next: April 2026</p>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-purple-200 text-xs">EVERY 6-12 MONTHS</p>
              <p className="font-medium">Lipid Panel + HOMA-IR</p>
              <p className="text-purple-200 text-xs mt-1">Next: April 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tests List */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {tests.map(test => {
          const colors = getColorClasses(test.color);
          const isExpanded = expandedTest === test.id;
          const Icon = test.icon;

          return (
            <div key={test.id} className={`bg-white rounded-xl shadow-sm border overflow-hidden ${cart[test.id] ? 'border-blue-300' : 'border-gray-200'}`}>
              {/* Test Header */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{test.name}</h3>
                      <p className="text-sm text-gray-500">{test.category}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{test.frequency}</span>
                        <span className="text-xs text-gray-400">Search: "{test.searchTerm}"</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">${test.price.toFixed(2)}</p>
                    <button
                      onClick={() => toggleCart(test.id)}
                      className={`mt-1 text-xs px-3 py-1 rounded-full font-medium ${cart[test.id] ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
                    >
                      {cart[test.id] ? '✓ Selected' : 'Add'}
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-3">{test.description}</p>

                {/* Why You Need It */}
                <div className={`mt-3 ${colors.light} rounded-lg p-3`}>
                  <p className={`text-xs font-semibold ${colors.text} mb-2`}>WHY YOU NEED THIS TEST:</p>
                  <ul className="space-y-1">
                    {test.whyYouNeedIt.map((reason, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className={`${colors.text} mt-0.5 flex-shrink-0`} />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* When & Preparation */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-500 mb-1">WHEN TO TAKE</p>
                    <p className="text-sm text-gray-700">{test.whenToTake}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-500 mb-1">PREPARATION</p>
                    <p className="text-sm text-gray-700">{test.preparation}</p>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => setExpandedTest(isExpanded ? null : test.id)}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-sm text-gray-600 hover:text-gray-900 border-t border-gray-100"
                >
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  {isExpanded ? 'Hide' : 'Show'} {test.markers.length} Markers Included
                </button>
              </div>

              {/* Expanded Markers */}
              {isExpanded && (
                <div className="bg-gray-50 border-t border-gray-200 p-4">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Beaker size={18} className={colors.text} />
                    Markers Included in This Test
                  </h4>
                  <div className="space-y-3">
                    {test.markers.map((marker, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-2">
                            {getStatusIcon(marker.status)}
                            <div>
                              <p className="font-medium text-gray-900">{marker.name}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{marker.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                          <div className={`rounded p-2 ${getStatusColor(marker.status)}`}>
                            <p className="text-gray-500">Your Value</p>
                            <p className="font-bold">{marker.yourValue}</p>
                          </div>
                          <div className="bg-gray-100 rounded p-2">
                            <p className="text-gray-500">Normal Range</p>
                            <p className="font-medium text-gray-900">{marker.normalRange}</p>
                          </div>
                          <div className="bg-blue-50 rounded p-2">
                            <p className="text-gray-500">Diabetic Target</p>
                            <p className="font-medium text-blue-900">{marker.diabeticTarget}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Cost Summary */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign size={20} className="text-green-600" />
            Cost Summary
          </h3>
          <div className="space-y-2">
            {tests.map(test => (
              <div key={test.id} className={`flex items-center justify-between py-2 ${cart[test.id] ? '' : 'opacity-40'}`}>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={cart[test.id]}
                    onChange={() => toggleCart(test.id)}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{test.name}</span>
                </div>
                <span className="text-sm font-medium">${test.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-900">Total ({selectedTests.length} tests)</span>
              <span className="text-2xl font-bold text-green-600">${totalCost.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Prices from ultalabtests.com as of January 2026. Prices may vary.
            </p>
          </div>
        </div>

        {/* How to Order */}
        <div className="bg-blue-50 rounded-xl p-5 mt-4 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-3">How to Order</h3>
          <ol className="space-y-2 text-sm text-blue-800">
            <li className="flex gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
              Go to <span className="font-mono bg-white px-1 rounded">ultalabtests.com</span>
            </li>
            <li className="flex gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
              Search for each test using the search terms provided
            </li>
            <li className="flex gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
              Look for "Most Popular" badge to find the right test
            </li>
            <li className="flex gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
              Add all tests to cart and checkout
            </li>
            <li className="flex gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
              Fast 10-12 hours before your lab visit (for accurate glucose/lipid results)
            </li>
            <li className="flex gap-2">
              <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">6</span>
              Visit a Quest or Labcorp location to have blood drawn
            </li>
          </ol>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 rounded-xl p-5 mt-4 border border-amber-100">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-bold text-amber-900 mb-2">Important Notes</h3>
              <ul className="space-y-1 text-sm text-amber-800">
                <li>• <strong>Microalbumin:</strong> Scroll past "24 Hour" tests to find "Albumin Random Urine Test with Creatinine" — it's easier (no 24-hour collection)</li>
                <li>• <strong>Fasting:</strong> Don't eat for 10-12 hours before the blood draw — water is OK</li>
                <li>• <strong>Metformin:</strong> Take your Metformin AFTER the blood draw, with your breakfast</li>
                <li>• <strong>Schedule:</strong> Book a morning appointment so fasting is easier (just skip breakfast)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
