"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const languages = [
  { code: "en", name: "English", flag: "/assets/english-language-flag.svg" },
  {
    code: "pt-BR",
    name: "Brazilian",
    flag: "/assets/brazil-flag.svg",
  },
  { code: "ru", name: "Russian", flag: "/assets/russian-flag.svg" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const langFromPath = pathname.split("/")[1];
    const matchedLang = languages.find((lang) => lang.code === langFromPath);
    if (matchedLang) {
      setCurrentLang(matchedLang);
    }
  }, [pathname]);

  const handleLanguageChange = (selectedLang) => {
    if (selectedLang.code !== currentLang.code) {
      const currentPath = pathname.split("/").slice(2).join("/");
      const newPath = `/${selectedLang.code}/${currentPath}`;
      localStorage.setItem("selectedLanguage", selectedLang.code);
      i18n.changeLanguage(selectedLang.code);
      router.push(newPath);
      setCurrentLang(selectedLang);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative block" ref={dropdownRef}>
      <button
        className="inline-flex langmenu items-center gap-2 rounded-lg py-3 px-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.name}
          width={27}
          height={18}
          loading="lazy"
          className="w-[34px] h-[17px]"
        />
        <Image
          src="/assets/icons/down-arrow.svg"
          alt="down-arrow"
          width={16}
          height={16}
          loading="lazy"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="w-40 absolute top-12 text-[#0F1017] right-0 md:left-0 rounded-xl langmenu text-sm py-1 shadow-lg bg-white transition duration-100 ease-out">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`flex w-full items-center gap-2.5 p-3 cursor-pointer ${
                currentLang.code === lang.code ? "font-semibold" : "hover:bg-gray-100"
              }`}
            >
              <Image
                src={lang.flag}
                alt={`${lang.name}-flag`}
                width={100}
                height={100}
                loading="lazy"
                className="h-[18px] w-7"
              />
              <span
                className={`text-[#0f1017] text-sm flex-1 text-start ${
                  currentLang.code === lang.code ? "font-bold" : ""
                }`}
              >
                {lang.name}
              </span>

              {currentLang.code === lang.code && (
                <Image
                  src="/assets/icons/tikmark-icon.svg"
                  alt="tikmark-icon"
                  width={14}
                  height={10}
                  loading="lazy"
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;

