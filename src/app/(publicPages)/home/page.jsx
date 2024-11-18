import Image from "next/image";
import React from "react";
import bakeryPatternImg from "../../../Assets/Images/bakery_pattern 2.png";
import bakeryPatternImg1 from "../../../Assets/Images/bakery_pattern 1.png";
import serviceCardImg from "../../../Assets/Images/service card1.svg";
import serviceCardImg1 from "../../../Assets/Images/service card1.svg";
import serviceCardImg2 from "../../../Assets/Images/service card1.svg";
import breadImg from "../../../Assets/Images/breadimg.jpg";
import freshHealthImg from "../../../Assets/Images/fresh-health.png";
import yesCheckImg from "../../../Assets/Images/yes-check.png";
import arrowImg from "../../../Assets/Images/arrow.svg";
import headinglineImg from "../../../Assets/images/headingline.png";
import vegetable1Img from "../../../Assets/images/vegetable1.png";
import vegetable2Img from "../../../Assets/images/vegetable2.png";
import vegetable3Img from "../../../Assets/images/vegetable3.png";
import vegetable4Img from "../../../Assets/images/vegetable4.png";
import vegetable5Img from "../../../Assets/images/vegetable5.png";
import heartImg from "../../../Assets/images/heart.svg";
import shoppingcartImg from "../../../Assets/images/shopping-cart.svg";
import gradientclockImg from "../../../Assets/images/Gradientclock.png";
import breakfastHeroImg from "../../../Assets/images/breakfast-hero-img.png";
import organicProduct1Img from "../../../Assets/images/organic-product1.png";
import review1Img from "../../../Assets/images/review1.png";
import review2Img from "../../../Assets/images/review2.png";
import review3Img from "../../../Assets/images/review3.png";
import review4Img from "../../../Assets/images/review4.png";
import productImg from "../../../Assets/images/dough.png";

