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
  title: "IIT-JEE Coaching in Ulhasnagar | Kunal Academy — Where Ranks Are Built",
  description:
    "Best IIT-JEE coaching in Ulhasnagar. JEE Main & Advanced, 2-year integrated program, IIT-qualified faculty, 100% results. Book a free demo today.",
};

const HIGHLIGHTS = [
  { icon: "📐", title: "Mathematics", desc: "Algebra, Calculus, Coordinate Geometry, P&C, Statistics and all advanced JEE topics." },
  { icon: "⚡", title: "Physics", desc: "Mechanics, Thermodynamics, Electromagnetism, Optics, and Modern Physics covered deeply." },
  { icon: "🧪", title: "Chemistry", desc: "Physical, Organic & Inorganic Chemistry — equal emphasis on all three sections." },
  { icon: "📋", title: "DPP Sheets", desc: "Daily Practice Problem sheets covering every chapter with increasing difficulty levels." },
  { icon: "📝", title: "Full Mock Tests", desc: "30+ full JEE pattern mock tests annually with detailed performance analysis." },
  { icon: "💬", title: "Doubt Sessions", desc: "Daily one-to-one doubt sessions with faculty after every class." },
];

export default function IITJEEPage() {
  const jeeToppers = TOPPERS.filter((t) => t.exam === "JEE Main");
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0F2E] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {["JEE Main & Advanced", "Integrated 2-Year Program", "IIT-Qualified Faculty"].map((b) => (
                <span key={b} className="bg-[#FF5A1F]/15 text-[#FF5A1F] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#FF5A1F]/20">
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-[32px] lg:text-[56px] font-extrabold text-white leading-tight mb-6">
              IIT-JEE Coaching in Ulhasnagar —{" "}
              <span className="text-[#FF5A1F]">Where Ranks Are Built</span>
            </h1>
            <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-2xl">
              JEE is the toughest exam in the country. At Kunal Academy, we&apos;ve cracked the formula: world-class teaching + personal attention + relentless practice = top ranks.
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
        </div>
      </section>

      {/* Why This Year Matters */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel text="Our Approach" />
              <h2 className="text-white font-bold text-[28px] lg:text-[38px] mb-6">
                The Kunal Academy JEE Methodology
              </h2>
              <div className="space-y-4 text-slate-300 text-[15px] leading-relaxed">
                <p>Most coaching centres teach you the syllabus. We teach you <strong className="text-white">how to rank</strong>. There's a critical difference.</p>
                <p>Our 2-year integrated program starts from Class 11 and ensures that by the time you appear for JEE, you've done every topic at least 3 times — once conceptually, once through DPP, and once through mock tests.</p>
                <p>Average rank improvement among our JEE students in the final 6 months: <strong className="text-[#FF5A1F]">2 percentile points per month</strong>.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40%", label: "JEE syllabus covered in Class 11", color: "from-blue-600 to-blue-800" },
                { value: "30+", label: "Full mock tests per year", color: "from-orange to-orange-hover" },
                { value: "3x", label: "Every topic revised 3 times", color: "from-green-600 to-teal-700" },
                { value: "100%", label: "JEE qualification rate", color: "from-gold to-yellow-600" },
              ].map((s) => (
                <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-2xl p-5 text-center`}>
                  <div className="text-white font-extrabold text-[28px]">{s.value}</div>
                  <div className="text-white/80 text-[12px] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-[#0B0F2E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Program Highlights" />
            <h2 className="text-white font-bold text-[28px] lg:text-[42px]">What You Get at Kunal Academy</h2>
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
      {jeeToppers.length > 0 && (
        <section className="bg-[#0F1535] py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-10">
              <SectionLabel text="JEE Toppers" />
              <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Students Who Cracked JEE</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {jeeToppers.map((t) => <TopperCard key={t.id} {...t} />)}
            </div>
          </div>
        </section>
      )}

      {/* Faculty */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="JEE Faculty" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Your JEE Mentors</h2>
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
            title="Download Free JEE Study Material"
            subtitle="Get our curated JEE chapter notes and formula sheets right on WhatsApp."
            buttonText="Download Free JEE Notes"
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
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">JEE Students Speak</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Book Your JEE Demo Lecture Today"
        subtext="Attend one class. If you don't think it's the best JEE coaching in Ulhasnagar, there's nothing to pay."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call Kunal Sir"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
