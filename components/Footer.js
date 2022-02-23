import Link from "next/link";
import SocialLinks from "./SocialLinks";
import links from "@/data/links";

export default function Footer() {
  return (
    <footer className="mt-32 py-8 flex flex-col items-center space-y-4 lg:space-y-0 w-full border-t border-line">
      <div className="flex flex-row items-start lg:space-x-64">
        <div className="hidden lg:flex lg:flex-col lg:space-y-2">
          {links?.map((item) => {
            return (
              <Link key={item.id} href={item.url}>
                <a className="font-body font-normal text-base leading-6 text-body dark:text-title-white hover:text-title dark:hover:text-body-dark capitalize cursor-pointer">
                  {item.name}
                </a>
              </Link>
            );
          })}
          <a
            href="/cv_chuluq.pdf"
            download="cv_chuluq"
            className="font-body font-normal text-base leading-6 text-body dark:text-title-white hover:text-title dark:hover:text-body-dark uppercase cursor-pointer"
          >
            cv
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="lg:pt-16">
        <p className="font-body font-normal text-base leading-6 text-title dark:text-title-white">
          &#169; Developed by Chaerul Chuluq
        </p>
      </div>
    </footer>
  );
}
