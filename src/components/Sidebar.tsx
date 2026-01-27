"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Scale,
  Pill,
  Timer,
  TestTube,
  Menu,
  X,
} from "lucide-react";
import { calculateDaysElapsed } from "@/lib/calculations";

interface SidebarProps {
  currentWeight: number;
}

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard, emoji: "📊" },
  { href: "/weight-log", label: "Weight Log", icon: Scale, emoji: "⚖️" },
  { href: "/supplements", label: "Supplements", icon: Pill, emoji: "💊" },
  { href: "/countdown", label: "Countdown", icon: Timer, emoji: "⏱️" },
  { href: "/lab-tests", label: "Lab Tests", icon: TestTube, emoji: "🩺" },
];

export default function Sidebar({ currentWeight }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [daysElapsed, setDaysElapsed] = useState(0);

  // Calculate days elapsed only on client side to avoid hydration mismatch
  useEffect(() => {
    setDaysElapsed(calculateDaysElapsed());
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-[#1a1a2e] border border-white/10"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "linear-gradient(180deg, #0f0c29 0%, #1a1a2e 100%)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Title */}
          <div className="p-6 border-b border-white/10">
            <div className="text-3xl mb-2">🎯</div>
            <h1
              className="text-lg font-extrabold tracking-tight"
              style={{
                background: "linear-gradient(90deg, #00d4aa, #00a080)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DIABETES REVERSAL
            </h1>
            <p className="text-xs text-gray-500 mt-1">TRACKER</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#00d4aa] to-[#00a080] text-black font-semibold"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="text-lg">{item.emoji}</span>
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer Stats */}
          <div className="p-4 border-t border-white/10">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Current
                </span>
                <span className="text-lg font-bold text-[#00d4aa]">
                  {currentWeight} lbs
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  Day
                </span>
                <span className="text-lg font-bold text-[#4facfe]">
                  {daysElapsed + 1}
                </span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Goal</span>
                  <span className="text-sm text-[#fbbf24] font-semibold">
                    160 lbs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
