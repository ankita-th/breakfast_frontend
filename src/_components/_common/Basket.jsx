import Image from "next/image";
import breakfastHeroImg2 from "../../../public/Images/breakfast-hero-img2.png";
import anarImg1 from "../../../public/Images/annar.png";
import arrowImage from "../../../public/Images/arrow.svg";
import { BASKETS, USER_BASKET } from "@/_Api-Handlers/APIUrls";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { useEffect, useState } from "react";
import { toastMessages } from "@/_utils/toastMessage";
import { BUTTON_TYPE, DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";
import Button from "./Button";
import ItemCounter from "./ItemCounter";
import { baseURL } from "@/_utils/helpers";
import { setSelectedBasket } from "@/Redux/addToBasketSlice";
import { useDispatch, useSelector } from "react-redux";

const Basket = ({ userBasket }) => {
  const [basket, setBasket] = useState();
  const [basketList, setBasketList] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const {selectedBasket} = useSelector((state) => state.addToBasket);
  console.log(selectedBasket, "selectedBasket");
  const dispatch = useDispatch();
  console.log(basket, "basket");
  console.log(basketList, "basketList");
  console.log(userBasket, "userBasket");
  useEffect(() => {
    if (userBasket) {
      callApi({
        endPoint: `/user-basket/${userBasket?.user_basket?.id}/`,
        method: METHODS.get,
        instanceType: INSTANCE.authorize,
      })
        .then((res) => {
          console.log(res, "response");
          setBasket(res?.data);
        })
        .catch((err) => {
          toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
        });
    }
  }, [userBasket]);

  useEffect(() => {
    if (!userBasket) {
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
          setBasketList(res.data);
        })
        .catch((err) => {
          console.log(err, "error");
          toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
        });
    }
  }, [basket]);

  const handleRemove = () => {
    localStorage.removeItem("persist:basket");
    callApi({
      endPoint: `/user-basket/delete/${userBasket?.user_basket?.id}/`,
      method: METHODS.delete,
      instanceType: INSTANCE.authorize,
    })
      .then((res) => {
        console.log(res, "response");
        setBasket(res?.data);
      })
      .catch((err) => {
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  };

  const [newBasket, setNewBasket] = useState()
  console.log(newBasket, "newBasket");
  const handleChoose = (item) => {
    console.log(item, "chooseBasket");
    setNewBasket(item);
  }

  console.log(newBasket, "newBasket");
  const chooseBasket = () => {
    dispatch(setSelectedBasket(newBasket))
  };
  return (
    <aside className="w-[20rem] p-4 bg-gradient-to-r from-[#D8FFB0] to-yellow-100 mob-product-sidebar flex-none">
      {/* <h2 className="text-xl text-black font-bold mb-4">Your Basket</h2> */}
      {basket?.length > 0 &&
        basket?.map((item) => {
          return item?.products?.map((product) => {
            return (
              <div key={product.id}>
                <div>
                  <div className="flex items-center justify-between rounded-lg p-[0.7rem] bg-[#ffffff] mb-[15px]">
                    <div>
                      <p className="font-bold text-black">
                        {product?.product_name}
                      </p>
                      <p className="text-green-500 text-lg">
                        ${product?.variant_price}
                        <span className="text-[#8C8C8C]">/ kg</span>
                      </p>
                    </div>
                    {/* <div className="items-center bg-[#ffffff] border rounded-[8px] border-gray-100 gap-1 p-[4px] border border-black flex">
                    <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center rounded-full text-[16px] m-0">
                      -
                    </span>
                    <span className="w-[1rem] h-[1rem] flex items-center justify-center text-[16px] m-0">
                      1
                    </span>
                    <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center text-[16px] m-0 text-[#4BAF50]">
                      +
                    </span>
                  </div> */}
                    <ItemCounter
                      item={product}
                      // productQuantity={productQuantity}
                      setItemCount={setItemCount}
                      itemCount={itemCount}
                      page="basket"
                    />
                  </div>
                </div>
              </div>
            );
          });
        })}

      {basket?.length > 0 &&
        basket?.map((item) => {
          return (
            <div>
              <div className="relative">
                <Image
                  className="max-w-[450px] w-full mx-auto"
                  src={breakfastHeroImg2}
                  alt="breakfastImg"
                />
                <div className="absolute bottom-[10px] text-center">
                  <div className="inline-flex items-center gap-[10px] bg-white p-[6px] rounded-full mb-3">
                    <h5 className="text-[16px] font-medium">Basket Items</h5>
                    <div className="flex items-center">
                      <Image
                        className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full border border-white"
                        src={anarImg1}
                        alt="breakfastImg"
                      />

                      <Image
                        className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full border border-white ml-[-10px]"
                        src={anarImg1}
                        alt="breakfastImg"
                      />
                      <h5 className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full w-[39px] h-[36px] bg-[#92C64E] p-[10px] rounded-full border border-white ml-[-10px]">
                        {item?.total_items}
                      </h5>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-[20px] bg-white p-[6px] rounded-full mb-3">
                    <h5 className="text-[16px] font-medium">Available Space</h5>
                    <div className="flex items-center">
                      <h5 className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full w-[39px] h-[36px] bg-[#92C64E] p-[10px] rounded-full border border-white ml-[-10px] flex justify-center items-center">
                        {item?.available_space}
                      </h5>
                    </div>
                  </div>
                </div>
                <span
                  className="text-black-500 underline flex justify-center cursor-pointer"
                  onClick={handleRemove}
                >
                  Remove
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-[8px] flex justify-between items-center p-3">
                  <div className="text-black justify-between">
                    <span className="text-[#000000] text-[18px] font-regular">
                      Item Total
                    </span>
                    <span className="text-[#55B250] text-[18px] font-semibold ml-[10px]">
                      $1120.00
                    </span>
                  </div>
                  <Button
                    className="text-[14px] p-[10px] flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] rounded-full text-white font-semibold items-center"
                    // btnTy="button"
                    // btnType={BUTTON_TYPE.Button}
                    btnText="Add to Cart"
                    icon={
                      <Image
                        alt="arrowImg"
                        loading="lazy"
                        width="11"
                        height="12"
                        decoding="async"
                        data-nimg="1"
                        className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]"
                        src={arrowImage}
                      />
                    }
                  />
                </div>
              </div>
            </div>
          );
        })}
      {!userBasket && <div className="">
        <div className="flex justify-center items-center">
          {basketList?.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.basket_name}</p>
                <div
                  className="flex items-center rounded-lg h-[100px] w-[100px]"
                  onClick={() => handleChoose(item)}
                >
                  <img
                    src={`${baseURL}${item.featured_image}`}
                    alt="basketImg"
                  />
                </div>
              </div>
            );
          })}
        </div>
       <div className="flex items-center gap-[20px] bg-white p-[6px] rounded-full mb-3 w-2/3">
          <h5 className="text-[16px] flex font-medium" onClick={chooseBasket}>Choose Basket</h5>
          {/* <div className="flex items-center"> */}
            {/* <h5 className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full w-[39px] h-[36px] bg-[#92C64E] p-[10px] rounded-full border border-white ml-[-10px] flex justify-center items-center"></h5> */}
          {/* </div> */}
        </div>
      </div>}
    </aside>
  );
};

export default Basket;
