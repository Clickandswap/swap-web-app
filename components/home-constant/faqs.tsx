"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Faqs() {
  const faqs = [
    {
      id: 1,
      question: "What is Click and Swap?",
      answer:
        "Click and Swap helps individuals and businesses send, receive, swap, and pay across supported currencies and countries. You can manage it all from the app.",
    },
    {
      id: 2,
      question: "How do I fund my account?",
      answer:
        "You can fund your account by bank transfer, card, supported stablecoins, or money received from another Click and Swap user. The app shows the methods available to you.",
    },
    {
      id: 3,
      question: "Why should I choose Click and Swap?",
      answer:
        "Click and Swap brings sending, receiving, swapping, and payments into one place. Before you send, you can see the exchange rate, the amount your recipient will receive, the estimated delivery time, and any applicable partner charge.",
    },
    {
      id: 4,
      question: "Who can open a Click and Swap account?",
      answer:
        "Individuals and businesses in supported countries can sign up. The app guides you through the verification needed for your account.",
    },
  ];
  return (
    <main className="md:px-28 px-6 py-12 flex justify-between lg:flex-row flex-col text-steel-blue overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:w-[35%] w-full"
      >
        <h3 className="text-space_grotesk font-bold md:text-4xl text-2xl">
          Got Questions? We've Got Answers
        </h3>
        <p className="sm:text-base text-xs my-8">
          We know you may have questions. Here are answers to the ones we get
          most often.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="lg:w-[55%] w-full"
      >
        {faqs.map((question) => {
          return (
            <div
              key={question.id}
              tabIndex={0}
              className="collapse collapse-arrow w-full my-8"
            >
              <div className="collapse-title font-semibold w-full">
                {question.question}
              </div>
              <div className="collapse-content text-sm w-full">
                {question.answer}
              </div>
            </div>
          );
        })}
        <Link href={'/faqs'} className="underline font-semibold font-space_grotesk text-base p-4">See more...</Link>
      </motion.div>

    </main>
  );
}

export default Faqs;
