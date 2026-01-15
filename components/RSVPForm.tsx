"use client";

import { useState } from "react";
import { submitRSVP } from "@/app/actions/submitRSVP";

type Props = {
  className?: string;
};

export default function RSVPForm({ className = "" }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    const res = await submitRSVP(formData);
    setLoading(false);

    if (res?.success) {
      setSuccess(true);
    }
  }

  if (success) {
    return (
      <div
        className={`rounded-lg bg-white p-6 text-center shadow-md ${className}`}
      >
        <p className="text-sm font-semibold text-green-600">
          ✅ Thanks! Your RSVP has been confirmed.
        </p>
      </div>
    );
  }

  return (
    <form
      action={handleSubmit}
      className={`flex items-center gap-4 rounded-lg bg-white p-4 shadow-md ${className}`}
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your work email to confirm your attendance"
        className="flex-1 rounded-md border border-gray-300 px-4 py-3 text-sm outline-none"
        disabled={loading}
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-[#F5B301] px-6 py-3 text-sm font-semibold text-black disabled:opacity-60"
      >
        {loading ? "Submitting…" : "RSVP Now"}
      </button>
    </form>
  );
}
