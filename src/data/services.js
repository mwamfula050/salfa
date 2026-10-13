
import {
  GraduationCap,
  Wrench,
  MonitorSmartphone,
  Code2,
  FileCheck2,
  BriefcaseBusiness,
  Laptop,
  Database,
  Globe,
} from "lucide-react";

export const services = [
  {
    id: 1,
    category: "training",
    number: "01",
    title: "Computer Training",
    description:
      "Build practical computer skills for education, employment and business through flexible learning.",
    features: ["Computer basics", "Microsoft Office", "Physical & online"],
    icon: GraduationCap,
    accent: "mint",
  },
  {
    id: 2,
    category: "technical",
    number: "02",
    title: "Computer Maintenance & Repair",
    description:
      "Get technical support, computer diagnostics, hardware repairs, upgrades and software installation.",
    features: ["Hardware repair", "Software support", "Maintenance"],
    icon: Wrench,
    accent: "blue",
  },
  {
    id: 3,
    category: "development",
    number: "03",
    title: "Website & Mobile App Development",
    description:
      "Turn your ideas into professional websites, e-commerce platforms and mobile applications.",
    features: ["Business websites", "E-commerce", "Mobile applications"],
    icon: MonitorSmartphone,
    accent: "purple",
  },
  {
    id: 4,
    category: "training",
    number: "04",
    title: "Web Programming Courses",
    description:
      "Learn modern web development through practical exercises, projects and guided instruction.",
    features: ["HTML & CSS", "JavaScript & React", "Backend & databases"],
    icon: Code2,
    accent: "mint",
  },
  {
    id: 5,
    category: "digital",
    number: "05",
    title: "Online Application Assistance",
    description:
      "Receive guidance with eligible education, employment, business and other online applications.",
    features: ["College applications", "Job applications", "Business services"],
    icon: FileCheck2,
    accent: "blue",
  },
  {
    id: 6,
    category: "consulting",
    number: "06",
    title: "Business Counselling",
    description:
      "Get practical advice on business technology, digital transformation and software solutions.",
    features: ["Business planning", "Accounting systems", "Digital strategy"],
    icon: BriefcaseBusiness,
    accent: "purple",
  },
];

export const courses = [
  {
    id: 1,
    category: "beginner",
    title: "Computer Fundamentals",
    description:
      "Understand computers, typing, file management, internet use and essential digital skills.",
    duration: "Flexible schedule",
    mode: "Physical & Online",
    icon: Laptop,
  },
  {
    id: 2,
    category: "professional",
    title: "Microsoft Office & Excel",
    description:
      "Develop useful Word, Excel and PowerPoint skills for office work, accounting and business.",
    duration: "Flexible schedule",
    mode: "Physical & Online",
    icon: Database,
  },
  {
    id: 3,
    category: "development",
    title: "Web Development with React",
    description:
      "Learn HTML, CSS, JavaScript and React, then progress toward complete web applications.",
    duration: "Project-based",
    mode: "Physical & Online",
    icon: Globe,
  },
];
