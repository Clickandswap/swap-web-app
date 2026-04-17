function Faqs() {
  const faqs = [
    {
      id: 1,
      question: "What is ClickNSwap?",
      answer:
        "ClickNSwap is a decentralized exchange (DEX) built on the Ethereum blockchain. It allows users to swap ERC-20 tokens directly from their wallets without the need for an intermediary.",
    },
    {
      id: 2,
      question: "How do I fund my wallet",
      answer:
        "Fund your wallet by purchasing cryptocurrency from a reputable exchange and transferring it to your wallet address. You can also receive cryptocurrency from other users by sharing your wallet address.",
    },
    {
      id: 3,
      question: "How do I fund with any currency?",
      answer:
        "To fund your wallet with any currency, you can use a cryptocurrency exchange that supports the currency you want to use. You can purchase the desired cryptocurrency on the exchange and then transfer it to your wallet address.",
    },
  ];
  return (
    <main className="md:px-28 px-6 py-12 flex justify-between md:flex-row flex-col text-steel-blue">
      <div className="md:w-[35%] w-full">
        <h3 className="text-space_grotesk font-bold md:text-4xl text-2xl">
          Got Questions? We've Got Answers
        </h3>
        <p className="sm:text-base text-xs my-8">
          We know you would have some questions. Here’s are some helpful tips on
          frequently issues we’ve received over time.
        </p>
      </div>

      <div className="md:w-[55%] w-full">
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
      </div>
    </main>
  );
}

export default Faqs;
