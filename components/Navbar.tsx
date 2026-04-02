"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-[#E2E8FF]"
            : "bg-white/95 backdrop-blur-sm border-b border-[#E2E8FF]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Kunal Academy"
              width={56}
              height={56}
              priority
              className="h-11 w-11 lg:h-14 lg:w-14 object-contain rounded-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-[#0D1760] hover:text-[#C9980A] text-[14px] font-semibold transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#E2E8FF] rounded-xl shadow-xl overflow-hidden z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-4 py-2.5 text-[13px] text-[#0D1760] hover:bg-[#F0F4FF] hover:text-[#C9980A] transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.label === "FREE APTITUDE TEST" ? (
                <Link
                  key={link.href}
                  href="/landing-page/"
                  className="text-[#0D1760] hover:text-[#C9980A] text-[14px] font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#0D1760] hover:text-[#C9980A] text-[14px] font-semibold transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.kunalSir}`}
              className="text-[13px] text-slate-500 hover:text-[#0D1760] transition-colors hidden xl:block"
            >
              📞 9049 104040
            </a>
            <Link
              href="/contact-us#book-demo"
              className="bg-[#C9980A] text-white font-bold text-[14px] px-6 py-2.5 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[#0D1760] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#0D1760] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-[#0D1760] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0D1760]/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white border-l border-[#E2E8FF] z-50 transition-transform duration-300 lg:hidden overflow-y-auto flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-[#E2E8FF]">
          <Image
            src="/images/logo.png"
            alt="Kunal Academy"
            width={44}
            height={44}
            className="h-11 w-11 object-contain rounded-lg"
          />
          <button onClick={() => setMobileOpen(false)} className="text-slate-400 hover:text-[#0D1760]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 p-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <div className="text-[#C9980A] font-semibold text-[12px] uppercase tracking-widest mt-4 mb-2">{link.label}</div>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-3 py-2 text-[#0D1760] hover:text-[#C9980A] text-[14px] border-l-2 border-transparent hover:border-[#C9980A] transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.label === "FREE APTITUDE TEST" ? "/landing-page/" : link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-[#0D1760] hover:text-[#C9980A] text-[15px] font-semibold border-b border-[#E2E8FF] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
        <div className="p-6 border-t border-[#E2E8FF] flex flex-col gap-3">
          <a
            href="tel:+919049104040"
            className="text-center text-[#0D1760] font-semibold text-[14px] py-3 rounded-lg bg-[#F0F4FF] hover:bg-[#E2E8FF] transition-colors"
          >
            📞 Call: 9049 104040
          </a>
          <Link
            href="/contact-us#book-demo"
            onClick={() => setMobileOpen(false)}
            className="text-center bg-[#C9980A] text-white font-bold text-[15px] py-3 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] transition-colors"
          >
            📅 Book Free Demo
          </Link>
        </div>
      </div>
    </>
  );
}
