import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const quickLinks = NAV_LINKS.filter((l) => !l.dropdown);
  const programs = [
    { label: "Class 8–10 SSC/CBSE", href: "/viii-ssc-cbse" },
    { label: "Class 11 Science", href: "/xi-science" },
    { label: "Class 12 Science", href: "/xii-science" },
    { label: "IIT-JEE Coaching", href: "/iit-jee" },
    { label: "NEET Coaching", href: "/neet" },
    { label: "MH-CET Coaching", href: "/mh-cet" },
  ];

  const socials = [
    { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: <FaInstagram size={22} /> },
    { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: <FaFacebook size={22} /> },
    { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp", icon: <FaWhatsapp size={22} /> },
    { href: SOCIAL_LINKS.youtube, label: "YouTube", icon: <FaYoutube size={22} /> },
  ];

  return (
    <footer className="bg-[#0D1760] border-t border-white/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo + About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Kunal Academy"
                width={64}
                height={64}
                className="h-16 w-16 object-contain rounded-xl bg-white p-1"
              />
            </Link>
            <p className="text-white font-bold text-[18px] mb-1">Kunal Academy</p>
            <p className="text-blue-200 text-[14px] leading-relaxed mb-5">
              Ulhasnagar&apos;s Most Result-Driven Coaching for IIT-JEE, NEET &amp; Science. Since 2018.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-blue-300 hover:text-[#C9980A] transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-[15px] mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-200 hover:text-[#C9980A] text-[13px] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/landing-page/" className="text-blue-200 hover:text-[#C9980A] text-[13px] transition-colors">
                Free Aptitude Test
              </Link>
            </div>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="text-white font-bold text-[15px] mb-4">Programs</h4>
            <div className="flex flex-col gap-2">
              {programs.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="text-blue-200 hover:text-[#C9980A] text-[13px] transition-colors"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-[15px] mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <p className="text-blue-200 leading-relaxed">
                📍 {CONTACT_INFO.address}
              </p>
              <a href={`tel:+919049104040`} className="text-blue-200 hover:text-[#C9980A] transition-colors">
                📞 Kunal Sir: {CONTACT_INFO.kunalSir}
              </a>
              <a href={`tel:+919890463044`} className="text-blue-200 hover:text-[#C9980A] transition-colors">
                📞 Seema Mam: {CONTACT_INFO.seema}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-200 hover:text-[#C9980A] transition-colors">
                ✉️ {CONTACT_INFO.email}
              </a>
              <a
                href={SOCIAL_LINKS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-2 rounded-lg transition-colors mt-1 text-[13px]"
              >
                💬 Join WhatsApp Group
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300 text-[12px]">
            © 2025 Kunal Academy. All rights reserved. | Ulhasnagar, Maharashtra
          </p>
          <div className="flex gap-4 text-[12px] text-blue-300">
            <Link href="/contact-us" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
