import HTMLIcon from "@/icons/html";
import CSSIcon from "@/icons/css";
import JavaScriptIcon from "@/icons/javascript";
import TypescriptIcon from "@/icons/typescript";
import ReactIcon from "@/icons/react";
import ReduxIcon from "@/icons/redux";
import NextIcon from "@/icons/next";
import NodeIcon from "@/icons/node";
import ExpressIcon from "@/icons/express";
import TailwindIcon from "@/icons/tailwind";
import FigmaIcon from "@/icons/figma";

export default function Tools() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="mx-auto flex flex-col items-center space-y-2">
        <HTMLIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#E34F26] dark:hover:fill-[#E34F26]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          HTML5
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <CSSIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#1572B6] dark:hover:fill-[#1572B6]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          CSS3
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <JavaScriptIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#F7DF1E] dark:hover:fill-[#F7DF1E]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          JavaScript
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <TypescriptIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#3178C6] dark:hover:fill-[#3178C6]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          TypeScript
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <ReactIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          React
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <NextIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          NextJS
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <ReactIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#61DAFB] dark:hover:fill-[#61DAFB]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          React Native
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <ReduxIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#764ABC] dark:hover:fill-[#764ABC]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          Redux
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <TailwindIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#06B6D4] dark:hover:fill-[#06B6D4]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          TailwindCSS
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <NodeIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#339933] dark:hover:fill-[#339933]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          NodeJS
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <ExpressIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          ExpressJS
        </p>
      </div>
      <div className="mx-auto flex flex-col items-center space-y-2">
        <FigmaIcon className="w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 dark:fill-title-white hover:fill-[#F24E1E] dark:hover:fill-[#F24E1E]" />
        <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
          Figma
        </p>
      </div>
    </div>
  );
}
