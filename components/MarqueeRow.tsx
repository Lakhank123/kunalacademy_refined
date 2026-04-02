import { ReactNode } from "react";

interface MarqueeRowProps {
  children: ReactNode;
  reverse?: boolean;
}

export default function MarqueeRow({ children, reverse }: MarqueeRowProps) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-6 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}
