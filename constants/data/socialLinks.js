import Icon from "@/components/Icon";
import { GMAIL, WHATSAPP, GITHUB } from "@/data/icons";

export const socialLinks = [
  {
    id: 1,
    name: GMAIL,
    url: "mailto:choirulchuluq10@gmail.com",
    icon: (
      <Icon
        name={GMAIL}
        className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#EA4335] dark:hover:fill-[#EA4335] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1"
      />
    ),
  },
  {
    id: 2,
    name: WHATSAPP,
    url: "https://api.whatsapp.com/send?phone=+6287894710683",
    icon: (
      <Icon
        name={WHATSAPP}
        className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#25D366] dark:hover:fill-[#25D366] transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1"
      />
    ),
  },
  {
    id: 3,
    name: GITHUB,
    url: "https://github.com/chuluq/",
    icon: (
      <Icon
        name={GITHUB}
        className="w-6 lg:w-4 h-6 lg:h-4 fill-[#595959] dark:fill-title-white hover:fill-[#181717] dark:hover:fill-body-dark transition-all ease-out duration-500 hover:duration-500 hover:-translate-y-1"
      />
    ),
  },
];