const Page = () => {
  return (
    <div className="left-sidetext-pattern">
      <section className="hero h-screen relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div class="flex flex-col items-center py-10 px-6">
            <h2 class="mb-2 font-spartan text-[20px] text-black font-bold leading-[22.4px]">
              Your Perfect Morning Starts Here
            </h2>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight font-spartan text-[50.6px] font-extrabold leading-[56.67px] max-w-[680px]">
              <span class="text-green-600">Start Your Day</span> with Fresh,
              Healthy Breakfast Baskets
              <span class="text-green-600"> Delivered to Your Door</span>
            </h1>
            <p class="text-gray-600 mt-4 text-center max-w-lg">
              Fresh, nutritious breakfast baskets tailored to your taste,
              delivered daily.
            </p>

            <div class="flex flex-col md:flex-row items-center mt-6 w-full max-w-md space-y-4 md:space-y-0 md:space-x-4 relative w-[700px]">
              <input
                type="text"
                placeholder="Search Zipcode"
                class="w-full md:flex-1 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-[50px]"
              />
              <button class="w-full md:w-auto bg-gray-800 text-black font-semibold py-3 px-6 hover:bg-gray-900 transition rounded-[50px] absolute right-0">
                Search
              </button>
            </div>

            <div class="flex space-x-4 mt-6">
              <button class="bg-black text-white py-2 px-4 hover:bg-gray-800 transition rounded-[50px]">
                Explore Baskets
              </button>
              <button class="border border-gray-300 py-2 px-4 hover:bg-gray-200 text-black transition rounded-[50px]">
                Explore Products
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="text-transparent absolute right-0 max-w-[330px] w-full z-[-1] h-auto"
            src={bakeryPatternImg}
          />
          <Image
            className="text-transparent absolute left-0 max-w-[330px] w-full z-[-1] h-auto opacity-20"
            src={bakeryPatternImg1}
          />
        </div>
      </section>
      <section className="home-services py-[60px]">
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="grid-cols-3 grid">
            <div className="px-[20px]">
              <Image
                className="flex justify-center mb-[25px] mx-auto"
                src={serviceCardImg}
              />
              <h6 className="font-normal text-[20px] text-center">
                Fresh from <b>Nutrition</b>
              </h6>
              <p className="font-normal text-[17px] text-[#525252] text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy.
              </p>
            </div>
            <div className="px-[20px]">
              <Image
                className="flex justify-center mb-[25px] mx-auto"
                src={serviceCardImg1}
              />
              <h6 className="font-normal text-[20px] text-center">
                Premium <b>Quality</b>
              </h6>
              <p className="font-normal text-[17px] text-[#525252] text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy.
              </p>
            </div>
            <div className="px-[20px]">
              <Image
                className="flex justify-center mb-[25px] mx-auto"
                src={serviceCardImg2}
              />
              <h6 className="font-normal text-[20px] text-center">
                100% <b>Natural Product </b>
              </h6>
              <p className="font-normal text-[17px] text-[#525252] text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="three-sections relative">
        <section className="fresh-health py-[60px]">
          <div className="max-w-screen-xl w-full px-4 mx-auto">
            <div className="grid-cols-2 grid items-center">
              <div>
                <Image
                  className="max-w-[500px] flex mx-auto w-full"
                  src={freshHealthImg}
                />
              </div>
              <div className="px-[40px]">
                <h6 className="text-[#62A403] text-[19px] font-medium mb-[15px]">
                  START FROM <span className="text-[#828282]">$9.99</span>
                </h6>
                <h4 className="text-[#1E1E1E] text-[50px] font-light leading-[50px]">
                  <b className='class="font-semibold"'>Fresh & Healthy</b>{" "}
                  <br /> Breakfast Items
                </h4>
                <p className="text-[#828282] text-[18px] font-light mt-[15px]">
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle.
                </p>
                <div className="flex items-center gap-[10px] mt-[30px]">
                  <Image className="w-[21px]" src={yesCheckImg} />
                  <h6 className="text-[#525252] text-[15px] font-extrabold">
                    Natural Products For{" "}
                  </h6>
                </div>
                <div className="flex items-center gap-[10px] mt-[10px]">
                  <Image className="w-[21px]" src={yesCheckImg} />
                  <h6 className="text-[#525252] text-[15px] font-extrabold">
                    Lovers of Healthy Food.
                  </h6>
                </div>
                <div>
                  <button
                    type="button"
                    className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
                  >
                    View All{" "}
                    <span>
                      <Image
                        className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                        src={arrowImg}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl w-full px-4 mx-auto">
            <div className="premium-product py-[60px]">
              <div>
                <h4 className="text-center text-[45px] text-black font-bold">
                  <b>Choose </b> Premium Product
                </h4>
                <Image className="w-[153px] mx-auto" src={headinglineImg} />
              </div>
              <div>
                <ul className="flex gap-[30px] justify-center mt-[40px]">
                  <li className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                      src={vegetable1Img}
                    />
                    <h5 className="text-[15px] font-bold text-black mt-[12px]">
                      Vegetables
                    </h5>
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                      src={vegetable2Img}
                    />
                    <h5 className="text-[15px] font-bold  text-black mt-[12px]">
                      Fruits
                    </h5>
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                      src={vegetable3Img}
                    />
                    <h5 className="text-[15px] font-bold  text-black mt-[12px]">
                      Dairy
                    </h5>
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                      src={vegetable4Img}
                    />
                    <h5 className="text-[15px] font-bold text-black mt-[12px]">
                      Breads
                    </h5>
                  </li>
                  <li className="flex flex-col justify-center items-center">
                    <Image
                      className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                      src={vegetable5Img}
                    />
                    <h5 className="text-[15px] font-bold  text-black mt-[12px]">
                      Drinks
                    </h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-screen-xl w-full px-4 mx-auto">
            <div className="grid-cols-4 grid gap-[15px] mt-[80px]">
              <div className="premium_product_card p-[10px] bg-white rounded-[10px]">
                <Image className="premium_product_cardimg" src={breadImg} />
                <h5 className="text-[18px] font-bold text-center text-black mt-[15px]">
                  Brown Bread
                </h5>
                <p className="text-[12px] text-[#9299A3] font-bold py-[15px] text-center">
                  <del>$70.00</del>{" "}
                  <span className="text-[#55B250] font-bold">$60.00</span> unit
                </p>
                <div className="flex items-center justify-center gap-[10px] mb-[30px]">
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={heartImg}
                    />
                  </a>
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={shoppingcartImg}
                    />
                  </a>
                </div>
              </div>
              <div className="premium_product_card p-[10px] bg-white rounded-[10px]">
                <Image className="premium_product_cardimg" src={breadImg} />
                <h5 className="text-[18px] font-bold text-center text-black mt-[15px]">
                  Brown Bread
                </h5>
                <p className="text-[12px] text-[#9299A3] font-bold py-[15px] text-center">
                  <del>$70.00</del>{" "}
                  <span className="text-[#55B250] font-bold">$60.00</span> unit
                </p>
                <div className="flex items-center justify-center gap-[10px] mb-[30px]">
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={heartImg}
                    />
                  </a>
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={shoppingcartImg}
                    />
                  </a>
                </div>
              </div>
              <div className="premium_product_card p-[10px] bg-white rounded-[10px]">
                <Image className="premium_product_cardimg" src={breadImg} />
                <h5 className="text-[18px] font-bold text-center text-black mt-[15px]">
                  Brown Bread
                </h5>
                <p className="text-[12px] text-[#9299A3] font-bold py-[15px] text-center">
                  <del>$70.00</del>{" "}
                  <span className="text-[#55B250] font-bold">$60.00</span> unit
                </p>
                <div className="flex items-center justify-center gap-[10px] mb-[30px]">
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={heartImg}
                    />
                  </a>
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={shoppingcartImg}
                    />
                  </a>
                </div>
              </div>
              <div className="premium_product_card p-[10px] bg-white rounded-[10px]">
                <Image className="premium_product_cardimg" src={breadImg} />
                <h5 className="text-[18px] font-bold text-center text-black mt-[15px]">
                  Brown Bread
                </h5>
                <p className="text-[12px] text-[#9299A3] font-bold py-[15px] text-center">
                  <del>$70.00</del>{" "}
                  <span className="text-[#55B250] font-bold">$60.00</span> unit
                </p>
                <div className="flex items-center justify-center gap-[10px] mb-[30px]">
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={heartImg}
                    />
                  </a>
                  <a href="#">
                    <Image
                      className="text-transparent w-[50px] h-[50px] bg-[#F5F5F5] p-[13px] rounded-full"
                      src={shoppingcartImg}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
              >
                View All
                <span>
                  <Image
                    className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                    src={arrowImg}
                  />
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="healthy-breakfast py-[60px]">
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="grid-cols-2 grid flex items-center bg-white rounded-[20px] py-[30px]">
            <div class=" max-w-[400px] mx-auto ">
              <h2 class="text-[24px] font-bold text-black ">
                Healthy Breakfast Basket
              </h2>

              <p class="text-[#55B250] font-bold text-[20px]  mt-[10px]">
                $280.00
              </p>

              <p class="text-[#828282] text-[15px]  mt-[10px]">
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the.
              </p>
              <div class="flex items-center gap-[10px] mt-[20px]">
                <div class="flex gap-[10px] font-bold rounded-full cursor-pointer items-center">
                  <span class="text-[12px]">
                    <Image
                      className="w-[16px] h-[16px]"
                      src={gradientclockImg}
                    />
                  </span>
                  <span className="text-[15px] font-bold text-[#51B150] mb-0">
                    GRAB THE OFFER
                  </span>
                </div>
              </div>

              <div class="flex gap-[15px] mt-[20px]">
                <div class="text-center">
                  <div class="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                    31
                  </div>
                  <p class="text-[12px] text-[#828282] mt-[5px]">DAYS</p>
                </div>
                <div class="text-center">
                  <div class="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                    12
                  </div>
                  <p class="text-[12px] text-[#828282] mt-[5px]">HOURS</p>
                </div>
                <div class="text-center">
                  <div class="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                    10
                  </div>
                  <p class="text-[12px] text-[#828282] mt-[5px]">MINS</p>
                </div>
                <div class="text-center">
                  <div class="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                    35
                  </div>
                  <p class="text-[12px] text-[#828282] mt-[5px]">SECS</p>
                </div>
              </div>
              <button
                type="button"
                className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
              >
                Add to Cart
                <span>
                  <Image
                    className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                    src={arrowImg}
                  />
                </span>
              </button>
            </div>
            <div>
              <Image
                className="max-w-[450px] w-full mx-auto"
                src={breakfastHeroImg}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div>
            <h4 className="text-center text-[45px] text-black font-bold">
              <b>Nutrition </b> Organic Product
            </h4>
            <Image className="w-[153px] mx-auto" src={headinglineImg} />
          </div>
          <div className="flex gap-[20px] mx-auto items-center mt-[50px]">
            <div className="relative w-[49%] mb-[10px]">
              <Image className="" src={organicProduct1Img} />
              <h6 className="absolute bottom-[60px] right-[-48px] rotate-[270deg]">
                <b>Nutrition </b> Products{" "}
              </h6>
            </div>
            <div className="relative w-[49%] mb-[10px]">
              <Image className="" src={organicProduct1Img} />
              <h6 className="absolute bottom-[70px] right-[-58px] rotate-[270deg]">
                <b>High </b> Protein Products
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="heading">
            <h4 className="text-center text-black text-[45px] font-bold">
              <b>New </b> Arrivals goods
            </h4>
            <Image className="w-[153px] mx-auto" src={headinglineImg} />
          </div>

          <div class="grid grid-cols-2 gap-6 mt-20">
            <div class="pl-[200px] mb-10">
              <div class="bg-white rounded-lg shadow-md p-4 w-full relative pl-[120px]">
                <Image
                  src={productImg}
                  className="text-transparent absolute left-[-130px] max-w-[240px]"
                />
                {/* <!-- Category Tag -->    */}
                <span class="bg-gradient-to-r from-[#92C64E] to-[#4BAF50]  text-xs px-2 py-1 rounded-full text-white">
                  FRESH
                </span>

                {/* <!-- Product Title --> */}
                <h2 class="text-2xl font-bold text-black mt-2">Brown Bread</h2>

                {/* <!-- Price --> */}
                <div class="text-green-600 text-xl font-semibold mt-1">
                  $80.00{" "}
                  <span class="text-sm font-normal text-gray-500">unit</span>
                </div>

                {/* <!-- Description --> */}
                <p class="text-gray-500 mt-2">
                  Apparently we had reached a great height in the atmosphere,
                </p>

                {/* <!-- Rating --> */}
                <div class="flex items-center mt-2">
                  <div class="flex text-yellow-500">
                    {/* <!-- Star Ratings --> */}
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                  </div>
                  <span class="text-gray-500 text-sm ml-2">(01)</span>
                </div>

                {/* <!-- Bottom Section with Quantity and Buttons --> */}
                <div class="flex items-center justify-between mt-4">
                  {/* <!-- Quantity Selector --> */}
                  <div class="flex items-center space-x-2">
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      -
                    </button>
                    <span class="text-gray-700">1</span>
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      +
                    </button>
                  </div>

                  {/* <!-- Icons for Favorite and Cart --> */}
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-gray-100 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image className="w-full h-full" src={heartImg} />
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-green-500 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image
                        className="w-full h-full text-white"
                        src={shoppingcartImg}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-[200px] mb-10">
              <div class="bg-white rounded-lg shadow-md p-4 w-full relative pl-[120px]">
                <Image
                  src={productImg}
                  className="text-transparent absolute left-[-130px] max-w-[240px]"
                />
                {/* <!-- Category Tag -->    */}
                <span class="bg-gradient-to-r from-[#92C64E] to-[#4BAF50]  text-xs px-2 py-1 rounded-full text-white">
                  FRESH
                </span>

                {/* <!-- Product Title --> */}
                <h2 class="text-2xl font-bold text-black mt-2">Brown Bread</h2>

                {/* <!-- Price --> */}
                <div class="text-green-600 text-xl font-semibold mt-1">
                  $80.00{" "}
                  <span class="text-sm font-normal text-gray-500">unit</span>
                </div>

                {/* <!-- Description --> */}
                <p class="text-gray-500 mt-2">
                  Apparently we had reached a great height in the atmosphere,
                </p>

                {/* <!-- Rating --> */}
                <div class="flex items-center mt-2">
                  <div class="flex text-yellow-500">
                    {/* <!-- Star Ratings --> */}
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                  </div>
                  <span class="text-gray-500 text-sm ml-2">(01)</span>
                </div>

                {/* <!-- Bottom Section with Quantity and Buttons --> */}
                <div class="flex items-center justify-between mt-4">
                  {/* <!-- Quantity Selector --> */}
                  <div class="flex items-center space-x-2">
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      -
                    </button>
                    <span class="text-gray-700">1</span>
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      +
                    </button>
                  </div>

                  {/* <!-- Icons for Favorite and Cart --> */}
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-gray-100 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image className="w-full h-full" src={heartImg} />
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-green-500 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image
                        className="w-full h-full text-white"
                        src={shoppingcartImg}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-[200px] mb-10">
              <div class="bg-white rounded-lg shadow-md p-4 w-full relative pl-[120px]">
                <Image
                  src={productImg}
                  className="text-transparent absolute left-[-130px] max-w-[240px]"
                />
                {/* <!-- Category Tag -->    */}
                <span class="bg-gradient-to-r from-[#92C64E] to-[#4BAF50]  text-xs px-2 py-1 rounded-full text-white">
                  FRESH
                </span>

                {/* <!-- Product Title --> */}
                <h2 class="text-2xl font-bold text-black mt-2">Brown Bread</h2>

                {/* <!-- Price --> */}
                <div class="text-green-600 text-xl font-semibold mt-1">
                  $80.00{" "}
                  <span class="text-sm font-normal text-gray-500">unit</span>
                </div>

                {/* <!-- Description --> */}
                <p class="text-gray-500 mt-2">
                  Apparently we had reached a great height in the atmosphere,
                </p>

                {/* <!-- Rating --> */}
                <div class="flex items-center mt-2">
                  <div class="flex text-yellow-500">
                    {/* <!-- Star Ratings --> */}
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                  </div>
                  <span class="text-gray-500 text-sm ml-2">(01)</span>
                </div>

                {/* <!-- Bottom Section with Quantity and Buttons --> */}
                <div class="flex items-center justify-between mt-4">
                  {/* <!-- Quantity Selector --> */}
                  <div class="flex items-center space-x-2">
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      -
                    </button>
                    <span class="text-gray-700">1</span>
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      +
                    </button>
                  </div>

                  {/* <!-- Icons for Favorite and Cart --> */}
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-gray-100 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image className="w-full h-full" src={heartImg} />
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-green-500 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image
                        className="w-full h-full text-white"
                        src={shoppingcartImg}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="pl-[200px] mb-10">
              <div class="bg-white rounded-lg shadow-md p-4 w-full relative pl-[120px]">
                <Image
                  src={productImg}
                  className="text-transparent absolute left-[-130px] max-w-[240px]"
                />
                {/* <!-- Category Tag -->    */}
                <span class="bg-gradient-to-r from-[#92C64E] to-[#4BAF50]  text-xs px-2 py-1 rounded-full text-white">
                  FRESH
                </span>

                {/* <!-- Product Title --> */}
                <h2 class="text-2xl font-bold text-black mt-2">Brown Bread</h2>

                {/* <!-- Price --> */}
                <div class="text-green-600 text-xl font-semibold mt-1">
                  $80.00{" "}
                  <span class="text-sm font-normal text-gray-500">unit</span>
                </div>

                {/* <!-- Description --> */}
                <p class="text-gray-500 mt-2">
                  Apparently we had reached a great height in the atmosphere,
                </p>

                {/* <!-- Rating --> */}
                <div class="flex items-center mt-2">
                  <div class="flex text-yellow-500">
                    {/* <!-- Star Ratings --> */}
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                    <svg
                      class="w-5 h-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L23 9.748l-5.668 5.527L18.335 23 12 19.764 5.665 23l1.003-7.725L1 9.748l7.332-1.73L12 .587z" />
                    </svg>
                  </div>
                  <span class="text-gray-500 text-sm ml-2">(01)</span>
                </div>

                {/* <!-- Bottom Section with Quantity and Buttons --> */}
                <div class="flex items-center justify-between mt-4">
                  {/* <!-- Quantity Selector --> */}
                  <div class="flex items-center space-x-2">
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      -
                    </button>
                    <span class="text-gray-700">1</span>
                    <button class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      +
                    </button>
                  </div>

                  {/* <!-- Icons for Favorite and Cart --> */}
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-gray-100 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image className="w-full h-full" src={heartImg} />
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-green-500 p-2 rounded-full flex items-center justify-center"
                    >
                      <Image
                        className="w-full h-full text-white"
                        src={shoppingcartImg}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#92C64E] py-[60px]">
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="grid-cols-4 grid">
            <div className="flex gap-[15px] items-center">
              <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center">
                <Image className="w-[60px]" src={review1Img} />
              </div>
              <div>
                <h6 className="text-[40px] font-extrabold text-white">1,544</h6>
                <p className="text-[#E2E2E2] text-[20px] font-medium">
                  Satisfied Clients
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center">
                <Image className="w-[60px]" src={review2Img} />
              </div>
              <div>
                <h6 className="text-[40px] font-extrabold text-white">678</h6>
                <p className="text-[#E2E2E2] text-[20px] font-medium">
                  Expert Team
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center">
                <Image className="w-[60px]" src={review3Img} />
              </div>
              <div>
                <h6 className="text-[40px] font-extrabold text-white">285</h6>
                <p className="text-[#E2E2E2] text-[20px] font-medium">
                  Activate Products
                </p>
              </div>
            </div>
            <div className="flex gap-[15px] items-center">
              <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center">
                <Image className="w-[60px]" src={review4Img} />
              </div>
              <div>
                <h6 className="text-[40px] font-extrabold text-white">27</h6>
                <p className="text-[#E2E2E2] text-[20px] font-medium">
                  Awards Winning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[60px]">
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="flex items-center">
            <div className="exclusive-offer bg-[url(../assets/images/offerbg.png)] bg-cover p-[40px] w-[40%] min-h-[230px] rounded-tl-[10px] rounded-bl-[10px]">
              <p className="text-[#4FB050] text-[15px] font-medium">
                DON’T MISS OUR DEALS.
              </p>
              <h6 className="text-[#F4F4F4] font-extrabold text-[40px] leading-[45px]">
                EXCLUSIVE{" "}
              </h6>
              <h6 className="text-[#F4F4F4] font-extrabold text-[40px] leading-[45px]">
                OFFERS & SALE
              </h6>
              <p className="text-[#4FB050] text-[15px] font-medium mt-[20px]">
                Sign up and get a voucher of worth $250.00
              </p>
            </div>
            <div className="w-[60%] bg-[url(../assets/images/Clip-path-group.png)] bg-cover p-[40px] bg-[#ffe3df] min-h-[230px] rounded-tr-[10px] rounded-br-[10px]">
              <div className="">
                <div className="max-w-[500px] w-full flex flex-col items-center justify-center mx-auto">
                  <input
                    className=" p-[18px] px-[20px] rounded-full w-full"
                    type="text"
                    id="first_name"
                    placeholder="Email Address"
                    required
                  />
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[20px]"
                  >
                    Subsrcribe Now<span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
