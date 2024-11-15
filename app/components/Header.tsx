"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [currentLang, setCurrentLang] = useState("");
  const { i18n } = useTranslation();

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

  return (
    <header className="px-5 lg:px-20 navbar h-16 md:h-20 flex items-center justify-between bg-white sticky top-0 w-full z-50">
      <div className="z-50 w-full">
        <nav className="flex items-center justify-between max-w-[1400px] w-full mx-auto">
          <Link
            href={createLocalizedPath("/")}
            className="flex items-center gap-3"
          >
            <div className="logobg w-10 h-10 rounded-[10px] flex items-center justify-center">
              <svg
                width="21"
                height="26"
                viewBox="0 0 21 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.07422 11.5173L5.88001 6.6596L11.2239 6.05469C11.9753 6.37355 12.3511 6.53298 12.3511 6.53298C13.903 10.0388 14.6789 11.7917 14.6789 11.7917L18.9995 9.60906"
                  stroke="#3D2278"
                  stroke-width="2.27753"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 24.001L6.37023 19.4304L8.37757 13.2207L10.3544 13.616L15.2417 17.6227L9.5641 21.2614"
                  stroke="#3D2278"
                  stroke-width="2.58811"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.4653 6.46484L9.28516 13.7392"
                  stroke="#3D2278"
                  stroke-width="4.65859"
                />
                <path
                  d="M14.6631 2.1797C14.6631 3.07475 13.895 3.84177 12.8951 3.84177C11.8952 3.84177 11.127 3.07475 11.127 2.1797C11.127 1.28464 11.8952 0.517622 12.8951 0.517622C13.895 0.517622 14.6631 1.28464 14.6631 2.1797Z"
                  fill="#3D2278"
                  stroke="#3D2278"
                  stroke-width="1.03524"
                />
              </svg>
            </div>

            <h2 className="text-base font-bold text-[#3D2278] uppercase">
              Workout{" "}
              <span className="text-[#0F0A1980] font-medium">Creator</span>
            </h2>
          </Link>

          <div className="flex items-center gap-5">
            <LanguageDropdown />
            <Link
              href={createLocalizedPath("/aboutus")}
              className="bg-[#3D2278] items-center justify-center rounded-xl hidden md:flex w-10 h-10"
            >
              <Image
                src="/assets/icons/contact-us-icon.svg"
                alt="contact-us-icon"
                width={100}
                height={100}
                loading="lazy"
                className="h-6"
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
