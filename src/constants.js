import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io5";
import * as HiIcons from "react-icons/hi";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

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

export const emailNavbarItems = [
  {
    displayName: "Inbox",
    icon: <BsIcons.BsInbox className="mini-icon" />,
  },
  {
    displayName: "Sent",
    icon: <AiIcons.AiOutlineSend className="mini-icon" />,
  },
  {
    displayName: "Starred",
    icon: <AiIcons.AiOutlineStar className="mini-icon" />,
  },
  {
    displayName: "Drafts",
    icon: <RiIcons.RiDraftLine className="mini-icon" />,
  },
  {
    displayName: "Trash",
    icon: <RiIcons.RiDeleteBin6Line className="mini-icon" />,
  },
];

export const CategoryItems = [
  {
    displayName: "Work",
    className: "color-special-green",
  },
  {
    displayName: "Clients",
    className: "color-special-red",
  },
  {
    displayName: "Social",
    className: "color-special-blue",
  },
  {
    displayName: "Advertising",
    className: "color-special-yellow",
  },
];
