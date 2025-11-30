import { FaSignOutAlt } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { LuFileLock } from "react-icons/lu";
import { MdKey } from "react-icons/md";

export const SidebarItems = [
  {
    name: "Vault",
    icon: <LuFileLock />,
    route: "/vault",
    roles: ["Admin", "User"],
  },
  {
    name: "Users",
    icon: <GoPeople />,
    route: "/users",
    roles: ["Admin"],
  },
  {
    name: "API Keys",
    icon: <MdKey />,
    route: "/api-keys",
    roles: ["Admin"],
  },
];
