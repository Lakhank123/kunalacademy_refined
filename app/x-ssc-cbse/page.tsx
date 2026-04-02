import type { Metadata } from "next";
import SchoolCourseTemplate from "@/components/SchoolCourseTemplate";

export const metadata: Metadata = {
  title: "Class 10 Coaching in Ulhasnagar (SSC/CBSE) | Kunal Academy",
  description: "Class 10 SSC & CBSE coaching in Ulhasnagar. Board exam preparation, Science, Maths, English. 90%+ results. Book a free demo.",
};

export default function Class10Page() {
  return (
    <SchoolCourseTemplate
      classLabel="Class 10"
      heroTitle="Class 10 Board Mastery — Score 90%+ and Set Your Future on Fire"
      heroSubtitle="Class 10 results open doors. Our board-focused program ensures complete syllabus coverage, exam strategy, and top results."
      boards={["SSC Maharashtra", "CBSE", "Board Topper Program"]}
      subjects={[
        { icon: "🔬", name: "Science" },
        { icon: "📐", name: "Mathematics" },
        { icon: "📖", name: "English" },
        { icon: "🌍", name: "SST / Geography" },
      ]}
    />
  );
}
