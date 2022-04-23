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
  email: "sample@sam.com",
  mobile: "0000000000",
  usersList: ["user1", "user2", "user3"],
};

export const actionDetails = {
  page: "Inbox",
  mailItemsArray: [
    {
      id: 1,
      from: "sample1@sam.com",
      sub: "It is a long fact blished fact that a reader will be distracted by the readable content of a p",
      body: "established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      isRead: true,
      isStarred: false,
      category: null,
    },
    {
      id: 2,
      from: "sample2@sam.com",
      sub: "There are many variations ",
      body: "of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      isRead: false,
      isStarred: false,
      category: null,
    },
    {
      id: 3,
      from: "sample3@sam.com",
      sub: "Lorem Ipsum ",
      body: " It has been the industry's standard dummy text ever since the 1500s",
      isRead: false,
      isStarred: true,
      category: null,
    },
    {
      id: 4,
      from: "sample4@sam.com",
      sub: " essentially unchanged",
      body: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining",
      isRead: true,
      isStarred: true,
      category: "Clients",
    },
    {
      id: 5,
      from: "sample5@sam.com",
      sub: "model text",
      body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default ",
      isRead: false,
      isStarred: false,
      category: null,
    },
    {
      id: 6,
      from: "sample6@sam.com",
      sub: "Richard McClintock",
      body: "He is a Latin professor at Hampden-Sydney College in Virginia",
      isRead: true,
      isStarred: false,
      category: null,
    },
    {
      id: 7,
      from: "sample7@sam.com",
      sub: "as necessary",
      body: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks",
      isRead: false,
      isStarred: true,
      category: "Social",
    },
    {
      id: 8,
      from: "sample8@sam.com",
      sub: "for those interested",
      body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below",
      isRead: true,
      isStarred: true,
      category: "Advertising",
    },
    {
      id: 9,
      from: "sample9@sam.com",
      sub: "in the middle of text",
      body: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden",
      isRead: true,
      isStarred: false,
      category: null,
    },
    {
      id: 10,
      from: "sample10@sam.com",
      sub: "looking at its layout.",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looks",
      isRead: true,
      isStarred: false,
      category: null,
    },
    {
      id: 11,
      from: "sample11@sam.com",
      sub: "Lorem Ipsum",
      body: "has been the industry's standard dummy text ever since the 1500s",
      isRead: false,
      isStarred: true,
      category: "Work",
    },
    {
      id: 12,
      from: "sample12@sam.com",
      sub: "layout.",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
      isRead: true,
      isStarred: false,
      category: null,
    },
    {
      id: 13,
      from: "sample14@sam.com",
      sub: "Lorem Ipsum passages",
      body: "It was popularised in the 1960s with the release of Letraset sheets containing pasages",
      isRead: true,
      isStarred: false,
      category: "Clients",
    },
    {
      id: 14,
      from: "sample15@sam.com",
      sub: "Lorem Ipsum",
      body: "more recently with desktop publishing software like Aldus PageMaker including versions of it",
      isRead: true,
      isStarred: true,
      category: "Work",
    },
    {
      id: 15,
      from: "sample16@sam.com",
      sub: "word ",
      body: "looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the ",
      isRead: true,
      isStarred: true,
      category: null,
    },
    {
      id: 16,
      from: "sample17@sam.com",
      sub: "If you are goinpsum, you need to be sure",
      body: "looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the city",
      isRead: false,
      isStarred: true,
      category: "Social",
    },
  ],
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
