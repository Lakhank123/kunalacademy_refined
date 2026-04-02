import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Videos | Kunal Academy — Demo & Classroom Videos",
  description: "Watch Kunal Academy demo lectures and student testimonials. See our teaching quality before you book a demo.",
};

const DEMO_VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Physics Lecture — Newton's Laws of Motion | Kunal Sir" },
  { id: "dQw4w9WgXcQ", title: "Chemistry Lecture — Organic Reactions | Seema Mam" },
  { id: "dQw4w9WgXcQ", title: "Maths Lecture — Calculus Introduction | Kunal Sir" },
  { id: "dQw4w9WgXcQ", title: "Biology Lecture — Cell Division | Seema Mam" },
];

const TESTIMONIAL_VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Student Review — Rahul: JEE 97.8%ile from Kunal Academy" },
  { id: "dQw4w9WgXcQ", title: "Parent Review — How Kunal Academy Changed My Child's Future" },
];

export default function VideosPage() {
  return (
    <>
      <section className="bg-[#0B0F2E] pt-32 pb-16 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionLabel text="Watch & Learn" />
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-4">
            Watch, Learn, Trust —{" "}
            <span className="text-[#FF5A1F]">Demo & Classroom Videos</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed">
            Experience Kunal Academy&apos;s teaching quality before you decide. These videos are just a glimpse of what happens in our classroom every day.
          </p>
        </div>
      </section>

      {/* Demo Lectures */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10">
            <SectionLabel text="Demo Lectures" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">See Our Faculty in Action</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {DEMO_VIDEOS.map((v, i) => (
              <div key={i} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[rgba(255,90,31,0.5)] transition-all">
                <div className="aspect-video bg-gradient-to-br from-[#FF5A1F]/20 to-[#3B82F6]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-3">▶️</div>
                    <p className="text-white/60 text-[13px]">Video coming soon</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-[15px]">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonial Videos */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-10">
            <SectionLabel text="Student Video Testimonials" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Hear From Our Students</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIAL_VIDEOS.map((v, i) => (
              <div key={i} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[rgba(255,90,31,0.5)] transition-all">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-teal-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🎬</div>
                    <p className="text-white/60 text-[13px]">Video coming soon</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-[15px]">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Like What You See? Book a Live Demo."
        subtext="The real thing is even better. Book a free demo lecture and experience Kunal Academy firsthand."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
