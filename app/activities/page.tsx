import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Activities | Kunal Academy — Beyond Academics",
  description: "See Kunal Academy's sports day, cultural events, student workshops, and activities that nurture complete human beings.",
};

export default function ActivitiesPage() {
  return (
    <>
      <section className="bg-[#0B0F2E] pt-32 pb-16 text-center">
        <div className="max-w-[900px] mx-auto px-6">
          <SectionLabel text="Student Life" />
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-4">
            Beyond Academics — We Nurture{" "}
            <span className="text-[#FF5A1F]">Complete Human Beings</span>
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed">
            At Kunal Academy, learning doesn&apos;t stop at textbooks. We believe extracurricular activities build character, reduce stress, and make students better learners.
          </p>
        </div>
      </section>

      {[
        {
          icon: "⚽",
          title: "Sports Day",
          desc: "Our annual Sports Day brings together all Kunal Academy students for a day of competition, teamwork, and fun. From cricket to badminton, students discover their athletic potential.",
          photos: ["🏏", "🏸", "🏃", "🏅"],
          href: "/sports",
        },
        {
          icon: "🎭",
          title: "Cultural Events",
          desc: "Kunal Academy celebrates Maharashtra's rich culture through annual cultural events featuring music, dance, drama, and art. It's our students' chance to shine beyond the classroom.",
          photos: ["🎵", "💃", "🎨", "🎤"],
          href: "#",
        },
        {
          icon: "🔬",
          title: "Student Workshops & Seminars",
          desc: "Regular workshops by subject experts, college counselors, and JEE/NEET toppers. Students get real-world insights about career paths, exam strategy, and higher education.",
          photos: ["👨‍💼", "🎓", "📊", "💡"],
          href: "#",
        },
      ].map((activity, i) => (
        <section key={activity.title} className={`${i % 2 === 0 ? "bg-[#0B0F2E]" : "bg-[#0F1535]"} py-20`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-5xl">{activity.icon}</div>
              <div>
                <SectionLabel text="Extracurricular" />
                <h2 className="text-white font-bold text-[28px] lg:text-[38px]">{activity.title}</h2>
              </div>
            </div>
            <p className="text-slate-300 text-[16px] leading-relaxed mb-8 max-w-2xl">{activity.desc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {activity.photos.map((emoji, j) => (
                <div key={j} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl h-36 flex items-center justify-center text-5xl hover:border-[rgba(255,90,31,0.5)] hover:scale-105 transition-all duration-300">
                  {emoji}
                </div>
              ))}
            </div>
            {activity.href !== "#" && (
              <Link href={activity.href} className="text-[#FF5A1F] font-semibold text-[15px] hover:underline">
                View {activity.title} Gallery →
              </Link>
            )}
          </div>
        </section>
      ))}

      <CTAStrip
        heading="Join the Kunal Academy Family — More Than Just Coaching"
        subtext="Academics + activities + community. This is what makes Kunal Academy Ulhasnagar's favourite."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}
