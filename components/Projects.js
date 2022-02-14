import Card from "@/components/Card";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <div className="w-full mt-40 mx-auto px-4 flex flex-col items-center">
      <div>
        <h1 className="font-title font-bold text-2xl leading-9 text-title text-center">
          Featured Projects
        </h1>
      </div>
      <div className="mt-16 xl:px-16 flex flex-col xl:flex-row items-center xl:items-baseline xl:space-x-4 space-y-8 xl:space-y-0">
        {projects?.slice(1, 3).map((item) => {
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
  );
}
