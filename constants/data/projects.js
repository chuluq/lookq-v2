import Icon from "@/components/Icon";
import {
  HTML,
  CSS3,
  JAVASCRIPT,
  REACT,
  NEXTJS,
  GATSBYJS,
  STRAPIJS,
  MARKDOWN,
  TAILWINDCSS,
  NODEJS,
  EXPRESSJS,
  MONGODB,
} from "@/data/icons";

export const projects = [
  {
    id: 1,
    title: "Portfolio v2",
    details:
      "This site! my personal portfolio built with NextJS and TailwindCSS which intend to showcase my projects and share my stories.",
    siteUrl: "https://lookq.netlify.app/",
    sourceUrl: "https://github.com/chuluq/lookq.com",
    tools: [
      {
        id: 1,
        icon: <Icon name={REACT} className="w-6 h-6" />,
      },
      {
        id: 2,
        icon: <Icon name={NEXTJS} className="w-6 h-6" />,
      },
      {
        id: 3,
        icon: <Icon name={TAILWINDCSS} className="w-6 h-6" />,
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio v1",
    details: "The first creation of my portfolio built with Gatsby and Strapi.",
    siteUrl: "https://lookq.netlify.app/",
    sourceUrl: "https://github.com/chuluq/lookq.com",
    tools: [
      {
        id: 1,
        icon: <Icon name={REACT} className="w-6 h-6" />,
      },
      {
        id: 2,
        icon: <Icon name={GATSBYJS} className="w-6 h-6" />,
      },
      {
        id: 3,
        icon: <Icon name={STRAPIJS} className="w-6 h-6" />,
      },
      {
        id: 4,
        icon: <Icon name={MARKDOWN} className="w-6 h-6" />,
      },
    ],
  },
  {
    id: 3,
    title: "contact keeper",
    details:
      "An application to keep your contact list, either personal or professional. Built using MongoDB, Express, and React Technologies.",
    sourceUrl: "https://github.com/chuluq/contact-keeper",
    tools: [
      {
        id: 1,
        icon: <Icon name={REACT} className="w-6 h-6" />,
      },
      {
        id: 2,
        icon: <Icon name={NODEJS} className="w-6 h-6" />,
      },
      {
        id: 3,
        icon: <Icon name={EXPRESSJS} className="w-6 h-6" />,
      },
      {
        id: 4,
        icon: <Icon name={MONGODB} className="w-6 h-6" />,
      },
    ],
  },
  {
    id: 4,
    title: "calculator",
    details: "A calculator application built using vanilla JavaScript.",
    siteUrl: "https://calculator-chuluq.netlify.app/",
    sourceUrl: "https://github.com/chuluq/calculator",
    tools: [
      {
        id: 1,
        icon: <Icon name={HTML} className="w-6 h-6" />,
      },
      {
        id: 2,
        icon: <Icon name={CSS3} className="w-6 h-6" />,
      },
      {
        id: 3,
        icon: <Icon name={JAVASCRIPT} className="w-6 h-6" />,
      },
    ],
  },
];
