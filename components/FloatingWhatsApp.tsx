import { FaWhatsapp } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-200"
      style={{ bottom: "90px" }}
    >
      <FaWhatsapp className="text-white text-[26px]" />
    </a>
  );
}
