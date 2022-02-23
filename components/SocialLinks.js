import { socialLinks } from "@/data/socialLinks";

export default function SocialLinks() {
  return (
    <div className="flex flex-row lg:flex-col items-center lg:items-start">
      {socialLinks?.map((item) => {
        return (
          <a
            key={item.id}
            href={item.url}
            className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer"
          >
            {item.icon}
            <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
              {item.name}
            </p>
          </a>
        );
      })}
    </div>
  );
}
