// Shared template for School Course pages (Class 8, 9, 10)
import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import FacultyCard from "@/components/FacultyCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTAStrip from "@/components/CTAStrip";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import { FACULTY, TESTIMONIALS } from "@/lib/constants";

interface SchoolCourseTemplateProps {
  classLabel: string;
  heroTitle: string;
  heroSubtitle: string;
  boards: string[];
  subjects: { icon: string; name: string }[];
}

export default function SchoolCourseTemplate({
  classLabel,
  heroTitle,
  heroSubtitle,
  boards,
  subjects,
}: SchoolCourseTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0F2E] pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {boards.map((b) => (
                <span key={b} className="bg-[#FF5A1F]/15 text-[#FF5A1F] text-[12px] font-semibold px-3 py-1.5 rounded-full border border-[#FF5A1F]/20">
                  {b}
                </span>
              ))}
            </div>
            <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-6">
              {heroTitle}
            </h1>
            <p className="text-slate-300 text-[17px] leading-relaxed mb-8 max-w-2xl">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us#book-demo" className="bg-[#FF5A1F] text-white font-bold text-[15px] px-8 py-3.5 rounded-lg shadow-[0_4px_14px_rgba(255,90,31,0.4)] hover:bg-[#E84E17] transition-all text-center">
                📅 Book Free Demo Lecture
              </Link>
              <a href="tel:+919322316973" className="border-2 border-white/50 text-white font-bold text-[15px] px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all text-center">
                📞 Call Geeta Mam
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Subjects Covered" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Subjects We Teach for {classLabel}</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {subjects.map((s) => (
              <div key={s.name} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6 text-center hover:border-[rgba(255,90,31,0.5)] transition-all">
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-white font-bold text-[15px]">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="What You Get" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Everything Included in the Program</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "Study Material", desc: "Chapter-wise notes and worksheets prepared by our faculty." },
              { icon: "📝", title: "Weekly Tests", desc: "Regular tests to track progress and identify weak areas early." },
              { icon: "💬", title: "Doubt Sessions", desc: "Daily after-class one-to-one doubt clearing with teachers." },
              { icon: "📱", title: "E-Lectures", desc: "Recorded video lectures for revision at home." },
              { icon: "📋", title: "Mock Papers", desc: "Full syllabus mock tests before board exams." },
              { icon: "👨‍👩‍👧", title: "Parent Updates", desc: "Regular progress updates shared with parents via WhatsApp." },
            ].map((f) => (
              <div key={f.title} className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-8 hover:border-[rgba(255,90,31,0.5)] hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-[18px] mb-3">{f.title}</h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Notes Lead Magnet */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <LeadMagnetForm
            title={`Download Free ${classLabel} Notes — No Cost, No Commitment`}
            subtitle="Get chapter-wise notes for Science, Maths, and English delivered to WhatsApp."
            buttonText={`Download Free ${classLabel} Notes`}
            successMessage="✅ Notes will be sent to your WhatsApp within 2 hours!"
          />
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-[#0B0F2E] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Faculty" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">Your {classLabel} Mentors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY.map((f) => <FacultyCard key={f.id} {...f} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0F1535] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <SectionLabel text="Parent Reviews" />
            <h2 className="text-white font-bold text-[28px] lg:text-[38px]">What Parents Say About {classLabel}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(2, 5).map((t) => <TestimonialCard key={t.id} {...t} />)}
          </div>
        </div>
      </section>

      <CTAStrip
        heading={`Book a Demo Lecture for ${classLabel} — Seats Are Limited`}
        subtext="Our batches fill quickly. Reserve your seat today with a free demo lecture."
        primaryLabel="📅 Book Free Demo"
        primaryHref="/contact-us#book-demo"
        secondaryLabel="📞 Call Geeta Mam"
        secondaryHref="tel:+919322316973"
      />
    </>
  );
}
