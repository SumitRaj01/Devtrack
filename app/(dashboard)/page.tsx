"use client"

import { useState } from "react";
import Counter from "../components/counter";
import ThemeToggle from "../components/theme-toogle";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={`min-h-screen p-6 transition-colors ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-semibold">DevTrack Dashboard</h1>
      <p className="opacity-70">Your productivity space starts here.</p>

      <Counter />

      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}
