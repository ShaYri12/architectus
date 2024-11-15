"use client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ReviewsForm: React.FC = () => {
  const { t } = useTranslation();
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <div className="contactformshadow rounded-2xl md:rounded-[20px] h-fit p-4 md:p-6">
      <h2 className="text-[#0F0A19] text-xl md:text-3xl font-bold">
        {t("reviewsform.addratingreviews")}
      </h2>
      <p className="text-[#0F0A19B2] text-sm md:text-base pt-5">
        {t("reviewsform.whatyouthink")}
      </p>

      <div className="flex gap-2 md:gap-4 my-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <IoStar
            key={star}
            className={`text-4xl md:text-5xl cursor-pointer hover:text-[#FFBC11] transition-all duration-300 ${
              star <= selectedRating ? "text-[#FFBC11]" : "text-[#0000001F]"
            }`}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>

      <p className="text-[#0F0A19B2] italic text-sm md:text-base mb-8">
        {t("reviewsform.addrating")}
      </p>

      <textarea
        placeholder={t("reviewsform.addreview")}
        className="border border-[#0000001F] bg-white rounded-[10px] h-[140px] md:h-[160px] p-5 placeholder:text-[#0F0A1999] text-[#0F0A19] w-full resize-none mb-7"
      ></textarea>

      <button className="bg-[#3D2278] text-white rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
        {t("btns.submit")}
      </button>
    </div>
  );
};

export default ReviewsForm;
