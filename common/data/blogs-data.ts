import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineShield } from "react-icons/md";
import { LuCoins } from "react-icons/lu";

export const blogDatas = [
  {
    id: 1,
    title: "Your first digital-asset deposit: what to check",
    type: "digital-assets",
    duration: 5,
    img: "/blog/articles_pic_1.webp",
  },
  {
    id: 2,
    title: "A simple guide to keeping your account secure",
    type: "security",
    duration: 4,
    img: "/blog/articles_pic_2.webp",
  },
  {
    id: 3,
    title: "Payment pending? Here’s where to start",
    type: "transfer-guides",
    duration: 3,
    img: "/blog/articles_pic_3.webp",
  },
  {
    id: 1,
    title: "Payment pending? Here’s where to start",
    type: "digital-assets",
    duration: 3,
    img: "/blog/articles_pic_3.webp",
  },
];


export const categories = [
    {
        id: 1,
        icon: IoPaperPlaneOutline,
        title: "Transfer guides",
        description: "Tips for sending money, tracking payments, and understanding delivery times.",
        no_of_articles: 12
    },

    {
        id: 2,
        icon: MdOutlineShield,
        title: "Security",
        description: "Advice on passwords, verification, suspicious activity, and account protection.",
        no_of_articles: 9
    },

    {
        id: 3,
        icon: LuCoins,
        title: "Digital Assets",
        description: "Insights on deposits, networks, and the details to verify before sending.",
        no_of_articles: 8
    },

]
