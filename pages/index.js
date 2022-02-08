export default function Home() {
  return (
    <div className="bg-white w-full h-full">
      <header className="pt-[60.5px] pr-[119px] ml-[200px]">
        <nav className="flex items-center justify-end space-x-[66px]">
          <a href="#" className="font-medium tracking-[6.33px] uppercase">
            work
          </a>
          <a href="#" className="font-medium tracking-[6.33px] uppercase">
            projects
          </a>
          <a href="#" className="font-medium tracking-[6.33px] uppercase">
            about
          </a>
        </nav>

        <div className="flex items-center justify-between">
          <div className="flex flex-col w-full">
            <h1 className="text-[100px] font-bold text-left text-[#999] capitalize">
              Hello
            </h1>
            <h1 className="text-[100px] font-bold text-left text-[#999] capitalize">
              I&apos;m Chaerul
            </h1>
            <h1 className="text-[100px] font-bold text-left text-[#999] capitalize">
              Chuluq
            </h1>
            <div className="pt-[42px]">
              <button className="bg-[#ffe8e8] text-2xl font-medium tracking-[8.3px] text-left text-black opacity-60 uppercase p-10">
                download cv
              </button>
            </div>
          </div>
          <div className="w-px h-[238px] bg-[#d8d8d8] mr-[73px]"></div>
          <div className="w-full">
            <p className="text-lg leading-loose tracking-[0.39px] text-[#6d6d6d] text-left">
              A Sydney based frontend designer, working and living in Australia.
              I love to work on anything code, from designing simple HTML pages
              to solving complex problems. I love to illustrate as well. Recetly
              I won the award for best portfolio. Download the CV to know more
              about my background.
            </p>
            <div className="flex items-center pt-[70px] space-x-[46px]">
              <p className="font-medium tracking-[6.33px] text-left text-black uppercase">
                TW.
              </p>
              <p className="font-medium tracking-[6.33px] text-left text-black uppercase">
                IN.
              </p>
              <p className="font-medium tracking-[6.33px] text-left text-black uppercase">
                FB.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
