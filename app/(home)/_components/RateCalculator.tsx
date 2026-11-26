import Button from "@/components/ui/Button";
import { AiOutlineSwap } from "react-icons/ai";
import { IoChevronDown } from "react-icons/io5";

// shared by both amount inputs: sizes itself to what is typed (no w-full, which would block that)
const amountInputClass =
  "field-sizing-content min-w-[1ch] max-w-full bg-transparent text-3xl font-semibold font-space_grotesk outline-none sm:text-5xl [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

function RateCalculator() {
  return (
    <main className="flex min-h-dvh w-full flex-col bg-dark/95 bg-[url('/landing_page/rate-calcu-box.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-full flex-1 flex-col items-center gap-4 px-4 py-8 text-light sm:px-6 md:py-18">
        <h2 className="bg-linear-to-r from-[#FFFFFF] to-[#4A6879] bg-clip-text text-center font-space_grotesk text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
          Rate calculator - Clear fees <br className="hidden md:block" /> and
          competitive rates.
        </h2>

        <p className="text-center text-sm text-light">
          Our payment network supports transactions across major international{" "}
          <br className="hidden md:block" />
          corridors, allowing users to move money seamlessly between regions.
        </p>

        {/* main components for rate calculator */}
        <div className="mt-4 w-full max-w-2xl rounded-xl border border-[#2F2F2F] bg-dark/60 px-4 py-4 sm:px-8">
          {/* for send from */}
          <div>
            <p className="text-[#F9FAFB] font-space_grptesk">Send From</p>
            <div className="relative flex w-full flex-col gap-6 rounded-md bg-[#161616] p-4 pb-12">
              <div className="flex items-center justify-between gap-3">
                <div className="relative">
                  <select
                    name="send_currency"
                    id="send_currency"
                    aria-label="Currency you send"
                    className="appearance-none rounded-3xl bg-dark py-2 pl-4 pr-10"
                  >
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                    <option value="GBP">GBP</option>
                  </select>

                  <IoChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm"
                  />
                </div>

                <div className="rounded-full border border-light bg-dark px-4 py-2 text-sm sm:text-base">
                  Amount
                </div>
              </div>

              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl sm:text-5xl">$</span>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  aria-label="Amount to send"
                  inputMode="decimal"
                  className={amountInputClass}
                  placeholder="0"
                />
              </div>

              <div className="absolute -bottom-5 right-0 flex items-center gap-3 rounded-full bg-primary px-4 py-2 text-sm text-dark sm:gap-4 sm:px-6 sm:py-3 sm:text-base">
                <AiOutlineSwap className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="font-space_grotesk font-medium">
                  1USD = 1000NGN
                </span>
              </div>
            </div>
          </div>

          {/* for Receive amount */}
          <div className="mt-10">
            <p className="text-[#F9FAFB] font-space_grotesk">
              Recipient Receives
            </p>
            <div className="relative flex w-full flex-col gap-6 rounded-md bg-[#161616] p-4 pb-12">
              <div className="flex items-center justify-between gap-3">
                <div className="relative">
                  <select
                    name="receive_currency"
                    id="receive_currency"
                    aria-label="Currency recipient receives"
                    className="appearance-none rounded-3xl bg-dark py-2 pl-4 pr-10"
                  >
                    <option value="NGN">NGN</option>
                    <option value="GBP">GBP</option>
                  </select>

                  <IoChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm"
                  />
                </div>

                <div className="rounded-full border border-light bg-dark px-4 py-2 text-sm sm:text-base">
                  Receive
                </div>
              </div>

              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl sm:text-5xl">NGN</span>
                {/* readOnly: this value is calculated, so React does not need an onChange */}
                <input
                  type="number"
                  name="receive_amount"
                  id="receive_amount"
                  aria-label="Amount recipient receives"
                  className={amountInputClass}
                  placeholder="0"
                  value={1000}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* details */}
          <div className="mt-10 flex flex-col gap-6 rounded-md border border-primary p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-space_grotesk text-sm">
                Transaction Fee
              </span>
              <span className="font-space_grotesk text-base">$0.0</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="font-space_grotesk text-sm">
                Amount we’ll convert
              </span>
              <span className="font-space_grotesk text-base">$200.00</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="font-space_grotesk text-sm">
                Amount we’ll charge you
              </span>
              <span className="font-space_grotesk text-base">$200.00</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="font-space_grotesk text-sm">
                Estimated arrival
              </span>
              <span className="text-right font-space_grotesk text-base">
                Less than a min
              </span>
            </div>
          </div>

          <Button className="mt-8 w-full bg-primary font-space_grotesk text-dark">
            Convert
          </Button>
        </div>
      </div>
    </main>
  );
}

export default RateCalculator;
