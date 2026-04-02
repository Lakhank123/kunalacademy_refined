"use client";

import { useEffect, useRef, useState } from "react";

interface CounterCardProps {
  value: number;
  suffix: string;
  label: string;
}

export default function CounterCard({ value, suffix, label }: CounterCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (value > 1000) {
      setCount(value);
      return;
    }
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className="bg-white border border-[#E2E8FF] rounded-2xl p-8 text-center shadow-[0_2px_16px_rgba(30,62,170,0.08)] hover:border-[rgba(201,152,10,0.5)] hover:shadow-[0_8px_32px_rgba(201,152,10,0.15)] transition-all duration-300"
    >
      <div className="text-5xl lg:text-6xl font-extrabold text-[#C9980A] mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-[#0D1760] text-[15px] font-semibold">{label}</div>
    </div>
  );
}
