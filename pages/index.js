import Link from "next/link";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className="mx-auto md:mx-32">
        <Projects />
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
