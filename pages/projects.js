import Layout from "@/components/Layout";
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
    <Layout>
      <div className="px-4 sm:px-8 mx-auto w-full md:w-8/12 flex flex-col items-center sm:items-start">
        <div className="mb-16 flex flex-col">
          <h1 className="font-title font-bold text-[32px] leading-[45px] text-title capitalize">
            Projects
          </h1>
          <p className="font-body font-normal text-lg left-6 text-body">
            Here are some projects that I&apos;ve been worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          <Card
            title="Portfolio v1"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          molestias nam ea neque ipsum deleniti, cupiditate ex odio cumque quas?"
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
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          molestias nam ea neque ipsum deleniti, cupiditate ex odio cumque quas?"
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
    </Layout>
  );
}
