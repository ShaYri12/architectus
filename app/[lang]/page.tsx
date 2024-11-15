"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import useLanguage from "../hooks/useLanguage";
import Header from "../components/Header";
import NavTabs from "../components/NavTabs";
import Footer from "../components/Footer";
import Hero from "../components/Visualization/Hero";
import MenuModal from "../components/MenuModal";

const HomePage = () => {
  useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <Hero />
        <MenuModal/>
      </main>
      <Footer />
    </I18nextProvider>
  );
};

export default HomePage;
