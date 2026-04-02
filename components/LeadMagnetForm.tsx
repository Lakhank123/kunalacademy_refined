"use client";

import { useState } from "react";

interface LeadMagnetFormProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  successMessage?: string;
  includeEmail?: boolean;
  includeClass?: boolean;
}

export default function LeadMagnetForm({
  title,
  subtitle,
  buttonText = "Download Free Notes",
  successMessage = "✅ We'll send the notes to your WhatsApp within 2 hours!",
  includeEmail = false,
  includeClass = false,
}: LeadMagnetFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", classSelected: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const inputClass =
    "w-full bg-white/5 border border-white/[0.12] rounded-lg px-4 py-3.5 text-white placeholder:text-white/35 focus:border-[#FF5A1F] focus:ring-2 focus:ring-[#FF5A1F]/20 outline-none transition-all duration-200 text-[15px]";

  if (submitted) {
    return (
      <div className="bg-[#141A3E] border border-[rgba(255,90,31,0.5)] rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <p className="text-white font-bold text-[20px] mb-2">Thank You!</p>
        <p className="text-slate-300 text-[15px]">{successMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-8 max-w-2xl mx-auto">
      <h3 className="text-white font-bold text-[22px] mb-2">{title}</h3>
      {subtitle && <p className="text-slate-400 text-[14px] mb-6">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Full Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass}
        />
        {includeEmail && (
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        )}
        {includeClass && (
          <select
            value={form.classSelected}
            onChange={(e) => setForm({ ...form, classSelected: e.target.value })}
            className={inputClass + " bg-[#141A3E]"}
            required
          >
            <option value="">Select Your Class</option>
            {["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Dropper"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#FF5A1F] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#E84E17] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : buttonText}
        </button>
      </form>
    </div>
  );
}
