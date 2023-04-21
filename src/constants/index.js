import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  spoko,
  hiperion,
  rentalcar,
  diary,
  hoobank  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ionic-React Developer",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Ionic - React Developer",
    company_name: "Spoko.dev",
    icon: spoko,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining web applications using Ionic-React and other related technologies.",
      "Collaborating team including product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Climbing Instructor",
    company_name: "Hyperion",
    icon: hiperion,
    iconBg: "#fff",
    date: "Sep 2016 - Jan 2022",
    points: [
      "Work with clients on a daily basis",
      "Ability to assist clients in resolving their issues.",
      "I have gained extensive experience communicating with clients in the English language."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Lev was a fantastic frontend developer to work with on the Diary app. His attention to detail and creativity really helped bring the app to life. Lev consistently demonstrated his ability to solve complex problems and deliver high-quality code in a timely manner. His communication skills were excellent, making collaboration a breeze. I would highly recommend Lev to anyone in need of a skilled and dedicated frontend developer.",
    name: "Yaroslav Hrydkovets",
    designation: "QA Engineer",
    company: "Temabit Software Development",
    image: "https://media.licdn.com/dms/image/C4E03AQHqgh67QhwdQQ/profile-displayphoto-shrink_800_800/0/1626787292838?e=1686787200&v=beta&t=Zw_J3Sf7DfnEFpvx3vW_4F3yT5NPKOve4272FElIkq4",
  }
];

const projects = [
  {
    name: "Diary",
    description:
      "The 'Diary' Android app helps users create and manage their everyday notes and thoughts. It provides a simple tool to stay organized and keep track of ideas",
    tags: [
      {
        name: "ionic-react",
        color: "blue-text-gradient",
      },
      {
        name: "capsitor",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "ts",
        color: "blue-text-gradient",
      },
    ],
    image: diary,
    page_link: "https://play.google.com/store/apps/details?id=spoko.dev.diary&hl=en&gl=US",
    source_code_link: "https://github.com/LevkoTkach/diary",
  },
  {
    name: "Car Rental",
    description:
      "This is a web-based platform designed to allow users to easily search, book, and manage premium rental cars based on their preferences. It also includes a customer support section to ensure a positive user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: rentalcar,
    page_link: "https://levkotkach.github.io/Car-rental-team-page/",
    source_code_link: "https://github.com/LevkoTkach/Car-rental-team-page",
  },
  {
    name: "Bank",
    description:
      "A web-based application designed to allow users to manage their banking needs, such as checking their account balance, transferring funds, paying bills, and applying for loans or credit cards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css ",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    page_link: "https://www.modern-bussiness-website.com/",
    source_code_link: "https://github.com/LevkoTkach/Bank",
  },
];

export { services, technologies, experiences, testimonials, projects };
