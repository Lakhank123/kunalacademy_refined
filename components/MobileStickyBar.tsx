"use client";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden border-t border-white/10">
      <a
        href="tel:+919049104040"
        className="flex-1 h-14 bg-[#1E3EAA] text-white font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#1A2880] transition-colors"
      >
        📞 Call Now
      </a>
      <a
        href="/contact-us/#book-demo"
        className="flex-1 h-14 bg-[#C9980A] text-white font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#B8880A] transition-colors"
      >
        📅 Book Demo
      </a>
    </div>
  );
}
