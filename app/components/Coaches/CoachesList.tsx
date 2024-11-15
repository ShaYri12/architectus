"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { MdOutlineTextsms } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

import ShareModal from "../Visualization/ShareModal";
import Reviews from "../Reviews";

const coachesData = [
  {
    id: 0,
    name: "John Doe",
    image: "/assets/coaches-1.png",
    specialties: ["Cross Fit", "Boxing"],
    profileLink: "/profile/john-doe",
    coachvideo1: "/assets/video-4.mp4",
    coachvideo2: "/assets/video-1.mp4",
    videoThumbnail1: "/assets/thumbnail-4.jpg",
    videoThumbnail2: "/assets/video-thumbnail.jfif",
    videotitle1: "How I Got to 11.6% Body Fat in 60 Days",
    videotitle2: "Exercise Tutorial - Squat",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 1,
    name: "Esthera Jackson",
    image: "/assets/coaches-2.png",
    specialties: ["Circuit", "Cross Fit", "Boxing"],
    profileLink: "/profile/esthera-jackson",
    coachvideo1: "/assets/video-2.mp4",
    coachvideo2: "/assets/video-5.mp4",
    videoThumbnail1: "/assets/thubnail-2.jpg",
    videoThumbnail2: "/assets/thumbnail-5.jpg",
    videotitle1: "Best 7 ABS Exercises For SIX PACK",
    videotitle2: "Best Kickboxing: Thai or Dutch?",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 2,
    name: "Alexa Liras",
    image: "/assets/coaches-3.png",
    specialties: ["Strength", "Boxing"],
    profileLink: "/profile/alexa-liras",
    coachvideo1: "/assets/video-3.mp4",
    coachvideo2: "/assets/video-6.mp4",
    videoThumbnail1: "/assets/thumbnail-3.jpg",
    videoThumbnail2: "/assets/thumbnail-6.jpg",
    videotitle1: "The Best Workout Routine",
    videotitle2: "The ONLY 2 Exercises That Built My Six Pack Abs",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
  {
    id: 3,
    name: "Laurent Michael",
    image: "/assets/coaches-4.png",
    specialties: ["Strength", "Boxing"],
    profileLink: "/profile/laurent-michael",
    coachvideo1: "/assets/video-2.mp4",
    coachvideo2: "/assets/video-5.mp4",
    videoThumbnail1: "/assets/thubnail-2.jpg",
    videoThumbnail2: "/assets/thumbnail-5.jpg",
    videotitle1: "Best 7 ABS Exercises For SIX PACK",
    videotitle2: "Best Kickboxing: Thai or Dutch?",
    disc: "Concrete is an artificial composite material, comprising a matrix of cementitious binder (typically Portland cement paste or asphalt) and a dispersed phase or filler of aggregate (typically a rocky material, loose stones, and sand).",
    language: "English",
    countryflag: "/assets/english-language-flag.svg",
  },
];

interface CoachesListProps {
  showSingle?: boolean;
}

const CoachesList: React.FC<CoachesListProps> = ({ showSingle = false }) => {
  const { t } = useTranslation();
  const [visibleCoachId, setVisibleCoachId] = useState<number>(0);
  const [isShareModalVisible, setIsShareModalVisible] = useState<number | null>(
    null
  );
  const [isVisibleReviews, setIsVisibleReviews] = useState<boolean>(false);
  const [isPlayingFirst, setIsPlayingFirst] = useState<boolean>(false);
  const [isPlayingSecond, setIsPlayingSecond] = useState<boolean>(false);
  const videoRefFirst = useRef(null);
  const videoRefSecond = useRef(null);

  const handleToggleDetails = (id: number) => {
    setVisibleCoachId(visibleCoachId === id ? null : id);
  };

  const handleOpenShareModal = (id: number) => {
    setIsShareModalVisible(id);
  };

  const handleCloseShareModal = () => {
    setIsShareModalVisible(null);
  };

  const handleShowReviews = () => {
    setIsVisibleReviews(!isVisibleReviews);
  };

  const displayedCoaches = showSingle ? [coachesData[0]] : coachesData;

  const handlePlayFirst = () => {
    setIsPlayingFirst(true);
    if (videoRefFirst.current) {
      videoRefFirst.current.play();
    }
  };

  const handlePauseFirst = () => {
    setIsPlayingFirst(false);
    if (videoRefFirst.current) {
      videoRefFirst.current.pause();
    }
  };

  const handlePlaySecond = () => {
    setIsPlayingSecond(true);
    if (videoRefSecond.current) {
      videoRefSecond.current.play();
    }
  };

  const handlePauseSecond = () => {
    setIsPlayingSecond(false);
    if (videoRefSecond.current) {
      videoRefSecond.current.pause();
    }
  };

  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="max-w-[1180px] w-full mx-auto flex flex-col gap-6">
        {displayedCoaches.map((coach) => (
          <div
            key={coach.id}
            className="shadow-2 bg-white rounded-2xl md:rounded-[20px] overflow-hidden"
          >
            {/* Button */}
            <button
              className={`flex w-full gap-4 flex-col py-5 px-4 md:px-[30px] text-left ${
                visibleCoachId === coach.id ? "faq" : "bg-white"
              }`}
              onClick={() => handleToggleDetails(coach.id)}
            >
              <div className="flex items-center w-full justify-between">
                {/* Coach Profile & name  */}
                <div className="flex items-center gap-4">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    width={100}
                    height={100}
                    loading="lazy"
                    className="w-11 md:w-14 h-11 md:h-14 rounded-full object-cover"
                  />
                  <h2 className="text-[#0F1017] text-sm md:text-xl font-semibold">
                    {coach.name}
                  </h2>
                </div>

                <div className="ml-6 flex h-7 items-center">
                  <div className="flex gap-7 items-center">
                    {/* Specilty itmes show when details div close */}
                    <div
                      className={`gap-3 items-center ${
                        visibleCoachId === coach.id
                          ? "hidden"
                          : "hidden md:flex"
                      }`}
                    >
                      {coach.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 md:gap-7">
                      <Image
                        src="/assets/icons/share-icon.svg"
                        alt="share-icon"
                        width={44}
                        height={44}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenShareModal(coach.id);
                        }}
                        loading="lazy"
                      />

                      {/* Plus & Minus Icon  */}
                      <Image
                        src={
                          visibleCoachId === coach.id
                            ? "/assets/icons/minus.svg"
                            : "/assets/icons/plus.svg"
                        }
                        alt="icon"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Specilty Show on mobile & hide one desktop */}
              <div
                className={`gap-3 items-center flex-wrap ${
                  visibleCoachId === coach.id ? "hidden" : "flex md:hidden"
                }`}
              >
                {coach.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </button>

            {/* Details section */}
            {visibleCoachId === coach.id && (
              <div className="mt-6 pb-7 px-4 md:px-8">
                <div className="flex flex-col gap-6">
                  {/* Video With title  */}
                  <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <div className="rounded-lg overflow-hidden h-[200px] md:h-[300px] mb-4">
                        {isPlayingFirst ? (
                          <video
                            ref={videoRefFirst}
                            src={coach.coachvideo1}
                            loop
                            autoPlay
                            muted
                            controls
                            className="w-full h-full object-cover"
                            onPause={handlePauseFirst}
                          ></video>
                        ) : (
                          <div className="relative w-full h-full">
                            <img
                              src={coach.videoThumbnail1}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={handlePlayFirst}
                              className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
                            >
                              <FaPlay />
                            </button>
                          </div>
                        )}
                      </div>
                      <h2 className="text-[#0F1017] text-base font-medium mt-5">
                        {coach.videotitle1}
                      </h2>
                    </div>

                    <div className="hidden md:block">
                      <div className="rounded-lg overflow-hidden h-[200px] md:h-[300px]">
                        {isPlayingSecond ? (
                          <video
                            ref={videoRefSecond}
                            src={coach.coachvideo2}
                            loop
                            autoPlay
                            muted
                            controls
                            className="w-full h-full object-cover"
                            onPause={handlePauseSecond}
                          ></video>
                        ) : (
                          <div className="relative w-full h-full">
                            <img
                              src={coach.videoThumbnail2}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                            <button
                              onClick={handlePlaySecond}
                              className="bg-[#3D2278] text-white text-base flex items-center justify-center transition-opacity duration-300 hover:opacity-90 w-12 h-12 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto"
                            >
                              <FaPlay />
                            </button>
                          </div>
                        )}
                      </div>

                      <h2 className="text-[#0F1017] text-base font-medium mt-5">
                        {coach.videotitle2}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-[#0F1017]">
                    {coach.disc}
                  </p>

                  <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                    <h3 className="text-lg font-semibold">Training Types:</h3>

                    <div className="flex flex-wrap gap-3 items-center">
                      {coach.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[10px] px-5 py-1"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                    <h3 className="text-lg font-semibold">
                      {t("coaches.language")}:
                    </h3>

                    <div className="flex gap-3 items-center">
                      <span className="bg-[#3D2278]/10 text-[#0F1017] text-sm rounded-[30px] px-4 py-[10px] flex items-center gap-2">
                        <Image
                          src={coach.countryflag}
                          alt={coach.language}
                          width={30}
                          height={20}
                          loading="lazy"
                          className="3px"
                        />
                        {coach.language}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
                    <h3 className="text-lg font-semibold">
                      {t("coaches.socialmedia")}
                    </h3>

                    {/* Social Media ICons  */}
                    <div className="flex gap-4 items-center">
                      <Link
                        href="#"
                        className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                      >
                        <Image
                          src="/assets/icons/globe.svg"
                          alt="globe"
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                      </Link>

                      <Link
                        href="#"
                        className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                      >
                        <Image
                          src="/assets/icons/instagram.svg"
                          alt="instagram"
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                      </Link>

                      <Link
                        href="#"
                        className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                      >
                        <Image
                          src="/assets/icons/youtube.svg"
                          alt="youtube"
                          width={20}
                          height={14}
                          loading="lazy"
                        />
                      </Link>

                      <Link
                        href="#"
                        className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                      >
                        <MdOutlineTextsms className="opacity-80" />
                      </Link>

                      <Link
                        href="#"
                        className="shadow-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[#3D2278]"
                      >
                        <IoCallOutline className="opacity-80" />
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`grid grid-cols-2 mx-auto gap-3 max-w-[350px] w-full ${
                      isVisibleReviews ? "mb-10" : "mb-0"
                    }`}
                  >
                    <button className="bg-[#3D2278] text-white rounded-[10px] h-11 w-full text-center px-3 text-sm md:text-base font-medium transition-opacity duration-300 hover:opacity-90">
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

                {isVisibleReviews && <Reviews />}
              </div>
            )}
          </div>
        ))}

        {isShareModalVisible && <ShareModal onClose={handleCloseShareModal} />}
      </div>
    </section>
  );
};

export default CoachesList;
