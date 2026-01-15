import {
  FaChartLine,
  FaHandshake,
  FaListAlt,
  FaUserGraduate,
} from "react-icons/fa";
import {
  LuBuilding,
  LuLock,
  LuShield,
  LuUserCog,
  LuUsers,
} from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

const SidebarItems = [
  {
    label: "Vault",
    parent: "vault",
    route: "/vault",
    permission: "VIEW-VAULT",
    icon: <LuLock />,
  },
  {
    label: "Team",
    parent: "team",
    route: "/team",
    permission: "VIEW-TEAM",
    icon: <LuLock />,
  },
];
export default SidebarItems;
