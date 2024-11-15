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
    supportedLngs: ["en", "pt-BR", "ru"], // Define your supported languages
    debug: process.env.NODE_ENV === "development",

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: "/locales/{{lng}}.json",
      addPath: "/locales/{{lng}}.json",
      // Add this fallback option
      parse: (data, { lng }) => (lng === "pt-BR" ? JSON.parse(data) : null),
    },

    detection: {
      order: ["localStorage", "path", "navigator"],
      caches: ["localStorage"],
    },

    lng:
      typeof window !== "undefined"
        ? localStorage.getItem("selectedLanguage") || "en"
        : "en",
  });

export default i18n;
