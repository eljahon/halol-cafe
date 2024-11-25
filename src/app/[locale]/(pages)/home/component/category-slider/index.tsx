"use client";

import React, { FC, useEffect } from "react";
import Slider from "react-slick";
import { useTranslations } from "next-intl";
import { categoryImages } from "@/constants/data";
import { Link } from "@/hooks/locale";
import { useLocale } from "next-intl";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TLocale } from "@/types";

/// Import Image's

export const CategorySlider: FC = () => {
  const settings = {
    slidesToShow: 3,
    infinite: false,
    speed: 500,
  };

  const t = useTranslations();
  const locale = useLocale() as TLocale;
  // useEffect(() => {
  //   const categorySlider = document.getElementById("category-slider");
  //   // if (categorySlider) {
  //     window.addEventListener("scroll", () => {
  //       console.log(window.scrollY, "window.scrollY =>>>");

  //   });
  // }, []);
  return (
    <div>
      <Slider {...settings}>
        {categoryImages.map((item) => (
          <div key={item.id}>
            <Link
              href={`/categoryDetail/${item.id}`}
              locale={locale}
              className={`relative mx-auto my-5 flex h-[100px] w-[110px] flex-col items-center justify-between rounded-[20px] border-[1px] border-Clr611F bg-white py-1 shadow-bannerItemBoxShadow xsm:w-[120px]`}
            >
              <Image
                width={80}
                src={item.src}
                alt={`Banner ${item.id + 1}`}
                className="object-contain"
                priority={item.id === 0}
              />
              <p className="font-poppins font-normal">{t(item.title)}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
