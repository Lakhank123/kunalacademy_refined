"use client";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070D3E] flex flex-col">
      {/* Minimal Navbar — logo centered */}
      <div className="w-full flex justify-center py-5 bg-[#070D3E] border-b border-white/[0.08]">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Kunal Academy"
            width={56}
            height={56}
            priority
            className="h-14 w-14 object-contain rounded-lg bg-white/10 p-1"
          />
        </Link>
      </div>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[560px]">
          {/* Hero Header */}
          <div className="text-center mb-10">
            {/* Logo + Academy name above heading */}
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/images/logo.png"
                alt="Kunal Academy"
                width={80}
                height={80}
                priority
                className="h-20 w-20 object-contain rounded-2xl bg-white/10 p-2 mb-3"
              />
              <p className="text-[#C9980A] font-semibold text-[14px] uppercase tracking-widest">Kunal Academy</p>
            </div>

            <div className="inline-flex items-center gap-2 bg-[#C9980A]/10 border border-[#C9980A]/25 rounded-full px-4 py-2 mb-6">
              <span className="text-[#C9980A] font-semibold text-[13px]">100% Free · No Sales Pressure</span>
            </div>
            <h1 className="text-[28px] lg:text-[40px] font-extrabold text-white leading-tight mb-4">
              Discover Your Academic Potential — Free Aptitude Test by Kunal Academy
            </h1>
            <p className="text-slate-300 text-[16px] leading-relaxed">
              Not sure which stream or exam to pursue? Let our experts help you decide — based on your strengths, not guesswork.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: "🆓", label: "Completely Free" },
              { icon: "🎯", label: "Personalized Guidance" },
              { icon: "👨‍💼", label: "Expert Counselling" },
            ].map((b) => (
              <div key={b.label} className="text-center bg-[#0D1760] border border-white/[0.08] rounded-xl p-3">
                <div className="text-3xl mb-1">{b.icon}</div>
                <div className="text-white font-semibold text-[11px]">{b.label}</div>
              </div>
            ))}
          </div>

          {/* Google Form CTA */}
          <div className="flex flex-col items-center text-center max-w-lg mx-auto">
            <p className="text-slate-300 text-[16px] leading-relaxed mb-8">
              Fill out our Free Aptitude Test registration form. It takes less than 2 minutes and our team will contact you within 24 hours with your personalised guidance.
            </p>
            <a
              href="https://forms.gle/Z2pGqhNhKVHSvbFz8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9980A] text-white font-bold text-[16px] px-10 py-4 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] hover:-translate-y-0.5 transition-all duration-200"
            >
              Register for Free Aptitude Test →
            </a>
            <p className="text-slate-500 text-[13px] mt-4">
              Opens Google Form in a new tab · 100% Free · No spam · No commitment
            </p>
          </div>

          {/* Trust */}
          <div className="mt-12 grid grid-cols-3 gap-3 text-center">
            {[
              { emoji: "👥", val: "1000+", label: "Students Tested" },
              { emoji: "🚫", val: "No", label: "Sales Pressure" },
              { emoji: "💰", val: "Free", label: "Completely Free" },
            ].map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-2xl mb-1">{t.emoji}</div>
                <div className="text-white font-bold text-[16px]">{t.val}</div>
                <div className="text-slate-400 text-[11px]">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
