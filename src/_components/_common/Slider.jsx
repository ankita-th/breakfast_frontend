import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseURL } from "@/_utils/helpers";

export default function SimpleSlider({image_url}) {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 py-10">
      <Slider {...settings}>
        {image_url?.map((category, index) => (
          <div key={index} className="w-full">
            <div className=" w-full h-50 transition-transform  ">
              <img
                src={`${baseURL}${category.image}`}
                alt={"product_image"}
                layout="fill"
                width={500}
                height={500}
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
