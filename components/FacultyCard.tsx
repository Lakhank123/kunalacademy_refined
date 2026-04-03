import Image from "next/image";

interface FacultyCardProps {
  name: string;
  role: string;
  subject: string;
  experience: string;
  bio: string;
  phone: string;
  phoneRaw: string;
  initials: string;
  color: string;
  image?: string; // ✅ added
  compact?: boolean;
}

export default function FacultyCard({
  name,
  role,
  subject,
  experience,
  bio,
  phone,
  phoneRaw,
  initials,
  color,
  image, // ✅ added
}: FacultyCardProps) {
  return (
    <div className="bg-white border border-[#E2E8FF] rounded-2xl p-8 shadow-[0_2px_16px_rgba(30,62,170,0.08)] hover:border-[rgba(201,152,10,0.5)] hover:shadow-[0_8px_32px_rgba(201,152,10,0.15)] hover:scale-[1.02] transition-all duration-300 text-center">

      {/* Avatar */}
      <div className="flex justify-center mb-5">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            className="w-28 h-28 rounded-full object-cover border-4 border-[#C9980A] shadow-lg hover:scale-105 transition"
          />
        ) : (
          <div
            className={`w-28 h-28 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-extrabold text-3xl shadow-lg`}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-[#0D1760] font-bold text-[20px] mb-1">{name}</h3>

      {/* Role */}
      <p className="text-slate-500 text-[13px] mb-3">{role}</p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <span className="bg-[#C9980A]/15 text-[#C9980A] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#C9980A]/30">
          {subject}
        </span>
        <span className="bg-[#1E3EAA]/10 text-[#1E3EAA] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#1E3EAA]/20">
          {experience}
        </span>
      </div>

      {/* Bio */}
      <p className="text-slate-600 text-[14px] leading-relaxed mb-5">{bio}</p>

      {/* Call */}
      <a
        href={`tel:${phoneRaw}`}
        className="inline-flex items-center gap-2 text-[#1E3EAA] font-semibold text-[14px] hover:text-[#C9980A] transition-colors"
      >
        📞 {phone}
      </a>
    </div>
  );
}