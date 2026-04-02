import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "MH-CET Maths DPP Solutions | Kunal Academy",
  description: "Chapter-wise MH-CET Mathematics DPP solutions. Download and study with Kunal Academy.",
};

const CHAPTERS = [
  "Trigonometric Functions", "Sequences and Series", "Complex Numbers",
  "Permutations and Combinations", "Limits and Derivatives", "Statistics",
  "Probability", "Matrices and Determinants", "Integration", "Differential Equations",
  "Vectors", "Coordinate Geometry — Lines", "Coordinate Geometry — Circles",
  "Conic Sections", "Mathematical Reasoning",
];

export default function MathsDPPPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#0F1535] border-b border-white/[0.06] pt-20 pb-4">
        <div className="max-w-[1200px] mx-auto px-6 text-[13px] text-slate-400 flex gap-2">
          <Link href="/" className="hover:text-[#FF5A1F]">Home</Link>
          <span>/</span>
          <Link href="/mh-cet" className="hover:text-[#FF5A1F]">MH-CET</Link>
          <span>/</span>
          <span className="text-white">Maths DPP Solutions</span>
        </div>
      </div>

      <section className="bg-[#0B0F2E] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionLabel text="MH-CET Study Material" />
          <h1 className="text-[28px] lg:text-[42px] font-extrabold text-white mb-4">
            MH-CET Maths DPP — Chapter-wise Solutions
          </h1>
          <p className="text-slate-300 text-[16px] mb-10">
            Chapter-wise Daily Practice Problems for MH-CET Mathematics. Click any chapter to view or download solutions.
          </p>

          <div className="flex flex-col gap-3">
            {CHAPTERS.map((chapter, i) => (
              <div key={chapter} className="bg-[#141A3E] border border-white/[0.08] rounded-xl px-6 py-4 flex items-center justify-between hover:border-[rgba(255,90,31,0.5)] transition-all duration-200 group">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FF5A1F]/15 text-[#FF5A1F] font-bold text-[13px] flex items-center justify-center border border-[#FF5A1F]/20">
                    {i + 1}
                  </div>
                  <span className="text-white font-medium text-[15px] group-hover:text-[#FF5A1F] transition-colors">
                    {chapter}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-[12px]">DPP {i + 1}</span>
                  <Link
                    href="/contact-us#book-demo"
                    className="bg-[#FF5A1F]/15 text-[#FF5A1F] text-[12px] font-semibold px-3 py-1.5 rounded-lg border border-[#FF5A1F]/20 hover:bg-[#FF5A1F] hover:text-white transition-all"
                  >
                    Get Solutions
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-[#FF5A1F] to-[#E84E17] rounded-2xl p-8 text-center">
            <h2 className="text-white font-bold text-[22px] mb-3">Get All DPP Solutions Free</h2>
            <p className="text-white/80 text-[15px] mb-6">Join Kunal Academy to get all chapter DPP solutions + expert guidance from Kunal Sir.</p>
            <Link href="/contact-us#book-demo" className="inline-block bg-white text-[#FF5A1F] font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors">
              Book Free Demo & Get Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
