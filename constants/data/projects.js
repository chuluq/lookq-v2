import HTMLIcon from "@/icons/html";
import CSSIcon from "@/icons/css";
import JavaScriptIcon from "@/icons/javascript";
import ReactIcon from "constants/icons/react";
import NextIcon from "@/icons/next";
import GatsbyIcon from "constants/icons/gatsby";
import TailwindIcon from "@/icons/tailwind";
import StrapiIcon from "constants/icons/strapi";
import MarkdownIcon from "constants/icons/markdown";
import NodeIcon from "constants/icons/node";
import ExpressIcon from "constants/icons/express";
import MongoDBIcon from "constants/icons/mongodb";
import Icon from "@/components/Icon";
import {
  HTML,
  CSS3,
  JAVASCRIPT,
  TYPESCRIPT,
  REACT,
  NEXTJS,
  GATSBYJS,
  REACTNATIVE,
  REDUX,
  STRAPIJS,
  MARKDOWN,
  TAILWINDCSS,
  NODEJS,
  EXPRESSJS,
  MONGODB,
  FIGMA,
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
        icon: (
          <Icon
            name={REACT}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]"
          />
        ),
      },
      {
        id: 2,
        icon: <Icon name={NEXTJS} className="w-6 h-6 dark:fill-title-white" />,
      },
      {
        id: 3,
        icon: (
          <Icon
            name={TAILWINDCSS}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#06B6D4] dark:hover:fill-[#06B6D4]"
          />
        ),
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
        icon: (
          <Icon
            name={REACT}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]"
          />
        ),
      },
      {
        id: 2,
        icon: (
          <Icon
            name={GATSBYJS}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#663399] dark:hover:fill-[#663399]"
          />
        ),
      },
      {
        id: 3,
        icon: (
          <Icon
            name={STRAPIJS}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#2F2E8B] dark:hover:fill-[#2F2E8B]"
          />
        ),
      },
      {
        id: 4,
        icon: (
          <Icon name={MARKDOWN} className="w-6 h-6 dark:fill-title-white" />
        ),
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
        icon: (
          <Icon
            name={REACT}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]"
          />
        ),
      },
      {
        id: 2,
        icon: (
          <Icon
            name={NODEJS}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#339933] dark:hover:fill-[#339933]"
          />
        ),
      },
      {
        id: 3,
        icon: (
          <Icon name={EXPRESSJS} className="w-6 h-6 dark:fill-title-white" />
        ),
      },
      {
        id: 4,
        icon: (
          <Icon
            name={MONGODB}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#47A248] dark:hover:fill-[#47A248]"
          />
        ),
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
        icon: (
          <Icon
            name={HTML}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#E34F26] dark:hover:fill-[#E34F26]"
          />
        ),
      },
      {
        id: 2,
        icon: (
          <Icon
            name={CSS3}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#1572B6] dark:hover:fill-[#1572B6]"
          />
        ),
      },
      {
        id: 3,
        icon: (
          <Icon
            name={JAVASCRIPT}
            className="w-6 h-6 dark:fill-title-white hover:fill-[#F7DF1E] dark:hover:fill-[#F7DF1E]"
          />
        ),
      },
    ],
  },
];
