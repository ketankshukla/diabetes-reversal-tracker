import React, { useState } from 'react';

const SupplementsGuide = () => {
  const [activeTab, setActiveTab] = useState('recommended');
  const [expandedCard, setExpandedCard] = useState(null);

  const userContext = {
    condition: "Type 2 Diabetes",
    a1c: "11.5%",
    medication: "Metformin (half pill 2x daily)",
    diet: "Zero-carb (4x4 Protein Style + 4 eggs)",
    egfr: 63,
    potassium: "5.7 mmol/L (elevated)"
  };

  const supplements = {
    essential: [
      {
        id: 'b12',
        name: 'Vitamin B12 (Methylcobalamin)',
        priority: 'ESSENTIAL',
        priorityColor: 'bg-red-500',
        reason: 'Metformin CAUSES B12 deficiency by blocking absorption. ADA recommends annual B12 testing for all metformin users.',
        dosage: '1,000 - 2,000 mcg daily',
        timing: 'Take with breakfast or lunch (not at same time as metformin)',
        form: 'Methylcobalamin (active form, better absorbed than cyanocobalamin)',
        products: [
          { brand: 'Thorne Methyl B12', dose: '1,000 mcg', price: '~$24/60 caps', note: 'Top pick - third-party tested, trusted by healthcare professionals' },
          { brand: 'Pure Encapsulations Methylcobalamin', dose: '1,000 mcg', price: '~$22/60 caps', note: 'Hypoallergenic, no fillers' },
          { brand: 'NOW Foods Methyl B-12', dose: '1,000 mcg lozenges', price: '~$12/100 lozenges', note: 'Good budget option, sublingual' },
          { brand: 'Jarrow Formulas Methyl B-12', dose: '1,000 mcg', price: '~$10/100 lozenges', note: 'Cherry flavor, sublingual' },
          { brand: 'Nutricost Vitamin B12', dose: '2,000 mcg', price: '~$15/240 caps', note: 'Best value, vegetarian' }
        ],
        warnings: [
          'Deficiency symptoms: fatigue, numbness/tingling, memory issues, weakness',
          'Can mimic diabetic neuropathy - get tested before assuming neuropathy is from diabetes',
          'Risk increases with metformin dose >1500mg/day and duration >4 years'
        ],
        verdict: '✅ TAKE THIS - Non-negotiable for metformin users'
      },
      {
        id: 'magnesium',
        name: 'Magnesium (Glycinate)',
        priority: 'HIGHLY RECOMMENDED',
        priorityColor: 'bg-orange-500',
        reason: 'Metformin associated with hypomagnesemia. Low magnesium worsens insulin resistance and increases cardiovascular risk.',
        dosage: '300 - 400 mg elemental magnesium daily',
        timing: 'Take in evening (helps sleep) or split morning/evening. Separate from metformin by 2+ hours.',
        form: 'Magnesium Glycinate (best absorbed, gentle on stomach, promotes relaxation)',
        products: [
          { brand: 'Pure Encapsulations Magnesium Glycinate', dose: '120 mg/cap', price: '~$30/90 caps', note: 'Top quality, no fillers, hypoallergenic' },
          { brand: 'Thorne Magnesium Bisglycinate', dose: '200 mg', price: '~$35/60 caps', note: 'Highly bioavailable, trusted brand' },
          { brand: "Nature's Branch Magnesium Glycinate", dose: '400 mg/2 tabs', price: '~$20/200 tabs', note: 'Good value, high absorption' },
          { brand: 'Doctor\'s Best High Absorption Magnesium', dose: '200 mg', price: '~$15/240 tabs', note: 'Chelated, easy to absorb' },
          { brand: 'NOW Foods Magnesium Glycinate', dose: '200 mg', price: '~$18/180 tabs', note: 'Budget-friendly, reliable' }
        ],
        warnings: [
          'With eGFR 63, monitor magnesium levels - kidneys filter excess magnesium',
          'Start with lower dose (200mg) and increase gradually',
          'Avoid magnesium oxide - poorly absorbed, causes diarrhea'
        ],
        verdict: '✅ TAKE THIS - Important for diabetes and metformin users'
      },
      {
        id: 'd3',
        name: 'Vitamin D3',
        priority: 'RECOMMENDED',
        priorityColor: 'bg-yellow-500',
        reason: 'Diabetics commonly deficient. D3 improves insulin sensitivity up to 60% in deficient individuals. Metformin does NOT cause D deficiency but diabetics often have low levels.',
        dosage: '2,000 - 4,000 IU daily',
        timing: 'Take with a meal containing fat for better absorption',
        form: 'Cholecalciferol (D3) - NOT D2. D3 is more effective.',
        products: [
          { brand: 'Thorne Vitamin D3', dose: '5,000 IU', price: '~$20/60 caps', note: 'High quality, tested' },
          { brand: 'NOW Foods Vitamin D3', dose: '2,000 IU', price: '~$10/240 softgels', note: 'Great value' },
          { brand: 'Pure Encapsulations Vitamin D3', dose: '1,000 IU', price: '~$18/120 caps', note: 'Hypoallergenic' },
          { brand: 'Nature Made Vitamin D3', dose: '2,000 IU', price: '~$12/220 softgels', note: 'USP verified, budget option' },
          { brand: 'Sports Research Vitamin D3', dose: '5,000 IU', price: '~$20/360 softgels', note: 'With coconut oil for absorption' }
        ],
        warnings: [
          'Get 25-hydroxy vitamin D level tested first - aim for 40-60 ng/mL',
          'Take with K2 (MK-7) for optimal calcium metabolism',
          'Too much can be toxic - don\'t exceed 4,000 IU without testing'
        ],
        verdict: '✅ TAKE THIS - Get tested first, then supplement based on levels'
      },
      {
        id: 'bcomplex',
        name: 'B-Complex (B1, B6, B9, B12)',
        priority: 'RECOMMENDED',
        priorityColor: 'bg-yellow-500',
        reason: 'Metformin can affect multiple B vitamins including B1 (thiamine), B9 (folate), and B12. A B-complex covers all bases.',
        dosage: 'Follow label - typically 1 cap daily',
        timing: 'Morning with breakfast (B vitamins can be energizing)',
        form: 'Methylated forms preferred (methylfolate, methylcobalamin) for better absorption',
        products: [
          { brand: 'Thorne B-Complex #12', dose: 'Full spectrum', price: '~$24/60 caps', note: 'Active forms, includes B12' },
          { brand: 'Pure Encapsulations B-Complex Plus', dose: 'Full spectrum', price: '~$30/120 caps', note: 'Methylated, hypoallergenic' },
          { brand: 'Jarrow Formulas B-Right', dose: 'Optimized B-Complex', price: '~$18/100 caps', note: 'Low-odor, methylated forms' },
          { brand: 'Garden of Life Vitamin B Complex', dose: 'Whole food', price: '~$25/60 caps', note: 'Food-based, organic' }
        ],
        warnings: [
          'If already taking B12 separately, choose a B-complex with lower B12 or skip standalone B12',
          'B vitamins can turn urine bright yellow - this is normal',
          'May increase energy - take in morning, not evening'
        ],
        verdict: '✅ TAKE THIS - OR take individual B12 if you prefer simpler approach'
      }
    ],
    caution: [
      {
        id: 'berberine',
        name: 'Berberine',
        priority: 'USE WITH CAUTION',
        priorityColor: 'bg-amber-600',
        reason: 'Called "Nature\'s Metformin" - works similarly via AMPK activation. Can enhance blood sugar lowering but increases hypoglycemia risk when combined with metformin.',
        dosage: 'Start 500 mg once daily, can increase to 500 mg 2-3x daily',
        timing: 'Take with meals. Space 1-2 hours from metformin to reduce GI issues.',
        form: 'Standard berberine HCl',
        products: [
          { brand: 'Thorne Berberine-500', dose: '500 mg', price: '~$40/60 caps', note: 'Third-party tested, pure' },
          { brand: 'Pure Encapsulations Berberine', dose: '500 mg', price: '~$45/60 caps', note: 'Hypoallergenic' },
          { brand: 'NOW Foods Berberine Glucose Support', dose: '400 mg', price: '~$20/90 caps', note: 'Budget option, with grape seed' },
          { brand: 'Integrative Therapeutics Berberine Complex', dose: '500 mg', price: '~$35/90 caps', note: 'Enhanced formula' }
        ],
        warnings: [
          '⚠️ RISK OF HYPOGLYCEMIA when combined with metformin - monitor blood sugar closely',
          'May reduce metformin absorption if taken together - space doses',
          'Can cause GI upset (similar to metformin) - start low',
          'Not FDA-approved - less long-term safety data than metformin',
          'Discuss with your doctor before adding to metformin'
        ],
        verdict: '⚠️ OPTIONAL - May be beneficial but requires careful monitoring. Start after A1C stabilizes.'
      },
      {
        id: 'zinc',
        name: 'Zinc',
        priority: 'CONDITIONAL',
        priorityColor: 'bg-blue-500',
        reason: 'Diabetics often have lower zinc levels due to increased urinary excretion. Zinc is important for insulin production and storage.',
        dosage: '15 - 30 mg daily (don\'t exceed 40 mg)',
        timing: 'Take with food to avoid nausea',
        form: 'Zinc picolinate or zinc glycinate (better absorbed than zinc oxide)',
        products: [
          { brand: 'Thorne Zinc Picolinate', dose: '15 mg', price: '~$15/60 caps', note: 'Highly absorbable form' },
          { brand: 'Pure Encapsulations Zinc', dose: '15 mg', price: '~$12/60 caps', note: 'Zinc picolinate, pure' },
          { brand: 'NOW Foods Zinc Picolinate', dose: '50 mg', price: '~$10/120 caps', note: 'Take every other day if using 50mg' }
        ],
        warnings: [
          'Long-term zinc supplementation can deplete copper - limit to 3 months without monitoring',
          'High doses can cause nausea, vomiting, diarrhea',
          'Best to test zinc levels before supplementing',
          'If taking zinc long-term, add small amount of copper (1-2 mg)'
        ],
        verdict: '⚠️ CONDITIONAL - Consider if tested and found deficient, or for 2-3 months while stabilizing blood sugar'
      }
    ],
    notRecommended: [
      {
        id: 'artemisinin',
        name: 'Artemisinin',
        priority: 'NOT RECOMMENDED',
        priorityColor: 'bg-red-600',
        reason: 'Primarily an anti-malarial drug. Limited human studies for diabetes. Some animal studies show potential but not enough evidence for human use.',
        concerns: [
          'No established dosing for diabetes',
          'Limited safety data for long-term use',
          'Potential drug interactions unknown',
          'May affect blood glucose unpredictably - some studies showed INCREASED glucose in normal diet mice',
          'Much better-studied alternatives available (berberine, magnesium, etc.)'
        ],
        verdict: '❌ SKIP - Insufficient evidence for diabetes. Focus on proven supplements first.'
      },
      {
        id: 'selenium',
        name: 'Selenium',
        priority: 'NOT RECOMMENDED',
        priorityColor: 'bg-red-600',
        reason: 'U-SHAPED relationship with diabetes - both low AND high selenium increase diabetes risk. Most people get enough from diet.',
        concerns: [
          'High selenium levels INCREASE diabetes risk',
          'Supplementation in people with adequate levels may worsen glucose control',
          'Narrow therapeutic window - easy to take too much',
          'Recommended daily intake (55 mcg) easily met through Brazil nuts, fish, meat',
          'Only supplement if tested and found deficient'
        ],
        verdict: '❌ SKIP - Can actually WORSEN diabetes if levels are adequate'
      },
      {
        id: 'iron',
        name: 'Iron',
        priority: 'NOT RECOMMENDED',
        priorityColor: 'bg-red-600',
        reason: 'Diabetics often have ELEVATED iron levels (ferritin). Excess iron worsens insulin resistance and increases oxidative stress.',
        concerns: [
          'Iron overload is common in Type 2 diabetes',
          'Excess iron damages pancreatic beta cells',
          'High ferritin associated with worse glycemic control',
          'Only supplement if tested and found deficient (check ferritin, not just hemoglobin)',
          'Your high-protein diet (beef) provides plenty of iron'
        ],
        verdict: '❌ SKIP - Your diet already provides adequate iron. Test before considering.'
      },
      {
        id: 'copper',
        name: 'Copper',
        priority: 'NOT NEEDED',
        priorityColor: 'bg-gray-500',
        reason: 'Diabetics often have HIGHER copper levels. Excess copper contributes to oxidative stress. No evidence of benefit for supplementation.',
        concerns: [
          'Copper levels tend to be elevated in diabetes',
          'High copper can worsen insulin resistance',
          'Only needed if taking zinc long-term (zinc depletes copper)',
          'Easily obtained from diet (shellfish, nuts, seeds, chocolate)'
        ],
        verdict: '❌ SKIP - Only consider 1-2 mg if taking zinc for extended periods'
      }
    ]
  };

  const dailySchedule = [
    {
      time: 'BREAKFAST (with food + Metformin)',
      supplements: [
        { name: 'B12 Methylcobalamin', dose: '1,000 mcg', note: 'or B-Complex' },
        { name: 'Vitamin D3', dose: '2,000-4,000 IU', note: 'with fat-containing meal' }
      ]
    },
    {
      time: 'LUNCH',
      supplements: [
        { name: 'Zinc (optional)', dose: '15-30 mg', note: 'if supplementing' }
      ]
    },
    {
      time: 'DINNER (with food + Metformin)',
      supplements: [
        { name: 'Berberine (if taking)', dose: '500 mg', note: 'space 1-2 hrs from metformin' }
      ]
    },
    {
      time: 'EVENING/BEDTIME',
      supplements: [
        { name: 'Magnesium Glycinate', dose: '300-400 mg', note: 'helps sleep & relaxation' }
      ]
    }
  ];

  const costEstimate = {
    essential: [
      { name: 'B12 (Methylcobalamin)', monthly: '$8-15' },
      { name: 'Magnesium Glycinate', monthly: '$10-20' },
      { name: 'Vitamin D3', monthly: '$5-10' },
    ],
    optional: [
      { name: 'B-Complex (instead of standalone B12)', monthly: '$12-20' },
      { name: 'Berberine', monthly: '$20-30' },
      { name: 'Zinc', monthly: '$5-8' },
    ]
  };

  const renderSupplementCard = (supp) => (
    <div 
      key={supp.id}
      className="bg-white rounded-lg shadow-md border border-gray-200 mb-4 overflow-hidden"
    >
      <div 
        className="p-4 cursor-pointer"
        onClick={() => setExpandedCard(expandedCard === supp.id ? null : supp.id)}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`${supp.priorityColor} text-white text-xs font-bold px-2 py-1 rounded`}>
                {supp.priority}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-800">{supp.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{supp.reason}</p>
          </div>
          <span className="text-2xl">{expandedCard === supp.id ? '−' : '+'}</span>
        </div>
      </div>

      {expandedCard === supp.id && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-4">
          {supp.dosage && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-1">📊 Dosage</h4>
              <p className="text-gray-600 bg-blue-50 p-2 rounded">{supp.dosage}</p>
            </div>
          )}

          {supp.timing && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-1">⏰ When to Take</h4>
              <p className="text-gray-600 bg-green-50 p-2 rounded">{supp.timing}</p>
            </div>
          )}

          {supp.form && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-1">💊 Form</h4>
              <p className="text-gray-600 bg-purple-50 p-2 rounded">{supp.form}</p>
            </div>
          )}

          {supp.products && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">🛒 Recommended Products</h4>
              <div className="space-y-2">
                {supp.products.map((prod, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded text-sm">
                    <div className="font-medium text-gray-800">{prod.brand}</div>
                    <div className="text-gray-600">{prod.dose} • {prod.price}</div>
                    <div className="text-gray-500 text-xs italic">{prod.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {supp.warnings && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">⚠️ Warnings</h4>
              <ul className="space-y-1">
                {supp.warnings.map((warn, idx) => (
                  <li key={idx} className="text-sm text-amber-700 bg-amber-50 p-2 rounded">
                    {warn}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {supp.concerns && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">🚫 Concerns</h4>
              <ul className="space-y-1">
                {supp.concerns.map((concern, idx) => (
                  <li key={idx} className="text-sm text-red-700 bg-red-50 p-2 rounded">
                    {concern}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <h4 className="font-bold text-gray-800">Bottom Line</h4>
            <p className="text-gray-700">{supp.verdict}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
        <h1 className="text-2xl font-bold">💊 Supplements Guide for Metformin Users</h1>
        <p className="text-green-100 mt-1">Personalized recommendations based on your health profile</p>
      </div>

      {/* User Context */}
      <div className="bg-white m-4 rounded-lg shadow p-4">
        <h2 className="font-bold text-gray-800 mb-3">📋 Your Profile</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div><span className="text-gray-500">Condition:</span> <span className="font-medium">{userContext.condition}</span></div>
          <div><span className="text-gray-500">A1C:</span> <span className="font-medium text-red-600">{userContext.a1c}</span></div>
          <div><span className="text-gray-500">Medication:</span> <span className="font-medium">{userContext.medication}</span></div>
          <div><span className="text-gray-500">Diet:</span> <span className="font-medium">{userContext.diet}</span></div>
          <div><span className="text-gray-500">eGFR:</span> <span className="font-medium text-amber-600">{userContext.egfr}</span></div>
          <div><span className="text-gray-500">Potassium:</span> <span className="font-medium text-amber-600">{userContext.potassium}</span></div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 m-4 rounded-lg shadow p-4 text-white">
        <h2 className="font-bold text-lg mb-2">📌 Quick Summary</h2>
        <div className="space-y-2 text-sm">
          <p>✅ <strong>ESSENTIAL:</strong> B12 (Methylcobalamin), Magnesium, Vitamin D3</p>
          <p>⚠️ <strong>OPTIONAL:</strong> Berberine (with caution), Zinc (short-term), B-Complex</p>
          <p>❌ <strong>SKIP:</strong> Artemisinin, Selenium, Iron, Copper</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <div className="flex bg-white rounded-lg shadow p-1 mb-4">
          {[
            { id: 'recommended', label: '✅ Recommended' },
            { id: 'caution', label: '⚠️ Caution' },
            { id: 'skip', label: '❌ Skip' },
            { id: 'schedule', label: '📅 Schedule' },
            { id: 'cost', label: '💰 Cost' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-1 text-xs font-medium rounded-md transition-colors ${
                activeTab === tab.id 
                  ? 'bg-green-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-6">
        {activeTab === 'recommended' && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">✅ Essential & Recommended Supplements</h2>
            {supplements.essential.map(renderSupplementCard)}
          </div>
        )}

        {activeTab === 'caution' && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">⚠️ Use With Caution</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 mb-4 text-sm">
              <p className="text-amber-800">These supplements may be beneficial but require careful monitoring and/or should be discussed with your doctor first.</p>
            </div>
            {supplements.caution.map(renderSupplementCard)}
          </div>
        )}

        {activeTab === 'skip' && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">❌ Not Recommended</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4 text-sm">
              <p className="text-red-800">These supplements either lack evidence for diabetes, may cause harm, or are already adequate in your diet.</p>
            </div>
            {supplements.notRecommended.map(renderSupplementCard)}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">📅 Daily Supplement Schedule</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-4 text-sm">
              <p className="text-blue-800">Timing matters! Space supplements from metformin for optimal absorption.</p>
            </div>
            {dailySchedule.map((slot, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow mb-3 p-4">
                <h3 className="font-bold text-gray-800 mb-2">{slot.time}</h3>
                <div className="space-y-2">
                  {slot.supplements.map((supp, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                      <div>
                        <span className="font-medium text-gray-700">{supp.name}</span>
                        <span className="text-gray-500 text-sm ml-2">{supp.dose}</span>
                      </div>
                      <span className="text-xs text-gray-500 italic">{supp.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Timing Note */}
            <div className="bg-yellow-50 rounded-lg p-4 mt-4">
              <h4 className="font-bold text-yellow-800 mb-2">⏰ Key Timing Rules</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Take B12 2+ hours away from metformin if possible</li>
                <li>• Take Magnesium 2+ hours away from metformin</li>
                <li>• Take Vitamin D with a fat-containing meal</li>
                <li>• Berberine: 1-2 hours before or after metformin</li>
                <li>• Take Zinc with food to avoid nausea</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'cost' && (
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">💰 Monthly Cost Estimate</h2>
            
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="font-bold text-green-600 mb-3">Essential (Recommended)</h3>
              {costEstimate.essential.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-medium text-gray-800">{item.monthly}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 mt-2 border-t-2 border-gray-200">
                <span className="font-bold text-gray-800">Essential Total:</span>
                <span className="font-bold text-green-600">$23-45/month</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="font-bold text-amber-600 mb-3">Optional Add-ons</h3>
              {costEstimate.optional.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-medium text-gray-800">{item.monthly}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-blue-800">💡 Money-Saving Tips</h4>
              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                <li>• Buy larger bottles (90-240 count) for better value</li>
                <li>• Subscribe & Save on Amazon for 10-15% off</li>
                <li>• Check Costco for Kirkland brand (good quality, low price)</li>
                <li>• iHerb and Vitacost often have sales</li>
                <li>• Generic/store brands are fine for D3 and Zinc</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Important Disclaimer */}
      <div className="bg-gray-800 text-white p-4 mt-4">
        <h3 className="font-bold mb-2">⚕️ Important Disclaimer</h3>
        <p className="text-sm text-gray-300">
          This guide is for informational purposes based on research. Always consult your doctor before starting any supplements, especially with your kidney function (eGFR 63) and elevated potassium. Get baseline labs (B12, Vitamin D, Magnesium) before supplementing.
        </p>
      </div>

      {/* Wife's Recommendations Summary */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 m-4 rounded-lg p-4 text-white">
        <h3 className="font-bold mb-2">📝 Response to Wife's Recommendations</h3>
        <div className="text-sm space-y-1">
          <p>✅ <strong>Berberine:</strong> Can take, but carefully - risk of hypoglycemia</p>
          <p>❌ <strong>Artemisinin:</strong> Skip - insufficient evidence for diabetes</p>
          <p>✅ <strong>Magnesium:</strong> Yes! Glycinate form recommended</p>
          <p>✅ <strong>Vitamin D3:</strong> Yes! Get tested first</p>
          <p>✅ <strong>B Vitamins:</strong> Yes! B12 is essential, B-Complex is good</p>
          <p>❌ <strong>Selenium:</strong> Skip - can worsen diabetes if adequate</p>
          <p>❌ <strong>Iron:</strong> Skip - your diet provides enough, excess is harmful</p>
          <p>⚠️ <strong>Zinc:</strong> Short-term okay, don't take long-term without copper</p>
          <p>❌ <strong>Copper:</strong> Skip - only if taking zinc long-term</p>
        </div>
      </div>
    </div>
  );
};

export default SupplementsGuide;
