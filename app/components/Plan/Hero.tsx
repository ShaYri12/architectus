"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import CreateVisualisationModal from "../Visualization/CreateVisualisationModal";
import VerificationLoadingModal from "../Visualization/VerificationLoadingModal";
import Reviews from "../Reviews";
import ShareModal from "../Visualization/ShareModal";

// Plans Data

const plansdata = [
  {
    id: 1,
    image: "/assets/plan-1.webp",
    name: "Full Body workout",
  },
  {
    id: 2,
    image: "/assets/plan-2.avif",
    name: "Warm Up Excercise",
  },
  {
    id: 3,
    image: "/assets/plan-3.avif",
    name: "Cool Down After Workout",
  },

  {
    id: 4,
    image: "/assets/plan-2.avif",
    name: "Warm Up Excercise",
  },
];

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] =
    useState<boolean>(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState<Boolean>(false);
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

  const handleShowReviews = () => {
    setIsVisibleReviews(!isVisibleReviews);
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
        <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="flex items-start gap-3">
            <Image
              src="/assets/icons/suggestion.svg"
              alt="suggestion"
              width={20}
              height={20}
              loading="lazy"
              className="mt-[6px]"
            />

            <p className="text-sm md:text-base text-[#0F0A19] max-w-[34rem] flex-1">
              {t("plan.disc")}
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-[350px] w-full gap-3">
            <button
              onClick={handleCreateClick}
              className="bg-[#3D2278] text-white rounded-[10px]  h-12 text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
            >
              {t("btns.create")}
            </button>

            <button
              onClick={handleShareModal}
              className="border-2 border-[#3D2278] rounded-[10px] h-12 text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
            >
              {t("btns.share")}
            </button>
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            10: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {plansdata.map((plan) => (
            <SwiperSlide key={plan.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-1 w-full mb-14 md:mb-20">
                <div className="h-[300px] w-full border-b">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center px-2 py-5">
                  <h3 className="text-xl md:text-2xl font-medium text-[#0F0A19]">
                    {plan.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-2 max-w-[350px] w-full mx-auto mt-8">
                    <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
                      {t("btns.save")}
                    </button>

                    <button
                      onClick={handleShowReviews}
                      className="border-2 border-[#3D2278] rounded-[10px] h-11 w-full text-center px-3 text-[#3D2278] text-sm md:text-base font-medium transition-colors duration-300 hover:bg-[#3D2278] hover:text-white"
                    >
                      {t("btns.reviews")} (4)
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {isVisibleReviews && (
          <div className="px-4 my-16">
            <Reviews />
          </div>
        )}

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
