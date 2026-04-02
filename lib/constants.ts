// Contact Info
export const CONTACT_INFO = {
  kunalSir: "+91 9049 104040",
  seema: "+91 9890 463044",
  geeta: "+91 9322 316973",
  email: "info@kunalacademy.com",
  whatsappGroup: "https://chat.whatsapp.com/KUGOj6wY0LQ0I2dZ2tGSir",
  whatsappNumber: "https://wa.me/919049104040",
  googleForm: "https://forms.gle/Z2pGqhNhKVHSvbFz8",
  address:
    "1st Floor, Ankita Complex, Above Dellas Mica Studio, Near Sapna Theater, Behind Regency Hall, Ulhasnagar – 421003",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1234567890!2d73.15!3d19.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7955555555555%3A0x1234567890abcdef!2sKunal%20Academy%2C%20Ulhasnagar!5e0!3m2!1sen!2sin!4v1234567890",
};

// Social Links
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/kunal_academy",
  facebook: "https://www.facebook.com/kunalacademy",
  whatsapp: "https://wa.me/919049104040",
  whatsappGroup: "https://chat.whatsapp.com/KUGOj6wY0LQ0I2dZ2tGSir",
  youtube: "https://www.youtube.com/@KunalAcademy",
};


// Nav Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Courses",
    href: "#",
    dropdown: [
      { label: "Class 8 — SSC/CBSE", href: "/viii-ssc-cbse" },
      { label: "Class 9 — SSC/CBSE", href: "/ix-ssc-cbse" },
      { label: "Class 10 — SSC/CBSE", href: "/x-ssc-cbse" },
      { label: "Class 11 — Science", href: "/xi-science" },
      { label: "Class 12 — Science", href: "/xii-science" },
      { label: "IIT-JEE", href: "/iit-jee" },
      { label: "NEET", href: "/neet" },
      { label: "MH-CET", href: "/mh-cet" },
    ],
  },
  { label: "Results", href: "/result" },
  { label: "Gallery", href: "/gallery" },
  { label: "Activities", href: "/activities" },
  { label: "Videos", href: "/videos" },
  { label: "Contact", href: "/contact-us" },
];

// Stats
export const STATS = [
  { value: 1000, suffix: "+", label: "Successful Students" },
  { value: 200, suffix: "+", label: "Top College Admissions" },
  { value: 100, suffix: "%", label: "JEE & NEET Qualification" },
  { value: 2018, suffix: "", label: "Year of Establishment" },
];

// Faculty
export const FACULTY = [
  {
    id: "kunal",
    name: "Kunal Sir",
    role: "Founder & Director",
    subject: "Physics & Maths",
    experience: "15+ Years",
    bio: "IIT-JEE and NEET specialist with 15+ years of experience transforming students' academic trajectories in Ulhasnagar.",
    phone: "+91 9049 104040",
    phoneRaw: "+919049104040",
    image: null,
    initials: "KS",
    color: "from-orange to-orange-hover",
  },
  {
    id: "seema",
    name: "Seema Mam",
    role: "Senior Faculty",
    subject: "Biology & Chemistry",
    experience: "12+ Years",
    bio: "Expert NEET biology educator with a track record of producing top medical college admissions from Ulhasnagar.",
    phone: "+91 9890 463044",
    phoneRaw: "+919890463044",
    image: null,
    initials: "SM",
    color: "from-blue-accent to-purple-600",
  },
  {
    id: "geeta",
    name: "Geeta Mam",
    role: "Senior Faculty",
    subject: "Mathematics & Science",
    experience: "10+ Years",
    bio: "Dedicated educator specializing in building strong mathematical foundations for SSC/CBSE and entrance exam aspirants.",
    phone: "+91 9322 316973",
    phoneRaw: "+919322316973",
    image: null,
    initials: "GM",
    color: "from-gold to-orange",
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    text: "Best class in our town! The teachers here are incredibly dedicated and the study environment is top-notch. My JEE preparation was excellent.",
    name: "Vedh",
    tag: "JEE 2024",
    stars: 5,
  },
  {
    id: 2,
    text: "Bestttt mentors guidance! The faculty at Kunal Academy genuinely cares about every student's success. Highly recommend!",
    name: "Diya Verma",
    tag: "NEET 2024",
    stars: 5,
  },
  {
    id: 3,
    text: "Excellent coaching for kids and parents. The weekly progress updates kept us informed throughout and the results speak for themselves.",
    name: "Dr. Fitness Health Care",
    tag: "Parent",
    stars: 5,
  },
  {
    id: 4,
    text: "The best academy a student can ever be at. Small batch sizes mean you actually get personal attention and not just sit in a crowd.",
    name: "GrozaaaRedOp",
    tag: "Class 12",
    stars: 5,
  },
  {
    id: 5,
    text: "Very nice coaching. The doubt solving sessions are incredibly helpful. Any concept you miss in class gets cleared same day!",
    name: "Harsh Vishwakarma",
    tag: "MH-CET 2024",
    stars: 5,
  },
  {
    id: 6,
    text: "Perfect coaching institute. The faculty's approach to teaching complex concepts is superb. My rank improved drastically.",
    name: "Khushal Parchani",
    tag: "JEE 2023",
    stars: 5,
  },
];

