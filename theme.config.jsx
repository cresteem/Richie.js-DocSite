import { useConfig } from "nextra-theme-docs";

import { useRouter } from "next/router";
import { RiTelegramFill } from "react-icons/ri";
import Footer from "./components/footer";

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  footer: {
    component: <Footer />,
  },

  banner: {
    key: "201",
    content: "Richie.js 2.0.1 released 🚀",
    dismissible: true,
  },

  logo: <></>,

  logoLink: "/",

  project: {
    link: "https://github.com/cresteem/Richie.js",
  },

  chat: {
    link: "https://t.me/cresteem/1",
    icon: RiTelegramFill({ size: "29" }),
  },

  docsRepositoryBase: "https://github.com/cresteem/Richie.js-DocSite/tree/main",

  nextThemes: { defaultTheme: "Light" },
  sidebar: {
    toggleButton: true,
  },

  head() {
    const { frontMatter } = useConfig();
    const { pathname, basePath } = useRouter();
    const url = `https://cresteem.com${basePath}${pathname}`;
    const title =
      frontMatter.title +
      " | Richie JS API References | OpenSource of Cresteem";
    const desc = frontMatter.description;
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={desc} />

        {/* favicons links  */}
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicons/favicon-48x48.png"
        />
        <link rel="manifest" href="/favicons/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#fff" />
        <meta name="application-name" content="Richie-JS-DocSite" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/favicons/apple-touch-icon-167x167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="1024x1024"
          href="/favicons/apple-touch-icon-1024x1024.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Richie-JS-DocSite" />
        <link
          rel="yandex-tableau-widget"
          href="/favicons/yandex-browser-manifest.json"
        ></link>
        {/*  */}
        <meta name="twitter:card" content={frontMatter.description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={frontMatter.description} />
        <meta name="twitter:image" content={frontMatter.thumbnailUrl} />
        <meta name="twitter:creator" content="@cresteem" />
        <meta name="twitter:site" content={url} />
        <meta property="og:image" content={frontMatter.thumbnailUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="CRESTEEM" />
        <meta property="og:description" content={frontMatter.description} />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
      </>
    );
  },
};

export default config;
