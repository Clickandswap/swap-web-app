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
    description:
      "Tips for sending money, tracking payments, and understanding delivery times.",
    no_of_articles: 12,
  },

  {
    id: 2,
    icon: MdOutlineShield,
    title: "Security",
    description:
      "Advice on passwords, verification, suspicious activity, and account protection.",
    no_of_articles: 9,
  },

  {
    id: 3,
    icon: LuCoins,
    title: "Digital Assets",
    description:
      "Insights on deposits, networks, and the details to verify before sending.",
    no_of_articles: 8,
  },
];

export const blogDetails = [
  {
    id: 1,
    title: "Start with the right recipient",
    description:
      "Whether you are paying someone for the first time or sending money to someone you know, start by confirming who will receive it. Read the name and payment details carefully. A familiar name is not enough if the account information has changed.",
    descriptionTwo:
      "If someone sends new details by message, confirm them through a channel you already trust. Call a known number rather than one included in an unexpected email. Be especially cautious when a request asks you to keep the payment secret or send immediately.",
    descriptionThree:
      "Before confirming in Click and Swap, compare the recipient details on screen with the information you intended to use. If something does not match, pause. It is easier to correct a detail before sending than to try to recover a completed payment.",
  },

  {
    id: 2,
    title: "Check the amount and the full picture",
    description:
      "Review the amount you are sending, the currency, and any fees or exchange information shown before confirmation. Focus on what the recipient is expected to receive, not just the amount leaving your account.",

    descriptionTwo:
      "Read any delivery estimate and transaction notice presented in the app. Different payment routes can have different processing steps, and an estimate should not be treated as a guarantee. If the information is unclear, ask support before proceeding.",
    descriptionThree:
      "Keep a record of the confirmation and transaction ID. You do not need to share a screenshot publicly: storing the reference privately gives you a useful starting point if you later need help.",
  },
  {
    id: 3,
    title: "Sending a digital asset? Check the network",
    description:
      "Digital-asset deposits need an additional layer of care. Select the asset in the app and use the wallet address and blockchain network shown there. An asset name alone does not tell you which network to use.",
    descriptionTwo:
      "Compare the address carefully and include a memo or tag if one is required. Do not assume that an address saved for a previous deposit is still the right destination. Always check the current instructions before sending.",
    descriptionThree:
      "If you have already sent using the wrong address or network, contact support immediately. Include the transaction hash, asset, network, and destination address. Some blockchain transfers cannot be reversed, and recovery may not be possible.",
  },
  {
    id: 4,
    title: "Follow the status, not the guesswork",
    description:
      "After sending, open the transaction in the app to see its latest status and estimated delivery time. A pending payment is not the same as a failed payment. Avoid sending a duplicate just because the recipient has not seen the money yet.",
    descriptionTwo:
      "If the transfer is past the estimate, contact support with the transaction ID. For a missing deposit, provide the payment reference or the transaction hash for a digital asset. These details help the team trace the payment without needing your account password.",
    descriptionThree:
      "If you notice an incorrect recipient or need to cancel, act quickly. Open the transaction to see whether a cancellation option is available, or contact support. What can be done depends on the transfer’s status; delivery can limit the options for stopping or correcting it.",
  },
  {
    id: 5,
    title: "Keep your account in your hands",
    description:
      "Use a strong, unique password and keep your device and app up to date. Never share a password or one-time code with anyone, even if a message appears to come from someone helping with a payment.",
    descriptionTwo:
      "Submit identity documents only through an official Click and Swap channel. If you lose access to your phone or account, use the account recovery option or contact support@clickandswap.com. Verification helps protect your account before access is restored.",
    descriptionThree:
      "If you see suspicious activity, secure your account and contact support immediately. Explain what happened and include the relevant transaction ID, but leave passwords, one-time codes, and full card details out of your message.",
  },
];
