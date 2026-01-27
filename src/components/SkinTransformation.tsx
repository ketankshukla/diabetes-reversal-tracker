"use client";

import React, { useState, useEffect } from 'react';

interface SkinIssue {
  id: string;
  name: string;
  emoji: string;
  location: string;
  cause: string;
  supplements: string[];
  startsImproving: number;
  fullyResolved: number;
  color: string;
}

interface Product {
  brand: string;
  name: string;
  perServing: string;
  take: string;
  price: string;
}

interface Supplement {
  id: string;
  name: string;
  emoji: string;
  priority: number;
  dose: string;
  timing: string;
  pillCount: string;
  fixes: string[];
  why: string;
  evidence: string;
  timeline: string;
  products: Product[];
  warnings: string[];
  color: string;
}

interface ScheduleItem {
  name: string;
  dose: string;
  pills: string;
  emoji: string;
}

interface TimelinePhase {
  weeks: string;
  changes: string[];
  visible: string[];
  color: string;
}

interface ShoppingItem {
  name: string;
  product: string;
  price: string;
}

const SkinTransformation = () => {
  const [activeTab, setActiveTab] = useState('issues');
  const startDate = new Date('2026-01-24');
  const [daysElapsed, setDaysElapsed] = useState(0);
  const [weeksElapsed, setWeeksElapsed] = useState(0);
  const [expandedSupplement, setExpandedSupplement] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const now = new Date();
    const days = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDaysElapsed(Math.max(0, days));
    setWeeksElapsed(Math.max(0, Math.floor(days / 7)));
  }, []);

  const skinIssues: SkinIssue[] = [
    {
      id: 'dry',
      name: 'Cracked/Dry Skin',
      emoji: '🏜️',
      location: 'Body-wide',
      cause: 'Omega-3 deficiency (beef has zero), dehydration, keto adaptation',
      supplements: ['Omega-3 Fish Oil', 'Vitamin E', 'Hyaluronic Acid', 'Collagen'],
      startsImproving: 2,
      fullyResolved: 8,
      color: '#ef4444',
    },
    {
      id: 'darkspots',
      name: 'Dark Spots (Hyperpigmentation)',
      emoji: '🔵',
      location: 'Face',
      cause: 'Excess melanin production, inflammation, sun damage, insulin resistance',
      supplements: ['Vitamin C', 'Vitamin E', 'Vitamin A'],
      startsImproving: 8,
      fullyResolved: 24,
      color: '#8b5cf6',
    },
    {
      id: 'backspots',
      name: 'Bumps/Spots on Back',
      emoji: '🔴',
      location: 'Upper back',
      cause: 'Keratosis pilaris or folliculitis (linked to blood sugar and inflammation)',
      supplements: ['Vitamin A', 'Zinc', 'Omega-3 Fish Oil'],
      startsImproving: 6,
      fullyResolved: 12,
      color: '#f59e0b',
    },
    {
      id: 'skintags',
      name: 'Skin Tags',
      emoji: '📍',
      location: 'Various areas',
      cause: 'DIRECT marker of insulin resistance — caused by high insulin levels',
      supplements: ['No supplement — reverses as A1C drops'],
      startsImproving: 24,
      fullyResolved: 52,
      color: '#10b981',
    },
  ];

  const supplements: Supplement[] = [
    {
      id: 'omega3',
      name: 'Omega-3 Fish Oil',
      emoji: '🐟',
      priority: 1,
      dose: '3,000 mg EPA+DHA',
      timing: 'Breakfast',
      pillCount: '3 softgels',
      fixes: ['Cracked/dry skin', 'Inflammation', 'Rough texture'],
      why: 'Your beef-heavy diet is VERY high in Omega-6 (inflammatory) and has ZERO Omega-3. This imbalance causes chronic inflammation → dry, cracked skin. Fish oil restores balance, reduces inflammation, strengthens skin cell membranes to hold moisture.',
      evidence: 'Studies show 3g/day increases skin hydration by 39% in 12 weeks.',
      timeline: 'Week 2-3: Less tight/dry | Week 4-6: Cracks healing | Week 8-12: Smooth, hydrated',
      products: [
        { brand: 'Nordic Naturals', name: 'Ultimate Omega', perServing: '1,280mg/2 softgels', take: '3 softgels', price: '$30/60ct' },
        { brand: 'Sports Research', name: 'Triple Strength', perServing: '1,040mg/softgel', take: '3 softgels', price: '$25/90ct' },
      ],
      warnings: [],
      color: '#3b82f6',
    },
    {
      id: 'collagen',
      name: 'Collagen Peptides',
      emoji: '✨',
      priority: 2,
      dose: '15-20 grams',
      timing: 'Morning (in coffee/water)',
      pillCount: '1-2 scoops powder',
      fixes: ['Skin texture', 'Elasticity', 'Smoothness', 'Fine lines'],
      why: 'Collagen is 75-80% of your skin. Production drops 1% per year after age 20. Your diet (muscle meat) has almost no collagen. Collagen peptides provide amino acids that travel to skin and signal your body to make MORE collagen.',
      evidence: '2.5-15g daily improves skin elasticity by 20% in 8 weeks.',
      timeline: 'Week 4: More hydrated | Week 8: Smoother | Week 12: Significant texture improvement',
      products: [
        { brand: 'Vital Proteins', name: 'Collagen Peptides', perServing: '20g/2 scoops', take: '1-2 scoops', price: '$25/20oz' },
        { brand: 'Sports Research', name: 'Collagen Peptides', perServing: '11g/scoop', take: '2 scoops', price: '$25/16oz' },
      ],
      warnings: [],
      color: '#ec4899',
    },
    {
      id: 'vitaminc',
      name: 'Vitamin C',
      emoji: '🍊',
      priority: 3,
      dose: '1,000 mg',
      timing: 'Breakfast',
      pillCount: '1 capsule',
      fixes: ['Dark spots on face', 'Uneven skin tone', 'Collagen production'],
      why: 'Your zero-carb diet has ZERO Vitamin C. It\'s ESSENTIAL for: (1) Collagen synthesis — without it, collagen supplements work less; (2) Melanin inhibition — blocks the enzyme that makes dark spots; (3) Brightening — breaks up existing melanin clusters.',
      evidence: 'Oral Vitamin C combined with Vitamin E significantly reduces hyperpigmentation.',
      timeline: 'Week 4-6: Skin brighter | Week 8-12: Dark spots fading | Week 16-24: Significant improvement',
      products: [
        { brand: 'NOW Foods', name: 'C-1000 with Rose Hips', perServing: '1,000mg', take: '1 capsule', price: '$12/250ct' },
        { brand: 'Thorne', name: 'Vitamin C with Flavonoids', perServing: '1,000mg', take: '1 capsule', price: '$25/90ct' },
      ],
      warnings: [],
      color: '#f97316',
    },
    {
      id: 'vitamine',
      name: 'Vitamin E',
      emoji: '🌻',
      priority: 4,
      dose: '400 IU',
      timing: 'Breakfast',
      pillCount: '1 softgel',
      fixes: ['Dry skin', 'Skin barrier', 'Enhances Vitamin C'],
      why: 'Vitamin E is the primary fat-soluble antioxidant for skin. Protects cell membranes, repairs skin barrier, prevents moisture loss. Works SYNERGISTICALLY with Vitamin C — together they are 4x more effective than either alone.',
      evidence: 'Vitamin C + E together reduce oxidative skin damage by up to 50%.',
      timeline: 'Week 2-4: Less dry | Week 6-8: Better moisture retention | Ongoing: Enhances Vitamin C',
      products: [
        { brand: 'NOW Foods', name: 'E-400 Mixed Tocopherols', perServing: '400 IU', take: '1 softgel', price: '$18/100ct' },
        { brand: 'Solgar', name: 'Vitamin E 400 IU', perServing: '400 IU', take: '1 softgel', price: '$20/100ct' },
      ],
      warnings: ['Buy "mixed tocopherols" (natural), NOT "dl-alpha" (synthetic)'],
      color: '#84cc16',
    },
    {
      id: 'vitamina',
      name: 'Vitamin A',
      emoji: '🥕',
      priority: 5,
      dose: '10,000 IU',
      timing: 'Breakfast',
      pillCount: '1 softgel',
      fixes: ['Back bumps/spots', 'Rough texture', 'Slow cell turnover', 'Dark spots'],
      why: 'Vitamin A is THE master vitamin for skin. Controls skin cell production and turnover. Without it: dead cells accumulate (rough texture), pores clog (back bumps), dark spots stay longer. Vitamin A accelerates shedding of old, pigmented cells.',
      evidence: 'Oral Vitamin A normalizes keratinization (fixes bumps) and improves texture.',
      timeline: 'Week 4-6: Smoother skin | Week 8-12: Back bumps reducing | Week 12-16: Significantly clearer',
      products: [
        { brand: 'NOW Foods', name: 'Vitamin A 10,000 IU', perServing: '10,000 IU', take: '1 softgel', price: '$8/100ct' },
        { brand: 'Carlson', name: 'Vitamin A', perServing: '10,000 IU', take: '1 softgel', price: '$10/100ct' },
      ],
      warnings: ['⚠️ Do NOT exceed 10,000 IU daily — Vitamin A accumulates and can be toxic'],
      color: '#ef4444',
    },
    {
      id: 'zinc',
      name: 'Zinc',
      emoji: '⚡',
      priority: 6,
      dose: '30 mg',
      timing: 'Breakfast (with food!)',
      pillCount: '1 capsule',
      fixes: ['Back bumps/spots', 'Skin healing', 'Inflammation'],
      why: 'Zinc is essential for skin repair. Regulates oil production, reduces inflammation, speeds healing, has antimicrobial properties that reduce bacteria causing bumps.',
      evidence: '30mg daily significantly reduces inflammatory skin conditions.',
      timeline: 'Week 2-4: Less inflammation | Week 6-8: Bumps decreasing | Week 8-12: Clearer back',
      products: [
        { brand: 'Thorne', name: 'Zinc Picolinate', perServing: '30mg', take: '1 capsule', price: '$15/60ct' },
        { brand: 'NOW Foods', name: 'Zinc Glycinate', perServing: '30mg', take: '1 capsule', price: '$10/120ct' },
      ],
      warnings: ['⚠️ Do NOT exceed 40mg daily', '⚠️ ALWAYS take with food (causes nausea on empty stomach)', '⚠️ If taking 3+ months, add 2mg copper'],
      color: '#6366f1',
    },
    {
      id: 'biotin',
      name: 'Biotin',
      emoji: '💅',
      priority: 7,
      dose: '10,000 mcg',
      timing: 'Breakfast',
      pillCount: '1 tablet',
      fixes: ['Overall skin health', 'Skin cell renewal'],
      why: 'Biotin (B7) is essential for fat metabolism in skin cells. Supports keratin production. While eggs provide some, higher doses support faster skin repair.',
      evidence: 'Biotin deficiency causes scaly, red skin. Supplementation improves skin quality.',
      timeline: 'Week 4-6: Supports overall improvement | Ongoing: Maintains skin health',
      products: [
        { brand: 'Natrol', name: 'Biotin Maximum Strength', perServing: '10,000mcg', take: '1 tablet', price: '$8/100ct' },
        { brand: 'Sports Research', name: 'Biotin', perServing: '10,000mcg', take: '1 softgel', price: '$12/120ct' },
      ],
      warnings: [],
      color: '#a855f7',
    },
    {
      id: 'ha',
      name: 'Hyaluronic Acid',
      emoji: '💧',
      priority: 8,
      dose: '200 mg',
      timing: 'Breakfast',
      pillCount: '2 capsules',
      fixes: ['Deep hydration', 'Plumpness', 'Moisture retention'],
      why: 'Hyaluronic acid holds 1,000x its weight in water. Your body makes less as you age. Keto + Metformin increases water loss. Oral HA gets absorbed, travels to skin, and hydrates from inside.',
      evidence: '120-240mg daily significantly increases skin moisture and reduces dryness.',
      timeline: 'Week 2-4: Skin feels hydrated | Week 6-8: Visibly plumper | Week 12: Significantly less dry',
      products: [
        { brand: 'NOW Foods', name: 'Hyaluronic Acid 100mg', perServing: '100mg', take: '2 capsules', price: '$15/60ct' },
        { brand: 'Sports Research', name: 'Hyaluronic Acid', perServing: '200mg', take: '1 capsule', price: '$18/60ct' },
      ],
      warnings: [],
      color: '#0ea5e9',
    },
  ];

  const scheduleItems: ScheduleItem[] = [
    { name: 'Omega-3 Fish Oil', dose: '3,000mg', pills: '3 softgels', emoji: '🐟' },
    { name: 'Collagen Peptides', dose: '15-20g', pills: '1-2 scoops', emoji: '✨' },
    { name: 'Vitamin C', dose: '1,000mg', pills: '1 capsule', emoji: '🍊' },
    { name: 'Vitamin E', dose: '400 IU', pills: '1 softgel', emoji: '🌻' },
    { name: 'Vitamin A', dose: '10,000 IU', pills: '1 softgel', emoji: '🥕' },
    { name: 'Zinc', dose: '30mg', pills: '1 capsule', emoji: '⚡' },
    { name: 'Biotin', dose: '10,000mcg', pills: '1 tablet', emoji: '💅' },
    { name: 'Hyaluronic Acid', dose: '200mg', pills: '2 capsules', emoji: '💧' },
    { name: 'Vitamin B12', dose: '1,000mcg', pills: '1 capsule', emoji: '🔴' },
    { name: 'Vitamin D3', dose: '4,000 IU', pills: '1 capsule', emoji: '☀️' },
  ];

  const timeline: TimelinePhase[] = [
    { weeks: '1-2', changes: ['Omega-3 incorporating into cells', 'Hydration beginning to improve'], visible: ['Skin feels slightly less tight/dry'], color: '#fef3c7' },
    { weeks: '3-4', changes: ['Inflammation reducing', 'Collagen amino acids absorbing'], visible: ['Cracked areas starting to heal', 'Softer skin texture'], color: '#fde68a' },
    { weeks: '5-6', changes: ['Vitamin C working on melanin', 'Cell turnover accelerating'], visible: ['Skin looks brighter', 'Dark spots unchanged yet'], color: '#fcd34d' },
    { weeks: '7-8', changes: ['Full skin cycle completing', 'Zinc clearing bacteria'], visible: ['Back bumps reducing', 'Smoother overall texture'], color: '#fbbf24' },
    { weeks: '9-12', changes: ['Second/third skin cycle', 'Significant collagen built up'], visible: ['Visible improvement everywhere', 'Dark spots beginning to fade'], color: '#f59e0b' },
    { weeks: '13-16', changes: ['Continued improvement', 'New skin cells healthier'], visible: ['Dark spots noticeably lighter', 'Smooth, even skin'], color: '#d97706' },
    { weeks: '17-24', changes: ['Maintenance phase active', 'Maximum supplement absorption'], visible: ['Clear, even-toned skin', 'Minimal dryness'], color: '#b45309' },
    { weeks: '25-52', changes: ['Diabetes reversing', 'Insulin levels normalizing'], visible: ['Skin tags shrinking/falling off', 'Complete skin transformation'], color: '#92400e' },
  ];

  const shoppingList: ShoppingItem[] = [
    { name: 'Omega-3 Fish Oil', product: 'Nordic Naturals Ultimate Omega 60ct', price: '$30' },
    { name: 'Collagen Peptides', product: 'Vital Proteins 20oz', price: '$25' },
    { name: 'Vitamin C', product: 'NOW Foods C-1000 250ct', price: '$4' },
    { name: 'Vitamin E', product: 'NOW Foods E-400 100ct', price: '$6' },
    { name: 'Vitamin A', product: 'NOW Foods 10,000 IU 100ct', price: '$3' },
    { name: 'Zinc', product: 'Thorne Zinc Picolinate 60ct', price: '$8' },
    { name: 'Biotin', product: 'Natrol 10,000mcg 100ct', price: '$3' },
    { name: 'Hyaluronic Acid', product: 'NOW Foods HA 60ct', price: '$8' },
    { name: 'Vitamin B12', product: 'Jarrow Methyl B12 100ct', price: '$5' },
    { name: 'Vitamin D3', product: 'NOW Foods D3 240ct', price: '$4' },
    { name: 'Magnesium', product: 'NOW Foods Glycinate 180ct', price: '$8' },
  ];

  const getProgress = (startsImproving: number, fullyResolved: number) => {
    if (weeksElapsed >= fullyResolved) return 100;
    if (weeksElapsed < startsImproving) return Math.round((weeksElapsed / startsImproving) * 30);
    return Math.round(30 + ((weeksElapsed - startsImproving) / (fullyResolved - startsImproving)) * 70);
  };

  const toggleChecklist = (id: string) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, sans-serif",
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1a2e 50%, #0f172a 100%)',
      minHeight: '100vh',
      padding: '15px',
      color: '#fff',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '20px',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '800',
      background: 'linear-gradient(90deg, #f59e0b, #ec4899, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: '0 0 5px 0',
    },
    tabs: {
      display: 'flex',
      gap: '6px',
      marginBottom: '16px',
      overflowX: 'auto' as const,
      paddingBottom: '8px',
    },
    tab: (active: boolean) => ({
      padding: '10px 14px',
      borderRadius: '20px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.8rem',
      fontWeight: '600',
      background: active ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'rgba(255,255,255,0.08)',
      color: active ? '#000' : '#888',
      whiteSpace: 'nowrap' as const,
    }),
    card: {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px',
      border: '1px solid rgba(255,255,255,0.08)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
      fontSize: '0.85rem',
    },
    th: {
      textAlign: 'left' as const,
      padding: '10px 8px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      color: '#888',
      fontWeight: '600',
      fontSize: '0.75rem',
      textTransform: 'uppercase' as const,
    },
    td: {
      padding: '10px 8px',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    },
    progressBar: {
      width: '100%',
      height: '8px',
      background: 'rgba(255,255,255,0.1)',
      borderRadius: '4px',
      overflow: 'hidden' as const,
    },
    issueCard: (color: string) => ({
      background: `linear-gradient(135deg, ${color}15, ${color}05)`,
      borderRadius: '14px',
      padding: '16px',
      marginBottom: '12px',
      border: `1px solid ${color}30`,
    }),
    supplementCard: (color: string, expanded: boolean) => ({
      background: expanded ? `linear-gradient(135deg, ${color}20, ${color}08)` : 'rgba(255,255,255,0.03)',
      borderRadius: '14px',
      padding: '16px',
      marginBottom: '10px',
      cursor: 'pointer',
      border: expanded ? `2px solid ${color}` : '1px solid rgba(255,255,255,0.08)',
      transition: 'all 0.2s',
    }),
    checkItem: (checked: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px',
      background: checked ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.02)',
      borderRadius: '10px',
      marginBottom: '8px',
      cursor: 'pointer',
      border: checked ? '1px solid rgba(16,185,129,0.3)' : '1px solid transparent',
    }),
    checkbox: (checked: boolean) => ({
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: checked ? 'none' : '2px solid #444',
      background: checked ? 'linear-gradient(135deg, #10b981, #059669)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      color: '#fff',
      flexShrink: 0,
    }),
  };

  const totalMonthly = shoppingList.reduce((sum, item) => sum + parseInt(item.price.replace('$', '')), 0);
  const checklistComplete = Object.values(checklist).filter(Boolean).length;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={{ fontSize: '2.5rem', marginBottom: '5px' }}>✨</div>
        <h1 style={styles.title}>SKIN TRANSFORMATION</h1>
        <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>
          Week {weeksElapsed} • Supplements-Only Protocol
        </p>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {[
          { id: 'issues', label: '🔍 Your Issues' },
          { id: 'supplements', label: '💊 Supplements' },
          { id: 'schedule', label: '⏰ Daily Schedule' },
          { id: 'timeline', label: '📈 Timeline' },
          { id: 'shopping', label: '🛒 Shopping List' },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={styles.tab(activeTab === tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* ISSUES TAB */}
      {activeTab === 'issues' && (
        <>
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 12px', fontSize: '0.95rem', color: '#f59e0b' }}>
              🔍 YOUR SKIN ISSUES & PROGRESS
            </h3>
            <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 15px' }}>
              Week {weeksElapsed} of your transformation journey
            </p>
          </div>

          {skinIssues.map(issue => {
            const progress = getProgress(issue.startsImproving, issue.fullyResolved);
            return (
              <div key={issue.id} style={styles.issueCard(issue.color)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '2rem' }}>{issue.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, color: issue.color, fontSize: '1rem' }}>{issue.name}</h4>
                    <p style={{ margin: 0, color: '#888', fontSize: '0.75rem' }}>{issue.location}</p>
                  </div>
                  <div style={{
                    background: progress >= 100 ? '#10b981' : issue.color,
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: '#000',
                  }}>
                    {progress >= 100 ? '✓ RESOLVED' : `${progress}%`}
                  </div>
                </div>

                <div style={styles.progressBar}>
                  <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${issue.color}, ${issue.color}aa)`,
                    borderRadius: '4px',
                    transition: 'width 0.5s',
                  }} />
                </div>

                <div style={{ marginTop: '12px', fontSize: '0.8rem' }}>
                  <p style={{ margin: '0 0 6px', color: '#aaa' }}>
                    <strong style={{ color: '#888' }}>Cause:</strong> {issue.cause}
                  </p>
                  <p style={{ margin: '0 0 6px', color: '#aaa' }}>
                    <strong style={{ color: '#888' }}>Supplements:</strong> {issue.supplements.join(', ')}
                  </p>
                  <p style={{ margin: 0, color: issue.color }}>
                    <strong>Timeline:</strong> Starts improving week {issue.startsImproving}, resolved by week {issue.fullyResolved}
                  </p>
                </div>
              </div>
            );
          })}

          <div style={{ ...styles.card, background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.02))', border: '1px solid rgba(239,68,68,0.2)' }}>
            <h4 style={{ margin: '0 0 8px', color: '#ef4444', fontSize: '0.9rem' }}>⚠️ WHY YOUR DIET CAUSES SKIN ISSUES</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.8rem', lineHeight: 1.6 }}>
              Your diet (4 eggs + 4x4 burger) has <strong style={{ color: '#ef4444' }}>zero Omega-3</strong>, <strong style={{ color: '#ef4444' }}>zero Vitamin C</strong>, and very high Omega-6. This creates chronic inflammation → dry, cracked, spotty skin. The supplements below fix these exact deficiencies.
            </p>
          </div>
        </>
      )}

      {/* SUPPLEMENTS TAB */}
      {activeTab === 'supplements' && (
        <>
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 5px', fontSize: '0.95rem', color: '#f59e0b' }}>💊 THE 8 SKIN SUPPLEMENTS</h3>
            <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>
              Tap any supplement for complete details
            </p>
          </div>

          {supplements.map(supp => (
            <div
              key={supp.id}
              style={styles.supplementCard(supp.color, expandedSupplement === supp.id)}
              onClick={() => setExpandedSupplement(expandedSupplement === supp.id ? null : supp.id)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>{supp.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ margin: 0, color: supp.color, fontSize: '1rem' }}>{supp.name}</h4>
                    <span style={{
                      background: supp.color,
                      color: '#000',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      fontSize: '0.65rem',
                      fontWeight: '700',
                    }}>
                      #{supp.priority}
                    </span>
                  </div>
                  <p style={{ margin: 0, color: '#888', fontSize: '0.75rem' }}>{supp.dose} • {supp.timing}</p>
                </div>
                <span style={{ color: '#666', fontSize: '1.2rem' }}>
                  {expandedSupplement === supp.id ? '▼' : '▶'}
                </span>
              </div>

              {expandedSupplement === supp.id && (
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ marginBottom: '14px' }}>
                    <h5 style={{ color: supp.color, margin: '0 0 6px', fontSize: '0.8rem' }}>WHAT IT FIXES:</h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {supp.fixes.map((fix, i) => (
                        <span key={i} style={{
                          background: 'rgba(255,255,255,0.1)',
                          padding: '4px 10px',
                          borderRadius: '15px',
                          fontSize: '0.75rem',
                        }}>{fix}</span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <h5 style={{ color: supp.color, margin: '0 0 6px', fontSize: '0.8rem' }}>WHY YOU NEED IT:</h5>
                    <p style={{ margin: 0, color: '#bbb', fontSize: '0.8rem', lineHeight: 1.5 }}>{supp.why}</p>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <h5 style={{ color: supp.color, margin: '0 0 6px', fontSize: '0.8rem' }}>CLINICAL EVIDENCE:</h5>
                    <p style={{ margin: 0, color: '#10b981', fontSize: '0.8rem', fontStyle: 'italic' }}>{supp.evidence}</p>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <h5 style={{ color: supp.color, margin: '0 0 6px', fontSize: '0.8rem' }}>WHEN YOU&apos;LL SEE RESULTS:</h5>
                    <p style={{ margin: 0, color: '#fbbf24', fontSize: '0.8rem' }}>{supp.timeline}</p>
                  </div>

                  {supp.warnings.length > 0 && (
                    <div style={{ background: 'rgba(239,68,68,0.1)', borderRadius: '8px', padding: '10px', marginBottom: '14px' }}>
                      {supp.warnings.map((warn, i) => (
                        <p key={i} style={{ margin: i > 0 ? '6px 0 0' : 0, color: '#ef4444', fontSize: '0.8rem' }}>{warn}</p>
                      ))}
                    </div>
                  )}

                  <div>
                    <h5 style={{ color: supp.color, margin: '0 0 8px', fontSize: '0.8rem' }}>RECOMMENDED PRODUCTS:</h5>
                    <table style={{ ...styles.table, fontSize: '0.75rem' }}>
                      <thead>
                        <tr>
                          <th style={{ ...styles.th, fontSize: '0.7rem' }}>Product</th>
                          <th style={{ ...styles.th, fontSize: '0.7rem' }}>Take</th>
                          <th style={{ ...styles.th, fontSize: '0.7rem' }}>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {supp.products.map((prod, i) => (
                          <tr key={i}>
                            <td style={styles.td}>{prod.brand} {prod.name}</td>
                            <td style={{ ...styles.td, color: supp.color }}>{prod.take}</td>
                            <td style={{ ...styles.td, color: '#10b981' }}>{prod.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}

      {/* SCHEDULE TAB */}
      {activeTab === 'schedule' && (
        <>
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 12px', fontSize: '0.95rem', color: '#f59e0b' }}>⏰ DAILY SUPPLEMENT SCHEDULE</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>
                Take all supplements with breakfast
              </p>
              <span style={{
                background: checklistComplete === scheduleItems.length ? '#10b981' : 'rgba(255,255,255,0.1)',
                color: checklistComplete === scheduleItems.length ? '#000' : '#888',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '700',
              }}>
                {checklistComplete}/{scheduleItems.length}
              </span>
            </div>
          </div>

          <div style={{ ...styles.card, borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
              <span style={{ fontSize: '1.5rem' }}>🍳</span>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>BREAKFAST (7-8 AM)</h4>
                <p style={{ margin: 0, color: '#888', fontSize: '0.8rem' }}>With 4 eggs + Metformin</p>
              </div>
            </div>

            {scheduleItems.map((item, i) => (
              <div
                key={i}
                style={styles.checkItem(checklist[item.name])}
                onClick={() => toggleChecklist(item.name)}
              >
                <div style={styles.checkbox(checklist[item.name])}>
                  {checklist[item.name] && '✓'}
                </div>
                <span style={{ fontSize: '1.3rem' }}>{item.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontWeight: '600',
                    textDecoration: checklist[item.name] ? 'line-through' : 'none',
                    color: checklist[item.name] ? '#10b981' : '#fff',
                  }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#666' }}>{item.dose} • {item.pills}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...styles.card, borderLeft: '4px solid #8b5cf6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>🌙</span>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>BEDTIME (10 PM)</h4>
                <p style={{ margin: 0, color: '#888', fontSize: '0.8rem' }}>Magnesium Glycinate • 400mg • 2 capsules</p>
              </div>
            </div>
          </div>

          <div style={{ ...styles.card, background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(14,165,233,0.02))' }}>
            <h4 style={{ margin: '0 0 8px', color: '#0ea5e9', fontSize: '0.9rem' }}>💧 HYDRATION (CRITICAL)</h4>
            <table style={styles.table}>
              <tbody>
                {[
                  { item: 'Water', amount: '100-120 oz daily', note: 'Add ¼ tsp salt per 32 oz' },
                  { item: 'Sodium', amount: '3,000-5,000 mg', note: 'Salt your food liberally' },
                  { item: 'Potassium', amount: '1,000-3,000 mg', note: 'Lite salt on food' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={styles.td}>{row.item}</td>
                    <td style={{ ...styles.td, color: '#0ea5e9' }}>{row.amount}</td>
                    <td style={{ ...styles.td, color: '#888', fontSize: '0.75rem' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={styles.card}>
            <h4 style={{ margin: '0 0 8px', color: '#f59e0b', fontSize: '0.9rem' }}>📊 DAILY PILL COUNT</h4>
            <table style={styles.table}>
              <tbody>
                <tr>
                  <td style={styles.td}>Morning pills/softgels</td>
                  <td style={{ ...styles.td, textAlign: 'right', fontWeight: '700' }}>~12</td>
                </tr>
                <tr>
                  <td style={styles.td}>Morning collagen powder</td>
                  <td style={{ ...styles.td, textAlign: 'right', fontWeight: '700' }}>1-2 scoops</td>
                </tr>
                <tr>
                  <td style={styles.td}>Bedtime pills</td>
                  <td style={{ ...styles.td, textAlign: 'right', fontWeight: '700' }}>2</td>
                </tr>
                <tr style={{ borderTop: '2px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ ...styles.td, color: '#f59e0b', fontWeight: '700' }}>Total daily</td>
                  <td style={{ ...styles.td, textAlign: 'right', fontWeight: '700', color: '#f59e0b' }}>~14 pills + powder</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* TIMELINE TAB */}
      {activeTab === 'timeline' && (
        <>
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 12px', fontSize: '0.95rem', color: '#f59e0b' }}>📈 RESULTS TIMELINE</h3>
            <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>
              You are at <strong style={{ color: '#f59e0b' }}>Week {weeksElapsed}</strong>
            </p>
          </div>

          {timeline.map((phase, i) => {
            const weekStart = parseInt(phase.weeks.split('-')[0]);
            const weekEnd = parseInt(phase.weeks.split('-')[1]) || weekStart;
            const isActive = weeksElapsed >= weekStart && weeksElapsed <= weekEnd;
            const isPast = weeksElapsed > weekEnd;

            return (
              <div key={i} style={{
                background: isActive ? `${phase.color}30` : isPast ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.02)',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '10px',
                border: isActive ? `2px solid ${phase.color}` : '1px solid rgba(255,255,255,0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isPast ? '#10b981' : isActive ? phase.color : '#333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: isPast || isActive ? '#000' : '#666',
                  }}>
                    {isPast ? '✓' : isActive ? '→' : i + 1}
                  </div>
                  <span style={{
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    color: isActive ? phase.color : isPast ? '#10b981' : '#666',
                  }}>
                    Week {phase.weeks}
                  </span>
                  {isActive && (
                    <span style={{
                      background: phase.color,
                      color: '#000',
                      padding: '3px 10px',
                      borderRadius: '12px',
                      fontSize: '0.7rem',
                      fontWeight: '700',
                    }}>
                      YOU ARE HERE
                    </span>
                  )}
                </div>

                <div style={{ marginLeft: '38px' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <p style={{ margin: '0 0 4px', color: '#888', fontSize: '0.75rem', fontWeight: '600' }}>WHAT&apos;S HAPPENING:</p>
                    {phase.changes.map((change, j) => (
                      <p key={j} style={{ margin: '2px 0', color: '#aaa', fontSize: '0.8rem' }}>• {change}</p>
                    ))}
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px', color: '#888', fontSize: '0.75rem', fontWeight: '600' }}>WHAT YOU&apos;LL NOTICE:</p>
                    {phase.visible.map((v, j) => (
                      <p key={j} style={{ margin: '2px 0', color: isPast ? '#10b981' : isActive ? phase.color : '#666', fontSize: '0.8rem', fontWeight: isPast || isActive ? '600' : '400' }}>
                        {isPast ? '✓ ' : '• '}{v}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* SHOPPING TAB */}
      {activeTab === 'shopping' && (
        <>
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 12px', fontSize: '0.95rem', color: '#f59e0b' }}>🛒 COMPLETE SHOPPING LIST</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Supplement</th>
                  <th style={styles.th}>Product</th>
                  <th style={styles.th}>$/Mo</th>
                </tr>
              </thead>
              <tbody>
                {shoppingList.map((item, i) => (
                  <tr key={i}>
                    <td style={{ ...styles.td, fontWeight: '600' }}>{item.name}</td>
                    <td style={{ ...styles.td, color: '#888', fontSize: '0.8rem' }}>{item.product}</td>
                    <td style={{ ...styles.td, color: '#10b981', fontWeight: '600' }}>{item.price}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: '2px solid rgba(255,255,255,0.2)' }}>
                  <td colSpan={2} style={{ ...styles.td, fontWeight: '700', color: '#f59e0b' }}>TOTAL MONTHLY COST</td>
                  <td style={{ ...styles.td, fontWeight: '700', color: '#f59e0b', fontSize: '1.1rem' }}>${totalMonthly}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={styles.card}>
            <h4 style={{ margin: '0 0 12px', color: '#f59e0b', fontSize: '0.9rem' }}>📦 WHERE TO BUY</h4>
            {[
              { store: 'Amazon', tip: 'Subscribe & Save for 10-15% off', emoji: '📦' },
              { store: 'iHerb', tip: 'Often cheaper, international shipping', emoji: '🌿' },
              { store: 'Costco', tip: 'Kirkland brand basics (Fish Oil, D3)', emoji: '🏪' },
              { store: 'Thorne.com', tip: 'Premium quality, direct from brand', emoji: '💎' },
            ].map((shop, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '10px',
                marginBottom: '8px',
              }}>
                <span style={{ fontSize: '1.5rem' }}>{shop.emoji}</span>
                <div>
                  <div style={{ fontWeight: '600' }}>{shop.store}</div>
                  <div style={{ fontSize: '0.8rem', color: '#888' }}>{shop.tip}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...styles.card, background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))', border: '1px solid rgba(16,185,129,0.2)' }}>
            <h4 style={{ margin: '0 0 8px', color: '#10b981', fontSize: '0.9rem' }}>💡 MONEY-SAVING TIPS</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#aaa', fontSize: '0.85rem', lineHeight: 1.6 }}>
              <li>Buy 90-180 count bottles instead of 30 count</li>
              <li>Amazon Subscribe & Save stacks with coupons</li>
              <li>iHerb has loyalty credits + frequent sales</li>
              <li>Most supplements last 3-6 months when bought in bulk</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h4 style={{ margin: '0 0 8px', color: '#f59e0b', fontSize: '0.9rem' }}>🎯 IF BUDGET IS TIGHT (TOP 4 ONLY)</h4>
            <table style={styles.table}>
              <tbody>
                {[
                  { name: 'Omega-3 Fish Oil', price: '$25-30', fixes: 'Dry/cracked skin' },
                  { name: 'Collagen Peptides', price: '$25', fixes: 'Texture, elasticity' },
                  { name: 'Vitamin C', price: '$4', fixes: 'Dark spots' },
                  { name: 'Zinc', price: '$8', fixes: 'Back bumps' },
                ].map((item, i) => (
                  <tr key={i}>
                    <td style={{ ...styles.td, fontWeight: '600' }}>#{i + 1} {item.name}</td>
                    <td style={{ ...styles.td, color: '#10b981' }}>{item.price}</td>
                    <td style={{ ...styles.td, color: '#888', fontSize: '0.8rem' }}>{item.fixes}</td>
                  </tr>
                ))}
                <tr style={{ borderTop: '2px solid rgba(255,255,255,0.1)' }}>
                  <td style={{ ...styles.td, fontWeight: '700' }}>Minimum Total</td>
                  <td colSpan={2} style={{ ...styles.td, fontWeight: '700', color: '#10b981' }}>~$62-67/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '20px', marginTop: '10px' }}>
        <p style={{
          fontSize: '0.9rem',
          fontWeight: '800',
          background: 'linear-gradient(90deg, #f59e0b, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          CONSISTENCY + PATIENCE = CLEAR SKIN
        </p>
        <p style={{ color: '#444', fontSize: '0.75rem', marginTop: '5px' }}>
          Take daily. Results in 8-12 weeks.
        </p>
      </div>
    </div>
  );
};

export default SkinTransformation;
