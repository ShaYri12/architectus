"use client";
import React, { useState } from "react";
import CreateVisualisationModal from "./CreateVisualisationModal";
import VerificationLoadingModal from "./VerificationLoadingModal";
import Image from "next/image";
import ShareModal from "./ShareModal";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  // Open Create modal
  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  //   Close Create modal
  const handleCloseCreateVisualisationModal = () => {
    setIsModalOpen(false);
  };

  //   Open VisualisationVerification Modal
  const handleVerificationCreateClick = () => {
    setIsModalOpen(false);
    setIsVerificationModalOpen(true);
  };

  //  Close VisualisationVerification Modal
  const handleCloseVerificationModal = () => {
    setIsVerificationModalOpen(false);
    setIsModalOpen(false);
  };

  //  Open Share Modal
  const handleShareModal = () => {
    setIsShareModalOpen(true);
  };

  //  Close Share Modal
  const handleCloseShareModal = () => {
    setIsShareModalOpen(false);
  };

  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="mb-14 md:mb-20">
          <div className="mb-7 md:mb-10 flex items-center gap-3">
            <Image
              src="/assets/icons/suggestion.svg"
              alt="suggestion"
              width={20}
              height={20}
              loading="lazy"
            />

            <p className="text-sm md:text-base text-[#0F0A19] max-w-[34rem] flex-1">
              {t("home.hero.text")}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#3D2278] text-white rounded-[10px] h-12 text-center px-5 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
              {t("btns.bodyscan")}
            </button>

            <button
              onClick={handleShareModal}
              className="border-2 border-[#3D2278] rounded-[10px] h-12 text-center px-10 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
            >
              {t("btns.share")}
            </button>
          </div>
        </div>

        {/* Big Body Image  */}
        <div className="bg-[url('/assets/body-banner.jfif')] h-[280px] md:h-[500px] w-full rounded-2xl md:rounded-[20px] bg-cover bg-center mb-5 md:mb-12"></div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-[45px] h-[15px] rounded-[30px] bg-[#3d2278] cursor-pointer"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-[#3d227833] cursor-pointer"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-[#3d227833] cursor-pointer"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-[#3d227833] cursor-pointer"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-[#3d227833] cursor-pointer"></div>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-[300px] w-full mx-auto">
          <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
            {t("btns.save")}
          </button>

          <button
            onClick={handleCreateClick}
            className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
          >
            {t("btns.create")}
          </button>
        </div>

        {/* Create Window Modals  */}
        {isModalOpen && (
          <CreateVisualisationModal
            onClose={handleCloseCreateVisualisationModal}
            onCreate={handleVerificationCreateClick}
          />
        )}
        {isVerificationModalOpen && (
          <VerificationLoadingModal onClose={handleCloseVerificationModal} />
        )}

        {/* Share Modal */}
        {isShareModalOpen && <ShareModal onClose={handleCloseShareModal} />}
      </div>
    </section>
  );
};

export default Hero;
