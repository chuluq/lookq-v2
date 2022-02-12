import Card from "./Card";

export default function Projects() {
  return (
    <div className="mt-40 px-4 flex flex-col items-center">
      <div className="mb-10">
        <h1 className="font-title font-bold text-2xl leading-9 text-title text-center">
          Featured Projects
        </h1>
      </div>
      <div className="space-y-8">
        <Card />
        <Card />
      </div>
    </div>
  );
}
