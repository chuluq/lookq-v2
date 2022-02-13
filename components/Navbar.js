import { useState } from "react";

export default function Navbar() {
  const [showLink, setShowLink] = useState(false);

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
                  className="h-6 w-6 transition-all origin-center rotate-0"
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
                  className="h-6 w-6 transition-all origin-center rotate-180"
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

          <h1 className="font-title font-bold text-xl lg:text-5xl text-title">
            Logo
          </h1>

          <div className="flex flex-row items-center space-x-8">
            <div className="hidden lg:flex lg:flex-row lg:items-center lg:space-x-4">
              <a className="font-body font-normal text-base leading-6 text-title capitalize">
                home
              </a>
              <a className="font-body font-normal text-base leading-6 text-title capitalize">
                about
              </a>
              <a className="font-body font-normal text-base leading-6 text-title capitalize">
                projects
              </a>
              <a className="font-body font-normal text-base leading-6 text-title uppercase">
                cv
              </a>
            </div>

            {/* Theme */}
            <div className="bg-[#F4F4F4] w-10 h-10 rounded p-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            !showLink ? "hidden" : "flex flex-col"
          } w-full my-4 lg:hidden`}
        >
          <a className="py-4 font-body font-normal text-base leading-6 text-title hover:text-sky-600 capitalize cursor-pointer border-b hover:underline hover:underline-offset-8 transition-all ease-in-out hover:translate-x-2 hover:duration-150">
            home
          </a>
          <a className="py-4 font-body font-normal text-base leading-6 text-title hover:text-sky-600 capitalize cursor-pointer border-b hover:underline hover:underline-offset-8 transition-all ease-in-out hover:translate-x-2 hover:duration-150">
            about
          </a>
          <a className="py-4 font-body font-normal text-base leading-6 text-title hover:text-sky-600 capitalize cursor-pointer border-b hover:underline hover:underline-offset-8 transition-all ease-in-out hover:translate-x-2 hover:duration-150">
            projects
          </a>
          <a className="py-4 font-body font-normal text-base leading-6 text-title hover:text-sky-600 uppercase cursor-pointer border-b hover:underline hover:underline-offset-8 transition-all ease-in-out hover:translate-x-2 hover:duration-150">
            cv
          </a>
        </div>
      </div>
    </nav>
  );
}
