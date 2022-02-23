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

export default function Icon({ name, className }) {
  switch (name) {
    case HTML:
      return <HTMLIcon className={className} />;
      break;

    case CSS3:
      return <CSSIcon className={className} />;
      break;

    case JAVASCRIPT:
      return <JavaScriptIcon className={className} />;
      break;

    case TYPESCRIPT:
      return <TypescriptIcon className={className} />;
      break;

    case REACT:
      return <ReactIcon className={className} />;
      break;

    case NEXTJS:
      return <NextIcon className={className} />;
      break;

    case GATSBYJS:
      return <GatsbyIcon className={className} />;
      break;

    case REACTNATIVE:
      return <ReactIcon className={className} />;
      break;

    case REDUX:
      return <ReduxIcon className={className} />;
      break;

    case TAILWINDCSS:
      return <TailwindIcon className={className} />;
      break;

    case STRAPIJS:
      return <StrapiIcon className={className} />;
      break;

    case MARKDOWN:
      return <MarkdownIcon className={className} />;
      break;

    case NODEJS:
      return <NodeIcon className={className} />;
      break;

    case EXPRESSJS:
      return <ExpressIcon className={className} />;
      break;

    case MONGODB:
      return <MongoDBIcon className={className} />;
      break;

    case FIGMA:
      return <FigmaIcon className={className} />;
      break;

    case GMAIL:
      return <GmailIcon className={className} />;
      break;

    case WHATSAPP:
      return <WhatsAppIcon className={className} />;
      break;

    case GITHUB:
      return <GithubIcon className={className} />;
      break;

    default:
      break;
  }
}
