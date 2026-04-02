import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import TopperCard from "@/components/TopperCard";
import CTAStrip from "@/components/CTAStrip";
import { TOPPERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Results | Kunal Academy — 1000+ Successful Students",
  description:
    "See Kunal Academy's impressive results: 1000+ students, 100% JEE & NEET qualification rate, 200+ top college admissions since 2018.",
};

const STATS = [
  { value: "1000+", label: "Successful Students" },
  { value: "200+", label: "Top College Admissions" },
  { value: "100%", label: "JEE & NEET Qualification" },
  { value: "2018", label: "Established" },
];

const FILTERS = ["All", "JEE", "NEET", "MH-CET", "Board", "2024", "2023"];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0F2E] pt-32 pb-16 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionLabel text="Our Achievement" />
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-6">
            Our Results — Proof That the{" "}
            <span className="text-[#FF5A1F]">Kunal Academy Method</span> Works
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed">
            Every number below represents a student who trusted us, worked hard, and earned their spot in a top college.
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-[#0F1535] py-12 border-t border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6">
                <div className="text-4xl lg:text-5xl font-extrabold text-[#FF5A1F] mb-2">{s.value}</div>
                <div className="text-slate-300 text-[14px] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Grid */}
      <section className="bg-[#0B0F2E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Top Performers" />
            <h2 className="text-white font-bold text-[28px] lg:text-[42px]">Our Toppers</h2>
          </div>

          {/* Filter bar hint */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {FILTERS.map((f) => (
              <span
                key={f}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold cursor-pointer transition-all border ${
                  f === "All"
                    ? "bg-[#FF5A1F] text-white border-[#FF5A1F]"
                    : "bg-white/[0.05] text-slate-300 border-white/[0.08] hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
                }`}
              >
                {f}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {TOPPERS.map((t) => (
              <TopperCard key={t.id} {...t} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 text-[14px]">
              Showing a representative sample. We have celebrated 1000+ successful students since 2018.
            </p>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Want to Be Our Next Result? Book a Demo."
        subtext="Join 1000+ students who chose Kunal Academy and never looked back."
        primaryLabel="📅 Book Free Demo Now"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
