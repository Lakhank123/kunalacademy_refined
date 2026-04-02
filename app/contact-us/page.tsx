import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import HomeContactForm from "@/components/HomeContactForm";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Kunal Academy — Book a Free Demo Lecture",
  description:
    "Contact Kunal Academy in Ulhasnagar. Book a free demo lecture, WhatsApp us, or visit us at Ankita Complex, Near Sapna Theater, Ulhasnagar.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0F2E] pt-28 pb-16 text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionLabel text="Get in Touch" />
          <h1 className="text-[32px] lg:text-[52px] font-extrabold text-white leading-tight mb-4">
            We&apos;re Here to Help You
          </h1>
          <p className="text-slate-300 text-[17px] leading-relaxed">
            Have a question? Want to book a demo? Ready to enroll? Reach out through any channel below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#0B0F2E] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Map + Info */}
            <div>
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.82!2d73.1548!3d19.2125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958c83d92951%3A0xc9bc7b27bcbecfa0!2sUlhasnagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kunal Academy Location"
                />
              </div>

              {/* Contact Info Card */}
              <div className="bg-[#141A3E] border border-white/[0.08] rounded-2xl p-6 space-y-4 text-[15px]">
                <h3 className="text-white font-bold text-[20px] mb-4">Contact Information</h3>
                <div className="flex gap-3 text-slate-300">
                  <span className="text-xl shrink-0">📍</span>
                  <span className="leading-relaxed">{CONTACT_INFO.address}</span>
                </div>
                <a href="tel:+919049104040" className="flex gap-3 text-slate-300 hover:text-[#FF5A1F] transition-colors group">
                  <span className="text-xl shrink-0">📞</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#FF5A1F] transition-colors">Kunal Sir</div>
                    <div>{CONTACT_INFO.kunalSir}</div>
                  </div>
                </a>
                <a href="tel:+919890463044" className="flex gap-3 text-slate-300 hover:text-[#FF5A1F] transition-colors group">
                  <span className="text-xl shrink-0">📞</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#FF5A1F] transition-colors">Seema Mam</div>
                    <div>{CONTACT_INFO.seema}</div>
                  </div>
                </a>
                <a href="tel:+919322316973" className="flex gap-3 text-slate-300 hover:text-[#FF5A1F] transition-colors group">
                  <span className="text-xl shrink-0">📞</span>
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#FF5A1F] transition-colors">Geeta Mam</div>
                    <div>{CONTACT_INFO.geeta}</div>
                  </div>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex gap-3 text-slate-300 hover:text-[#FF5A1F] transition-colors">
                  <span className="text-xl shrink-0">✉️</span>
                  <span>{CONTACT_INFO.email}</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={CONTACT_INFO.whatsappNumber}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3.5 rounded-xl transition-colors mt-4 gap-3"
                >
                  💬 WhatsApp Us Directly
                </a>

                <a
                  href={CONTACT_INFO.whatsappGroup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.1] hover:bg-white/[0.1] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-[14px]"
                >
                  👥 Join WhatsApp Group
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div id="book-demo">
              <SectionLabel text="Book a Demo" />
              <h2 className="text-white font-bold text-[28px] lg:text-[36px] mb-2">
                Book Your Free Demo Lecture
              </h2>
              <p className="text-slate-400 text-[15px] mb-8 leading-relaxed">
                Fill in your details below and we&apos;ll call you within 2 hours to schedule your demo lecture. No commitment required.
              </p>
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Strip */}
      <section className="bg-[#25D366] py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-white font-bold text-[28px] lg:text-[36px] mb-4">
            Prefer to WhatsApp? Get Instant Replies.
          </h2>
          <p className="text-white/80 text-[16px] mb-8">
            We typically respond within 30 minutes on WhatsApp during working hours.
          </p>
          <a
            href={CONTACT_INFO.whatsappNumber}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#25D366] font-bold text-[15px] px-8 py-3.5 rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
          >
            💬 Chat on WhatsApp Now
          </a>
        </div>
      </section>
    </>
  );
}
