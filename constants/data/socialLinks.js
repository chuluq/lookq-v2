import Icon from "@/components/Icon";
import { GMAIL, WHATSAPP, GITHUB } from "@/data/icons";

export const socialLinks = [
  {
    id: 1,
    name: GMAIL,
    url: "mailto:choirulchuluq10@gmail.com",
    icon: <Icon name={GMAIL} />,
  },
  {
    id: 2,
    name: WHATSAPP,
    url: "https://api.whatsapp.com/send?phone=+6287894710683",
    icon: <Icon name={WHATSAPP} />,
  },
  {
    id: 3,
    name: GITHUB,
    url: "https://github.com/chuluq/",
    icon: <Icon name={GITHUB} />,
  },
];
