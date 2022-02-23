import GmailIcon from "@/icons/gmail";
import WhatsAppIcon from "@/icons/whatsapp";
import GithubIcon from "@/icons/github";

const socialLinks = [
  {
    id: 1,
    name: "Gmail",
    url: "mailto:choirulchuluq10@gmail.com",
    icon: (
      <GmailIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#EA4335] dark:hover:fill-[#EA4335] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
    ),
  },
  {
    id: 2,
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=+6287894710683",
    icon: (
      <WhatsAppIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#25D366] dark:hover:fill-[#25D366] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
    ),
  },
  {
    id: 3,
    name: "Github",
    url: "https://github.com/chuluq/",
    icon: (
      <GithubIcon className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#181717] dark:hover:fill-body-dark transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1" />
    ),
  },
];

export default socialLinks;
