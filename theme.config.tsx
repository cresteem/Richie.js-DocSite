import { DocsThemeConfig } from "nextra-theme-docs";

import {
  CresteemLogo,
  HeadElement,
  LicenseFooter,
  ThemeSwitch,
} from "./components/utils";

import { useRouter } from "next/router";
import { RiTelegramFill } from "react-icons/ri";

const config: DocsThemeConfig = {
  head: () => {
    const { pathname, basePath } = useRouter();
    const url = `https://cresteem.com${basePath}${pathname}`;

    return <HeadElement currentUrl={url} />;
  },

  footer: {
    text: <LicenseFooter />,
  },

  banner: {
    key: "2b",
    text: "Under Development 👨🏻‍💻",
    dismissible: true,
  },

  logo: <CresteemLogo />,

  logoLink: "/",

  project: {
    link: "https://github.com/cresteem/Richie-JS",
  },

  chat: {
    link: "https://t.me/cresteem/1",
    icon: RiTelegramFill({ size: "2.2vw" }),
  },

  docsRepositoryBase: "https://github.com/cresteem/Richie-JS-DocSite/tree/main",

  nextThemes: { defaultTheme: "dark" },

  themeSwitch: {
    component: <ThemeSwitch />,
  },

  useNextSeoProps: () => {
    return { titleTemplate: "%s" };
  },
};

export default config;
