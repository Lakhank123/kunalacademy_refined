import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CTAStrip from "@/components/CTAStrip";
import LeadMagnetForm from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: "Class 12 Science Coaching in Ulhasnagar | Kunal Academy",
  description: "Class 12 Science coaching in Ulhasnagar. Board + JEE/NEET, Physics, Chemistry, Maths, Biology. 100% results. Book a free demo.",
};

export default function Class12Page() {
  return (
    <>
      <section className="bg-[#0B0F2E] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 max-w-3xl">
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-6">
            Class 12 Science — <span className="text-[#FF5A1F]">Board + Entrance, Both Covered</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-2xl">
            Class 12 is the most critical year of your academic life. Board results + entrance cutoffs both depend on what you do in these 12 months. We help you nail both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us#book-demo" className="bg-[#FF5A1F] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#E84E17] transition-all text-center">📅 Book Free Demo</Link>
            <a href="tel:+919049104040" className="border-2 border-white/50 text-white font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-center">📞 Call: 9049 104040</a>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-[#0F1535] py-16 border-t border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "JEE & NEET Qualification" },
              { value: "90%+", label: "Board Results Average" },
              { value: "60%", label: "Of JEE/NEET Syllabus Is Class 12" },
              { value: "2018", label: "Serving Ulhasnagar Students" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#FF5A1F] mb-2">{s.value}</div>
                <div className="text-slate-300 text-[13px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Subjects" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Class 12 Subjects We Cover</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: "⚡", name: "Physics" },
              { icon: "🧪", name: "Chemistry" },
              { icon: "📐", name: "Mathematics" },
              { icon: "🧬", name: "Biology" },
            ].map((s) => (
              <div key={s.name} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6 text-center hover:border-[rgba(255,90,31,0.5)] transition-all">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-white font-bold text-[16px]">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Program Features" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">What You Get in Class 12 at Kunal Academy</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📋", title: "DPP Practice", desc: "Daily practice sheets for every chapter with JEE/NEET difficulty." },
              { icon: "📝", title: "Board Revision", desc: "Dedicated board exam preparation sessions — 10-year paper practice." },
              { icon: "🏆", title: "Full Mock Tests", desc: "30+ mock tests for JEE/NEET pattern along with board mock tests." },
              { icon: "📱", title: "Parent Updates", desc: "Regular WhatsApp progress reports after every test." },
              { icon: "💬", title: "Doubt Sessions", desc: "Daily doubt clearing sessions after every class." },
              { icon: "🎯", title: "Target Rank Planning", desc: "Personalized target rank planning for JEE/NEET with monthly benchmarks." },
            ].map((f) => (
              <div key={f.title} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6 hover:border-[rgba(255,90,31,0.5)] transition-all">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-white font-bold text-[16px] mb-2">{f.title}</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Notes */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <LeadMagnetForm
            title="Download Free Class 12 Science Notes"
            subtitle="Physics, Chemistry, Maths, Biology — revision notes and formula sheets for boards + entrance."
            buttonText="Download Free Class 12 Notes"
            successMessage="✅ Notes will be sent to your WhatsApp within 2 hours!"
            includeEmail
          />
        </div>
      </section>

      <CTAStrip
        heading="Book a Demo for Class 12 Science — Limited Seats"
        subtext="Class 12 is the most important year. Don't compromise on your coaching. Try us for free."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
