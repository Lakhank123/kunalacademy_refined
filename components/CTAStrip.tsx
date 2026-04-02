import Link from "next/link";

interface CTAStripProps {
  heading: string;
  subtext?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTAStrip({
  heading,
  subtext,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAStripProps) {
  return (
    <section className="bg-gradient-to-r from-[#1E3EAA] to-[#1A2880] py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-white font-bold text-[32px] lg:text-[42px] leading-tight mb-4">
          {heading}
        </h2>
        {subtext && (
          <p className="text-white/80 text-[17px] mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-[#C9980A] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] hover:-translate-y-0.5 transition-all duration-200"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="border-2 border-white/50 text-white font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
