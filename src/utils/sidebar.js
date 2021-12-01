import Generic from "../pages/Generic";
import Maxsulotlar from "../components/Maxsulotlar";
import Buyurtmalar from "../components/Buyurtmalar";
import Kategoriyalar from "../components/Kategoriyalar";

import { ReactComponent as check } from "../assets/icons/check-circle.svg";
import { ReactComponent as archive } from "../assets/icons/archive.svg";
import { ReactComponent as layers } from "../assets/icons/layers.svg";
import { ReactComponent as map } from "../assets/icons/map-pin.svg";
import { ReactComponent as users } from "../assets/icons/users.svg";
import { ReactComponent as bar_chart } from "../assets/icons/bar-chart-2.svg";
import { ReactComponent as settings } from "../assets/icons/settings copy 2.svg";

export const sidebar = [
  {
    id: 1,
    icon: check,
    title: "Buyurtmalar",
    pathname: "/Buyurtmalar",
    component: Buyurtmalar,
    child: [],
    hidden: false,
  },
  {
    id: 2,
    icon: archive,
    title: "Maxsulotlar",
    pathname: "/Maxsulotlar",
    component: Maxsulotlar,
    child: [],
    hidden: false,
  },
  {
    id: 3,
    icon: layers,
    title: "Kategoriyalar",
    pathname: "/Kategoriyalar",
    component: Kategoriyalar,
    child: [],
    hidden: false,
  },
  {
    id: 4,
    icon: map,
    title: "Filiallar",
    pathname: "/Filiallar",
    component: Generic,
    child: [],
    hidden: false,
  },
  {
    id: 5,
    icon: users,
    title: "Mijozlar",
    pathname: "/Mijozlar",
    component: Generic,
    child: [],
    hidden: false,
  },
  {
    id: 6,
    icon: bar_chart,
    title: "Xisobot",
    pathname: "/Xisobot",
    component: Generic,
    child: [],
    hidden: false,
  },
  {
    id: 7,
    icon: settings,
    title: "Hodimlar",
    pathname: "/Hodimlar",
    component: Generic,
    child: [],
    hidden: false,
  },
];
