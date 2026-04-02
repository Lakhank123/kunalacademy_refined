import type { Metadata } from "next";
import SchoolCourseTemplate from "@/components/SchoolCourseTemplate";

export const metadata: Metadata = {
  title: "Class 9 Coaching in Ulhasnagar (SSC/CBSE) | Kunal Academy",
  description: "Class 9 SSC & CBSE coaching in Ulhasnagar. Science, Maths, English. Free notes, weekly tests, and doubt sessions. Book a free demo.",
};

export default function Class9Page() {
  return (
    <SchoolCourseTemplate
      classLabel="Class 9"
      heroTitle="Class 9 Science & Maths — The Critical Bridge Year"
      heroSubtitle="Class 9 is where students either build momentum or start falling behind. Our expert faculty ensure you master every concept before Class 10."
      boards={["SSC Maharashtra", "CBSE", "Board Exam Preparation"]}
      subjects={[
        { icon: "🔬", name: "Science" },
        { icon: "📐", name: "Mathematics" },
        { icon: "📖", name: "English" },
        { icon: "🌍", name: "Social Science" },
      ]}
    />
  );
}
