import { IMenu } from "../../interfaces";
import MessageIcon from "@/components/icons/message";

import Dashboard from "@/components/icons/dashboard";
import { PersonIcon } from "@radix-ui/react-icons";

export const CollectionMainMenu: IMenu[] = [
  {
    label: "Tablero",
    href: "/",
    icon: <Dashboard />,
  },
  {
    label: "Miembros",
    href: "/correo",
    icon: <PersonIcon />,
  },

  {
    label: "Visitantes",
    href: "/sms",
    icon: <PersonIcon />,
  },
];
