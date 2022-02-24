import Icon from "@/components/Icon";
import { SM, BASE, LG, XL, XXL } from "@/data/icons";
import { GMAIL, WHATSAPP, GITHUB } from "@/data/icons";

export const socialLinks = [
  {
    id: 1,
    name: GMAIL,
    url: "mailto:choirulchuluq10@gmail.com",
    icon: <Icon name={GMAIL} className="" />,
  },
  {
    id: 2,
    name: WHATSAPP,
    url: "https://api.whatsapp.com/send?phone=+6287894710683",
    icon: <Icon name={WHATSAPP} className="w-6 lg:w-4 h-6 lg:h-4" />,
  },
  {
    id: 3,
    name: GITHUB,
    url: "https://github.com/chuluq/",
    icon: <Icon name={GITHUB} className="w-6 lg:w-4 h-6 lg:h-4" />,
  },
];
