export default function Hero() {
  return (
    <div className="w-full xl:w-[80vw] flex flex-row items-center justify-between">
      <div className="flex flex-col px-4 md:px-8 lg:px-16 w-full">
        <div className="mb-16 lg:mb-24 flex flex-col space-y-2">
          <h1 className="font-title font-bold text-[32px] lg:text-[56px] leading-[45px] text-title">
            Hi, I&#8217;m Chuluq.
          </h1>
          <p className="font-body font-normal text-lg leading-6 text-body">
            Welcome to my corner of the internet, where you can find my works,
            thoughts, favorite hobbies and other random things.
          </p>
        </div>
        <div className="mb-8 flex flex-col space-y-2">
          <h3 className="font-title font-bold text-xl leading-[30px] lg:leading-7 text-title">
            Ok, but who are you?
          </h3>
          <p className="font-body font-medium text-xl leading-[30px] text-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            praesentium quis, alias eos laborum voluptatibus.
          </p>
        </div>
        <div>
          <button className="bg-white py-3 px-6 font-title font-bold text-lg leading-[22px] text-sky-600 rounded border border-sky-600 uppercase">
            get in touch
          </button>
        </div>
      </div>
      <div className="hidden xl:inline-block">
        <h1>Image</h1>
      </div>
    </div>
  );
}
