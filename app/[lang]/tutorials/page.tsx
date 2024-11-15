"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import Hero from "../../components/Tutorials/Hero";
import CoachesSlider from "../../components/Coaches/CoachsSlider";
import MenuModal from "../../components/MenuModal";
import Footer from "../../components/Footer";
import useLanguage from "../../hooks/useLanguage";

const Podcasts = () => {
  useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <Hero />
        <CoachesSlider />
        <MenuModal />
      </main>
      <Footer />
    </I18nextProvider>
  );
};

export default Podcasts;
