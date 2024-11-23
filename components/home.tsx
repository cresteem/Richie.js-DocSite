import Link from "next/link";
import NPMInstall from "./utils/npm-install";

export default function Home() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-[6%] gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-primary font-medium">
            Richie JS: Simplify SEO, Maximize Impact
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            There’s no shortcut to SEO,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51c1b5] to-[#2d6a8a]">
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
              className="block py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-primary/[70%] active:bg-primary/[70%] rounded-lg shadow-lg hover:shadow-none"
            >
              Get start
            </Link>
          </div>
        </div>
        <div className="mt-14">
          <video
            playsInline
            disablePictureInPicture
            src="/hero.mp4"
            poster="/thumbnail.webp"
            muted
            autoPlay
            loop
            className="w-full shadow-lg rounded-lg border"
          />
        </div>
      </div>
    </section>
  );
}
