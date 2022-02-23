import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import notFound from "@/assets/images/404.svg";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly px-8 mx-auto">
        <div className="mb-16 lg:mb-24 flex flex-col space-y-4 text-center md:text-left">
          <h1 className="font-title font-bold text-[32px] lg:text-[56px] leading-[45px] text-title dark:text-title-white">
            Whooops!
          </h1>
          <p className="font-body font-normal text-lg leading-6 text-body dark:text-[#f4f4f4]">
            Sorry the page you are looking for doesn’t exists
          </p>
          <div className="pt-4">
            <Link href="/">
              <a className="bg-white dark:bg-transparent hover:bg-sky-600 dark:hover:bg-sky-600 py-3 px-6 font-title font-bold text-lg leading-[22px] text-sky-600 hover:text-title-white dark:hover:text-title rounded border border-sky-600 uppercase">
                Go Home
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Image src={notFound} alt="not-found" width={823} height={617.25} />
        </div>
      </div>
    </Layout>
  );
}
