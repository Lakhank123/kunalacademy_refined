interface TestimonialCardProps {
  text: string;
  name: string;
  tag: string;
  stars: number;
}

export default function TestimonialCard({ text, name, tag, stars }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-[#E2E8FF] rounded-2xl p-8 shadow-[0_2px_16px_rgba(30,62,170,0.08)] hover:border-[rgba(201,152,10,0.5)] hover:shadow-[0_8px_32px_rgba(201,152,10,0.15)] transition-all duration-300 flex flex-col">
      {/* Quote icon */}
      <div className="text-[#C9980A] text-5xl leading-none mb-4 font-serif">"</div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-[#C9980A] text-lg">★</span>
        ))}
      </div>

      {/* Review text */}
      <p className="text-slate-600 text-[15px] leading-relaxed flex-1 mb-6">{text}</p>

      {/* Footer */}
      <div className="border-t border-[#E2E8FF] pt-4 flex items-center justify-between">
        <div>
          <div className="text-[#0D1760] font-bold text-[15px]">{name}</div>
          <span className="bg-[#C9980A]/15 text-[#C9980A] text-[11px] font-semibold px-2 py-0.5 rounded-full border border-[#C9980A]/30 mt-1 inline-block">
            {tag}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
          <span className="text-green-500">✓</span>
          Verified Review
        </div>
      </div>
    </div>
  );
}
