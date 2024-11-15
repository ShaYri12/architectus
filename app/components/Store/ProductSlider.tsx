"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Reviews from "../Reviews";

const products = [
  {
    id: 1,
    image: "/assets/product-1.jpg",
    name: "Loaded",
    brand: "4Endurance Pro",
    originalPrice: "€29,90",
    discountedPrice: "€19,43",
    link: "https://www.trufit.eu/lv/4endurance-pro-loaded#168=422",
  },
  {
    id: 2,
    image: "/assets/product-2.jpg",
    name: "Pro Flex",
    brand: "Smartys",
    originalPrice: "€39,90",
    discountedPrice: "€25,93",
    link: "https://www.trufit.eu/lv/4endurance-pro-pro-flex#168=1256",
  },
  {
    id: 3,
    image: "/assets/product-3.jpg",
    name: "L-Carnitine Energy Gel",
    brand: "Bowflex",
    originalPrice: "€2,49",
    discountedPrice: "€1,62",
    link: "https://www.trufit.eu/lv/4endurance-pro-l-carnitine-energy-gel#168=1288",
  },
  {
    id: 4,
    image: "/assets/product-4.jpg",
    name: "Acetyl-L-Carnitine",
    brand: "4Endurance Pro",
    originalPrice: "€24,90",
    discountedPrice: "€16,18",
    link: "https://www.trufit.eu/lv/4endurance-pro-acetyl-l-carnitine#168=422",
  },
];

const ProductSlider: React.FC = () => {
  const { t } = useTranslation();
  const [isVisibleReviews, setIsVisibleReviews] = useState<Boolean>(false);


  const handleShowReviews = () => {
    setIsVisibleReviews(!isVisibleReviews);
  };

  return (
    <div className="mb-12">
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
        {/* Loop through the products array and render each product as a SwiperSlide */}
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white productbox rounded-[14px] overflow-hidden mb-14 md:mb-20">
              <div className="h-[260px] w-full bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="py-4 px-5 bg-white">
                <h2 className="text-[#0F0A19] font-semibold text-xl mb-4">
                  {product.name}
                </h2>

                <div className="flex flex-col gap-4 mb-5">
                  <div className="flex justify-between gap-2">
                    <p className="text-[#0F0A19] text-sm">{t("store.brand")}:</p>
                    <p className="text-sm font-semibold text-[#0F0A19]">
                      {product.brand}
                    </p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <p className="text-[#0F0A19] text-sm">{t("store.price")}:</p>
                    <p className="text-sm text-[#FF3A5E] line-through font-medium">
                      {product.originalPrice}
                    </p>
                  </div>
                  <div className="flex justify-between gap-2">
                    <p className="text-[#0F0A19] text-sm">{t("store.discountedprice")}:</p>
                    <p className="text-sm font-bold text-[#3D2278]">
                      {product.discountedPrice}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={product.link}
                    target="_blank"
                    className="bg-[#3D2278] text-white rounded-[10px] w-full h-11 flex items-center justify-center text-center px-3 text-sm tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90"
                  >
                    {t("btns.buynow")}
                  </Link>
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
    </div>
  );
};

export default ProductSlider;
