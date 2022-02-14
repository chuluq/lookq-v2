import Layout from "@/components/Layout";
import Tools from "@/components/Tools";

export default function About() {
  return (
    <Layout>
      {/* About */}
      <div className="px-8 lg:mx-auto md:px-16 lg:px-32 w-full xl:w-[80vw] flex flex-col">
        <div className="mb-24">
          <h1 className="font-title font-bold text-[32px] lg:text-[56px] leading-[45px] text-title">
            About
          </h1>
        </div>

        <div className="flex flex-col space-y-24">
          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="font-title font-bold text-xl leading-[30px] text-title ">
                Background
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="font-body font-medium text-base leading-6 text-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                atque. Saepe quam possimus consequatur maiores ab minima quo
                exercitationem corporis.
              </p>
              <p className="font-body font-medium text-base leading-6 text-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                atque. Saepe quam possimus consequatur maiores ab minima quo
                exercitationem corporis.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="font-title font-bold text-xl leading-[30px] text-title">
                What I&#8217;ve been up to
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="font-body font-medium text-base leading-6 text-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                atque. Saepe quam possimus consequatur maiores ab minima quo
                exercitationem corporis.
              </p>
              <p className="font-body font-medium text-base leading-6 text-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                atque. Saepe quam possimus consequatur maiores ab minima quo
                exercitationem corporis.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-2">
              <h3 className="font-title font-bold text-xl leading-[30px] text-title">
                Interests
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <p className="font-body font-medium text-base leading-6 text-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                atque. Saepe quam possimus consequatur maiores ab minima quo
                exercitationem corporis.
              </p>
              <p className="font-body font-medium text-base leading-6 text-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
                atque. Saepe quam possimus consequatur maiores ab minima quo
                exercitationem corporis.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-40 md:px-8 flex flex-col items-center">
          <div className="mb-16 w-full">
            <h3 className="font-title font-bold text-xl text-center leading-[30px] text-title capitalize">
              tools & technologies
            </h3>
          </div>
          <div className="mb-32">
            <p className="font-body font-medium text-base leading-6 text-body text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              veniam ratione rem recusandae? Pariatur doloribus doloremque
              dolorum beatae! Suscipit doloribus quis quidem iusto qui molestias
              reprehenderit nisi dicta numquam reiciendis?
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <Tools />
          </div>
        </div>
      </div>
    </Layout>
  );
}
