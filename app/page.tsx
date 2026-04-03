import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import CounterCard from "@/components/CounterCard";
import FeatureCard from "@/components/FeatureCard";
import CourseCard from "@/components/CourseCard";
import FacultyCard from "@/components/FacultyCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTAStrip from "@/components/CTAStrip";
import MarqueeRow from "@/components/MarqueeRow";
import HomeContactForm from "@/components/HomeContactForm";
import {
  STATS,
  WHY_US_FEATURES,
  COURSES,
  FACULTY,
  TESTIMONIALS,
  TOPPERS,
  LATEST_UPDATES,
  CONTACT_INFO,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kunal Academy — #1 Science Coaching in Ulhasnagar | IIT-JEE, NEET, MH-CET",
  description:
    "Best science coaching institute in Ulhasnagar since 2018. IIT-JEE, NEET, MH-CET, Class 8–12. 1000+ successful students. Book a free demo lecture today.",
};

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="min-h-screen bg-[#070D3E] flex items-center pt-20 lg:pt-16">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#C9980A]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9980A]/10 border border-[#C9980A]/25 rounded-full px-4 py-2 mb-6">
              <span>🏆</span>
              <span className="text-[#C9980A] font-semibold text-[18px]">
                Ulhasnagar&apos;s #1 Science Coaching Since 2018
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-[32px] lg:text-[58px] font-extrabold text-white leading-[1.12] mb-5">
              Ulhasnagar&apos;s Most{" "}
              <span className="text-[#C9980A]">Result-Driven</span> Coaching for
              <br className="hidden lg:block" /> IIT-JEE, NEET &amp; Science
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              100% qualification in JEE &amp; NEET · Limited batch sizes · One-to-one doubt sessions ·
              AC classrooms
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="/contact-us#book-demo"
                className="bg-[#C9980A] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                📅 Book a Free Demo Lecture
              </Link>
              <a
                href="tel:+919049104040"
                className="border-2 border-white/50 text-white font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-200 text-center"
              >
                📞 Call: 9049 104040
              </a>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {[
                { icon: "👨‍🏫", text: "10+ Yrs Faculty Exp" },
                { icon: "👥", text: "500+ Students" },
                { icon: "🏛️", text: "100+ Top Colleges" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-2.5"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-slate-300 text-[13px] font-semibold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="flex-1 w-full max-w-[520px]">
            <div className="relative">
              {/* Main visual card */}
              <div className="bg-[#0D1760] border border-white/[0.08] rounded-3xl p-8 shadow-[0_40px_90px_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    {
                      grade: "99.82%ile",
                      name: "ANIKET HARWANI",
                      exam: "MHT-CET",
                      image: "/images/Aniket.jpeg",
                    },
                    {
                      grade: "99.54%ile",
                      name: "PREM CHOITHANI",
                      exam: "MHT-CET",
                      image: "/images/Prem.jpeg",
                    },
                    {
                      grade: "98.64%ile",
                      name: "Mayank Hemnani",
                      exam: "MHT-CET",
                      image: "/images/Mayank.jpeg",
                    },
                    {
                      grade: "98.64%ile",
                      name: "HIREN NAGDEV",
                      exam: "MHT-CET",
                      image: "/images/Hiren.jpeg",
                    },
                  ].map((t) => (
                    <div
                      key={t.name}
                      className="bg-[#0A1250] rounded-xl p-4 text-center border border-white/[0.06] hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {/* 👤 IMAGE */}
                      <div className="flex justify-center mb-3 relative">
                        <Image
                          src={t.image}
                          alt={t.name}
                          width={90}
                          height={90}
                          className="w-22 h-22 rounded-full object-cover border-4 border-[#C9980A] shadow-[0_0_20px_rgba(201,152,10,0.5)]"
                        />

                        {/* 🏆 Badge */}
                        <div className="absolute -top-2 -right-2 bg-[#C9980A] text-white text-[10px] px-2 py-1 rounded-full font-bold shadow">
                          🏆
                        </div>
                      </div>

                      {/* 📊 RESULT */}
                      <div className="text-[#C9980A] font-extrabold text-[22px]">
                        {t.grade}
                      </div>

                      {/* 👤 NAME */}
                      <div className="text-white text-[13px] font-bold mt-1">
                        {t.name}
                      </div>

                      {/* 📘 EXAM */}
                      <div className="text-[#C9980A] text-[11px] font-semibold">
                        {t.exam}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-[#1E3EAA] to-[#1A2880] rounded-2xl p-5 text-center">
                  <div className="text-white font-extrabold text-[38px]">100%</div>
                  <div className="text-white/90 font-semibold text-[13px]">MHT CET Qualification Rate</div>
                  <div className="text-white/70 text-[11px] mt-1">Since 2018 · 100+ Students</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-[#C9980A] text-white font-bold text-[20px] px-3 py-1.5 rounded-full shadow-lg">
                🏆 #1 in Ulhasnagar
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0D1760] border border-white/[0.08] text-white font-bold text-[11px] px-3 py-1.5 rounded-full shadow-lg">
                ✅ 20+ Top Colleges
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RESULTS COUNTER BAND ============ */}
      <section className="bg-[#0A1250] py-16 border-t border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Proven Results" />
            <h2 className="text-white font-bold text-[8px] lg:text-[38px]">
              Our Results Speak Louder Than Words
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <CounterCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ TOPPER WALL ============ */}
      <section className="bg-[#070D3E] py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 mb-10 text-center">
          <SectionLabel text="Our Toppers" />
          <h2 className="text-white font-bold text-[28px] lg:text-[42px]">
            Students Who Made Ulhasnagar Proud
          </h2>
        </div>

        {/* Row 1 */}
        <div className="mb-6">
          <MarqueeRow>
            {TOPPERS.map((t) => (
              <div
                key={t.id}
                className="flex-shrink-0 bg-[#0D1760] border border-white/[0.08] rounded-2xl px-6 py-4 flex items-center gap-4 w-[280px]"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                >
                  {t.initials.replace(/\d/g, "")}
                </div>
                <div>
                  <div className="text-white font-bold text-[14px]">{t.name}</div>
                  <div className="text-[#C9980A] font-bold text-[13px]">{t.score}</div>
                  <div className="text-slate-400 text-[11px]">{t.exam} · {t.college}</div>
                </div>
              </div>
            ))}
          </MarqueeRow>
        </div>

        {/* Row 2 (reverse) */}
        <MarqueeRow reverse>
          {[...TOPPERS].reverse().map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 bg-[#0D1760] border border-white/[0.08] rounded-2xl px-6 py-4 flex items-center gap-4 w-[280px]"
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
              >
                {t.initials.replace(/\d/g, "")}
              </div>
              <div>
                <div className="text-white font-bold text-[14px]">{t.name}</div>
                <div className="text-[#F59E0B] font-bold text-[13px]">{t.score}</div>
                <div className="text-slate-400 text-[11px]">{t.exam} · {t.college}</div>
              </div>
            </div>
          ))}
        </MarqueeRow>

        <div className="text-center mt-10">
          <Link
            href="/result"
            className="text-[#C9980A] font-semibold text-[15px] hover:underline inline-flex items-center gap-1"
          >
            See All Results →
          </Link>
        </div>
      </section>

      {/* ============ WHY KUNAL ACADEMY ============ */}
      <section className="bg-[#0A1250] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Why Choose Us" />
            <h2 className="text-white font-bold text-[28px] lg:text-[42px] max-w-3xl mx-auto leading-tight">
              Why Thousands of Families in Ulhasnagar, Kalyan &amp; Ambernath Trust Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US_FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS OVERVIEW ============ */}
      <section className="bg-[#070D3E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Our Programs" />
            <h2 className="text-white font-bold text-[28px] lg:text-[42px]">
              Find the Right Program for Your Goal
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COURSES.map((c) => (
              <CourseCard key={c.title} {...c} />
            ))}
          </div>
          <p className="text-center text-slate-400 text-[14px] mt-8">
            All programs include: Weekly Tests · DPP Sheets · Doubt Solving · Parent Updates
          </p>
        </div>
      </section>

      {/* ============ FACULTY ============ */}
      <section className="bg-[#0A1250] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Our Faculty" />
            <h2 className="text-white font-bold text-[28px] lg:text-[42px]">
              Faculty Who&apos;ve Changed Thousands of Lives
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY.map((f) => (
              <FacultyCard key={f.id} {...f} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/about-us" className="text-[#C9980A] font-semibold text-[15px] hover:underline">
              Meet Our Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-[#070D3E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Success Stories" />
            <h2 className="text-white font-bold text-[28px] lg:text-[42px]">
              What Students and Parents Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ DEMO CTA STRIP ============ */}
      <CTAStrip
        heading="Experience the Kunal Academy Difference — For Free"
        subtext="Attend a demo lecture with no commitment. See our teaching quality before you decide."
        primaryLabel="📅 Book Your Free Demo Now"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="▶️ Watch Demo Lectures Online"
        secondaryHref="/videos"
      />

      {/* ============ FREE APTITUDE TEST ============ */}
      <section className="bg-[#0A1250] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Free Test" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">
              Know Your Strengths Before You Choose Your Path
            </h2>
            <p className="text-slate-400 text-[16px] mt-3 max-w-xl mx-auto">
              Our free aptitude test gives you a clear picture of your academic strengths and helps you choose the right stream.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-lg mx-auto">
            <p className="text-slate-300 text-[16px] leading-relaxed mb-8">
              Fill out our Free Aptitude Test registration form. It takes less than 2 minutes and our team will contact you within 24 hours with your personalised guidance.
            </p>
            <Link
              href="/landing-page/"
              className="inline-flex items-center gap-2 bg-[#C9980A] text-white font-bold text-[16px] px-10 py-4 rounded-lg shadow-[0_4px_14px_rgba(201,152,10,0.4)] hover:bg-[#B8880A] hover:-translate-y-0.5 transition-all duration-200"
            >
              Register for Free Aptitude Test →
            </Link>
            <p className="text-slate-500 text-[13px] mt-4">
              100% Free · No spam · No commitment
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "🆓", label: "Completely Free", desc: "No hidden charges" },
              { icon: "🎯", label: "Personalized Guidance", desc: "Based on your results" },
              { icon: "👨‍💼", label: "Expert Counselling", desc: "1-on-1 with our faculty" },
            ].map((b) => (
              <div key={b.label} className="text-center">
                <div className="text-4xl mb-3">{b.icon}</div>
                <div className="text-white font-bold text-[16px]">{b.label}</div>
                <div className="text-slate-400 text-[13px]">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY STRIP ============ */}
      <section className="bg-[#070D3E] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Campus Life" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">
              Life at Kunal Academy — Beyond the Classroom
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {[
              { label: "AC Classrooms", color: "from-blue-600 to-blue-800", icon: "🎓" },
              { label: "Sports Day", color: "from-green-600 to-teal-800", icon: "⚽" },
              { label: "Cultural Event", color: "from-purple-600 to-pink-800", icon: "🎭" },
              { label: "Result Celebration", color: "from-[#C9980A] to-[#B8880A]", icon: "🏆" },
              { label: "Workshop", color: "from-yellow-600 to-orange-800", icon: "🔬" },
            ].map((g) => (
              <div
                key={g.label}
                className={`flex-shrink-0 w-[220px] h-[160px] snap-center rounded-2xl bg-gradient-to-br ${g.color} flex flex-col items-center justify-center gap-2 border border-white/[0.08] hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <span className="text-5xl">{g.icon}</span>
                <span className="text-white font-semibold text-[13px]">{g.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/gallery" className="text-[#C9980A] font-semibold text-[15px] hover:underline">
              View All Activities →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ LATEST UPDATES ============ */}
      <section className="bg-[#0A1250] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Latest News" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Latest from Kunal Academy</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LATEST_UPDATES.map((u) => (
              <Link
                key={u.id}
                href={u.href}
                className="bg-[#0D1760] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-[rgba(201,152,10,0.5)] hover:shadow-[0_8px_32px_rgba(201,152,10,0.12)] hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-[#C9980A]/20 to-[#3B82F6]/20 flex items-center justify-center border-b border-white/[0.06]">
                  <span className="text-6xl">📰</span>
                </div>
                <div className="p-6">
                  <p className="text-slate-500 text-[12px] mb-2">{u.date}</p>
                  <h3 className="text-white font-bold text-[16px] leading-snug mb-3 group-hover:text-[#C9980A] transition-colors">
                    {u.title}
                  </h3>
                  <p className="text-slate-400 text-[13px] leading-relaxed mb-4">{u.summary}</p>
                  <span className="text-[#C9980A] font-semibold text-[13px]">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT + MAP ============ */}
      <section className="bg-[#070D3E] py-24" id="contact">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel text="Find Us" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Visit Us or Get in Touch</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <div className="rounded-2xl overflow-hidden h-[320px] bg-[#0D1760] border border-white/[0.08] flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">📍</div>
                  <p className="text-white font-semibold text-[16px] mb-1">Kunal Academy</p>
                  <p className="text-slate-400 text-[13px] max-w-[250px] mx-auto leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kunal+Academy+Ulhasnagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#C9980A] font-semibold text-[13px] hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              <div className="bg-[#0D1760] border border-white/[0.08] rounded-2xl p-6 space-y-3 text-[14px]">
                <p className="text-slate-300 flex gap-3"><span>📍</span><span>{CONTACT_INFO.address}</span></p>
                <a href="tel:+919049104040" className="text-slate-300 flex gap-3 hover:text-[#C9980A] transition-colors"><span>📞</span><span>Kunal Sir: {CONTACT_INFO.kunalSir}</span></a>
                <a href="tel:+919890463044" className="text-slate-300 flex gap-3 hover:text-[#C9980A] transition-colors"><span>📞</span><span>Seema Mam: {CONTACT_INFO.seema}</span></a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 flex gap-3 hover:text-[#C9980A] transition-colors"><span>✉️</span><span>{CONTACT_INFO.email}</span></a>
                <a
                  href={CONTACT_INFO.whatsappNumber}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-5 py-3 rounded-xl transition-colors mt-2"
                >
                  💬 WhatsApp Us Directly
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div id="book-demo">
              <p className="text-[#C9980A] font-semibold text-[13px] uppercase tracking-widest mb-3">
                Quick Inquiry
              </p>
              <h3 className="text-white font-bold text-[24px] mb-6">Book Your Free Demo Lecture</h3>
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Second Book Demo CTA */}
      <CTAStrip
        heading="Ready to Join Ulhasnagar&apos;s Top Coaching?"
        subtext="1000+ students have already transformed their results. Your turn starts with one free demo."
        primaryLabel="📅 Book Free Demo Now"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call: 9049 104040"
        secondaryHref="tel:+919049104040"
      />
    </>
  );
}


