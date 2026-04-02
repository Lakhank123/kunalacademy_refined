import Link from "next/link";

interface CourseCardProps {
  icon: string;
  title: string;
  subtitle: string;
  board: string;
  color: string;
  subjects: string[];
  highlights: string[];
  href: string;
}

export default function CourseCard({
  icon, title, subtitle, board, color, subjects, highlights, href,
}: CourseCardProps) {
  return (
    <div className="bg-white border border-[#E2E8FF] rounded-2xl p-8 shadow-[0_2px_16px_rgba(30,62,170,0.08)] hover:border-[rgba(201,152,10,0.5)] hover:shadow-[0_8px_32px_rgba(201,152,10,0.15)] hover:scale-[1.02] transition-all duration-300 flex flex-col">
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl mb-5 shadow-lg`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[#0D1760] font-bold text-[22px] mb-1">{title}</h3>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-[#C9980A]/15 text-[#C9980A] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#C9980A]/30">
          {subtitle}
        </span>
        <span className="bg-[#1E3EAA]/10 text-[#1E3EAA] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#1E3EAA]/20">
          {board}
        </span>
      </div>

      {/* Subjects */}
      <div className="flex flex-col gap-2 mb-5 flex-1">
        {subjects.map((s) => (
          <div key={s} className="flex items-center gap-2 text-slate-600 text-[14px]">
            <span className="text-[#C9980A]">✓</span>
            {s}
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="border-t border-[#E2E8FF] pt-4 mb-6">
        {highlights.map((h) => (
          <div key={h} className="flex items-center gap-2 text-slate-500 text-[12px] mt-1">
            <span className="text-[#C9980A]">•</span> {h}
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex gap-3">
        <Link
          href={href}
          className="flex-1 text-center border-2 border-[#1E3EAA] text-[#1E3EAA] font-bold text-[13px] px-4 py-2.5 rounded-lg hover:bg-[#1E3EAA] hover:text-white transition-all duration-200"
        >
          Know More
        </Link>
        <Link
          href="/contact-us#book-demo"
          className="flex-1 text-center bg-[#C9980A] text-white font-bold text-[13px] px-4 py-2.5 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] hover:-translate-y-0.5 transition-all duration-200"
        >
          Book Demo
        </Link>
      </div>
    </div>
  );
}
