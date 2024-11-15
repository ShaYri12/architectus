"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const getLanguage = () => {
      if (typeof window !== "undefined") {
        const pathLang = window.location.pathname.split("/")[1];
        const storedLang = localStorage.getItem("selectedLanguage");

        // Handle "pt-BR" case properly
        if (["en", "pt-BR", "ru"].includes(pathLang)) {
          return pathLang;
        } else if (pathLang === "pt" || pathLang === "br") {
          return "pt-BR";
        }

        // Default to stored language or English
        return storedLang || "en";
      }
      return "en";
    };

    const selectedLang = getLanguage();

    if (i18n.language !== selectedLang && i18n.isInitialized) {
      i18n.changeLanguage(selectedLang).catch((err) => {
        console.error("Error changing language:", err);
      });
    }

    // Store the selected language
    localStorage.setItem("selectedLanguage", selectedLang);
  }, [i18n]);
};

export default useLanguage;
