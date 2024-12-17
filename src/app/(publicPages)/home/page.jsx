"use client";
import Image from "next/image";
import bakeryPatternImg from "../../../../public/images/bakery_pattern 2.png";
import bakeryPatternImg1 from "../../../../public/images/bakery_pattern 1.png";
import freshHealthImg from "../../../../public/images/fresh-health.png";
import yesCheckImg from "../../../../public/images/yes-check.png";
import arrowImg from "../../../../public/images/arrow.svg";
import headinglineImg from "../../../../public/images/headingline.png";
import vegetable1Img from "../../../../public/images/vegetable1.png";
import vegetable2Img from "../../../../public/images/vegetable2.png";
import vegetable3Img from "../../../../public/images/vegetable3.png";
import vegetable4Img from "../../../../public/images/vegetable4.png";
import vegetable5Img from "../../../../public/images/vegetable5.png";
import gradientclockImg from "../../../../public/images/Gradientclock.png";
import breakfastHeroImg from "../../../../public/images/breakfast-hero-img.png";
import organicProduct1Img from "../../../../public/images/organic-product1.png";
import review1Img from "../../../../public/images/review1.png";
import review2Img from "../../../../public/images/review2.png";
import review3Img from "../../../../public/images/review3.png";
import review4Img from "../../../../public/images/review4.png";
import productImg from "../../../../public/images/dough.png";
import subtractImg from "../../../../public/images/Subtract.svg";
import {
  ARRIVAL_CARDS,
  PREMIUM_CARD,
  PRODUCT_LIST,
  SERVICE_CARD,
} from "@/app/_constant/Constant";
import PremiumCard from "@/_components/_common/PremiumCard";
import ItemCounter from "@/_components/_common/ItemCounter";
import { T } from "@/_utils/LanguageTranslator";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { successType, toastMessages } from "@/_utils/toastMessage";
import Button from "@/_components/_common/Button";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_ERROR_MESSAGE, stripHtmlTags } from "@/_constants/constant";
// import { StarFilledIcon, StarIcon } from "@/assets/Icons/Svg";
import ExclusiveOfferBanner from "@/_components/_common/ExclusiveOfferBanner";
import moment from "moment";
import ProductCard from "@/_components/_common/Card/ProductCard";
import { setWishList } from "@/Redux/addToWishListSlice";
import breadImg from "../../../../public/images/breadimg.jpg";
import {
  ADD_TO_CART,
  BASKETS,
  NEW_ARRIVAL_PRODUCTS,
  PREMIUM_PRODUCTS,
  WISHLIST,
} from "@/_Api-Handlers/APIUrls";
import { setSelectedBasket } from "@/Redux/addToBasketSlice";
import AddLoginModal from "@/_components/_common/Modals/AddLoginModal";
import { StarFilledIcon, StarIcon } from "@/Assets/Icons/Svg";
import SimpleSlider, {
  CarouselDefault,
  CarouselWithContent,
} from "@/_components/_common/Slider";
import { baseURL } from "@/_utils/helpers";
import Slider from "react-slick";
import Cart from "@/_components/Cart";
// import Summary from "@/_components/_common/Summary";
// import Cart from "@/_components/Cart";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [basketDetails, setBasketDetails] = useState();
  const [premiumProducts, setPremiumProducts] = useState();
  const [newArrivals, setNewArrivals] = useState();
  const [like, setLike] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [itemCount, setItemCount] = useState(0);
  const { selectedBasket } = useSelector((state) => state.addToBasket);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    callApi({
      endPoint: BASKETS,
      method: METHODS.get,
      params: {
        page: 1,
      },
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        console.log(res.data, "res");
        setBasketDetails(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  useEffect(() => {
    callApi({
      endPoint: PREMIUM_PRODUCTS,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        // console.log(res.data, "premium_products");
        // setPremiumProducts(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  useEffect(() => {
    callApi({
      endPoint: NEW_ARRIVAL_PRODUCTS,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        setNewArrivals(res.data);
      })
      .catch((err) => {
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  const handleViewAll = () => {
    router.push("/products");
  };

  const addToWishlist = async (e, item, status) => {
    console.log(item?.wishlist_id, "item");
    e.stopPropagation();
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginModal(true);
    } else {
      setSelectedId(item?.id);
      setLike(!like);
      if (
        // !like &&
        status === "not_added"
      ) {
        console.log(status, "status");
        await callApi({
          endPoint: WISHLIST,
          method: METHODS.post,
          instanceType: INSTANCE.authorize,
          payload: {
            product_id: item?.id,
          },
        });
        const res = await callApi({
          endPoint: PREMIUM_PRODUCTS,
          method: METHODS.get,
          instanceType: INSTANCE.authorize,
        });
        dispatch(setWishList(res.data.products));
        toastMessages("Added To Wishlist", successType);
      } else {
        await callApi({
          endPoint: `wishlist/${item?.wishlist_id}/delete/`,
          method: METHODS.delete,
          instanceType: INSTANCE.authorize,
        });
        const res = await callApi({
          endPoint: PREMIUM_PRODUCTS,
          method: METHODS.get,
          instanceType: INSTANCE.authorize,
        });
        toastMessages(res.data.message, successType);
        // .catch((err) => {
        //   toastMessages(
        //     err?.response?.data?.non_field_errors[0] || DEFAULT_ERROR_MESSAGE
        //   )
        // }
      }
    }
  };
  console.log(selectedBasket, "selectedBasket");

  const addToCart = (product) => {
    console.log(product?.product_detail?.variants?.[0]?.id, "product");
    callApi({
      endPoint: ADD_TO_CART,
      method: METHODS.post,
      instanceType: INSTANCE.authorize,
      payload: {
        product_variants: [product?.product_detail?.variants?.[0]?.id],
        // baskets: selectedBasket.id ? selectedBasket.id : undefined,
      },
    })
      .then((res) => {
        console.log(res.data, "response");
        setCartItems(res.data);
      })
      .catch((err) => {
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  };

  const addToBasket = (product, quantity) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    callApi({
      endPoint: `/user-basket/${selectedBasket.id}/`,
      method: METHODS.post,
      instanceType: INSTANCE.authorize,
      payload: {
        products: [
          {
            product_id: product.id,
            quantity: quantity,
          },
        ],
      },
    })
      .then((res) => {
        console.log(res.data, "response");

        toastMessages(res.data.message, successType);
      })
      .catch((err) => {
        console.log(err, "eror");
        // toastMessages(
        //   err?.response?.data?.non_field_errors[0] || DEFAULT_ERROR_MESSAGE
        // );
      });
  };
  // };

  const handleBasket = (item) => {
    dispatch(setSelectedBasket(item));
  };

  const handleChoose = () => {
    router.push("/products");
  };

  const getDuration = (newDate) => {
    const date = newDate?.slice(0, 10);
    const moment = require("moment");
    const currentDate = moment();
    const targetDate = moment(date);
    const duration = moment.duration(targetDate.diff(currentDate));
    // return duration.days();
    // setDays(duration.days());
    // setHours(duration.hours());
    // setMinutes(duration.minutes());
    // setSeconds(duration.seconds());
  };
  console.log(selectedBasket, "selectedBasket");

  console.log(basketDetails, "basketDetails");

  return (
    <div className="hero-bg-img">
      <div className="left-sidetext-pattern">
        <section className="hero min-h-screen flex items-center justify-center">
          <div>
            <div className="flex flex-col items-center py-10 px-6">
              <h2 className="mb-2 font-spartan text-[20px] text-black font-bold leading-[22.4px]">
                {T.your_perfect_morning_start}
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight font-spartan text-[50.6px] font-extrabold leading-[56.67px] max-w-[680px]">
                <span className="text-green-600">{T.start_your_day}</span>
                {T.fresh},{T.healthy_breakfast_baskets}
                <span className="text-green-600">
                  {T.delivered_to_your_door}
                </span>
              </h1>
              <p className="text-gray-600 mt-4 text-center max-w-lg">
                {T.nutritious_basket}
              </p>

              <div className="flex flex-col md:flex-row items-center mt-6 w-full max-w-md space-y-4 md:space-y-0 md:space-x-4 relative w-[700px]">
                <input
                  type="text"
                  placeholder="Search Zipcode"
                  className="w-full md:flex-1 p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-[50px]"
                />
                <button className="w-full md:w-auto bg-gray-800 text-black font-semibold py-3 px-6 hover:bg-gray-900 transition rounded-[50px] absolute right-0 text-white">
                  {T.search}
                </button>
              </div>

              <div className="flex space-x-4 mt-6">
                <button className="bg-black text-white py-2 px-4 hover:bg-gray-800 transition rounded-[50px]">
                  {T.explore_baskets}
                </button>
                <button className="border border-gray-300 py-2 px-4 hover:bg-gray-200 text-black transition rounded-[50px]">
                  {T.explore_products}
                </button>
              </div>
            </div>
          </div>
          {/* <div>
          <Image
            className="text-transparent absolute right-0 max-w-[330px] w-full z-[-1] h-auto"
            src={bakeryPatternImg}
            alt="bakeryImg"
          />
          <Image
            className="text-transparent absolute left-0 max-w-[330px] w-full z-[-1] h-auto opacity-20"
            src={bakeryPatternImg1}
            alt="bakeryImg"
          />
        </div> */}
        </section>
        <section className="home-services py-[60px] md:py-[50px]">
          <div className="max-w-screen-xl w-full px-4 mx-auto">
            <div className="grid-cols-3 grid">
              {SERVICE_CARD.map((item, index) => (
                <div className="px-[20px]" key={index}>
                  <Image
                    className="flex justify-center mb-[25px] mx-auto w-[100px] md:w-[130px]"
                    src={item?.logo_img}
                    alt="serviceImg"
                  />
                  <h6 className="font-normal md:text-[20px] text-black text-center text-[18px]">
                    <p>
                      {item.heading}
                      <b>{item?.subHeading}</b>
                    </p>
                  </h6>
                  <p className="font-normal text-[15px] text-[#828282] text-center md:text-[17px]">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="three-sections relative">
          <section className="fresh-health py-[60px] relative z-0">
            <div className="max-w-screen-xl w-full px-4 mx-auto">
              <div className="grid-cols-1 grid items-center md:grid-cols-2">
                <div>
                  <Image
                    className="max-w-[500px] flex mx-auto w-full mob-circle-img1"
                    src={freshHealthImg}
                    alt="freshImg"
                  />
                  <Image
                    className="absolute top-[130px] left-0 z-[-1] w-[350px] md:w-[280px] mob-circle-img"
                    src={subtractImg}
                    alt="freshImg"
                  />
                </div>
                <div className="px-[40px] pt-[60px] md:pt-[0px]">
                  <h6 className="text-[#62A403] text-[19px] font-medium mb-[15px]">
                    {T.start_from} <span className="text-[#828282]">$9.99</span>
                  </h6>
                  <h4 className="text-[#1E1E1E] text-[50px] font-light leading-[50px]">
                    <b className='className="font-semibold"'>
                      {T.fresh_healthy}
                    </b>
                    <br /> {T.bf_items}
                  </h4>
                  <p className="text-[#828282] text-[18px] font-light mt-[15px]">
                    {T.atmosphere}
                  </p>
                  <div className="flex items-center gap-[10px] mt-[30px]">
                    <Image
                      className="w-[21px]"
                      src={yesCheckImg}
                      alt="checkImg"
                    />
                    <h6 className="text-[#525252] text-[15px] font-extrabold">
                      {T.natural_products}
                    </h6>
                  </div>
                  <div className="flex items-center gap-[10px] mt-[10px]">
                    <Image
                      className="w-[21px]"
                      src={yesCheckImg}
                      alt="checkImg"
                    />
                    <h6 className="text-[#525252] text-[15px] font-extrabold">
                      {T.healthy_food}
                    </h6>
                  </div>
                  <div>
                    <Button
                      btnType="button"
                      btnText="View All"
                      className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
                      btnClick={handleViewAll}
                      icon={
                        <Image
                          className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                          src={arrowImg}
                          alt="arrowImg"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="premium_product_section">
            <div className="max-w-screen-xl w-full px-4 mx-auto">
              <div className="premium-product py-[60px]">
                <div>
                  <h4 className="text-center text-[45px] text-black font-bold">
                    <b>{T.choose} </b> {T.premium_product}
                  </h4>
                  <Image
                    className="w-[153px] mx-auto"
                    src={headinglineImg}
                    alt="headingImg"
                  />
                </div>
                <div>
                  <ul className="flex gap-[30px] justify-center mt-[40px] primium-product-mobimg">
                    <li className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                        src={vegetable1Img}
                        alt="vegImg"
                      />
                      <h5 className="text-[15px] font-bold text-black mt-[12px]">
                        {T.vegetables}
                      </h5>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                        src={vegetable2Img}
                        alt="vegImg"
                      />
                      <h5 className="text-[15px] font-bold  text-black mt-[12px]">
                        {T.fruits}
                      </h5>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                        src={vegetable3Img}
                        alt="vegImg"
                      />
                      <h5 className="text-[15px] font-bold  text-black mt-[12px]">
                        {T.dairy}
                      </h5>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                        src={vegetable4Img}
                        alt="vegImg"
                      />
                      <h5 className="text-[15px] font-bold text-black mt-[12px]">
                        {T.breads}
                      </h5>
                    </li>
                    <li className="flex flex-col justify-center items-center">
                      <Image
                        className="w-[63px] bg-[#EAEAEA] p-[13px] h-[63px] object-contain rounded-full"
                        src={vegetable5Img}
                        alt="vegImg"
                      />
                      <h5 className="text-[15px] font-bold  text-black mt-[12px]">
                        {T.drinks}
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-[20px] px-12">
              <div className="max-w-screen-xl w-full px-0 mx-auto">
                <div className="grid grid-cols-4 grid-flow-col gap-4 text-black">
                  {premiumProducts?.map((item, idx) => (
                    <Fragment key={idx}>
                      <ProductCard
                        page={"home"}
                        item={item}
                        addToWishlist={addToWishlist}
                        like={like}
                        selectedId={selectedId}
                        addToCart={addToCart}
                      />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Slider {...settings}>
          {basketDetails?.length > 0 &&
            basketDetails?.map(
              (item, idx) =>
                item?.offer && (
                  <section className="healthy-breakfast py-[60px]" key={idx}>
                    <div className="max-w-screen-xl w-full px-4 mx-auto">
                      <div className="grid-cols-2 lg:grid flex items-center bg-white rounded-[20px] py-[30px] px-[30px]">
                        <div className=" max-w-[400px] mx-auto ">
                          <h2 className="text-[24px] font-bold text-black ">
                            {/* {T.healthy_breakfast_baskets} */}
                            {item?.basket_name}
                          </h2>
                          <p className="text-[#55B250] font-bold text-[20px]  mt-[10px]">
                            ${item?.offer?.offer_price}
                          </p>
                          <p className="text-[#828282] text-[15px]  mt-[10px]">
                            {/* {T.bf_decription} */}
                            {stripHtmlTags(item?.content)}
                          </p>
                          <div className="flex items-center gap-[10px] mt-[20px]">
                            <div className="flex gap-[10px] font-bold rounded-full cursor-pointer items-center">
                              <span className="text-[12px]">
                                <Image
                                  className="w-[16px] h-[16px]"
                                  src={gradientclockImg}
                                  alt="gradientImg"
                                />
                              </span>
                              <span className="text-[15px] font-bold text-black text-[#51B150] mb-0">
                                {T.grab_the_offer}
                              </span>
                            </div>
                          </div>

                          <div className="flex gap-[15px] mt-[20px]">
                            <div className="text-center">
                              <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                                {item?.offer
                                  ? getDuration(item?.offer?.end_offer)
                                  : null}
                                {days}
                              </div>
                              <p className="text-[12px] text-[#828282] mt-[5px]">
                                {T.days}
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                                {hours}
                              </div>
                              <p className="text-[12px] text-[#828282] mt-[5px]">
                                {T.hours}
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                                {minutes}
                              </div>
                              <p className="text-[12px] text-[#828282] mt-[5px]">
                                {T.mins}
                              </p>
                            </div>
                            <div className="text-center">
                              <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                                {seconds}
                              </div>
                              <p className="text-[12px] text-[#828282] mt-[5px]">
                                {T.secs}
                              </p>
                            </div>
                          </div>
                          <Button
                            btnType="button"
                            className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
                            btnText={T.add_to_cart}
                            icon={
                              <Image
                                className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px] "
                                src={arrowImg}
                                alt="arrowImg"
                              />
                            }
                            btnClick={() => addToCart(item)}
                          />
                        </div>
                        <div>
                          <Image
                            className="max-w-[450px] w-full mx-auto"
                            src={breakfastHeroImg}
                            alt="breakfastImg"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                )
            )}
          <section className="healthy-breakfast py-[60px]">
            <div className="max-w-screen-xl w-full px-4 mx-auto">
              <div className="grid-cols-2 lg:grid flex items-center bg-white rounded-[20px] py-[30px] px-[30px]">
                <div className=" max-w-[400px] mx-auto ">
                  <h2 className="text-[24px] font-bold text-black ">
                    {T.healthy_breakfast_baskets}
                  </h2>
                  <p className="text-[#55B250] font-bold text-[20px]  mt-[10px]"></p>
                  <p className="text-[#828282] text-[15px]  mt-[10px]">
                    {T.bf_decription}
                  </p>
                  <div className="flex items-center gap-[10px] mt-[20px]">
                    <div className="flex gap-[10px] font-bold rounded-full cursor-pointer items-center">
                      <span className="text-[12px]">
                        <Image
                          className="w-[16px] h-[16px]"
                          src={gradientclockImg}
                          alt="gradientImg"
                        />
                      </span>
                      <span className="text-[15px] font-bold text-black text-[#51B150] mb-0">
                        {T.grab_the_offer}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-[15px] mt-[20px]">
                    <div className="text-center">
                      <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                        31
                      </div>
                      <p className="text-[12px] text-[#828282] mt-[5px]">
                        {T.days}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                        12
                      </div>
                      <p className="text-[12px] text-[#828282] mt-[5px]">
                        {T.hours}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                        10
                      </div>
                      <p className="text-[12px] text-[#828282] mt-[5px]">
                        {T.mins}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-[50px] h-[50px] bg-[#F5F5F5] text-black rounded-full flex items-center justify-center text-[20px] font-bold">
                        35
                      </div>
                      <p className="text-[12px] text-[#828282] mt-[5px]">
                        {T.secs}
                      </p>
                    </div>
                  </div>
                  <Button
                    btnType="button"
                    className="flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
                    btnText={T.add_to_cart}
                    icon={
                      <Image
                        className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                        src={arrowImg}
                        alt="arrowImg"
                      />
                    }
                  />
                </div>
                <div>
                  <Image
                    className="max-w-[450px] w-full mx-auto"
                    src={breakfastHeroImg}
                    alt="breakfastImg"
                  />
                </div>
              </div>
            </div>
          </section>
        </Slider>
        <section className="py-[60px]">
          <div className="max-w-screen-xl w-full px-4 mx-auto">
            <div>
              <h4 className="text-center text-[45px] text-black font-bold heading_main">
                <b>{T.nutrition} </b> {T.organic_product}
              </h4>
              <Image
                className="w-[153px] mx-auto"
                src={headinglineImg}
                alt="headingImg"
              />
            </div>
            <div className="flex gap-[20px] mx-auto items-center mt-[50px] mob-organic-card">
              <div className="relative w-[49%] mb-[10px] organic-mob-width">
                <Image
                  className="organic_img"
                  src={organicProduct1Img}
                  alt="organicProductImg"
                />
                <h6 className="absolute bottom-[60px] right-[-48px] rotate-[270deg]">
                  <b>{T.nutrition} </b> {T.products}
                </h6>
              </div>
              <div className="relative w-[49%] mb-[10px] organic-mob-width">
                <Image
                  className="organic_img"
                  src={organicProduct1Img}
                  alt="organicProductImg"
                />
                <h6 className="absolute bottom-[70px] right-[-58px] rotate-[270deg]">
                  <b>{T.high} </b> {T.protein_products}
                </h6>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-2">
              {/* Left Content */}
              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-2 mb-8">
                  <h3 className="text-lg font-medium text-gray-600">
                    Explore Our Handcrafted
                  </h3>
                  <h2 className="text-4xl font-bold">Breakfast Baskets</h2>
                </div>
                <div className="flex flex-col space-y-4 mb-12">
                  {basketDetails?.map((basket, idx) => (
                    <Fragment key={idx}>
                      <span
                        className={
                          selectedBasket?.id === basket?.id
                            ? "w-full text-left py-2 text-green-600 font-medium"
                            : "w-full text-left py-2 text-gray-500 hover:text-gray-700"
                        }
                      >
                        {idx + 1}. {basket?.basket_name}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    {selectedBasket?.basket_name ||
                      basketDetails?.[0]?.basket_name ||
                      "Big Basket"}
                  </h2>
                  <div className="text-green-600 text-2xl font-bold mb-4">
                    `$
                    {selectedBasket?.product_price ||
                      basketDetails?.[0]?.product_price ||
                      "0.00"}
                    `
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {stripHtmlTags(selectedBasket?.content)}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm text-gray-500">Available Space</span>
                  <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 font-medium flex items-center justify-center">
                    {selectedBasket?.space_left ||
                      basketDetails?.[0]?.space_left ||
                      "4"}
                  </span>
                </div>
                <Button
                  className="w-fit px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
                  btnClick={handleChoose}
                  btnText={T.choose}
                />
              </div>

              {/* Right Content */}
              <div className="relative flex items-center justify-center p-12">
                <div className="w-[500px] h-[500px] relative">
                  <img
                    // src={
                    //   selectedBasket?.featured_image
                    //     ? `${baseURL}${selectedBasket?.featured_image}`
                    //     : `${baseURL}${basketDetails[1]?.featured_image}`
                    // }
                    src={
                      selectedBasket?.featured_image
                        ? `${baseURL}${selectedBasket?.featured_image}`
                        : basketDetails && basketDetails[0]
                        ? `${baseURL}${basketDetails[0].featured_image}`
                        : "/images/basket.png" // Add a default image path
                    }
                    alt="Gourmet Breakfast Basket"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            {/* Thumbnail Navigation */}
            {basketDetails?.map((item, idx) => (
              <div className="bg-gray-50 p-6" key={idx}>
                <div className="flex justify-end items-center gap-4">
                  <button className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-green-600 transition-colors">
                    <img
                      src={
                        item?.featured_image
                          ? `${baseURL}${item?.featured_image}`
                          : "/images/basket.png"
                      }
                      alt="Basket 1"
                      className="w-full h-full object-cover"
                      onClick={() => handleBasket(item)}
                    />
                  </button>
                </div>
              </div>
            ))}
            <button className="ml-4 px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
      <section>
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="heading">
            <h4 className="text-center text-black text-[45px] font-bold">
              <b>{T.new} </b> {T.arrivals_goods}
            </h4>
            <Image
              className="w-[153px] mx-auto"
              src={headinglineImg}
              alt="organicProductImg"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-20">
            {newArrivals?.map((item, index) => {
              console.log(item, "iitemm");
              return (
                <div className="pl-[200px] mb-10" key={index}>
                  <div className="bg-white rounded-lg shadow-md p-4 w-full relative pl-[120px]">
                    <img
                      src={
                        item?.feature_image !== null
                          ? `${baseURL}${item?.feature_image?.image}`
                          : "/images/breadimg.jpg"
                      }
                      className="text-transparent absolute left-[-130px] max-w-[240px]"
                      alt="productImg"
                    />
                    <span className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] text-xs px-2 py-1 rounded-full text-white">
                      Fresh
                    </span>
                    <h2 className="text-2xl font-bold text-black mt-2">
                      {item.name}
                    </h2>
                    <div className="text-green-600 text-xl font-semibold mt-1">
                      {/* ${item?.product_detail?.variants[0]?.regular_price} */}
                      <span className="text-sm font-normal text-gray-500">
                        {T.unit}
                      </span>
                      <p className="text-gray-500 mt-2">
                        {stripHtmlTags(item.description)}
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex text-yellow-500">
                          {StarFilledIcon}
                          {StarFilledIcon}
                          {StarFilledIcon}
                          {StarFilledIcon}
                          {StarIcon}
                        </div>
                        <span className="text-gray-500 text-sm ml-2">(01)</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <ItemCounter
                          item={item}
                          // productQuantity={productQuantity}
                          setItemCount={setItemCount}
                          itemCount={itemCount}
                        />
                        <div className="flex space-x-2">
                          <a
                            href="#"
                            className="w-10 h-10 bg-gray-100 p-2 rounded-full flex items-center justify-center"
                            onClick={(e) => addToWishlist(e, item.id)}
                          >
                            <img
                              className="w-full h-full"
                              src={
                                item?.wishlist_status === "added" ||
                                (like && item.id === selectedId)
                                  ? "/images/likedImg.svg"
                                  : "/images/heart.svg"
                              }
                              alt="heartImg"
                            />
                          </a>

                          <a
                            href="#"
                            className="w-10 h-10 bg-green-500 p-2 rounded-full flex items-center justify-center"
                          >
                            <img
                              className="w-full h-full text-white"
                              src={"/images/shopping-cart.svg"}
                              alt="shoppingImg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="flex mx-auto mb-[60px] gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[30px]"
          >
            View All
            <span>
              <Image
                className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                src={arrowImg}
                alt="arrowImg"
              />
            </span>
          </button>
        </div>
      </section>
      <div className="overflow-hidden py-6">
        <section className="before:absolute before:top-0 before:left-0 before:content-[''] before:w-full before:h-full before:bg-[#92C64E] before:z-[-1] z-[1] before:-rotate-2 py-[60px] relative">
          <div className="max-w-screen-xl w-full px-4 mx-auto">
            <div className="grid-cols-2 gap-[20px] grid md:grid-cols-4 expert-tem-sec">
              <div className="flex gap-[15px] items-center">
                <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center md:w-[80px] md:h-[80px] review-icon-bg">
                  <Image
                    className="w-[60px] md:w-[40px]"
                    src={review1Img}
                    alt="reviewImg"
                  />
                </div>
                <div className="expert-mob-heading">
                  <h6 className="text-[40px] font-extrabold text-white md:text-[32px]">
                    1,544
                  </h6>
                  <p className="text-[#E2E2E2] text-[20px] font-medium md:text-[17px]">
                    {T.satisfied_clients}
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center">
                <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center md:w-[80px] md:h-[80px] review-icon-bg">
                  <Image
                    className="w-[60px] md:w-[40px]"
                    src={review2Img}
                    alt="reviewImg"
                  />
                </div>
                <div className="expert-mob-heading">
                  <h6 className="text-[40px] font-extrabold text-white md:text-[32px]">
                    678
                  </h6>
                  <p className="text-[#E2E2E2] text-[20px] font-medium md:text-[17px]">
                    {T.expert_team}
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center">
                <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center md:w-[80px] md:h-[80px] review-icon-bg">
                  <Image
                    className="w-[60px] md:w-[40px]"
                    src={review3Img}
                    alt="reviewImg"
                  />
                </div>
                <div className="expert-mob-heading">
                  <h6 className="text-[40px] font-extrabold text-white md:text-[32px]">
                    285
                  </h6>
                  <p className="text-[#E2E2E2] text-[20px] font-medium md:text-[17px]">
                    {T.activate_products}
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px] items-center">
                <div className="w-[100px] h-[100px] bg-white p-0 rounded-full flex justify-center items-center">
                  <Image
                    className="w-[60px]"
                    src={review4Img}
                    alt="reviewImg"
                  />
                </div>
                <div>
                  <h6 className="text-[40px] font-extrabold text-white">27</h6>
                  <p className="text-[#E2E2E2] text-[20px] font-medium">
                    {T.awards_winning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ExclusiveOfferBanner />
      {/* <BasketSection /> */}
      {showLoginModal && (
        <AddLoginModal
          closeModal={() => setShowLoginModal(false)}
          setShowLoginModal={setShowLoginModal}
        />
      )}
    </div>
  );
};

export default Page;
