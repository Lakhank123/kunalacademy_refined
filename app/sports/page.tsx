import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Sports Day | Kunal Academy — Building Champions On and Off the Field",
  description: "See Kunal Academy's annual Sports Day events — cricket, badminton, athletics, and more.",
};

export default function SportsPage() {
  return (
    <>
      <section className="bg-[#0B0F2E] pt-32 pb-16 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionLabel text="Sports Day" />
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-4">
            Building Champions On and <span className="text-[#FF5A1F]">Off the Field</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed">
            Kunal Academy&apos;s annual Sports Day celebrates the spirit of competition, teamwork, and health alongside academic excellence.
          </p>
        </div>
      </section>

      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {["🏏 Cricket", "🏸 Badminton", "🏃 100m Sprint", "🏊 Swimming", "⚽ Football", "🏐 Volleyball", "🥊 Tug of War", "🎯 Shot Put"].map((s) => (
              <div key={s} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl h-36 flex flex-col items-center justify-center gap-2 text-center hover:border-[rgba(255,90,31,0.5)] hover:scale-105 transition-all duration-300">
                <span className="text-4xl">{s.split(" ")[0]}</span>
                <span className="text-white font-semibold text-[13px]">{s.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/activities" className="text-[#FF5A1F] font-semibold text-[15px] hover:underline">← Back to All Activities</Link>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Academics + Sports = Complete Development"
        subtext="At Kunal Academy, we develop the whole student. Academics, sports, culture, and character."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
      />
    </>
  );
}
