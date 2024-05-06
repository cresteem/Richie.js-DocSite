"use client";
import { useConfig, useTheme } from "nextra-theme-docs";
import { ReactElement, useState } from "react";

import {
  RiCreativeCommonsByLine,
  RiCreativeCommonsLine,
  RiCreativeCommonsSaLine,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";

import style from "../stylesheets/utils.module.scss";

export function CresteemLogo(): ReactElement {
  return (
    <div className={style.logoDiv}>
      <p className={style.heroText}>
        <b>RICHIE</b> JS
      </p>
      <p className={style.subText}>
        By<b> CRESTEEM</b>
      </p>
    </div>
  );
}

export function ThemeSwitch(): ReactElement {
  const [state, setState] = useState("dark");
  const theme = useTheme();

  const props = { size: "2vw" };

  function themeSwitch(): void {
    setState(state === "dark" ? "light" : "dark");
    theme.setTheme(state);
  }

  const DarkStateUI: ReactElement = (
    <>
      <RiSunFill {...props} />
      <p>Light</p>
    </>
  );

  const LightStateUI: ReactElement = (
    <>
      <RiMoonFill {...props} />
      <p>Dark</p>
    </>
  );

  return (
    <button className={style.darkModeBtn} onClick={themeSwitch}>
      {state === "light" ? DarkStateUI : LightStateUI}
    </button>
  );
}

export function LicenseFooter(): ReactElement {
  return (
    <p>
      <a
        property="dct:title"
        rel="cc:attributionURL"
        href="https://github.com/cresteem/Richie-JS"
        target="_blank"
        style={{ fontWeight: "bold" }}
      >
        RICHIE JS
      </a>{" "}
      by{" "}
      <a
        style={{ fontWeight: "bold" }}
        href="https://www.cresteem.com"
        target="_blank"
        rel="cc:attributionURL dct:creator"
        property="cc:attributionName"
      >
        CRESTEEM
      </a>{" "}
      is licensed under{" "}
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
        target="_blank"
        rel="license noopener noreferrer"
        style={{ display: "inline-block" }}
      >
        Creative Commons Attribution-ShareAlike 4.0 International
        <RiCreativeCommonsSaLine className={style.footerIcon} />
        <RiCreativeCommonsByLine className={style.footerIcon} />
        <RiCreativeCommonsLine className={style.footerIcon} />
      </a>
    </p>
  );
}

export function HeadElement({ currentUrl }: { currentUrl: string }) {
  const { frontMatter } = useConfig();

  return (
    <>
      {/* general page description */}
      <meta name="description" content={frontMatter.description} />

      {/* fb meta */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={frontMatter.title} />
      <meta property="og:description" content={frontMatter.description} />
      <meta property="og:site_name" content="CRESTEEM" />
      <meta property="og:locale" content="en_US" />

      <meta property="og:image" content={frontMatter.thumbnailUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* TWITTER META */}
      <meta name="twitter:card" content={frontMatter.description} />
      <meta name="twitter:site" content="@cresteem" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={frontMatter.title} />
      <meta name="twitter:description" content={frontMatter.description} />
      <meta name="twitter:image" content={frontMatter.thumbnailUrl} />

      <title>{frontMatter.title}</title>

      <link
        rel="icon"
        type="image/webp"
        href="https://cresteem.com/favicon.webp"
      ></link>
    </>
  );
}
