import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import FacultyCard from "@/components/FacultyCard";
import CTAStrip from "@/components/CTAStrip";
import { FACULTY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Kunal Academy — Science Coaching in Ulhasnagar Since 2018",
  description:
    "Learn about Kunal Academy's founding story, mission, philosophy, and our experienced faculty. Serving Ulhasnagar, Kalyan, and Ambernath since 2018.",
};

const TIMELINE = [
  { year: "2018", title: "Founded", desc: "Kunal Academy established with a vision to bring quality science education to Ulhasnagar." },
  { year: "2019", title: "First Batch Results", desc: "First batch of JEE & NEET students achieve 100% qualification, setting a benchmark." },
  { year: "2022", title: "Program Expansion", desc: "Expanded to include integrated Class 8–10 school sections and full entrance exam programs." },
  { year: "2025", title: "1000+ Students", desc: "Crossed the milestone of 1000+ successful students, cementing our position as Ulhasnagar's #1 coaching." },
];

const PHILOSOPHY = [
  { icon: "🎯", title: "Results-First Teaching", points: ["Every topic taught with entrance exam lens", "Concept + application both covered", "Regular performance benchmarking"] },
  { icon: "👤", title: "Personalized Attention", points: ["Limited batch sizes always", "One-to-one doubt sessions", "Individual performance tracking"] },
  { icon: "🌱", title: "Holistic Development", points: ["Time management skills", "Stress & exam preparation techniques", "Life skills beyond academics"] },
  { icon: "👨‍👩‍👧", title: "Parent Partnership", points: ["Monthly parent-teacher meetings", "Weekly SMS/WhatsApp updates", "Transparent progress reporting"] },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-center bg-[url('/hero.jpeg')] bg-cover bg-center">

        {/* THIS fades ONLY the image */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* THIS keeps text normal */}
        <div className="relative max-w-[800px] mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-black/10 border border-black/25 rounded-full px-4 py-2 mb-6">
            <span className="text-[#061449] font-semibold text-[25px]">Since 2018 — 7 Years of Excellence</span>
          </div>
          <h1 className="text-[32px] lg:text-[60px] font-bold text-[#061449] leading-tight mb-6">
            Our Mission: Turning Ulhasnagar Students Into{" "}
            <span className="text-[#3d01ff]">National Toppers</span>
          </h1>
          <p className="text-black text-[25px] centre aligned">
            Born in Ulhasnagar in 2018, Kunal Academy was founded on a simple belief: every student deserves the same quality of science education that was previously only available in big cities.
          </p>
        </div>
      </section>

      {/* Our Story + Timeline */}
      <section className="bg-[#0F1535] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Story */}
            <div>
              <SectionLabel text="Our Story" />
              <h2 className="text-white font-bold text-[32px] lg:text-[38px] mb-6">How Kunal Academy Was Born</h2>
              <div className="space-y-4 text-slate-300 text-[16px] leading-relaxed">
                <p>
                  In 2018, Kunal Sir saw a critical gap in Ulhasnagar: talented students were traveling hours to Pune or Mumbai for quality science coaching, spending lakhs of rupees, and still struggling. He decided to change that.
                </p>
                <p>
                  Starting with a small batch of 15 students, Kunal Academy quickly built a reputation for something rare: <strong className="text-white">guaranteed personal attention combined with elite teaching quality</strong>.
                </p>
                <p>
                  Today, we serve 1000+ students across Ulhasnagar, Kalyan, and Ambernath. Our 100% JEE &amp; NEET qualification rate isn&apos;t a marketing claim — it&apos;s a result of our systematic, student-first approach.
                </p>
                <p>
                  Our philosophy is simple: every student who walks through our door gets taught as if they are the only student in the class.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <SectionLabel text="Milestones" />
              <h2 className="text-white font-bold text-[32px] lg:text-[38px] mb-8">Our Journey</h2>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#FF5A1F]/30" />
                {TIMELINE.map((item, i) => (
                  <div key={item.year} className="relative pl-16 pb-10">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-[#FF5A1F] flex items-center justify-center text-white font-extrabold text-[12px] z-10 shadow-[0_0_20px_rgba(255,90,31,0.4)]">
                      {item.year.slice(2)}
                    </div>
                    <div className="text-[#FF5A1F] font-bold text-[13px] mb-1">{item.year}</div>
                    <h3 className="text-white font-bold text-[18px] mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-[#0B0F2E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Our Team" />
            <h2 className="text-white font-bold text-[32px] lg:text-[42px]">Meet Our Faculty</h2>
            <p className="text-slate-400 mt-3 text-[16px]">The educators behind Ulhasnagar&apos;s best results</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY.map((f) => (
              <FacultyCard key={f.id} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-[#0F1535] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Our Philosophy" />
            <h2 className="text-white font-bold text-[32px] lg:text-[42px]">The Principles We Never Compromise On</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PHILOSOPHY.map((p) => (
              <div key={p.title} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-8 hover:border-[rgba(255,90,31,0.5)] transition-all duration-300">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-white font-bold text-[20px] mb-4">{p.title}</h3>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-slate-300 text-[14px]">
                      <span className="text-green-400">✓</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-[#0B0F2E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Infrastructure" />
            <h2 className="text-white font-bold text-[32px] lg:text-[42px]">Our World-Class Facilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "❄️", title: "AC Classrooms", desc: "Comfortable, distraction-free, temperature-controlled study environment for maximum concentration." },
              { icon: "💬", title: "Doubt-Solving Rooms", desc: "Dedicated one-to-one doubt clearing rooms available after every session." },
              { icon: "📚", title: "Study Library", desc: "Well-stocked library with JEE/NEET reference books, previous year papers, and DPP sheets." },
            ].map((inf) => (
              <div key={inf.title} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-8 text-center hover:border-[rgba(255,90,31,0.5)] hover:scale-[1.02] transition-all duration-300">
                <div className="text-5xl mb-4">{inf.icon}</div>
                <h3 className="text-white font-bold text-[20px] mb-3">{inf.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">{inf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Ready to Join Ulhasnagar's Top Coaching?"
        subtext="Book a demo lecture today. No commitment, no pressure — just world-class teaching."
        primaryLabel="📅 Book a Demo Today"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
