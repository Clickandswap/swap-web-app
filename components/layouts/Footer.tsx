import { footerLinks } from "@/common/data/navigation";
import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "@/common/data/navigation";

function Footer() {
  return (
    <main className="px-10 sm:px-28 pt-16 pb-6 bg-[url(/footer/footer_gradient_background.jpg)] bg-cover">
      <footer className="footer sm:footer-horizontal">
        <aside>
          <Image
            src={"/logos/clicknswap_word_logo.png"}
            alt="ClickNSwap Logo"
            width={100}
            height={100}
            className="w-auto h-8 object-cover"
          />
          <p className="max-w-xs my-2 text-sm text-low_blue">
            Take Your Crypto to the Next Level
          </p>
          <div className="flex gap-2">
            {socialIcons.map((item) => {
              const Icon = item.icons;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-2 rounded-full bg-[#222F37] transtion-transform ease-in duration-150 hover:scale-110"
                >
                  <Icon size={16} />
                </Link>
              );
            })}
          </div>
        </aside>
        {footerLinks.map((link) => {
          return (
            <nav key={link.id}>
              <h6 className="footer-title text-foundation_blue text-[16.6px]">
                {link.name}
              </h6>
              {link.sublinks && (
                <ul>
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.name}>
                      <Link
                        className="link link-hover my-1 inline-block text-low_blue text-[15.2px]"
                        href={sublink.to}
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          );
        })}
      </footer>

      <div className="text-low_blue text-[13.67px] sm:w-[60%] my-20 mx-auto">
        <p className="text-center w-full">
          All material found on this website is shared for educational use and
          general insight into the features and products available through
          ClickNSwap.
        </p>

        <p className="text-center my-4 w-full">
          Our products and services can be accessed via the ClickNSwap App,
          though availability may depend on your region and relevant legal or
          regulatory conditions. We do our best to keep all information current
          and reliable. However, we recommend conducting personal research and
          considering your financial goals, level of knowledge, and risk
          tolerance before making any investment choices.
        </p>
      </div>

      <div>
        <Image
          src={"/logos/ClickNSwap.png"}
          width={400}
          height={300}
          alt="ClickNSwap Big"
          className="object-contain w-full"
        />

        {/* <h1 className="text-9xl w-full text-[#2D3E49] font-extrabold text-center">
          ClickNSwap
        </h1> */}
      </div>

      <div className="flex sm:flex-row flex-col justify-between items-center mt-20 text-xs">
        <p className="text-low_blue"> © 2026 ClickNSwap </p>
        <div className="flex item-center justify-between gap-4 text-low_blue w-full sm:w-fit">
          <Link
            href={"/terms"}
            className="link link-hover my-1 inline-block text-low_blue"
          >
            Terms
          </Link>
          <Link
            href={"privacy"}
            className="link link-hover my-1 inline-block text-low_blue"
          >
            Privacy
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Footer;
