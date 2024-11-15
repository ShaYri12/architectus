"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const NavTabs = () => {
  const pathname = usePathname();
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");

  const getTabClassName = (path: string) => {
    // Handle language-prefixed paths
    const fullPath =
      path === "/" ? `/${currentLang}` : `/${currentLang}${path}`;
    const cleanPathname = pathname.split("?")[0];

    console.log("Current Pathname:", cleanPathname);
    console.log("Full Path:", fullPath);
 

    
    return `tab-btn py-3 text-center min-w-[140px] md:min-w-[150px] rounded-[30px] text-base font-medium border-2 ${
      cleanPathname === fullPath
        ? "border-[#3D2278] text-[#3D2278]"
        : "border-transparent"
    }`;
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage");
    const langFromPath = window.location.pathname.split("/")[1];

    let finalLang = storedLang || "en";

    if (langFromPath === "pt" || langFromPath === "br") {
      finalLang = "pt-BR";
    } else if (langFromPath === "ru") {
      finalLang = "ru";
    }

    setCurrentLang(finalLang);
    i18n.changeLanguage(finalLang);
  }, [i18n]);

  const createLocalizedPath = (path: any) => `/${currentLang}${path}`;

  useEffect(() => {
    if (pathname && tabRefs.current[pathname]) {
      tabRefs.current[pathname]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [pathname]);

  return (
    <section className="max-w-[1180px] w-full pb-10 md:pb-20 mx-auto flex gap-5 pt-[30px] md:pt-[50px] overflow-x-scroll lg:overflow-x-visible tabs-scrollbar relative">
      {/* Body Tab */}
      <Link
        href={createLocalizedPath("/")}
        ref={(el) => {
          tabRefs.current["/"] = el;
        }}
        className={`ml-5 lg:ml-0 ${getTabClassName("/")}`}
      >
        {t("tavtabs.body")}
      </Link>

      {/* Sports Tab */}
      <Link
        href={createLocalizedPath("/plan")}
        ref={(el) => {
          tabRefs.current["/plan"] = el;
        }}
        className={getTabClassName("/plan")}
      >
        {t("tavtabs.sports")}
      </Link>

      {/* Coaches Tab */}
      <Link
        href={createLocalizedPath("/coaches")}
        ref={(el) => {
          tabRefs.current["/coaches"] = el;
        }}
        className={getTabClassName("/coaches")}
      >
        {t("tavtabs.coaches")}
      </Link>

      {/* Podcasts Tab */}
      <Link
        href={createLocalizedPath("/podcasts")}
        ref={(el) => {
          tabRefs.current["/podcasts"] = el;
        }}
        className={getTabClassName("/podcasts")}
      >
        {t("tavtabs.podcasts")}
      </Link>

      {/* Tutorials Tab */}
      <Link
        href={createLocalizedPath("/tutorials")}
        ref={(el) => {
          tabRefs.current["/tutorials"] = el;
        }}
        className={getTabClassName("/tutorials")}
      >
        {t("tavtabs.tutorials")}
      </Link>

      {/* Store Tab */}
      <Link
        href={createLocalizedPath("/store")}
        ref={(el) => {
          tabRefs.current["/store"] = el;
        }}
        className={`mr-5 lg:mr-0 ${getTabClassName("/store")}`}
      >
        {t("tavtabs.store")}
      </Link>
    </section>
  );
};

export default NavTabs;
