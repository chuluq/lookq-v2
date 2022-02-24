import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-16">
      {tools?.map((item) => {
        return (
          <div
            key={item.id}
            className="mx-auto flex flex-col items-center space-y-2"
          >
            {item.icon}
            <p className="font-body font-normal text-base leading-4 text-title dark:text-title-white text-center">
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
