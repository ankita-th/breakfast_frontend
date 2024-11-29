"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGE_CATEGORY } from "@/_constants/constant";
import Image from "next/image";

const CategoryCarousel=({image_url})=>{
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
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
        {image_url?.map((category, index) => (
          <div key={index} className="w-full">
            <div className=" w-full h-50 transition-transform  ">
              <img
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
