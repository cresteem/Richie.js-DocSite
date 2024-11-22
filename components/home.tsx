import Link from "next/link";
import NPMInstall from "./utils/npm-install";

export default function Home() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-[6%] gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            Richie JS: Simplify SEO, Maximize Impact
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            There’s no shortcut to SEO,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              until Richie.js came along.
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Automate schema creation to boost rankings, enhance visibility, and
            drive effortless engagement. It's all start with this command.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <NPMInstall className="relative w-[25%] min-w-[250px]" />
            <Link
              href="/docs/getting-started-with-richie-js"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Getting started
            </Link>
          </div>
        </div>
        <div className="mt-14">
          <img
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
            className="w-full shadow-lg rounded-lg border"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
