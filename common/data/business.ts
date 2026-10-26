import FastTransferIcon from "@/components/icons/fast-transfer-icon";
import RateCard from "@/components/icons/rate-card";
import { title } from "process";
import { BiWorld } from "react-icons/bi";

export const supports = [
  {
    id: 1,
    title: "70000+ entrepreneurs",
    description: "Use Click and Swap daily to manage their business.",
    icon: "/business/business_profile_1.webp",
  },

  {
    id: 2,
    title: "24/7 customer support",
    description: "Contact us via chat, email, or phone",
    icon: "/business/business_profile_2.webp",
  },

  {
    id: 3,
    title: "Secure and Easy",
    description: "Click and Swap is licences and Secure .",
    icon: "/business/account_secure.png",
  },
];

export const solutions = [
  {
    id: 1,
    title: "Global Coverage",
    icon: BiWorld,
    description:
      "From mobile and eCommerce, to POS, our solution integrates perfectly without turning your business into a construction zone. We connect all data points seamlessly, so you can focus on growing your business.",
  },

  {
    id: 2,
    title: "Rate Transparency",
    icon: RateCard,
    description:
      "Grow your business with confidence by partnering with a payment processor that doesn’t increase rates or tack-on hidden fees - and provides complete visibility into costs and pricing.",
  },

  {
    id: 3,
    title: "Fast, reliable transfers",
    icon: FastTransferIcon,
    description:
      "Get same day transfers in most major currencies, payments straight into your multi-currency account. Hold, send, and convert USD & GBP all in one place",
  },
];

export const cardwayData = [
  {
    id: 1,
    details: "Pay online or in-store, anywhere in the world",
  },
  {
    id: 2,
    details: "Automatic stablecoin-to-local-currency conversion at checkout",
  },
  {
    id: 3,
    details: "Secure, easy-to-use virtual cards",
  },
  {
    id: 4,
    details: "Track every transaction in-app",
  },
];
