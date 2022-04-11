import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as HiIcons from "react-icons/hi";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

export const sideBarConstants = [
  {
    displayName: "Dashboard",
    link: "/mail",
    icon: <MdIcons.MdSpaceDashboard className="icon" />,
  },
  {
    displayName: "Layouts",
    link: "/mail",
    icon: <IoIcons.IoDiamondSharp className="icon" />,
  },
  {
    displayName: "MailBox",
    link: "/mail",
    icon: <HiIcons.HiMail className="icon" />,
  },
  {
    displayName: "Metrics",
    link: "/mail",
    icon: <SiIcons.SiBaremetrics className="icon" />,
  },
  {
    displayName: "Games",
    link: "/game",
    icon: <FaIcons.FaGamepad className="icon" />,
  },
  {
    displayName: "Widgets",
    link: "/mail",
    icon: <FaIcons.FaFlask className="icon" />,
  },
];

export const userDetails = {
  name: "David Williams",
  title: "Art Director",
};