// Toppers
export const TOPPERS = [
  { id: 1, name: "Rahul Sharma", exam: "JEE Main", score: "97.8%ile", college: "NIT Surat", year: 2024, initials: "RS", color: "from-orange to-orange-hover" },
  { id: 2, name: "Priya Patel", exam: "NEET", score: "640/720", college: "GMC Nagpur", year: 2024, initials: "PP", color: "from-blue-accent to-purple-600" },
  { id: 3, name: "Arjun Desai", exam: "MH-CET", score: "99.2%ile", college: "VJTI Mumbai", year: 2024, initials: "AD", color: "from-gold to-orange" },
  { id: 4, name: "Sneha Kulkarni", exam: "NEET", score: "610/720", college: "KEM Hospital", year: 2024, initials: "SK", color: "from-green-500 to-teal-500" },
  { id: 5, name: "Vivek Tiwari", exam: "JEE Main", score: "95.4%ile", college: "DTU Delhi", year: 2023, initials: "VT", color: "from-orange to-red-500" },
  { id: 6, name: "Ananya Singh", exam: "Board", score: "93%", college: "St. Xavier's", year: 2024, initials: "AS", color: "from-purple-500 to-blue-accent" },
  { id: 7, name: "Kabir Mehta", exam: "MH-CET", score: "98.7%ile", college: "COEP Pune", year: 2023, initials: "KM", color: "from-gold to-yellow-600" },
  { id: 8, name: "Riya Shah", exam: "JEE Main", score: "92.1%ile", college: "ICT Mumbai", year: 2024, initials: "RS2", color: "from-pink-500 to-orange" },
];

// Why Us Features
export const WHY_US_FEATURES = [
  {
    icon: "🎓",
    title: "Highly Qualified Faculty",
    desc: "15+ years average teaching experience. IIT-qualified educators who've helped hundreds crack JEE & NEET.",
  },
  {
    icon: "👥",
    title: "Limited Batch Sizes",
    desc: "Personal attention guaranteed for every student. Small batches ensure no one gets left behind.",
  },
  {
    icon: "💬",
    title: "One-to-One Doubt Sessions",
    desc: "Personal doubt-clearing sessions after every class. Walk in with a question, walk out with clarity.",
  },
  {
    icon: "📝",
    title: "Weekly Mock Tests + Analysis",
    desc: "Rigorous weekly tests with detailed performance analysis to track and accelerate every student's growth.",
  },
  {
    icon: "📚",
    title: "Integrated 2-Year Programs",
    desc: "Board + entrance exam preparation under one roof. No need to juggle multiple coaching centres.",
  },
  {
    icon: "❄️",
    title: "AC Classrooms",
    desc: "Comfortable, distraction-free, air-conditioned study environment designed for peak concentration.",
  },
];

// Courses
export const COURSES = [
  {
    icon: "📗",
    title: "School Section",
    subtitle: "Class 8–10",
    board: "SSC & CBSE",
    color: "from-green-500 to-teal-500",
    subjects: ["Science", "Mathematics", "English", "Board-specific topics"],
    highlights: ["Free Notes available", "Weekly tests", "Doubt sessions"],
    href: "/viii-ssc-cbse",
  },
  {
    icon: "🔬",
    title: "Science Coaching",
    subtitle: "Class 11–12",
    board: "Board + Entrance",
    color: "from-blue-accent to-purple-600",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    highlights: ["Integrated board + entrance", "DPP sheets", "Mock tests"],
    href: "/xi-science",
  },
  {
    icon: "🏆",
    title: "Entrance Exams",
    subtitle: "JEE | NEET | MH-CET",
    board: "National & State",
    color: "from-orange to-orange-hover",
    subjects: ["IIT-JEE (Main & Advanced)", "NEET UG", "MH-CET Engineering"],
    highlights: ["100% qualification rate", "30 full mock tests", "IIT-qualified faculty"],
    href: "/iit-jee",
  },
];

// Updates / Blogs
export const LATEST_UPDATES = [
  {
    id: 1,
    title: "NEET 2024 — Kunal Academy Students Achieve 100% Qualification",
    date: "June 2024",
    summary: "All NEET-enrolled students from Kunal Academy qualified in NEET 2024, with 3 scoring above 600/720.",
    href: "/result",
  },
  {
    id: 2,
    title: "New Batch Starting — Class 11 Science Admissions Open",
    date: "March 2025",
    summary: "Limited seats available for Class 11 Science batch. Book your demo lecture now to reserve your spot.",
    href: "/xi-science",
  },
  {
    id: 3,
    title: "Free Aptitude Test — Register Now",
    date: "March 2025",
    summary: "Discover your academic strengths with our free aptitude test. Get personalized career guidance from experts.",
    href: "/landing-page",
  },
];
