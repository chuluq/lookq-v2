import Link from "next/link";
import GithubIcon from "constants/icons/github";
import TwitterIcon from "constants/icons/twitter";
import InstagramIcon from "constants/icons/instagram";
import LinkedInIcon from "constants/icons/linkedin";

export default function Footer() {
  return (
    <div className="mt-32 py-8 flex flex-col items-center space-y-4 lg:space-y-0 w-full border-t border-line">
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
          <a
            href="https://github.com/chuluq/"
            className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer"
          >
            <GithubIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#181717] dark:hover:fill-body-dark transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
            <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
              Github
            </p>
          </a>
          <a className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer">
            <TwitterIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#1DA1F2] dark:hover:fill-[#1DA1F2] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
            <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
              Twitter
            </p>
          </a>
          <a className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer">
            <InstagramIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#E4405F] dark:hover:fill-[#E4405F] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
            <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
              Instagram
            </p>
          </a>
          <a className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer">
            <LinkedInIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#0A66C2] dark:hover:fill-[#0A66C2] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
            <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
              LinkedIn
            </p>
          </a>
        </div>
      </div>
      <div className="lg:pt-16">
        <p className="font-body font-normal text-base leading-6 text-title dark:text-title-white">
          &#169; Developed by Chaerul Chuluq
        </p>
      </div>
    </div>
  );
}
