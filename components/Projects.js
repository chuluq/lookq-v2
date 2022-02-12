import Card from "./Card";
import ReactIcon from "@/icons/react";
import GatsbyIcon from "@/icons/gatsby";
import StrapiIcon from "@/icons/strapi";
import MarkdownIcon from "@/icons/markdown";
import NodeIcon from "@/icons/node";
import ExpressIcon from "@/icons/express";
import MongoDBIcon from "@/icons/mongodb";

export default function Projects() {
  return (
    <div className="mt-40 px-4 flex flex-col items-center">
      <div className="mb-10">
        <h1 className="font-title font-bold text-2xl leading-9 text-title text-center">
          Featured Projects
        </h1>
      </div>
      <div className="space-y-8">
        <Card
          title="Portfolio v1"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          molestias nam ea neque ipsum deleniti, cupiditate ex odio cumque quas?"
          siteUrl="https://lookq.netlify.app/"
          sourceUrl="https://github.com/chuluq/lookq.com"
          tools={[
            {
              id: 1,
              icon: <ReactIcon />,
            },
            {
              id: 2,
              icon: <GatsbyIcon />,
            },
            {
              id: 3,
              icon: <StrapiIcon />,
            },
            {
              id: 4,
              icon: <MarkdownIcon />,
            },
          ]}
        />
        <Card
          title="contact keeper"
          details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          molestias nam ea neque ipsum deleniti, cupiditate ex odio cumque quas?"
          sourceUrl="https://github.com/chuluq/contact-keeper"
          tools={[
            {
              id: 1,
              icon: <ReactIcon />,
            },
            {
              id: 2,
              icon: <NodeIcon />,
            },
            {
              id: 3,
              icon: <ExpressIcon />,
            },
            {
              id: 4,
              icon: <MongoDBIcon />,
            },
          ]}
        />
      </div>
    </div>
  );
}
