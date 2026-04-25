import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Leonardo",
  initials: "L",
  url: "https://cambiarestaurl.com",
  location: "Santa Clara, Villa Clara, Cuba",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Junior Backend Developer with a passion for building web applications. Currently seeking opportunities to further develop my skills in a professional environment.",
  summary:
    "Since I started at university to collaborate in some application development projects of my own career I realised how exciting this world of software development is. [I am an Electrical Engineering graduate](/#education) but that hasn't stopped me from venturing into web development allowing me to [create scalable and easily maintainable web applications](/#projects), following best practices and layered architecture.",
  // GitHub Profile Photo
  avatarUrl: "https://avatars.githubusercontent.com/u/120134592?s=400&v=4",
  // Linkedin Profile Photo
  // avatarUrl:
  //   "https://media.licdn.com/dms/image/v2/D4E03AQHgY6kSU6QmXw/profile-displayphoto-shrink_800_800/B4EZT_5ZB4HUAc-/0/1739460023295?e=1759363200&v=beta&t=SiQsXtrNokgtQv55SGVzPTMR3pM7itgXltlOPGzcGHc",
  // avatarUrl:
  //   "https://media.licdn.com/dms/image/v2/D4E03AQHgY6kSU6QmXw/profile-displayphoto-shrink_200_200/B4EZT_5ZB4HUAY-/0/1739460023270?e=1759363200&v=beta&t=Apn1BNJawhIZiNXDfpvsQTI_0W5yhCaP4w-K3a3ZcpA",
  employmentStatus: "Open To Work",
  skills: [
    "AWS",
    "React",
    "Astro",
    "Vue.js",
    "Express",
    "Hono.js",
    "Next.js",
    "Nest.js",
    "Typescript",
    "Node.js",
    "Python",
    "Flask",
    "Django",
    "FastAPI",
    "Prisma",
    "Drizzle ORM",
    "Postgres",
    "MySQL",
    "MongoDB",
    "SQL Server",
    "Docker",
    "Java",
    "SpringBoot",
    "C#",
    ".NET",
    "Entity Framework",
    "REST",
    "GraphQL",
    "Websocket",
    "TailwindCSS",
    "Handlebars",
    "Git/Github",
    "RabbitMQ",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "castillofernandezleonardo778@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Leo0o00",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/leonardocastillo00",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "castillofernandezleonardo778@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Institute of Hydraulic Projects",
      href: "https://www.facebook.com/INRHCuba/",
      badges: ["on-site"],
      location: "On-Site",
      title: "Electrical Engineer - FullStack Developer",
      logoUrl: "/INRH.png",
      start: "Dec 2023",
      end: "Dec 2025",
      description:
        "•	Developing an interactive web application that enables project management from design to implementation. This includes materials management and compliance reporting.\n •	Project management: Create and manage projects, assign tasks, and upload and view technical documents such as electrical drawings and specifications.\n •	Materials and cost management: Allows for materials inventory, cost estimation and tracking of material orders.\n •	Regulatory and compliance: Generate compliance reports and checklists that guide engineers to comply with regulations.\n •	Dashboard and reporting: Display a dashboard with key metrics and graphs, generate periodic or on - demand reports that summarise project status.",
    },
  ],
  education: [
    {
      school: "“Marta Abreu” of Las Villas University",
      href: "https://www.uclv.edu.cu/",
      degree: "Electrical Engineering ",
      logoUrl: "/UCLV.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "RentiFul",
      href: "https://github.com/Leo0o00/RentiFul",
      dates: "Apr 2026",
      active: true,
      description:
        "Full-stack rental management platform for discovering properties, submitting rental applications, and managing the relationship between tenants and property managers.",
      technologies: [
        "TailwindCSS",
        "Next.js",
        "Typescript",
        "AWS",
        ".NET",
        "Entity Framework",
        "RabbitMQ",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://saldo-bw6d.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source Code",
          href: "https://github.com/Leo0o00/RentiFul",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rentiful-web-preview.webp",
      video: "",
    },
    {
      title: "Saldo - Finance App",
      href: "https://saldo-bw6d.vercel.app/",
      dates: "Aug 2025",
      active: true,
      description:
        "A tool that allows you to manage your finances in a simple and intuitive way and even import your records from a CSV file.",
      technologies: [
        "TailwindCSS",
        "Next.js",
        "Typescript",
        "Honojs",
        "Drizzle",
      ],
      links: [
        {
          type: "Website",
          href: "https://saldo-bw6d.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/Leo0o00/Saldo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/saldo-web-preview.webp",
      video: "",
    },
    {
      title: "Dev Books Store",
      href: "https://dev-books-store-omega.vercel.app/",
      dates: "Sep 2024",
      active: true,
      description: "Simple app developed with [Astro 5](https://astro.build/)",
      technologies: ["Astro", "TailwindCSS", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://dev-books-store-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/Leo0o00/devbooksstore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/DevBooksStore.webp",
      video: "",
    },
    {
      title: "Weather Wise",
      href: "https://weatherwise-ba06sf48j-leo0o00s-projects.vercel.app/",
      dates: "Aug 2024",
      active: true,
      description:
        "Web app that shows the status of weather conditions in the selected city.",
      technologies: ["React", "TailwindCSS", "Next.js", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://weatherwise-ba06sf48j-leo0o00s-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/Leo0o00/weather-wise",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/WeatherWise.webp",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const;
