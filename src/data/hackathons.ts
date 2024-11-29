import { Icons } from "@/components/icons";
import { ReactNode } from "react";

type HackathonLink = {
  title: string;
  icon: (props: { className?: string }) => ReactNode;
  href: string;
};

export const HACKATHONS = [
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
        icon: Icons.github,
        href: "#",
      },
    ],
  },
  {
    title: "CodeFest",
    dates: "March 15, 2019",
    location: "Kathmandu, Nepal",
    description: "Built a real-time collaboration tool for remote teams during the event.",
    image: "https://ik.imagekit.io/kbopxwsjw/Portfolio/Project/codefest.jpg",
    links: [
      {
        title: "Source",
        icon: Icons.github,
        href: "#",
      },
    ],
  }
  
];
