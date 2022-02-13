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
      <div className="mt-16 xl:px-16 flex flex-col xl:flex-row items-baseline xl:space-x-4 space-y-8 xl:space-y-0">
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
