"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
    >
      {pending ? "Saving..." : label}
    </button>
  );
}