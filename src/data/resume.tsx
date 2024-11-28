import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Prakash Nayak",
  initials: "DV",
  url: "https://dub.sh/prakashnayak",
  location: "Kathmandu, Nepal",
  locationLink: "https://google.com/maps/place/Kathmandu",
  description:
    "UI/UX and WordPress development. Passionate about creating intuitive user experiences and building scalable web solutions. Experienced in modern web technologies and design systems.",
  summary:
    "I’m a passionate developer with expertise in WordPress, Laravel, React, and modern web technologies like Tailwind CSS, Vue, and Node.js. With a strong foundation in programming, I aim to build innovative solutions. When I'm not coding, you’ll find me in nature, enjoying bike rides and exploring the outdoors. My goal is to continuously learn and contribute to the tech community.",
  avatarUrl: "/me.png",
  skills: [
    "HTML | CSS | JS",
    "Tailwindcss | Bulma | Bootstrap",
    "Wordpress",
    "Laravel",
    "React / Next.js",
    "Vue",
    "Node.js",
    "Express.js",
    "Git",
    "PHP & MySQL",
    "PostgreSQL",
    "Drizzle ORM",
    "Prisma",
    "Woo-Commerce",
    "ACF | Plugin",
    "Yoast SEO",
    "Google Analytics",
    "Divi / Elementor"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    // { href: "/projects", icon: Icons.project, label: "Projects" },
  ],
  contact: {
    email: "erprakashnayak@gmail.com",
    tel: "+977-9862537264",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prakaasnike",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/erprakashnayak/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/prakash-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Threads: {
        name: "Threads",
        url: "https://dub.sh/prakash-threads",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Avocado Technology",
      href: "https://avocado.com.np/",
      badges: [],
      location: "Onsite & Remote",
      title: "Wordpress & UI/UX Development",
      logoUrl: "/avo.svg",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Development of Wordpress sites, frontend design, and responsive site creation. Client communication for design and development on regular basis with daily updates and training clients for blog management and basic site self-maintenance.",
    },
    {
      company: "Hiver Technology",
      badges: [],
      href: "https://hiver.com.np/",
      location: "Onsite",
      title: "Web Developer",
      logoUrl: "/hiver.png",
      start: "Jul 2021",
      end: "Sep 2022",
      description:
        "Worked as Frontend UI/UX Development, Laravel, and WordPress. Built systems like Jewelry, Dental, and Hotel Log Management. Experience in digital and offline marketing.",
    },
    {
      company: "Insight Technology",
      href: "https://insighttechintl.com/",
      badges: [],
      location: "Lalitpur, Nepal",
      title: "Wordpress & UI/UX Development",
      logoUrl: "/insight.jpg",
      start: "Jan 2020",
      end: "Apr 2020",
      description:
        "Experienced in custom theme design, UI development, and creating designs with Adobe XD and Figma. Proficient in crafting unique styles with ACF, developing responsive CMS websites using Divi and Elementor, integrating WooCommerce, and optimizing for SEO. Skilled in logo design, digital graphics, and writing SEO-driven e-commerce blogs to boost traffic. Expertise in website maintenance, security, and managing projects from concept to delivery.",
    },
  ],
  education: [
    {
      school: "B.M.S. Institute of Technology and Management (VTU)",
      href: "https://bmsit.ac.in/",
      degree: "B.E. - Computer Science & Engineering (CSE)",
      logoUrl: "/bmsit.svg",
      start: "2014",
      end: "2028",
    },
    {
      school: "Kathmandu Model Secondary School",
      href: "https://ktmmodelcollege.edu.np/",
      degree: "HSEB +2 (Higher Secondary Education Board)",
      logoUrl: "/kmc.svg",
      start: "2011",
      end: "2013",
    },
    {
      school: "Nightingale Higher Secondary School",
      href: "https://nightingale.edu.np/",
      degree: "School Leaving Certificate (SLC)",
      logoUrl: "/nhss.svg",
      start: "2001",
      end: "2011",
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      href: "https://github.com/prakaasnike/devportfolio",
      dates: "2024",
      active: true,
      description: "Personal portfolio website showcasing skills, projects, and professional experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/kbopxwsjw/Portfolio/Project/portfolio.png",
      video:
        "",
    },
    {
      title: "Dental Log Management System",
      href: "#",
      dates: "2023",
      description: "Dental Log Management System for Dental Clinics",
      technologies: ["Laravel", "Filament", "Mysql"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://ik.imagekit.io/kbopxwsjw/Portfolio/Project/projectp2.png",
    },
  ],
  hackathons: [
    {
      title: "Hackathon",
      dates: "October 29, 2017",
      location: "Lalitpur, Nepal",
      description:
        "Developed an internal widget for uploading assignments portal app",
      image:
        "https://ik.imagekit.io/kbopxwsjw/Portfolio/Project/hack.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "#",
        },
      ],
    },
  ],
} as const;