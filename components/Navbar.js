import { useState, useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";
import Link from "next/link";
import links from "@/data/links";

export default function Navbar() {
  const [showLink, setShowLink] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleLink = () => {
    setShowLink(!showLink);
  };

  return (
    <nav className="mb-[72px] lg:mb-24">
      <div className="mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleLink}
              className="transition-all duration-500 ease-in-out rotate-180"
            >
              {!showLink ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all origin-center rotate-0 dark:text-title-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all origin-center rotate-180 dark:text-title-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <Link href="/">
            <a className="font-decorative font-bold text-2xl lg:text-4xl text-title dark:text-title-white uppercase">
              lookq
            </a>
          </Link>

          <div className="flex flex-row items-center space-x-8">
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-4">
              {links?.map((item) => {
                return (
                  <Link key={item.id} href={item.url}>
                    <a className="font-body font-normal hover:font-medium text-base leading-6 text-title dark:text-title-white hover:text-sky-600 dark:hover:text-sky-600 capitalize cursor-pointer hover:underline hover:underline-offset-8 decoration-sky-600 transition ease-in-out duration-300 hover:-translate-y-1 hover:duration-300 motion-safe:transition-none motion-reduce:transition-none">
                      {item.name}
                    </a>
                  </Link>
                );
              })}
              <a
                href="/cv_chuluq.pdf"
                download="cv_chuluq"
                className="font-body font-normal hover:font-medium text-base leading-6 text-title dark:text-title-white hover:text-sky-600 dark:hover:text-sky-600 uppercase cursor-pointer hover:underline hover:underline-offset-8 decoration-sky-600 transition ease-in-out duration-300 hover:-translate-y-1 hover:duration-300 motion-safe:transition-none motion-reduce:transition-none"
              >
                cv
              </a>
            </div>

            {/* Theme */}
            <div
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-[#F4F4F4] dark:bg-[#404040] w-10 h-10 rounded p-1 flex items-center justify-center cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-title-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-title-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            !showLink ? "hidden" : "flex flex-col"
          } w-full my-4 lg:hidden`}
        >
          {links?.map((item) => {
            return (
              <Link key={item.id} href={item.url}>
                <a
                  onClick={toggleLink}
                  className="py-4 font-body font-normal hover:font-medium text-base leading-6 text-title dark:text-title-white hover:text-sky-600 dark:hover:text-sky-600 capitalize cursor-pointer border-b hover:underline hover:underline-offset-8 transition-all ease-in-out hover:translate-x-2 duration-150 hover:duration-150 motion-safe:transition-none motion-reduce:transition-none"
                >
                  {item.name}
                </a>
              </Link>
            );
          })}
          <a
            href="/cv_chuluq.pdf"
            download="cv_chuluq"
            onClick={toggleLink}
            className="py-4 font-body font-normal hover:font-medium text-base leading-6 text-title dark:text-title-white hover:text-sky-600 dark:hover:text-sky-600 uppercase cursor-pointer border-b hover:underline hover:underline-offset-8 transition-all ease-in-out hover:translate-x-2 duration-150 hover:duration-150 motion-safe:transition-none motion-reduce:transition-none"
          >
            cv
          </a>
        </div>
      </div>
    </nav>
  );
}
