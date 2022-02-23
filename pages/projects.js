import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Card from "@/components/Card";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" description="Some projects I've been worked on." />

      <div className="px-4 sm:px-8 mx-auto w-full md:w-8/12 flex flex-col items-center">
        <div className="mb-16 flex flex-col text-center">
          <h1 className="font-title font-bold text-[32px] leading-[45px] text-title dark:text-title-white capitalize">
            Projects
          </h1>
          <p className="font-body font-normal text-lg left-6 text-body dark:text-body-dark">
            Here are some projects that I&apos;ve been worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {projects?.map((item) => {
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
    </Layout>
  );
}
