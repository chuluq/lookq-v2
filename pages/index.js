import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Card from "@/components/Card";
import { projects } from "@/data/projects";
import designer from "@/assets/images/designer.svg";

export default function Home() {
  const arr = projects.slice(1, 3);

  return (
    <Layout>
      <SEO
        title="Home"
        description="Welcome to lookq portfolio, enjoy surfing."
      />

      {/* Hero */}
      <div className="w-full h-full xl:w-[80vw] xl:mb-16 mx-auto md:px-10 flex flex-row items-center justify-between">
        <div className="flex flex-col xl:grid px-4 sm:px-8 md:px-12 lg:px-16 w-full">
          <div className="mb-16 lg:mb-24 flex flex-col space-y-2">
            <h1 className="font-title font-bold text-[32px] lg:text-[56px] leading-[45px] text-title dark:text-title-white">
              Hi, I’m Chuluq.
            </h1>
            <p className="font-body font-normal text-lg leading-6 text-body dark:text-[#f4f4f4]">
              Welcome to my corner of the internet, where you can find my works,
              thoughts, favorite hobbies and other random things.
            </p>
          </div>
          <div className="mb-8 flex flex-col space-y-2">
            <h3 className="font-title font-bold text-xl leading-[30px] lg:leading-7 text-title dark:text-title-white">
              Ok, but who are you?
            </h3>
            <div className="space-y-8">
              <p className="font-body font-medium text-xl leading-[30px] text-body dark:text-body-dark">
                I’m a curiosity-driven, design-focused developer, building rich,
                user-centric, inclusive experiences on the web.
              </p>
              <p className="font-body font-medium text-xl leading-[30px] text-body dark:text-body-dark">
                Feel free to have a look around, and learn more about myself and
                what I like to work on.
              </p>
            </div>
          </div>
          <div>
            <a
              href="mailto:choirulchuluq10@gmail.com"
              className="bg-white dark:bg-transparent hover:bg-sky-600 dark:hover:bg-sky-600 py-3 px-6 font-title font-bold text-lg leading-[22px] text-sky-600 hover:text-title-white dark:hover:text-title rounded border border-sky-600 uppercase"
            >
              get in touch
            </a>
          </div>
        </div>
        <div className="hidden xl:inline-block">
          <Image src={designer} alt="designer" />
        </div>
      </div>

      <div className="mx-auto md:mx-32">
        {/* Featured Projects */}
        <div className="w-full mt-40 mx-auto px-4 flex flex-col items-center">
          <div>
            <h1 className="font-title font-bold text-2xl leading-9 text-title dark:text-title-white text-center">
              Featured Projects
            </h1>
          </div>
          <div className="mt-16 grid grid-cols-1 xl:grid-cols-2 gap-16">
            {arr?.map((item) => {
              const { id, title, details, siteUrl, sourceUrl, tools } = item;

              return (
                <Card
                  key={id}
                  title={title}
                  details={details}
                  siteUrl={siteUrl}
                  sourceUrl={sourceUrl}
                  tools={tools}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/projects">
            <a className="py-2 px-4 font-title font-bold text-lg lg:text-xl leading-[22px] bg-sky-600 hover:bg-sky-700 text-title-white capitalize rounded cursor-pointer">
              see all projects
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
