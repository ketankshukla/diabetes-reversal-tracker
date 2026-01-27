'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import { getLatestWeightEntry } from '@/lib/supabase';
import { STARTING_WEIGHT } from '@/lib/calculations';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [currentWeight, setCurrentWeight] = useState(STARTING_WEIGHT);

  useEffect(() => {
    const fetchLatestWeight = async () => {
      const entry = await getLatestWeightEntry();
      if (entry) {
        setCurrentWeight(entry.weight_lbs);
      }
    };
    fetchLatestWeight();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0f0f1a]">
      <Sidebar currentWeight={currentWeight} />
      <main className="lg:ml-[250px] min-h-screen">
        {children}
      </main>
    </div>
  );
}
