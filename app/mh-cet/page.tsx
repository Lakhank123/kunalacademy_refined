import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import TestimonialCard from "@/components/TestimonialCard";
import CTAStrip from "@/components/CTAStrip";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import TopperCard from "@/components/TopperCard";
import { TESTIMONIALS, TOPPERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MH-CET Coaching in Ulhasnagar | Kunal Academy — Engineering & Pharmacy",
  description:
    "Best MH-CET coaching in Ulhasnagar. Engineering & Pharmacy entrances, Maths + Physics focused, weekly mocks, DPP-based practice. Book a free demo.",
};

export default function MHCETPage() {
  const cetToppers = TOPPERS.filter((t) => t.exam === "MH-CET");
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0F2E] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6 max-w-3xl">
          <h1 className="text-[32px] lg:text-[56px] font-extrabold text-white leading-tight mb-6">
            MH-CET Coaching in Ulhasnagar —{" "}
            <span className="text-[#FF5A1F]">Engineering &amp; Pharmacy Entrances Cracked</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-2xl">
            MH-CET Engineering requires strong Maths and Physics. Our DPP-based approach ensures you practice every concept until it becomes automatic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us#book-demo" className="bg-[#FF5A1F] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#E84E17] transition-all text-center">
              📅 Book Free Demo Lecture
            </Link>
            <a href="tel:+919049104040" className="border-2 border-white/50 text-white font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-center">
              📞 Call: 9049 104040
            </a>
          </div>
        </div>
      </section>

      {/* About MH-CET */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel text="About MH-CET" />
              <h2 className="text-white font-bold text-[28px] lg:text-[36px] mb-6">What is MH-CET?</h2>
              <div className="space-y-4 text-slate-300 text-[15px] leading-relaxed">
                <p>MH-CET (Maharashtra Common Entrance Test) is conducted by the State CET Cell for admission to engineering and pharmacy colleges in Maharashtra, including VJTI, COEP, and other top institutes.</p>
                <p>The exam tests Physics, Chemistry, and Mathematics (for engineering) and Biology (for pharmacy). At Kunal Academy, we focus on deep concept mastery and rapid problem-solving through our DPP methodology.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📐", label: "Maths DPP" },
                { icon: "⚡", label: "Physics DPP" },
                { icon: "🧪", label: "Chemistry" },
                { icon: "📝", label: "Mock Tests" },
              ].map((s) => (
                <div key={s.label} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-2">{s.icon}</div>
                  <div className="text-white font-bold text-[15px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DPP Solutions CTA Cards */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Study Material" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Chapter-wise DPP Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/mh-cet/maths-dpp-solution" className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center hover:scale-[1.03] transition-transform duration-300 group">
              <div className="text-5xl mb-4">📐</div>
              <h3 className="text-white font-bold text-[20px] mb-2">Maths DPP Solutions</h3>
              <p className="text-white/70 text-[13px]">All MH-CET Maths chapters with solved DPPs →</p>
            </Link>
            <Link href="/mh-cet/physics-dpp-solution" className="bg-gradient-to-br from-orange to-orange-hover rounded-2xl p-8 text-center hover:scale-[1.03] transition-transform duration-300 group">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-white font-bold text-[20px] mb-2">Physics DPP Solutions</h3>
              <p className="text-white/70 text-[13px]">All MH-CET Physics chapters with solved DPPs →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Toppers */}
      {cetToppers.length > 0 && (
        <section className="bg-[#0F1535] py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-10">
              <SectionLabel text="MH-CET Toppers" />
              <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Students Who Cracked MH-CET</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {cetToppers.map((t) => <TopperCard key={t.id} {...t} />)}
            </div>
          </div>
        </section>
      )}

      {/* Program Highlights */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Program Highlights" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">What Makes Our MH-CET Program Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📐", title: "Maths-Heavy Approach", desc: "60% of MH-CET marks come from Maths. We ensure every student becomes confident in all Maths chapters." },
              { icon: "⚡", title: "Physics Problem Solving", desc: "Board-level + entrance-level problems practiced daily. Speed and accuracy are built systematically." },
              { icon: "📝", title: "Weekly Mock Tests", desc: "Pattern-based MH-CET mock tests every week. Performance analysis after every test." },
              { icon: "📋", title: "DPP Practice", desc: "Chapter-wise DPP sheets with increasing difficulty. Solutions discussed in class." },
              { icon: "📊", title: "Percentile Tracking", desc: "Regular percentile benchmarking so you know exactly where you stand statewide." },
              { icon: "💬", title: "Doubt Sessions", desc: "Daily one-to-one doubt clearing sessions with faculty after every class." },
            ].map((h) => (
              <div key={h.title} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-8 hover:border-[rgba(255,90,31,0.5)] hover:shadow-[0_8px_32px_rgba(255,90,31,0.15)] hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="text-white font-bold text-[18px] mb-3">{h.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Notes */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <LeadMagnetForm
            title="Download Free MH-CET DPP Solutions"
            subtitle="Get our curated Maths & Physics DPP solutions delivered to WhatsApp."
            buttonText="Download Free DPP Solutions"
            successMessage="✅ DPP solutions will be sent to your WhatsApp within 2 hours!"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Student Reviews" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">MH-CET Students Speak</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(2, 5).map((t) => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Book Your MH-CET Demo Lecture Today"
        subtext="Attend a free class and see why Kunal Academy produces Ulhasnagar's top MH-CET rankers."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
