import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SocialIcons } from "@/types/social";
import { FaTiktok, FaYoutube } from "react-icons/fa";

export const navLinks = [
  {
    id: 1,
    name: "Business",
    to: "/waitlist",
  },
  {
    id: 2,
    name: "Product",
    to: "/product",
  },

  {
    id: 3,
    name: "Company",
    to: "/company",
  },
  {
    id: 4,
    name: "Developer",
    to: "/developer",
  },
];

export const footerLinks = [
  {
    id: 1,
    name: "PRODUCTS",
    sublinks: [
      {
        name: "Personal",
        to: "/personal",
      },
      {
        name: "Business",
        to: "/business",
      },
      {
        name: "Cards",
        to: "/cards",
      },
      {
        name: "Developers",
        to: "/developer",
      },
    ],
  },

  {
    id: 2,
    name: "SOLUTIONS",
    sublinks: [
      {
        name: "Send Money",
        to: "/send-money",
      },
      {
        name: "Receive Money",
        to: "/receive-money",
      },
      {
        name: "Buy and Sell",
        to: "/buy-and-sell",
      },
    ],
  },

  {
    id: 3,
    name: "COMPANY",
    sublinks: [
      {
        name: "About",
        to: "/about",
      },
            {
        name: "Security",
        to: "/security",
      },
            {
        name: "Help Center",
        to: "/help-center",
      },
      {
        name: "Career",
        to: "/career",
      },
    ],
  },
];

export const socialIcons: SocialIcons[] = [
  {
    name: "facebook",
    href: "https://www.facebook.com/share/1Gxbxj5D4d/?mibextid=wwXIfr",
    icons: FaFacebookF,
  },

  {
    name: "twitter",
    href: "https://x.com/clickandswap_?s=11",
    icons: FaTwitter,
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/clickandswap_?stkn=MWJsM2wxZjhqY3V4aA%3D%3D&utm_source=qr",
    icons: AiFillInstagram,
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/click-and-swap/",
    icons: FaLinkedin,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@clickandswap?si=wA_mTUauJuq1tb0-",
    icons: FaYoutube,
  },
  {
    name: "Tik Tok",
    href: "https://www.tiktok.com/@clickandswap?_r=1&_t=ZT-99c39wxumFy",
    icons: FaTiktok,
  }
];
