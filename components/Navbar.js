export default function Navbar() {
  return (
    <div className="p-4 mb-[72px] flex items-center justify-between">
      <div className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
  );
}
