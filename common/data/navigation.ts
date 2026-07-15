import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { SocialIcons } from "@/types/social";

export const navLinks = [
  {
    id: 1,
    name: "Business",
    to: "/business",
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
        name: "Buy crypto",
        to: "/buy-crypto",
      },
      {
        name: "Sell crypto",
        to: "/sell-crypto",
      },
      {
        name: "Swap crypto",
        to: "/swap-crypto",
      },
    ],
  },

  {
    id: 3,
    name: "RESOURCES",
    sublinks: [
      {
        name: "Blog",
        to: "/blog",
      },
      {
        name: "FAQs",
        to: "/faqs",
      },
      {
        name: "Help Center",
        to: "/help-center",
      },
    ],
  },

  {
    id: 4,
    name: "COMPANY",
    sublinks: [
      {
        name: "About",
        to: "/about",
      },
      {
        name: "Careers",
        to: "/careers",
      },
      {
        name: "Partners",
        to: "/partners",
      },
      {
        name: "Investors",
        to: "/investors",
      },
    ],
  },
];

export const socialIcons: SocialIcons[] = [
  {
    name: "facebook",
    href: "#",
    icons: FaFacebookF,
  },

  {
    name: "twitter",
    href: "#",
    icons: FaTwitter,
  },

  {
    name: "Instagram",
    href: "#",
    icons: AiFillInstagram,
  },

  {
    name: "LinkedIn",
    href: "#",
    icons: FaLinkedin,
  },
];
