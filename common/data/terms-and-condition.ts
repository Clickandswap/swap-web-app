export interface termsDataType {
  id: number;
  title: string;
  description: string;
  descriptionTwo?: string;
}

export const termsDatas: termsDataType[] = [
  {
    id: 1,
    title: "About these terms",
    description:
      "Before confirming a transfer, check the recipient, amount, currency, and any transaction information displayed in the app. Provide complete and accurate payment instructions. Incorrect recipient details may make a payment difficult or impossible to recover after delivery.",
    descriptionTwo:
      "The final terms should explain how a customer accepts them and how they relate to service-specific information. Read the information shown for a particular service or transaction alongside the published terms. This sample does not create a customer agreement or replace an existing agreement.",
  },

  {
    id: 2,
    title: "Eligibility and account information",
    description:
      "Account information should be accurate, complete, and kept up to date. A person opening an account should act for themselves or have appropriate authority to act for the organisation they represent. Do not use another person’s identity or submit misleading information.",

    descriptionTwo:
      "Identity verification may require documents or additional information. Follow the instructions in the app and submit documents only through official Click and Swap channels. Age requirements, supported locations, and any business-account eligibility criteria must be confirmed in the approved terms.",
  },
  {
    id: 3,
    title: "Keeping your account secure",
    description:
      "Protect your login details and keep control of the devices used to access your account. Use a strong, unique password and never share a password or one-time code. Keep account contact details current so that important messages can reach you.",
    descriptionTwo:
      "If you lose access to your phone or notice suspicious activity, use the account recovery option or contact support@clickandswap.com. Do not include passwords, one-time codes, or full card details in a support message. Any allocation of responsibility for unauthorised activity requires legal review and must preserve applicable customer rights.",
  },
  {
    id: 4,
    title: "Transfer and payment instructions",
    description: "Before confirming a transfer, check the recipient, amount, currency, and any transaction information displayed in the app. Provide complete and accurate payment instructions. Incorrect recipient details may make a payment difficult or impossible to recover after delivery.",
    descriptionTwo: "The app provides the latest transaction status and an estimated delivery time. Processing can require verification or other checks. If a payment is past its estimate, contact support with the transaction ID. The final terms should specify when an instruction is accepted and how transaction-specific conditions are communicated."
  },
  {
    id: 5,
    title: "Fees, rates and transaction limits",
    description: "Review any fees, exchange information, and limits displayed before you confirm a transaction. If the information does not match your expectations, do not proceed until it has been clarified. Keep the transaction confirmation for your records.",
    descriptionTwo: "This draft does not establish a fee schedule, exchange-rate method, minimum balance, or transaction limit. The approved terms should identify the applicable disclosures, explain how amounts are calculated, and describe how any permitted changes are communicated."
  },
  {
    id: 6,
    title: "Digital-assets deposit",
    description: "For a digital-asset deposit, select the asset in the app and use the wallet address and blockchain network shown there. Check any required memo or tag. Do not assume that a network or address used for a different asset is suitable for the current deposit.",
    descriptionTwo: "Some blockchain transfers cannot be reversed. If you use the wrong network or address, contact support immediately with the transaction hash, asset, network, and destination address. Recovery may not be possible. Supported assets, confirmation requirements, and any recovery process must be verified before the final terms are published."
  },

  {
    id: 7,
    title: "Cancellations, returns and refunds",
    description: "If you need to cancel or correct a transfer, open the transaction to check the options available or contact support as soon as possible. What can be done depends on the transaction status. A completed payment may not be recoverable.",
    descriptionTwo: "The reference Help Center describes refund requests by senders and recipients, subject to an eligibility check. The approved terms should explain applicable cancellation rights, refund eligibility, and the process for returning funds. No guaranteed refund amount or processing period is set by this sample."
  },
  {
    id: 8,
    title: "Responsible use of services",
    description: "The proposed terms should prohibit fraud, impersonation, unlawful activity, and attempts to gain unauthorised access to accounts or systems. Do not interfere with the service, submit deceptive payment instructions, or use someone else’s private information without authority.",
    descriptionTwo: "Any referral offer should be read with its current eligibility requirements in the app. This sample does not promise a reward. Rules for misuse, enforcement, and reporting should be confirmed in the final policy and applied consistently with applicable rights.",
  },

  {
    id: 9,
    title: "Account restrictions and closure",
    description: "The Help Center explains that an account may be temporarily restricted during security, verification, or transaction review. Check any notice in your account for the next step and contact support if you need help understanding what information is required.",
    descriptionTwo: "Account closure can be requested in the app or through support. Pending transactions and required checks may need to be resolved before an available balance can be withdrawn or returned. The final terms must explain grounds for restriction or closure, notice requirements, access to funds, and any available review process.",
  },

  {
    id: 10,
    title: "Privacy, content and third-party services",
    description: "Personal information should be handled as described in the approved Privacy Policy. Read that policy for information about collection, use, sharing, retention, and available privacy rights. This draft does not establish a data-retention period or grant permission for additional processing.",
    descriptionTwo: "The final terms should also explain permitted use of website content and the treatment of third-party services or links. A link should not be interpreted as a promise about a third party’s availability or suitability. Intellectual-property ownership and licence wording require confirmation."
  },

  {
    id: 11,
    title: "Service, availability and legal rights",
    description: "Digital services can experience interruptions, maintenance, or delays. Check transaction status before repeating a payment, and contact support if an interruption affects your account. Any statements about availability should match the actual service commitments.",
    descriptionTwo: "Liability provisions, remedies, mandatory consumer protections, governing law, and dispute procedures must be prepared for the confirmed contracting entity and customer locations. They are intentionally not specified here. No liability cap, waiver of rights, or jurisdiction is created by this sample."
  },

  {
    id: 12,
    title: "Changes, questions and complaints",
   description: "The approved terms should show an effective date and explain how changes are notified, when they take effect, and what options customers have. This draft has no effective date and should not be presented as an approved or binding policy.",
   descriptionTwo: "For questions about your account or a transaction, contact support@clickandswap.com. Include a concise description and the relevant transaction ID, if available. A formal complaints procedure, response times, and any independent escalation route must be confirmed before publication."
  },
];
