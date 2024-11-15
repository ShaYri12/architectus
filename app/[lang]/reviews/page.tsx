"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";
import Header from "../../components/Header";
import NavTabs from "../../components/NavTabs";
import MenuModal from "../../components/MenuModal";
import Footer from "../../components/Footer";
import useLanguage from "../../hooks/useLanguage";
import CoachesList from "../../components/Coaches/CoachesList";

const ReviewsList = () => {
  useLanguage();

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <main className="workoutbg bg-no-repeat bg-center bg-cover relative pb-10 md:pb-20">
        <NavTabs />
        <CoachesList showSingle={false} />
        <div className="mb-10 md:mb-20">
          <MenuModal />
        </div>
      </main>
      <Footer />
    </I18nextProvider>
  );
};

export default ReviewsList;
