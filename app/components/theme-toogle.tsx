"use client";

export default function ThemeToggle({
  isDark,
  setIsDark,
}: {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}) {
  return (
    <div className="mt-6">
      <button
        onClick={() => setIsDark(!isDark)}
        className="rounded border px-4 py-2 text-sm"
      >
        Toggle Theme
      </button>

      <p className="mt-3 opacity-70">
        Current Theme: {isDark ? "Dark" : "Light"}
      </p>
    </div>
  );
}
