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
          <a className="py-2 px-4 font-title font-bold text-lg leading-[22px] bg-sky-600 text-title-white capitalize rounded">
            see all projects
          </a>
        </div>
      </div>
    </Layout>
  );
}
