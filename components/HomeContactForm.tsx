"use client";

export default function HomeContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
        if (btn) {
          btn.textContent = "✅ Inquiry Sent! We'll call you soon.";
          btn.disabled = true;
        }
      }}
      className="flex flex-col gap-4"
    >
      {[
        { name: "name", placeholder: "Full Name", type: "text", required: true },
        { name: "phone", placeholder: "Phone Number", type: "tel", required: true },
        { name: "email", placeholder: "Email Address", type: "email", required: false },
      ].map((f) => (
        <input
          key={f.name}
          name={f.name}
          type={f.type}
          placeholder={f.placeholder}
          required={f.required}
          className="w-full bg-white/5 border border-white/[0.12] rounded-lg px-4 py-3.5 text-white placeholder:text-white/35 focus:border-[#C9980A] focus:ring-2 focus:ring-[#C9980A]/20 outline-none transition-all duration-200"
        />
      ))}
      <select
        name="class"
        required
        className="w-full bg-[#0A1250] border border-white/[0.12] rounded-lg px-4 py-3.5 text-white focus:border-[#C9980A] focus:ring-2 focus:ring-[#C9980A]/20 outline-none transition-all"
      >
        <option value="">Select Class / Program</option>
        {[
          "Class 8", "Class 9", "Class 10",
          "Class 11 Science", "Class 12 Science",
          "IIT-JEE", "NEET", "MH-CET",
        ].map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Any message or question? (optional)"
        rows={3}
        className="w-full bg-white/5 border border-white/[0.12] rounded-lg px-4 py-3.5 text-white placeholder:text-white/35 focus:border-[#C9980A] focus:ring-2 focus:ring-[#C9980A]/20 outline-none transition-all resize-none"
      />
      <button
        type="submit"
        className="bg-[#C9980A] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] hover:-translate-y-0.5 transition-all duration-200"
      >
        Send Inquiry
      </button>
    </form>
  );
}

