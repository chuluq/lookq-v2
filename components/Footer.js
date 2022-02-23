import Link from "next/link";
import GmailIcon from "@/icons/gmail";
import GithubIcon from "constants/icons/github";
import WhatsAppIcon from "@/icons/whatsapp";
import TwitterIcon from "constants/icons/twitter";
import InstagramIcon from "constants/icons/instagram";
import LinkedInIcon from "constants/icons/linkedin";
import socialLinks from "@/data/socialLinks";

export default function Footer() {
  return (
    <footer className="mt-32 py-8 flex flex-col items-center space-y-4 lg:space-y-0 w-full border-t border-line">
      <div className="flex flex-row items-start lg:space-x-64">
        <div className="hidden lg:flex lg:flex-col lg:space-y-2">
          <Link href="/">
            <a className="font-body font-normal text-base leading-6 text-body dark:text-title-white hover:text-title dark:hover:text-body-dark capitalize cursor-pointer">
              home
            </a>
          </Link>
          <Link href="/about">
            <a className="font-body font-normal text-base leading-6 text-body dark:text-title-white hover:text-title dark:hover:text-body-dark capitalize cursor-pointer">
              about
            </a>
          </Link>
          <Link href="/projects">
            <a className="font-body font-normal text-base leading-6 text-body dark:text-title-white hover:text-title dark:hover:text-body-dark capitalize cursor-pointer">
              projects
            </a>
          </Link>
          <a
            href="/cv_chuluq.pdf"
            download="cv_chuluq"
            className="font-body font-normal text-base leading-6 text-body dark:text-title-white hover:text-title dark:hover:text-body-dark uppercase cursor-pointer"
          >
            cv
          </a>
        </div>
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
      </div>
      <div className="lg:pt-16">
        <p className="font-body font-normal text-base leading-6 text-title dark:text-title-white">
          &#169; Developed by Chaerul Chuluq
        </p>
      </div>
    </footer>
  );
}
