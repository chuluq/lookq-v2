import ReactIcon from "constants/icons/react";
import NextIcon from "@/icons/next";
import GatsbyIcon from "constants/icons/gatsby";
import TailwindIcon from "@/icons/tailwind";
import StrapiIcon from "constants/icons/strapi";
import MarkdownIcon from "constants/icons/markdown";
import NodeIcon from "constants/icons/node";
import ExpressIcon from "constants/icons/express";
import MongoDBIcon from "constants/icons/mongodb";

const projects = [
  {
    id: 1,
    title: "Portfolio v2",
    details:
      "This site! my personal portfolio built with NextJS and TailwindCSS.",
    siteUrl: "https://lookq.netlify.app/",
    sourceUrl: "https://github.com/chuluq/lookq.com",
    tools: [
      {
        id: 1,
        icon: (
          <ReactIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]" />
        ),
      },
      {
        id: 2,
        icon: <NextIcon className="w-6 h-6 dark:fill-title-white" />,
      },
      {
        id: 3,
        icon: (
          <TailwindIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#06B6D4] dark:hover:fill-[#06B6D4]" />
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
          <ReactIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]" />
        ),
      },
      {
        id: 2,
        icon: (
          <GatsbyIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#663399] dark:hover:fill-[#663399]" />
        ),
      },
      {
        id: 3,
        icon: (
          <StrapiIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#2F2E8B] dark:hover:fill-[#2F2E8B]" />
        ),
      },
      {
        id: 4,
        icon: <MarkdownIcon className="w-6 h-6 dark:fill-title-white" />,
      },
    ],
  },
  {
    id: 3,
    title: "contact keeper",
    details:
      "A CRUD application using MongoDB, Express, and React Technologies.",
    sourceUrl: "https://github.com/chuluq/contact-keeper",
    tools: [
      {
        id: 1,
        icon: (
          <ReactIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]" />
        ),
      },
      {
        id: 2,
        icon: (
          <NodeIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#339933] dark:hover:fill-[#339933]" />
        ),
      },
      {
        id: 3,
        icon: <ExpressIcon className="w-6 h-6 dark:fill-title-white" />,
      },
      {
        id: 4,
        icon: (
          <MongoDBIcon className="w-6 h-6 dark:fill-title-white hover:fill-[#47A248] dark:hover:fill-[#47A248]" />
        ),
      },
    ],
  },
];

export default projects;
