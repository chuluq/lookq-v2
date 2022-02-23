import GmailIcon from "@/icons/gmail";
import GithubIcon from "constants/icons/github";
import WhatsAppIcon from "@/icons/whatsapp";

export default function SocialLinks() {
  return (
    <div className="flex flex-row lg:flex-col items-center lg:items-start">
      <a
        href="mailto:choirulchuluq10@gmail.com"
        className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer"
      >
        <GmailIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#EA4335] dark:hover:fill-[#EA4335] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
        <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
          Gmail
        </p>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=+6287894710683"
        className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer"
      >
        <WhatsAppIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#25D366] dark:hover:fill-[#25D366] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
        <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
          WhatsApp
        </p>
      </a>
      <a
        href="https://github.com/chuluq/"
        className="p-2 flex flex-row lg:items-center lg:space-x-1 cursor-pointer"
      >
        <GithubIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#181717] dark:hover:fill-body-dark transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
        <p className="hidden lg:block font-body text-body dark:text-title-white hover:text-title dark:hover:text-body-dark">
          Github
        </p>
      </a>
    </div>
  );
}
