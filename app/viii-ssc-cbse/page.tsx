import type { Metadata } from "next";
import SchoolCourseTemplate from "@/components/SchoolCourseTemplate";

export const metadata: Metadata = {
  title: "Class 8 Coaching in Ulhasnagar (SSC/CBSE) | Kunal Academy",
  description: "Class 8 SSC & CBSE coaching in Ulhasnagar. Science, Maths, English. Free notes, weekly tests, and doubt sessions. Book a free demo.",
};

export default function Class8Page() {
  return (
    <SchoolCourseTemplate
      classLabel="Class 8"
      heroTitle="Class 8 Foundation Program — Build the Base for Board & Beyond"
      heroSubtitle="A strong Class 8 foundation makes Classes 9, 10, and entrance preparation dramatically easier. Start strong with Kunal Academy."
      boards={["SSC Maharashtra", "CBSE", "Science & Maths Focus"]}
      subjects={[
        { icon: "🔬", name: "Science" },
        { icon: "📐", name: "Mathematics" },
        { icon: "📖", name: "English" },
        { icon: "📚", name: "All Subjects" },
      ]}
    />
  );
}
