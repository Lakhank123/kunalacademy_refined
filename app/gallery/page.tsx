import type { Metadata } from "next";
import CTAStrip from "@/components/CTAStrip";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Gallery | Kunal Academy — Inside Our Campus",
  description: "See inside Kunal Academy — classrooms, events, sports day, cultural activities, and result celebrations.",
};

const GALLERY_ITEMS = [
  { icon: "🎓", label: "AC Classroom", category: "Classrooms" },
  { icon: "⚽", label: "Sports Day 2024", category: "Sports" },
  { icon: "🏆", label: "NEET Results 2024", category: "Results" },
  { icon: "🎭", label: "Cultural Night", category: "Cultural" },
  { icon: "🔬", label: "Science Workshop", category: "Events" },
  { icon: "🎉", label: "Annual Day 2024", category: "Cultural" },
  { icon: "📚", label: "Study Library", category: "Classrooms" },
  { icon: "🏅", label: "JEE Toppers Felicitation", category: "Results" },
  { icon: "👥", label: "Orientation Day", category: "Events" },
  { icon: "🎵", label: "Music & Dance", category: "Cultural" },
  { icon: "🏋️", label: "Fitness Day", category: "Sports" },
  { icon: "📝", label: "Mock Test Hall", category: "Classrooms" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#0B0F2E] pt-32 pb-16 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionLabel text="Campus Gallery" />
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-4">
            Inside Kunal Academy — The Environment That{" "}
            <span className="text-[#FF5A1F]">Builds Champions</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed">
            Take a look at our facilities, events, and the vibrant community that makes Kunal Academy special.
          </p>
        </div>
      </section>

      {/* Filter Tabs (display only) */}
      <section className="bg-[#0F1535] py-6 border-t border-b border-white/[0.06] sticky top-[70px] z-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {["All", "Classrooms", "Events", "Sports", "Cultural", "Results"].map((f) => (
              <span
                key={f}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold cursor-pointer transition-all border ${
                  f === "All"
                    ? "bg-[#FF5A1F] text-white border-[#FF5A1F]"
                    : "bg-white/[0.05] text-slate-300 border-white/[0.08] hover:border-[#FF5A1F]"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="bg-[#0B0F2E] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`break-inside-avoid bg-[#141A3E] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[rgba(255,90,31,0.5)] hover:scale-[1.02] transition-all duration-300 cursor-pointer ${i % 3 === 0 ? "h-52" : i % 3 === 1 ? "h-40" : "h-64"}`}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                  <span className="text-5xl">{item.icon}</span>
                  <span className="text-white font-semibold text-[12px] text-center">{item.label}</span>
                  <span className="text-[#FF5A1F] text-[10px] font-semibold uppercase tracking-wider">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Join the Kunal Academy Family — Book a Demo"
        subtext="Experience our campus and teaching quality firsthand. Book a free demo lecture today."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
