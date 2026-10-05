export type faqs = {
  id: number;
  question: string;
  answer: string;
};

export interface helpdeskType {
  id: number;
  title: string;
  faqs: faqs[];
}

export const helpDeskFaqs: helpdeskType[] = [
  {
    id: 1,
    title: "Account & verification",
    faqs: [
      {
        id: 1,
        question: "Account & verification",
        answer:
          "Check the message in the app for what needs attention. You may be asked to correct information or upload a clearer document. If you need help, contact support@clickandswap.com.",
      },
      {
        id: 2,
        question: "Why was I asked to provide additional documents?",
        answer:
          "We may need more information to complete verification or protect your account. The app will tell you what to provide. Submit documents only through an official Click and Swap channel",
      },
      {
        id: 3,
        question: "Why was my account temporarily restricted?",
        answer:
          "A temporary restriction can occur while we review account security, verification, or a transaction. Check the notice in your account for the next step. Our support team can help you understand what is needed.",
      },
      {
        id: 4,
        question: "Can I close my account? What happens to my balance?",
        answer:
          "You can request account closure in the app or by contacting support. We will help you withdraw or return any remaining balance that is available after pending transactions and required checks are resolved.",
      },
      {
        id: 5,
        question: "What if I lose my phone or cannot access my account?",
        answer:
          "Use the account recovery option or email support@clickandswap.com. We will verify that the account belongs to you before restoring access. Never share your password or one-time code with anyone.",
      },
    ],
  },

  {
    id: 2,
    title: "Transfers, cancellation & refunds",
    faqs: [
      {
        id: 1,
        question: "Why was my transaction delayed?",
        answer:
          "Open the transaction in the app to see its latest status and estimated delivery time. If it is past the estimate, contact support with the transaction ID so we can check it for you.",
      },
      {
        id: 2,
        question: "What happens if I send money to the wrong recipient?",
        answer:
          "Contact support immediately with the transaction ID and the details you entered. We will review whether the transfer can still be stopped or corrected. Recovery may not be possible after the money has been delivered.",
      },
      {
        id: 3,
        question: "Can I cancel a transfer?",
        answer:
          "Open the transaction to check whether a cancellation option is available, or contact support as soon as possible. We will explain what can be done for that transfer and any applicable cancellation rights.",
      },
      {
        id: 4,
        question: "What happens if my transfer is unsuccessful or incomplete?",
        answer:
          "Your funds are usually returned almost instantly. If the return is taking longer, open the transaction and request a refund. We will check the amount eligible for a refund and proceed with the refund process",
      },
      {
        id: 5,
        question: "How do refunds work?",
        answer:
          "Both the sender and recipient can initiate a refund. If a payment is unsuccessful or incomplete, the sender can request one. The recipient can choose to return all or part of a payment. Click and Swapchecks whether the requested amount is eligible and then proceeds with the refund process.",
      },
      {
        id: 6,
        question: "My deposit has not appeared. What should I do?",
        answer:
          "Check its status in the app first. If it is still missing, contact support with your payment reference or, for a digital-asset deposit, the transaction hash. This helps us trace the payment",
      },
    ],
  },
  {
    id: 3,
    title: "Digital-asset deposit",
    faqs: [
      {
        id: 1,
        question: "What should I check before sending a digital asset?",
        answer:
          "Select the asset in the app and use the wallet address and blockchain network shown there. Check both details, plus any required memo or tag, before sending.",
      },
      {
        id: 2,
        question:
          "I sent a digital asset using the wrong network or address. What should I do?",
        answer:
          "Contact support immediately with the transaction hash, asset, network, and destination address. We will review what happened and whether recovery is possible. Some blockchain transfers cannot be reversed.",
      },
    ],
  },
  {
    id: 4,
    title: "Security & referrals",
    faqs: [
      {
        id: 1,
        question: "What happens if I notice suspicious activity?",
        answer:
          "Secure your account and contact support@clickandswap.com immediately. Include the transaction ID if a payment is involved. Do not share your password or one-time code with anyone.",
      },
      {
        id: 2,
        question: "Where can I report a security issue?",
        answer:
          "Email support@clickandswap.com with a description of the issue. Do not include your password, one-time code, or full card details in the message.",
      },
      {
        id: 3,
        question: "Why did I not receive a referral reward?",
        answer:
          "Check the referral section in the app for the current offer and its eligibility requirements. If you believe your referral qualified, contact support with your referral code and the relevant details. Please do not send anyone else's private account information",
      },
    ],
  },
];
