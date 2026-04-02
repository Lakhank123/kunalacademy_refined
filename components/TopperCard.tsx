interface TopperCardProps {
  name: string;
  exam: string;
  score: string;
  college: string;
  year: number;
  initials: string;
  color: string;
}

export default function TopperCard({ name, exam, score, college, year, initials, color }: TopperCardProps) {
  return (
    <div className="bg-white border border-[#E2E8FF] rounded-2xl p-5 shadow-[0_2px_16px_rgba(30,62,170,0.08)] hover:border-[rgba(201,152,10,0.5)] hover:shadow-[0_8px_32px_rgba(201,152,10,0.15)] hover:scale-[1.03] transition-all duration-300 text-center">
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-3 shadow-lg`}
      >
        {initials.replace(/\d/g, "")}
      </div>

      <div className="text-[#0D1760] font-bold text-[15px] mb-2">{name}</div>

      <div className="inline-block bg-[#C9980A]/15 text-[#C9980A] text-[12px] font-bold px-3 py-1 rounded-full border border-[#C9980A]/30 mb-2">
        {score}
      </div>

      <div className="block">
        <span className="bg-[#1E3EAA]/10 text-[#1E3EAA] text-[11px] font-semibold px-2 py-0.5 rounded-full border border-[#1E3EAA]/20">
          {exam}
        </span>
      </div>

      <p className="text-slate-500 text-[12px] mt-2 leading-snug">{college}</p>
      <p className="text-slate-400 text-[11px] mt-1">{year}</p>
    </div>
  );
}
