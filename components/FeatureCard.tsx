interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-white border border-[#E2E8FF] rounded-2xl p-8 shadow-[0_2px_16px_rgba(30,62,170,0.08)] hover:border-[rgba(201,152,10,0.5)] hover:shadow-[0_8px_32px_rgba(201,152,10,0.15)] hover:scale-[1.02] transition-all duration-300 group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-[#0D1760] font-bold text-[20px] mb-3 group-hover:text-[#C9980A] transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-[15px] leading-relaxed">{desc}</p>
    </div>
  );
}
