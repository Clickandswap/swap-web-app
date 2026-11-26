import Image from "next/image";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

const fieldClass =
  "w-full rounded-md border-none bg-[#F5F5F5] px-4 py-3 text-sm";
const labelClass = "text-sm text-[#475467]";

/**
 * Rounded checkbox: the native box is hidden (appearance-none) so it can be
 * rounded, and a check icon appears when it is ticked.
 * rounded-lg (8px) on a 24px box = soft square. rounded-xl (12px) on a 24px
 * box would be a full circle, so use size-8 if you want rounded-xl exactly.
 */
function RoundedCheckbox({
  name,
  value,
  label,
  required,
  className = "",
}: {
  name: string;
  value?: string;
  label: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex cursor-pointer items-center gap-3 ${className}`}>
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center">
        <input
          type="checkbox"
          name={name}
          value={value}
          required={required}
          className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border border-[#D0D5DD] bg-white transition-colors checked:border-primary checked:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        />
        <IoCheckmark
          aria-hidden="true"
          className="pointer-events-none absolute text-lg text-dark opacity-0 peer-checked:opacity-100"
        />
      </span>
      <span className="text-sm">{label}</span>
    </label>
  );
}

function NewWaitlist() {
  return (
    <div className="flex min-h-dvh flex-1 flex-col lg:flex-row">
      {/* mobile header: the big side panel is hidden on small screens */}
      <header className="bg-dark px-6 py-4 lg:hidden">
        <Image
          src={"/logos/ClickAndSwap_word_logo.png"}
          alt="Click and Swap"
          width={200}
          height={200}
          className="h-auto w-36"
        />
      </header>

      {/* side section: stays on screen while the page content scrolls */}
      <aside className="relative hidden shrink-0 overflow-hidden bg-cover bg-center bg-[url(/bg/crypto_card_bg.webp)] text-light lg:sticky lg:top-0 lg:block lg:h-dvh lg:w-[30%] lg:self-start">
        <div className="relative h-full w-full bg-dark/85">
          {/* globe: limited to the lower part of the panel so it can never cover the text */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[62%] overflow-hidden">
            <Image
              src={"/getting-started/globe_two.png"}
              alt=""
              aria-hidden="true"
              fill
              sizes="30vw"
              className="object-cover object-top-left"
              loading="eager"
            />
          </div>

          {/* text sits above the globe */}
          <div className="relative z-10 flex h-full flex-col justify-between px-10 py-10 xl:px-14 xl:py-12">
            <div>
              <Image
                src={"/logos/ClickAndSwap_word_logo.png"}
                alt="Click and Swap"
                width={200}
                height={200}
                className="h-auto w-auto"
              />

              <h4 className="mt-5 max-w-56 text-base font-normal">
                Send, receive, exchange, and spend money across borders.
              </h4>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col overflow-x-clip bg-background">
        {/* page content: centred, full width on phones and capped on large screens */}
        <div className="flex flex-1 items-center justify-center px-6 py-8 md:px-10">
          <div className="flex w-full max-w-xl flex-col gap-3 text-dark">
            <h1 className="font-space_grotesk text-xl font-bold md:text-2xl">
              Be Among the First to join Click and Swap
            </h1>
            <p className="text-sm md:text-base">
              Join the Click and Swap waitlist for faster, simpler cross-border
              payments and get early updates and access.
            </p>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="full_name" className={labelClass}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Enter your Full Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="country" className={labelClass}>
                  Select your country of residence
                </label>
                <select name="country" id="country" className={fieldClass}>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="south-africa">South Africa</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <div className="flex gap-2">
                  <select
                    name="country_code"
                    id="country_code"
                    aria-label="Country code"
                    className="shrink-0 rounded-md bg-[#F5F5F5] px-3 py-3 text-sm sm:px-4"
                  >
                    <option value="+234">+234</option>
                    <option value="+233">+233</option>
                    <option value="+27">+27</option>
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel-national"
                    placeholder="00 0000 000"
                    className={`min-w-0 ${fieldClass}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="Enter your Email Address"
                />
              </div>

              <fieldset className="flex flex-col gap-2">
                <legend className={`mb-2 ${labelClass}`}>
                  Registration Type
                </legend>

                <div className="flex items-center gap-3 sm:gap-4">
                  <label className="flex w-full cursor-pointer items-center gap-3 rounded-md bg-[#F5F5F5] px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="registration_type"
                      value="individual"
                      className="h-5 w-5 shrink-0 accent-primary"
                    />
                    Individual
                  </label>

                  <label className="flex w-full cursor-pointer items-center gap-3 rounded-md bg-[#F5F5F5] px-3 py-2 text-sm">
                    <input
                      type="radio"
                      name="registration_type"
                      value="business"
                      className="h-5 w-5 shrink-0 accent-primary"
                    />
                    Business
                  </label>
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label htmlFor="business_name" className={labelClass}>
                  Business Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  id="business_name"
                  autoComplete="organization"
                  className={fieldClass}
                  placeholder="Enter your Business Name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="use_case" className={labelClass}>
                  How do you plan to use Click and Swap ?
                </label>
                <select name="use_case" id="use_case" className={fieldClass}>
                  <option value="send">Send Money Internationally</option>
                  <option value="receive">Receive Money Internationally</option>
                  <option value="convert">Convert Currencies</option>
                  <option value="business-payments">Business Payments</option>
                </select>
              </div>

              <fieldset className="flex flex-col gap-2">
                <legend className={`mb-2 ${labelClass}`}>
                  Which Currency pairs are you most interested
                </legend>

                {/* 2 per row on phones, 4 in one row from sm up */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {["NGN/USD", "NGN/GBP", "USD/GBP", "NGN/USDT"].map((pair) => (
                    <RoundedCheckbox
                      key={pair}
                      name="currency_pairs"
                      value={pair}
                      label={pair}
                      className="rounded-md bg-[#F5F5F5] px-3 py-2"
                    />
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label htmlFor="referral_source" className={labelClass}>
                  How do you hear about Click and Swap?
                </label>
                <select
                  name="referral_source"
                  id="referral_source"
                  className={fieldClass}
                >
                  <option value="google">Google/Search</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="x-twitter">X/Twitter</option>
                </select>
              </div>

              <RoundedCheckbox
                name="agree_to_updates"
                required
                className="mt-2 items-start"
                label={
                  <span className="font-space_grotesk">
                    I agree to receive launch updates, early-access information,
                    and other communications from Click and Swap
                  </span>
                }
              />

              <button
                type="submit"
                className="mt-2 w-full rounded-full text-xl bg-primary px-6 py-3 font-space_grotesk font-semibold text-dark"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewWaitlist;
