import ReactIcon from "@/icons/react";
import GatsbyIcon from "@/icons/gatsby";
import StrapiIcon from "@/icons/strapi";
import MarkdownIcon from "@/icons/markdown";

export default function Card() {
  return (
    <div className="w-full h-auto shadow space-y-8">
      <div className="flex items-center justify-center bg-title h-32">
        <h3 className=" font-title font-bold text-xl leading-[30px] text-title-white text-center capitalize">
          Portfolio v1
        </h3>
      </div>
      <div className="px-8">
        <h3 className=" font-title font-bold text-xl leading-[30px] text-title capitalize">
          Portfolio v1
        </h3>
      </div>
      <div className="px-8">
        <p className="font-body font-medium text-base leading-6 text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          molestias nam ea neque ipsum deleniti, cupiditate ex odio cumque quas?
        </p>
      </div>

      {/* Icon Tools Used */}
      <div className="px-8 flex flex-row">
        <div className="p-2">
          <ReactIcon className="w-6 h-6 hover:fill-[#61DAFB]" />
        </div>
        <div className="p-2">
          <GatsbyIcon className="w-6 h-6 hover:fill-[#663399]" />
        </div>
        <div className="p-2">
          <StrapiIcon className="w-6 h-6 hover:fill-[#2F2E8B]" />
        </div>
        <div className="p-2">
          <MarkdownIcon className="w-6 h-6" />
        </div>
      </div>

      <div className="px-8 pb-8 flex flex-row items-center space-x-2">
        <button className="py-2 px-4 rounded border border-title font-title font-bold text-base leading-[19px] text-title uppercase bg-white">
          visit site
        </button>
        <button className="py-2 px-4 rounded border border-title font-title font-bold text-base leading-[19px] text-title-white uppercase bg-title">
          view code
        </button>
      </div>
    </div>
  );
}
