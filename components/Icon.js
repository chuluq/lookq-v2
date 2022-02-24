import { SM, BASE, LG, XL, XXL } from "@/data/icons";
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
  GMAIL,
  WHATSAPP,
  GITHUB,
} from "@/data/icons";

import HTMLIcon from "@/icons/html";
import CSSIcon from "@/icons/css";
import JavaScriptIcon from "@/icons/javascript";
import TypescriptIcon from "@/icons/typescript";
import ReactIcon from "@/icons/react";
import NextIcon from "@/icons/next";
import GatsbyIcon from "@/icons/gatsby";
import ReduxIcon from "@/icons/redux";
import TailwindIcon from "@/icons/tailwind";
import StrapiIcon from "@/icons/strapi";
import MarkdownIcon from "@/icons/markdown";
import NodeIcon from "@/icons/node";
import ExpressIcon from "@/icons/express";
import MongoDBIcon from "@/icons/mongodb";
import GmailIcon from "@/icons/gmail";
import GithubIcon from "@/icons/github";
import WhatsAppIcon from "@/icons/whatsapp";
import FigmaIcon from "@/icons/figma";

export default function Icon({ name, size }) {
  switch (name) {
    case HTML:
      return (
        <HTMLIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#E34F26] dark:hover:fill-[#E34F26]`}
        />
      );
      break;

    case CSS3:
      return (
        <CSSIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#1572B6] dark:hover:fill-[#1572B6]`}
        />
      );
      break;

    case JAVASCRIPT:
      return (
        <JavaScriptIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#F7DF1E] dark:hover:fill-[#F7DF1E]`}
        />
      );
      break;

    case TYPESCRIPT:
      return (
        <TypescriptIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#3178C6] dark:hover:fill-[#3178C6]`}
        />
      );
      break;

    case REACT:
      return (
        <ReactIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]`}
        />
      );
      break;

    case NEXTJS:
      return (
        <NextIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white`}
        />
      );
      break;

    case GATSBYJS:
      return (
        <GatsbyIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#663399] dark:hover:fill-[#663399]`}
        />
      );
      break;

    case REACTNATIVE:
      return (
        <ReactIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]`}
        />
      );
      break;

    case REDUX:
      return (
        <ReduxIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#764ABC] dark:hover:fill-[#764ABC]`}
        />
      );
      break;

    case TAILWINDCSS:
      return (
        <TailwindIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#06B6D4] dark:hover:fill-[#06B6D4]`}
        />
      );
      break;

    case STRAPIJS:
      return (
        <StrapiIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#2F2E8B] dark:hover:fill-[#2F2E8B]`}
        />
      );
      break;

    case MARKDOWN:
      return (
        <MarkdownIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white`}
        />
      );
      break;

    case NODEJS:
      return (
        <NodeIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#339933] dark:hover:fill-[#339933]`}
        />
      );
      break;

    case EXPRESSJS:
      return (
        <ExpressIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white`}
        />
      );
      break;

    case MONGODB:
      return (
        <MongoDBIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } first-letter:dark:fill-title-white hover:fill-[#47A248] dark:hover:fill-[#47A248]`}
        />
      );
      break;

    case FIGMA:
      return (
        <FigmaIcon
          className={`${
            size === SM
              ? "w-4 h-4"
              : size === LG
              ? "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
              : size === XL
              ? "w-12 h-12"
              : size === XXL
              ? "w-16 h-16"
              : "w-6 h-6"
          } dark:fill-title-white hover:fill-[#F24E1E] dark:hover:fill-[#F24E1E]`}
        />
      );
      break;

    // Special for Social Links
    case GMAIL:
      return (
        <GmailIcon
          className={`w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#EA4335] dark:hover:fill-[#EA4335] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1`}
        />
      );
      break;

    case WHATSAPP:
      return (
        <WhatsAppIcon
          className={`w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#25D366] dark:hover:fill-[#25D366] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1`}
        />
      );
      break;

    case GITHUB:
      return (
        <GithubIcon
          className={`w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#181717] dark:hover:fill-body-dark transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1`}
        />
      );
      break;

    default:
      break;
  }
}
