import Link from "next/link";
import { RiGithubFill, RiNpmjsFill, RiTelegramFill } from "react-icons/ri";
import CresteemBrandMark from "./utils/cresteem-logo";
import Logo from "./utils/rjs-logo";

export default function Footer() {
  const footerNavs = [
    {
      href: "/docs",
      name: "Documentation",
    },
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/blogs",
      name: "Blogs",
    },
    {
      href: "/sponsors",
      name: "Sponsors",
    },
  ];

  return (
    <footer
      className="text-gray-500 px-4 pb-5 pt-[3%] w-full md:px-8 border-t"
      style={{ margin: 0 }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <Logo className="w-20 sm:mx-auto" />
          <p className="leading-relaxed mt-2 text-[15px]">
            Richie JS is an advanced SEO toolkit that simplifies the creation of
            structured data for rich results, enhancing your website's
            visibility and performance on search engines. By automating the
            generation of JSON-LD schema, it accelerates SEO optimization,
            improves search engine rankings, and boosts user engagement with
            minimal effort.
          </p>
        </div>
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800" key={idx}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            <Link
              href="https://github.com/cresteem/Richie.js/blob/main/LICENSE"
              target="_blank"
            >
              &copy; 2024 Richie.js licensed under Apache-2.0.
            </Link>
          </div>
          <Link
            href="https://cresteem.com/"
            target="_blank"
            about="blank"
            aria-label="This website is built by cresteem.com"
            style={{ zIndex: 200 }}
            className="-ml-[9%] flex justify-center items-center gap-x-2 relative text-gray-600"
          >
            {" "}
            Powered By
            <CresteemBrandMark classNames="h-4" />
          </Link>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link
                  href="https://github.com/cresteem/Richie.js"
                  target="_blank"
                >
                  <RiGithubFill className="w-6 h-6 text-black" />
                </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link
                  href="https://www.npmjs.com/package/@cresteem/richie-js"
                  target="_blank"
                >
                  <RiNpmjsFill className="w-6 h-6 text-red-500" />
                </Link>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <Link href="https://t.me/cresteem/1" target="_blank">
                  <RiTelegramFill className="w-6 h-6 text-[#0088cc]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
