"use client";

import React, { useState, useEffect } from "react";
import DiabetesReversalTracker from "@/components/DiabetesReversalTracker";
import { getWeightEntries, supabase } from "@/lib/supabase";
import { WeightEntry } from "@/types";

export default function Home() {
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await getWeightEntries();
        setWeightEntries(entries);
      } catch (error) {
        console.error("Failed to fetch weight entries:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();

    // Subscribe to real-time updates on the weekly_measurements table
    const channel = supabase
      .channel("weekly_measurements_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "weekly_measurements" },
        () => {
          // Refetch all entries when any change occurs
          fetchData();
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00d4aa] mx-auto mb-4"></div>
          <p className="text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return <DiabetesReversalTracker weightEntries={weightEntries} />;
}
