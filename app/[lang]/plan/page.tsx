"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import Header from "../../components/Header";
import useLanguage from "../../hooks/useLanguage";
import Footer from "../../components/Footer";
import NavTabs from "../../components/NavTabs";
import Hero from "../../components/Plan/Hero";
import MenuModal from "../../components/MenuModal";

const Plan = () => {
  useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <div className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <Hero />
        <MenuModal />
      </div>
      <Footer />
    </I18nextProvider>
  );
};

export default Plan;
