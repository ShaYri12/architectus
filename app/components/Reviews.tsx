"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MdOutlineStarPurple500 } from "react-icons/md";
import ReviewsForm from "./ReviewsForm";

const reviewsData = [
  {
    id: 1,
    name: "Rafael Marquez",
    date: "June 28, 2019",
    image: "/assets/user-review-1.png",
    reviewText:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil quo impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda.",
    rating: 5,
  },
  {
    id: 2,
    name: "Barbara Palson",
    date: "May 17, 2019",
    image: "/assets/user-review-2.png",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    id: 3,
    name: "John Smith",
    date: "April 10, 2019",
    image: "/assets/user-review-1.png",
    reviewText:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 3,
  },
  {
    id: 4,
    name: "Anna Johnson",
    date: "March 3, 2019",
    image: "/assets/user-review-2.png",
    reviewText:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4,
  },
];

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleLoadMore = () => {
    setVisibleReviews(reviewsData.length);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1180px] w-full mx-auto">
      <div>
        <div className="mb-3">
          <h2 className="text-2xl font-semibold text-[#0F0A19]">
            {t("btns.reviews")} <span>({reviewsData.length})</span>
          </h2>
        </div>

        <div>
          {reviewsData.slice(0, visibleReviews).map((review) => (
            <div
              key={review.id}
              className="flex flex-col gap-4 py-6 border-b border-[#0F0A1924]"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  loading="lazy"
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#0F0A19] text-sm font-bold">
                    {review.name}
                  </h2>
                  <p className="text-[#0F0A19] text-xs">{review.date}</p>
                </div>
              </div>

              <p className="text-[#0F0A19] text-sm">{review.reviewText}</p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <MdOutlineStarPurple500
                    key={index}
                    className={
                      index < review.rating
                        ? "text-[#FFBC11] text-xl"
                        : "text-gray-300 text-xl"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {visibleReviews < reviewsData.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="flex items-center justify-center gap-3 border border-[#3D2278] text-[#3D2278] h-10 px-5 rounded-[10px] text-sm"
            >
              <Image
                src="/assets/icons/loader-icon.svg"
                alt="loader icon"
                width={16}
                height={16}
                loading="lazy"
              />
              <span>{t("btns.loadmore")}</span>
            </button>
          </div>
        )}
      </div>

      <ReviewsForm />
    </div>
  );
};

export default Reviews;
