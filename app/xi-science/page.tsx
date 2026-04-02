import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import FacultyCard from "@/components/FacultyCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTAStrip from "@/components/CTAStrip";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import { FACULTY, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Class 11 Science Coaching in Ulhasnagar | Kunal Academy",
  description: "Class 11 Science coaching in Ulhasnagar. Physics, Chemistry, Maths, Biology. Board + JEE/NEET prep. Integrated 2-year program. Book a free demo.",
};

export default function Class11Page() {
  return (
    <>
      <section className="bg-[#0B0F2E] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Physics · Chemistry · Maths · Biology", "Board + JEE/NEET", "Integrated Program"].map((b) => (
              <span key={b} className="bg-[#FF5A1F]/15 text-[#FF5A1F] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#FF5A1F]/20">{b}</span>
            ))}
          </div>
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-6">
            Class 11 Science — <span className="text-[#FF5A1F]">The Year That Determines Your Entrance Rank</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-2xl">
            40% of JEE and NEET syllabus is Class 11. Students who master this year with us consistently outrank those who don&apos;t.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us#book-demo" className="bg-[#FF5A1F] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#E84E17] transition-all text-center">📅 Book Free Demo</Link>
            <a href="tel:+919049104040" className="border-2 border-white/50 text-white font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-center">📞 Call: 9049 104040</a>
          </div>
        </div>
      </section>

      {/* Why This Year Matters */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel text="Why Class 11 is Critical" />
          <h2 className="text-white font-bold text-[28px] lg:text-[38px] mb-6">40% of JEE/NEET Syllabus Is Class 11</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "40%", label: "JEE/NEET syllabus is class 11 topics", color: "from-orange to-orange-hover" },
              { value: "2x", label: "Advantage for students who master class 11 early", color: "from-blue-600 to-blue-800" },
              { value: "1000+", label: "Students who trusted us for class 11", color: "from-gold to-yellow-600" },
            ].map((s) => (
              <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-2xl p-6 text-center`}>
                <div className="text-white font-extrabold text-[36px]">{s.value}</div>
                <div className="text-white/80 text-[13px] mt-1">{s.label}</div>
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
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Class 11 Subjects at Kunal Academy</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: "⚡", name: "Physics", faculty: "Kunal Sir" },
              { icon: "🧪", name: "Chemistry", faculty: "Seema Mam" },
              { icon: "📐", name: "Mathematics", faculty: "Kunal Sir" },
              { icon: "🧬", name: "Biology", faculty: "Seema Mam" },
            ].map((s) => (
              <div key={s.name} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6 text-center hover:border-[rgba(255,90,31,0.5)] transition-all">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-white font-bold text-[16px] mb-1">{s.name}</div>
                <div className="text-slate-400 text-[12px]">{s.faculty}</div>
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
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">What Makes Our Class 11 Program Different</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📋", title: "DPP Sheets", desc: "Daily Practice Problems for every chapter, reviewed in class." },
              { icon: "📝", title: "Weekly Tests", desc: "Chapter + cumulative tests every week with detailed analysis." },
              { icon: "🎥", title: "Revision Lectures", desc: "Dedicated revision sessions before every exam." },
              { icon: "📱", title: "Parent Updates", desc: "Weekly WhatsApp progress reports sent to parents." },
              { icon: "💬", title: "Doubt Sessions", desc: "One-to-one doubt clearing sessions after every class." },
              { icon: "🏛️", title: "Integrated Path", desc: "Board + JEE/NEET covered simultaneously — no duplicate effort." },
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
            title="Download Free Class 11 Science Notes"
            subtitle="Physics, Chemistry, Maths, Biology — chapter summaries and formula sheets."
            buttonText="Download Free Class 11 Notes"
            successMessage="✅ Notes will be sent to your WhatsApp within 2 hours!"
            includeEmail
          />
        </div>
      </section>

      <CTAStrip
        heading="Book a Demo for Class 11 Science — Seats Are Limited"
        subtext="We have limited seats in every Class 11 batch to ensure personal attention for every student."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
