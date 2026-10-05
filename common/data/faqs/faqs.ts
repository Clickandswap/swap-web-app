export type faqs = {
  id: number;
  question: string;
  answer: string;
};

export interface mainfaqsType {
  id: number;
  title: string;
  faqs: faqs[];
}

export const mainFaqs: mainfaqsType[] = [
  {
    id: 1,
    title: "Why Click and Swap?",
    faqs: [
      {
        id: 1,
        question: "Why should I choose Click and Swap?",
        answer:
          "Click and Swap brings sending, receiving, swapping, and payments into one place. Before you send, you can see the exchange rate, the amount your recipient will receive, the estimated delivery time, and any applicable partner charge.",
      },
    ],
  },

  {
    id: 2,
    title: "Getting Started",
    faqs: [
      {
        id: 1,
        question: "What is Click and Swap?",
        answer:
          "Click and Swap helps individuals and businesses send, receive, swap, and pay across supported currencies and countries. You can manage it all from the app.",
      },
      {
        id: 2,
        question: "How does Click and Swap work?",
        answer:
          "Create an account, complete the required verification, and choose how you want to fund or send money. Before confirming, you can review the rate, the amount your recipient will receive, and the payout details.",
      },
      {
        id: 3,
        question: "How do I fund my account?",
        answer:
          "You can fund your account by bank transfer, card, supported stablecoins, or money received from another Click and Swap user. The app shows the methods available to you",
      },
      {
        id: 4,
        question: "Who can open a Click and Swap account?",
        answer:
          "Individuals and businesses in supported countries can sign up. The app guides you through the verification needed for your account.",
      },
      {
        id: 5,
        question: "Can I have more than one Click and Swap account?",
        answer:
          "You can use a personal account for yourself and apply for a separate Business account for your company. Contact support if you need help with your account setup.",
      },
      {
        id: 6,
        question: "Do I need to verify my identity?",
        answer:
          "Yes. A short identity check helps protect your account and enables you to use the services available to you.",
      },
      {
        id: 7,
        question: "What documents do I need to verify my identity?",
        answer:
          "The documents required depend on your country and applicable regulations. During sign-up, we'll let you know exactly which identification documents are accepted.",
      },
      {
        id: 8,
        question: "How long does verification take?",
        answer:
          "Yes. A short identity check helps protect your account and enables you to use the services available to you.",
      },
      {
        id: 9,
        question: "Which countries are supported?",
        answer:
          "We are regularly adding new countries and payment routes. You can find the current list in the Click and Swap app.",
      },
      {
        id: 10,
        question: "Is Click and Swap available on mobile?",
        answer:
          "Yes. Click and Swap is available on Android, iOS, and the web. Available features may vary by region.",
      },
      {
        id: 11,
        question: "How do I refer someone to Click and Swap?",
        answer:
          "Open the referral section in the app and share your referral link or code. The app shows the current reward, who qualifies, and when it is paid.",
      },
    ],
  },
  {
    id: 3,
    title: "Sending & Receiving Money",
    faqs: [
      {
        id: 1,
        question: "How long do transfers take?",
        answer:
          "Transfers are usually completed almost instantly. You will see an estimated delivery time before confirming and can track the transfer in the app.",
      },
      {
        id: 2,
        question: "Can I receive money from anyone?",
        answer:
          "You can receive money from eligible senders using the receiving methods available in your country. The app shows the options for your account.",
      },
      {
        id: 3,
        question:
          "Can I send money to someone who doesn't have a Click and Swap account?",
        answer:
          "Yes. Enter the recipient's email address or phone number, and we will send them a secure link. They can withdraw the money to a supported destination they choose. Their withdrawal details remain private from you",
      },
      {
        id: 4,
        question: "How do I withdraw money from my account?",
        answer:
          "Select Withdraw, choose an available payout method, and review the details before confirming. Any applicable partner withdrawal charge is shown first.",
      },
      {
        id: 5,
        question:
          "How does someone receive money sent to their phone number or email?",
        answer:
          "The recipient opens the secure link, completes any required steps, and chooses a supported destination for the money. Their withdrawal details remain private from the sender.",
      },
      {
        id: 6,
        question: "What currencies can I send?",
        answer:
          "Choose a destination in the app to see the currencies you can send and the payout currencies available for that route.",
      },
      {
        id: 7,
        question: "What currencies can I send?",
        answer:
          "Choose a destination in the app to see the currencies you can send and the payout currencies available for that route.",
      },
      {
        id: 8,
        question: "What currencies and digital assets are supported?",
        answer:
          "Click and Swap supports USD, GBP, EUR, RMB, NGN, GHS, KES, BTC, ETH, USDT, and USDC. We will notify users as we add more. The app shows the options available for each transaction.",
      },
      {
        id: 9,
        question: "How is my exchange rate determined?",
        answer:
          "Your rate reflects the rate available for the currency and payment route you choose. You will see the rate and the amount your recipient will receive before you confirm.",
      },
      {
        id: 10,
        question: "Are there transfer limits?",
        answer:
          "Yes. Minimum and maximum transfer amounts depend on your verification level, payment method, and destination country. Your applicable limits are shown in the app before you send.",
      },
      {
        id: 11,
        question: "Can I track my transfer?",
        answer:
          "Yes. Open the transaction in the app to follow its progress and see the latest status.",
      },
      {
        id: 12,
        question: "Will I receive notifications about my transfers?",
        answer:
          "Yes. Click and Swap keeps you informed with notifications and status updates as your transfer progresses, helping you track your transaction from start to finish.",
      },
      {
        id: 13,
        question: "Can I cancel a transfer?",
        answer:
          "Open the transaction to check your cancellation options, or contact support as soon as possible. We will explain the options and applicable rights for that transfer",
      },
      {
        id: 14,
        question: "What happens if my transfer fails?",
        answer:
          "If a transfer is unsuccessful or incomplete, your funds are usually returned almost instantly. If the return takes longer, request a refund from the transaction details. We will check the amount eligible for a refund and proceed with the refund process.",
      },
      {
        id: 15,
        question: "How do refunds work?",
        answer:
          "Both the sender and recipient can initiate a refund. If a payment is unsuccessful or incomplete, the sender can request one. The recipient can choose to return all or part of a payment. Click and Swap checks whether the requested amount is eligible and then proceeds with the refund process.",
      },
      {
        id: 16,
        question: "Can I download a receipt?",
        answer:
          "Yes. Open the transaction details in the app and select Download Receipt.",
      },
    ],
  },
  {
    id: 4,
    title: "Pricing & Exchange Rates",
    faqs: [
      {
        id: 1,
        question: "Does Click and Swap charge fees?",
        answer:
          "Click and Swap does not charge for sending, receiving, or swapping. A payment partner may charge a small fee for certain routes or withdrawals. Card use and some Business account activities may also have a charge. You will see any applicable charge before confirming.",
      },
      {
        id: 2,
        question: "Where can I see the latest exchange rates?",
        answer:
          "The rate for your transaction is shown in the app as you set it up and again before you confirm.",
      },
    ],
  },
  {
    id: 5,
    title: "How Click and Swap Works",
    faqs: [
      {
        id: 1,
        question: "How does Click and Swap make transfers faster?",
        answer:
          "Click and Swap uses available payment and settlement routes, including stablecoins in some corridors, to help move money efficiently. You will see the estimated delivery time before sending.",
      },
      {
        id: 2,
        question: "How does settlement work?",
        answer:
          "Click and Swap and its partners move funds through the route available for your transaction. Some cross-border routes use stablecoins behind the scenes, while the recipient receives money through the selected payout method",
      },
      {
        id: 3,
        question: "Why does Click and Swap use stablecoins?",
        answer:
          "Stablecoins can help move value across borders between payment partners. Where local-currency payout is available, recipients do not need to hold or manage stablecoins.",
      },
      {
        id: 4,
        question: "What payment methods are supported?",
        answer:
          "You can use supported bank transfers, cards, local payment methods, or digital assets for eligible transactions. The methods available for each payment are shown in the app.",
      },
      {
        id: 5,
        question: "Can I receive money in my local currency?",
        answer:
          "Yes. In supported routes, you can receive money in your local currency through an available payout method.",
      },
      {
        id: 6,
        question: "How does local currency payout work?",
        answer:
          "Click and Swap converts the payment and sends it through a local payout partner to the method selected for the recipient. The rate and expected amount are shown before the sender confirms.",
      },
      {
        id: 7,
        question: "Do I need cryptocurrency experience?",
        answer:
          "No. You can send and receive through supported local-currency methods without managing digital assets yourself.",
      },
      {
        id: 8,
        question: "Do recipients need cryptocurrency?",
        answer:
          "No. Recipients can withdraw through a supported local payout method without holding cryptocurrency.",
      },
    ],
  },
  {
    id: 6,
    title: "Business",
    faqs: [
      {
        id: 1,
        question: "Who is the Business Account designed for?",
        answer:
          "Click and Swap Business is for companies that want to collect payments, make payouts, manage currencies, or connect payment services to their products.",
      },
      {
        id: 2,
        question: "Can startups use Click and Swap?",
        answer:
          "Yes. Startups, growing businesses, and larger companies can use a Business account after completing the required onboarding.",
      },
      {
        id: 3,
        question: "Can businesses integrate the API?",
        answer:
          "Yes. Business accounts can use the Click and Swap API to connect supported payment, collection, payout, and wallet services to their systems.",
      },
      {
        id: 4,
        question: "Can businesses send bulk payments?",
        answer:
          "Yes. Business accounts can send bulk payments to employees, suppliers, contractors, or customers.",
      },
      {
        id: 5,
        question: "Does Click and Swap support merchant payments?",
        answer:
          "Yes. Business accounts can accept payments and manage collections with Click and Swap merchant tools.",
      },
      {
        id: 6,
        question: "Can businesses hold multiple currencies?",
        answer:
          "Yes. Startups, growing businesses, and larger companies can use a Business account after completing the required onboarding.Yes. Business accounts can manage supported currencies in one place. The app shows the currencies available to your business.",
      },
    ],
  },

  {
    id: 7,
    title: "Developers",
    faqs: [
      {
        id: 1,
        question: "Is there a sandbox environment?",
        answer:
          "Yes. Sandbox access is available to all Click and Swap Business accounts for building and testing API integrations.",
      },
      {
        id: 2,
        question: "Do you provide SDKs?",
        answer:
          "Contact our developer team for API documentation and the current SDK options for your integration.",
      },
      {
        id: 3,
        question: "Can businesses customize API integrations?",
        answer:
          "Yes. Business accounts can build custom integrations for the Click and Swap API, including supported payment, collection, and payout workflows.",
      },
    ],
  },
  {
    id: 8,
    title: "Cards",
    faqs: [
      {
        id: 1,
        question: "Does Click and Swap offer virtual cards?",
        answer:
          "Yes. Virtual cards are available. The app shows the options and any applicable card charge before you proceed.",
      },
      {
        id: 2,
        question: "Does Click and Swap offer physical cards?",
        answer:
          "Yes. Physical cards are available. The app shows the options available to you and any applicable charge before you order",
      },
    ],
  },

  {
    id: 9,
    title: "Security & Compliance",
    faqs: [
      {
        id: 1,
        question: "How secure is Click and Swap?",
        answer:
          "We use identity verification, access controls, transaction monitoring, and other safeguards to help protect accounts and payments.",
      },
      {
        id: 2,
        question: "Do you use two-factor authentication (2FA)?",
        answer:
          "Where available, Click and Swap offers additional account security features such as two-factor authentication to help protect customer accounts.",
      },
      {
        id: 3,
        question: "Are customer funds kept separate?",
        answer:
          "Yes. Customer funds are held with licensed financial partners, separate from Click and Swap's operating funds. The applicable product terms explain how funds are held.",
      },
      {
        id: 4,
        question: "Is my personal information protected?",
        answer:
          "We use safeguards to protect personal information. Our Privacy Policy explains what we collect, how we use it, and the choices available to you.",
      },
      {
        id: 5,
        question: "Does Click and Swap comply with financial regulations?",
        answer:
          "We use identity checks and transaction monitoring and work with licensed financial partners for services offered in supported markets.",
      },
    ],
  },

  {
    id: 10,
    title: "Platform",
    faqs: [
      {
        id: 1,
        question: "Is Click and Swap available 24/7?",
        answer:
          "Yes. You can access Click and Swap 24/7, except during planned maintenance. We will notify you before planned maintenance begins.",
      },
      {
        id: 2,
        question: "Can I use Click and Swap while traveling?",
        answer:
          "Yes. You can access your account while traveling. The services available for a transaction may depend on your location and destination.",
      },
    ],
  },

  {
    id: 11,
    title: "Legal",
    faqs: [
      {
        id: 1,
        question: "Where can I read your Terms and Privacy Policy?",
        answer:
          "Our legal documents, including the Terms of Service, Privacy Policy, and other important policies, are available on our website.",
      },
    ],
  },

  {
    id: 12,
    title: "Support",
    faqs: [
      {
        id: 1,
        question: "How can I contact support?",
        answer:
          "Our legal documents, including the Terms of Service, Privacy Policy, and other important policies, are available on our website.You can contact us through the Help Center or email support@clickandswap.com. Other available support channels are listed on our website.",
      },
    ],
  },

  {
    id: 13,
    title: "What's Next",
    faqs: [
      {
        id: 1,
        question: "What new features are coming?",
        answer:
          "We continue to add payment routes and improve our personal, business, and developer tools. We will announce new features in the app as they become available.",
      },
      {
        id: 2,
        question: "Which countries will you expand to next?",
        answer:
          "We add new markets as coverage becomes available. Watch the app for announcements and the latest supported-country list.",
      },
    ],
  },
];
