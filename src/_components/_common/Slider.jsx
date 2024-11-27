"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGE_CATEGORY } from "@/_constants/constant";
import Image from "next/image";

function CategoryCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="relative w-full h-full">
      <Slider {...settings}>
        {IMAGE_CATEGORY.map((category, index) => (
          <div key={index} className="w-full">
            <div className=" w-full h-96 transition-transform duration-100 ease-in-out">
              <Image
                src={category.image}
                alt={"product_image"}
                layout="fill"
                objectFit="contain"
                className="transition-all duration-100 ease-in-out"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
