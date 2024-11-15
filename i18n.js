"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "pt", "ru"], // Add your supported languages here
    debug: process.env.NODE_ENV === "development",

    interpolation: {
      escapeValue: false, // React already handles escaping
    },

    backend: {
      // Updated loadPath to fetch from nested folder structure
      loadPath: "/locales/{{lng}}.json",
    },

    detection: {
      order: ["localStorage", "path", "navigator"],
      caches: ["localStorage"], // Store the selected language in localStorage
    },

    lng:
      typeof window !== "undefined"
        ? localStorage.getItem("selectedLanguage") || "en"
        : "en",
  });

export default i18n;
