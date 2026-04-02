import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import FacultyCard from "@/components/FacultyCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTAStrip from "@/components/CTAStrip";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import TopperCard from "@/components/TopperCard";
import { FACULTY, TESTIMONIALS, TOPPERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "NEET Coaching in Ulhasnagar | Kunal Academy — Proven Results, Proven Methods",
  description:
    "Best NEET coaching in Ulhasnagar since 2018. 100% qualification rate, Biology+Physics+Chemistry, 30 full mock NEET tests. Book a free demo now.",
};

const HIGHLIGHTS = [
  { icon: "🧬", title: "Biology", desc: "Botany & Zoology — NCERT mastery + advanced NEET-level MCQs with diagrams." },
  { icon: "⚡", title: "Physics", desc: "Mechanics, thermodynamics, optics and all NEET Physics chapters covered for class 11 & 12." },
  { icon: "🧪", title: "Chemistry", desc: "Physical, Organic, Inorganic — NCERT-first approach with regular MCQ practice." },
  { icon: "📝", title: "30 Full Mock Tests", desc: "Every mock is NEET pattern (720 marks) with complete analysis and rank prediction." },
  { icon: "📚", title: "NCERT Mastery", desc: "NEET is NCERT. We ensure every student completes NCERT line-by-line at least twice." },
  { icon: "💬", title: "Doubt Sessions", desc: "Daily doubt clearing sessions after every class, one-to-one." },
];

export default function NEETPage() {
  const neetToppers = TOPPERS.filter((t) => t.exam === "NEET");
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0F2E] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {["100% Qualification Rate", "NEET 2024 Toppers", "Integrated 2-Year Program"].map((b) => (
                <span key={b} className="bg-[#FF5A1F]/15 text-[#FF5A1F] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#FF5A1F]/20">
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-[32px] lg:text-[56px] font-extrabold text-white leading-tight mb-6">
              NEET Coaching in Ulhasnagar —{" "}
              <span className="text-[#FF5A1F]">Proven Results, Proven Methods</span>
            </h1>
            <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Every NEET-enrolled student at Kunal Academy has qualified since 2018. That&apos;s not luck — it&apos;s our system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us#book-demo" className="bg-[#FF5A1F] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#E84E17] transition-all text-center">
                📅 Book Free Demo Lecture
              </Link>
              <a href="tel:+919890463044" className="border-2 border-white/50 text-white font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-center">
                📞 Call Seema Mam
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0F1535] py-16 border-t border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "100%", label: "NEET Qualification Rate" },
              { value: "640+", label: "Highest NEET Score" },
              { value: "30+", label: "Full Mock Tests/Year" },
              { value: "2018", label: "Serving Ulhasnagar" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6">
                <div className="text-3xl lg:text-4xl font-extrabold text-[#FF5A1F] mb-2">{s.value}</div>
                <div className="text-slate-300 text-[13px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-[#0B0F2E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Program Highlights" />
            <h2 className="text-white font-bold text-[28px] lg:text-[42px]">Our NEET Program — Built to Qualify</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-8 hover:border-[rgba(255,90,31,0.5)] hover:shadow-[0_8px_32px_rgba(255,90,31,0.15)] hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="text-white font-bold text-[18px] mb-3">{h.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      {neetToppers.length > 0 && (
        <section className="bg-[#0F1535] py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-10">
              <SectionLabel text="NEET Toppers" />
              <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Students Who Qualified NEET</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {neetToppers.map((t) => <TopperCard key={t.id} {...t} />)}
            </div>
          </div>
        </section>
      )}

      {/* Faculty */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="NEET Faculty" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Your NEET Mentors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY.map((f) => <FacultyCard key={f.id} {...f} />)}
          </div>
        </div>
      </section>

      {/* Free Notes */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <LeadMagnetForm
            title="Download Free NEET Study Material"
            subtitle="NEET chapter summaries, formula sheets, and high-yield MCQs — delivered to WhatsApp."
            buttonText="Download Free NEET Notes"
            successMessage="✅ Notes will be sent to your WhatsApp within 2 hours!"
            includeEmail
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Student Reviews" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">NEET Students Speak</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(1, 4).map((t) => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Start Your NEET Journey — Book a Free Demo"
        subtext="Every NEET student at Kunal Academy has qualified since 2018. Your name could be next."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call Seema Mam"
        secondaryHref="tel:+919890463044"
      />
    </>
  );
}
