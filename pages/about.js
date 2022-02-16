import Layout from "@/components/Layout";
import HTMLIcon from "@/icons/html";
import CSSIcon from "@/icons/css";
import JavaScriptIcon from "@/icons/javascript";
import ReactIcon from "@/icons/react";
import NextIcon from "@/icons/next";
import NodeIcon from "@/icons/node";
import ExpressIcon from "@/icons/express";
import TailwindIcon from "@/icons/tailwind";
import FigmaIcon from "@/icons/figma";

export default function About() {
  return (
    <Layout>
      {/* About */}
      <div className="px-8 lg:mx-auto md:px-16 lg:px-32 w-full xl:w-[80vw] flex flex-col">
        <div className="mb-24">
          <h1 className="font-title font-bold text-[32px] lg:text-[56px] leading-[45px] text-title">
            About
          </h1>
        </div>

        <div className="flex flex-col space-y-24">
          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="font-title font-bold text-xl leading-[30px] text-title ">
                Background
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="font-body font-medium text-base leading-6 text-body">
                Hey there! I’m Chuluq, a JavaScript developer. I like to spend
                my time designing and building solutions, engaging with the
                community, as well as pushing myself to learn more.
              </p>
              <p className="font-body font-medium text-base leading-6 text-body">
                I studied Information and Communication Technology at Prince of
                Songkla University, Thailand from 2016 to 2020. I study a lot
                there but ended up diving more into JavaScript technology.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="font-title font-bold text-xl leading-[30px] text-title">
                What I’ve been up to
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="font-body font-medium text-base leading-6 text-body">
                I’ve been recently focused on building React applications,
                diving deeper into React itself as well as libraries and tools
                surrounding it. I’ve also started recently learning Typescript
                and already feeling the benefits of type safety and all other
                great things it brings!.
              </p>
              <p className="font-body font-medium text-base leading-6 text-body">
                I’m currently working as a front-end developer at Teravin
                Technology, Yogyakarta where I slice the design into
                applications. Working on personal projects and learning more on
                how to code effectively, robust and reusable.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="font-title font-bold text-xl leading-[30px] text-title">
                Interests
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="font-body font-medium text-base leading-6 text-body">
                I’m currently interested in Design Systems and Component Driven
                User Interfaces and I love to explore the tools and techniques
                that help to create more scalable and maintainable UI’s.
              </p>
              <p className="font-body font-medium text-base leading-6 text-body">
                When I’m not coding you’ll typically find me engaging with
                another creative or engaging activity such as reading, gaming,
                or playing badminton.
              </p>
              <p className="font-body font-medium text-base leading-6 text-body">
                Although I love to keep myself busy with activities, I also make
                sure to set aside time to spend time with my family, going for
                walks and runs, as well as taking some time out for
                self-reflection.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-40 md:px-8 flex flex-col items-center">
          <div className="mb-16 w-full">
            <h3 className="font-title font-bold text-xl text-center leading-[30px] text-title capitalize">
              tools & technologies
            </h3>
          </div>
          <div className="mb-32">
            <p className="font-body font-medium text-base leading-6 text-body text-center">
              There are a lot of front-end tools out there, and here are some of
              the tools I use most frequently.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="mx-auto flex flex-col items-center space-y-2">
              <HTMLIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#E34F26]" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                HTML5
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <CSSIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#1572B6]" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                CSS3
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <JavaScriptIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#F7DF1E]" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                JavaScript
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <ReactIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#61DAFB]" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                React
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <NextIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                NextJS
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <TailwindIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#06B6D4]" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                TailwindCSS
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <NodeIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#339933]" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                NodeJS
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <ExpressIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                ExpressJS
              </p>
            </div>
            <div className="mx-auto flex flex-col items-center space-y-2">
              <FigmaIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 hover:fill-[#F24E1E]" />
              <p className="font-body font-normal text-base leading-4 text-title text-center">
                Figma
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
