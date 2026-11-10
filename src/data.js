import billSplitImg from "./assets/Billsplit-thumbnail.png";
import AurideImg from "./assets/Auride-thumbnail.png";

export const profile = {
  name: "Pannarong Fuengkeaw",
  role: "Computer and Robotics Engineering student",
  tagline: "",
  email: "suaetiger1230@gmail.com",
  github: "https://github.com/TigerBOGBOG",
  linkedin: "https://linkedin.com/in/yourname",
  about: `I’m a Computer and Robotics Engineering student passionate about software development and building practical applications. My main focus is Full-Stack Development, with experience working with frontend, backend, databases, and APIs.

I enjoy turning ideas into functional applications and continuously challenging myself with new technologies and projects. I’m currently seeking an opportunity where I can contribute, learn from an experienced team, and grow as a software developer.
`,
};

export const skills = {
  frontend: [
    { name: "React", icon: "react" },
    { name: "Javascript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "Prisma", icon: "prisma" },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
  ],
};

export const projects = [
  {
    title: "Bill spilt",
    desc: "Bill spilt with friends app",
    tags: ["React"],
    image: billSplitImg,
    link: "billsplit-by-tiger.vercel.app",
    status: "Completed"
  },
  {
    title: "Auride",
    desc: "Ride hailing",
    tags: ["React","express","prisma"],
    image: AurideImg,
    link: "https://github.com/TigerBOGBOG/AuRide",
    status: "In Progress"
  },

]

