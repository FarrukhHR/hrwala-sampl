export type Role = "candidate" | "employer"

export type Candidate = {
  name: string
  designation: string
  skills: string
  qualification: string
  meta: string
  about: string
  featured: boolean
  image: string
}

export type Job = {
  title: string
  company: string
  industry: string
  location: string
  type: string
  category: string
  salary: string
  description: string
  age: string
  monogram: string
}

const women = [
  "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=520&q=85",
  "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=520&q=85",
  "https://images.unsplash.com/photo-1762341124796-530c0085f7d8?auto=format&fit=crop&w=520&q=85",
  "https://images.unsplash.com/photo-1573497019707-1c04de26e58c?auto=format&fit=crop&w=520&q=85",
]

const men = [
  "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?auto=format&fit=crop&w=520&q=85",
  "https://images.unsplash.com/photo-1584940120505-117038d90b05?auto=format&fit=crop&w=520&q=85",
  "https://images.unsplash.com/photo-1584940121730-93ffb8aa88b0?auto=format&fit=crop&w=520&q=85",
  "https://images.unsplash.com/photo-1568585105565-e372998a195d?auto=format&fit=crop&w=520&q=85",
]

export const candidates: Candidate[] = [
  {
    name: "Ayesha Khan",
    designation: "HR Manager",
    skills: "Recruitment & Employee Relations",
    qualification: "MBA in Human Resource Management",
    meta: "5 years · Lahore",
    about:
      "Helps growing teams hire talent, improve onboarding, and build positive workplace relationships.",
    featured: true,
    image: women[0],
  },
  {
    name: "Hamza Ahmed",
    designation: "Talent Acquisition Specialist",
    skills: "Talent Sourcing & Interviewing",
    qualification: "BBA in Human Resource Management",
    meta: "4 years · Karachi",
    about:
      "Finds suitable candidates and coordinates interviews for technology and corporate teams.",
    featured: true,
    image: men[0],
  },
  {
    name: "Sana Fatima",
    designation: "HR Business Partner",
    skills: "HR Strategy & Performance Management",
    qualification: "MS in Human Resource Management",
    meta: "6 years · Islamabad",
    about:
      "Works with business leaders to improve people processes, performance, and team development.",
    featured: true,
    image: women[1],
  },
  {
    name: "Bilal Hassan",
    designation: "HR Operations Executive",
    skills: "HRIS & Employee Records",
    qualification: "BBA in Human Resource Management",
    meta: "3 years · Lahore",
    about:
      "Maintains accurate employee records and supports smooth day-to-day HR operations.",
    featured: true,
    image: men[1],
  },
  {
    name: "Maryam Ali",
    designation: "Recruitment Consultant",
    skills: "Candidate Screening & Shortlisting",
    qualification: "MBA in Human Resource Management",
    meta: "4 years · Rawalpindi",
    about:
      "Screens applications and prepares relevant candidate shortlists for growing businesses.",
    featured: true,
    image: women[2],
  },
  {
    name: "Usman Tariq",
    designation: "People Operations Specialist",
    skills: "Onboarding & Employee Engagement",
    qualification: "BS in Management Sciences",
    meta: "3 years · Faisalabad",
    about:
      "Creates welcoming onboarding experiences and supports employee engagement across teams.",
    featured: true,
    image: men[2],
  },
  {
    name: "Hira Iqbal",
    designation: "HR Generalist",
    skills: "HR Policies & Employee Support",
    qualification: "BBA in Human Resource Management",
    meta: "2 years · Lahore",
    about:
      "Supports recruitment, employee queries, and practical HR policies for corporate teams.",
    featured: false,
    image: women[3],
  },
  {
    name: "Ahmed Raza",
    designation: "Payroll & HR Officer",
    skills: "Payroll & Attendance Management",
    qualification: "BCom in Commerce",
    meta: "3 years · Multan",
    about:
      "Coordinates payroll inputs, attendance records, and routine employee documentation.",
    featured: false,
    image: men[3],
  },
  {
    name: "Zainab Noor",
    designation: "Learning & Development Officer",
    skills: "Training & Skills Development",
    qualification: "MBA in Human Resource Management",
    meta: "4 years · Karachi",
    about:
      "Plans staff training and supports structured learning and professional development.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?auto=format&fit=crop&w=520&q=85",
  },
]

export const jobs: Job[] = [
  {
    title: "HR Manager",
    company: "Northfield Technologies",
    industry: "IT / Technology",
    location: "Lahore",
    type: "Full-time",
    category: "Human Resources (HR)",
    salary: "PKR 100,000–140,000 / month",
    description:
      "Lead recruitment, employee relations, and core HR operations.",
    age: "2 days ago",
    monogram: "NT",
  },
  {
    title: "Talent Acquisition Specialist",
    company: "Cedar Hospitality Group",
    industry: "Hospitality",
    location: "Lahore",
    type: "Full-time",
    category: "Human Resources (HR)",
    salary: "PKR 70,000–100,000 / month",
    description:
      "Manage sourcing and interview coordination for hospitality teams.",
    age: "1 day ago",
    monogram: "CH",
  },
  {
    title: "HR Operations Executive",
    company: "Crestline Manufacturing",
    industry: "Manufacturing",
    location: "Lahore",
    type: "Full-time",
    category: "Human Resources (HR)",
    salary: "PKR 55,000–75,000 / month",
    description:
      "Maintain employee records, HR systems, and onboarding processes.",
    age: "3 days ago",
    monogram: "CM",
  },
  {
    title: "HR Business Partner",
    company: "Stonebridge Construction",
    industry: "Construction",
    location: "Lahore",
    type: "Full-time",
    category: "Human Resources (HR)",
    salary: "PKR 120,000–160,000 / month",
    description:
      "Support workforce planning and people processes across project teams.",
    age: "Today",
    monogram: "SC",
  },
  {
    title: "Recruitment Coordinator",
    company: "Meadow Healthcare",
    industry: "Healthcare / Hospitals",
    location: "Lahore",
    type: "Full-time",
    category: "Human Resources (HR)",
    salary: "PKR 50,000–70,000 / month",
    description:
      "Coordinate candidate communication, screening, and interview schedules.",
    age: "2 days ago",
    monogram: "MH",
  },
  {
    title: "People Operations Specialist",
    company: "Urban Table Foods",
    industry: "Food & Beverage",
    location: "Lahore",
    type: "Full-time",
    category: "Human Resources (HR)",
    salary: "PKR 65,000–90,000 / month",
    description:
      "Improve onboarding and employee support across food business teams.",
    age: "4 days ago",
    monogram: "UT",
  },
  {
    title: "Finance Analyst",
    company: "Atlas Advisory",
    industry: "Financial Services",
    location: "Karachi",
    type: "Contract",
    category: "Finance",
    salary: "PKR 80,000–110,000 / month",
    description: "Support management reporting and commercial analysis.",
    age: "5 days ago",
    monogram: "AA",
  },
]

export const heroImage =
  "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?auto=format&fit=crop&w=900&q=90"
