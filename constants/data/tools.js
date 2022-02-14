import HTMLIcon from "@/icons/html";
import CSSIcon from "@/icons/css";
import JavaScriptIcon from "@/icons/javascript";
import ReactIcon from "constants/icons/react";
import NextIcon from "@/icons/next";
import TailwindIcon from "@/icons/tailwind";
import NodeIcon from "constants/icons/node";
import ExpressIcon from "constants/icons/express";
import FigmaIcon from "@/icons/figma";

const tools = [
  {
    id: 1,
    name: "HTML",
    icon: (
      <HTMLIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#E34F26]" />
    ),
  },
  {
    id: 2,
    name: "CSS",
    icon: (
      <CSSIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#1572B6]" />
    ),
  },
  {
    id: 3,
    name: "JavaScript",
    icon: (
      <JavaScriptIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#F7DF1E]" />
    ),
  },
  {
    id: 1,
    name: "React",
    icon: (
      <ReactIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#61DAFB]" />
    ),
  },
  {
    id: 1,
    name: "NextJS",
    icon: <NextIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />,
  },
  {
    id: 1,
    name: "TailwindCSS",
    icon: (
      <TailwindIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#06B6D4]" />
    ),
  },
  {
    id: 1,
    name: "NodeJS",
    icon: (
      <NodeIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#339933]" />
    ),
  },
  {
    id: 1,
    name: "ExpressJS",
    icon: <ExpressIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />,
  },
  {
    id: 1,
    name: "Figma",
    icon: (
      <FigmaIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#F24E1E]" />
    ),
  },
];

export default tools;
