export default function Hero() {
  return (
    <div className="flex flex-col px-4 w-full">
      {/* Navbar */}
      <div className="py-4 mb-[72px] flex items-center justify-between">
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
        <h1 className="font-title font-bold text-xl text-title">Logo</h1>
        <div className="bg-gray-100 rounded p-1">
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

      <div className="mb-16 flex flex-col space-y-2">
        <h1 className="font-title font-bold text-[32px] leading-[45px] text-title">
          Hi, I&#8217;m Chuluq.
        </h1>
        <p className="font-body font-normal text-lg leading-6 text-body">
          Welcome to my corner of the internet, where you can find my works,
          thoughts, hobbies and other random things.
        </p>
      </div>
      <div className="mb-8 flex flex-col space-y-2">
        <h3 className="font-title font-bold text-xl leading-[30px] text-title">
          Ok, but who are you?
        </h3>
        <p className="font-body font-medium text-xl leading-[30px] text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          praesentium quis, alias eos laborum voluptatibus.
        </p>
      </div>
      <div>
        <button className="bg-white py-3 px-6 font-title font-bold text-lg leading-[22px] text-[#805ad5] rounded border border-[#805ad5] uppercase">
          get in touch
        </button>
      </div>
    </div>
  );
}
