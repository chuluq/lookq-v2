import Card from "@/components/Card";
import ReactIcon from "constants/icons/react";
import GatsbyIcon from "constants/icons/gatsby";
import StrapiIcon from "constants/icons/strapi";
import MarkdownIcon from "constants/icons/markdown";
import NodeIcon from "constants/icons/node";
import ExpressIcon from "constants/icons/express";
import MongoDBIcon from "constants/icons/mongodb";

export default function Projects() {
  return (
    <div className="w-full mt-40 mx-auto px-4 flex flex-col items-center">
      <div>
        <h1 className="font-title font-bold text-2xl leading-9 text-title text-center">
          Featured Projects
        </h1>
      </div>
      <div className="mt-16 xl:px-16 flex flex-col xl:flex-row items-center xl:items-baseline xl:space-x-4 space-y-8 xl:space-y-0">
        <Card
          title="Portfolio v1"
          details="The first creation of my portfolio built with Gatsby and Strapi."
          siteUrl="https://lookq.netlify.app/"
          sourceUrl="https://github.com/chuluq/lookq.com"
          tools={[
            {
              id: 1,
              icon: <ReactIcon className="w-6 h-6 hover:fill-[#61DAFB]" />,
            },
            {
              id: 2,
              icon: <GatsbyIcon className="w-6 h-6 hover:fill-[#663399]" />,
            },
            {
              id: 3,
              icon: <StrapiIcon className="w-6 h-6 hover:fill-[#2F2E8B]" />,
            },
            {
              id: 4,
              icon: <MarkdownIcon className="w-6 h-6" />,
            },
          ]}
        />
        <Card
          title="contact keeper"
          details="A CRUD application using MongoDB, Express, and React Technologies."
          sourceUrl="https://github.com/chuluq/contact-keeper"
          tools={[
            {
              id: 1,
              icon: <ReactIcon className="w-6 h-6 hover:fill-[#61DAFB]" />,
            },
            {
              id: 2,
              icon: <NodeIcon className="w-6 h-6 hover:fill-[#339933]" />,
            },
            {
              id: 3,
              icon: <ExpressIcon className="w-6 h-6" />,
            },
            {
              id: 4,
              icon: <MongoDBIcon className="w-6 h-6 hover:fill-[#47A248]" />,
            },
          ]}
        />
      </div>
    </div>
  );
}
