import Image from "next/image";
import designer from "@/assets/images/designer.svg";

export default function Hero() {
  return (
    <div className="w-full h-full xl:w-[80vw] xl:mb-16 mx-auto md:px-10 flex flex-row items-center justify-between">
      <div className="flex flex-col xl:grid px-4 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="mb-16 lg:mb-24 flex flex-col space-y-2">
          <h1 className="font-title font-bold text-[32px] lg:text-[56px] leading-[45px] text-title">
            Hi, I’m Chuluq.
          </h1>
          <p className="font-body font-normal text-lg leading-6 text-body">
            Welcome to my corner of the internet, where you can find my works,
            thoughts, favorite hobbies and other random things.
          </p>
        </div>
        <div className="mb-8 flex flex-col space-y-2">
          <h3 className="font-title font-bold text-xl leading-[30px] lg:leading-7 text-title">
            Ok, but who are you?
          </h3>
          <div className="space-y-8">
            <p className="font-body font-medium text-xl leading-[30px] text-body">
              I’m a curiosity-driven, design-focused developer, building rich,
              user-centric, inclusive experiences on the web.
            </p>
            <p className="font-body font-medium text-xl leading-[30px] text-body">
              Feel free to have a look around, and learn more about myself and
              what I like to work on.
            </p>
          </div>
        </div>
        <div>
          <button className="bg-white hover:bg-sky-600 py-3 px-6 font-title font-bold text-lg leading-[22px] text-sky-600 hover:text-title-white rounded border border-sky-600 uppercase">
            get in touch
          </button>
        </div>
      </div>
      <div className="hidden xl:inline-block">
        <Image src={designer} alt="designer" />
      </div>
    </div>
  );
}
