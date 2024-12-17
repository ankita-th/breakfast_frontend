"use client";
import Basket from "@/_components/_common/Basket";
import ExclusiveOfferBanner from "@/_components/_common/ExclusiveOfferBanner";
import Sidebar from "@/_components/SideBar";
import React, { Fragment, useEffect, useState } from "react";
import PremiumCard from "@/_components/_common/PremiumCard";
import { PRODUCT_DATA, SORT_BY_OPTIONS } from "@/app/_constant/Constant";
import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import ItemCategory from "@/_components/_common/ItemSubCategory";
import { useRouter } from "next/navigation";
import { successType, toastMessages } from "@/_utils/toastMessage";
import ScreenLoader from "@/_components/_common/ScreenLoader";
import ProductCard from "@/_components/_common/Card/ProductCard";
import ItemSubCategory from "@/_components/_common/ItemSubCategory";
import NoDataFound from "@/_components/_common/NoDataFound";
import { setWishList } from "@/Redux/addToWishListSlice";
import {
  ADD_TO_CART,
  CATEGORIES,
  CATEGORIES_PRODUCTS,
  PRODUCT_DETAILS,
  WISHLIST,
} from "@/_Api-Handlers/APIUrls";
import { eligibleForBasket } from "@/_utils/helpers";
import { useSelector } from "react-redux";
import AddLoginModal from "@/_components/_common/Modals/AddLoginModal";
import Dropdown from "@/_components/_common/Dropdown";
import { DEFAULT_ERROR_MESSAGE } from "@/_constants/constant";

const Page = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [like, setLike] = useState(false);
  const [likedProducts, setLikedProducts] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [productDetails, setProductDetails] = useState();
  const [cartItems, setCartItems] = useState();
  const [loader, setLoader] = useState(false);
  const [sideBarOptions, setSideBarOptions] = useState();
  const { selectedBasket } = useSelector((state) => state.addToBasket);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [wishListData, setWishListData] = useState();
  const [userBasket, setUserBasket] = useState();

  console.log(selectedBasket, "newwwsBasket");
  console.log(productDetails, "productDetails");
  console.log(cartItems, "cartItems");
  console.log(likedProducts, "likedProducts");
  console.log(userBasket?.user_basket?.id, "userBasket");

  useEffect(() => {
    setLoader(true);
    callApi({
      endPoint: PRODUCT_DETAILS,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
      params: {
        page: "1",
      },
    })
      .then((res) => {
        console.log(res, "res");
        setProductDetails(res.data);
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  useEffect(() => {
    callApi({
      endPoint: CATEGORIES,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
      params: {
        page: "1",
      },
    })
      .then((res) => {
        console.log(res.data.results, "response");
        setSideBarOptions(res.data.results);
      })
      .catch((err) => {
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  }, []);

  const handleItemCategory = (subCat) => {
    callApi({
      endPoint: CATEGORIES_PRODUCTS,
      method: METHODS.get,
      instanceType: INSTANCE.authorize,
      params: {
        page: "1",
        category: selectedCategory.name,
        subcategory: subCat.name,
      },
    })
      .then((res) => {
        console.log(res.data.results, "response");
        setProductDetails(res.data.results);
      })
      .catch((err) => {
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  };

  const handleItem = (product_id) => {
    router.push(`/products/${product_id}`);
  };

  const addToCart = (product) => {
    callApi({
      endPoint: ADD_TO_CART,
      method: METHODS.post,
      instanceType: INSTANCE.authorize,
      params: {
        product_variants: product.id,
        baskets: selectedBasket.id,
      },
    })
      .then((res) => {
        console.log(res.data.results, "response");
        setCartItems(res.data.results);
      })
      .catch((err) => {
        toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
      });
  };

  const handleSideBar = (itm) => {
    setSelectedCategory(itm);
    if (itm === "All") {
      callApi({
        endPoint: PRODUCT_DETAILS,
        method: METHODS.get,
        instanceType: INSTANCE.authorize,
      })
        .then((res) => {
          console.log(res.data.results, "response");
          setProductDetails(res.data.results);
        })
        .catch((err) => {
          toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
        });
    } else {
      callApi({
        endPoint: CATEGORIES_PRODUCTS,
        method: METHODS.get,
        instanceType: INSTANCE.authorize,
        params: {
          page: "1",
          category: itm.name,
        },
      })
        .then((res) => {
          console.log(res.data.results, "response");
          setProductDetails(res.data.results);
        })
        .catch((err) => {
          toastMessages(err.message || DEFAULT_ERROR_MESSAGE);
        });
    }
  };

  const addToWishlist = async (e, item, status) => {
    e.stopPropagation();
    const token = localStorage.getItem("token");
    if (!token) {
      setShowLoginModal(true);
    } else {
      setSelectedId(item?.id);
      setLike(!like);
      if (like == false) {
        try {
          const res = await callApi({
            endPoint: WISHLIST,
            method: METHODS.post,
            instanceType: INSTANCE.authorize,
            payload: {
              product_id: item?.id,
            },
          });
          dispatch(setWishList(res.data.products));
          toastMessages("Added To Wishlist", successType);
        } catch (err) {
          console.log(err, "err");
          
        }
        const res = await callApi({
          endPoint: PRODUCT_DETAILS,
          method: METHODS.get,
          instanceType: INSTANCE.authorize,
          params: {
            page: "1", 
          },
        });
        console.log(res.data, "product_details");
        setWishListData(res.data);
      } else {
        callApi({
          endPoint: `wishlist/${item?.wishlist_id}/delete/`,
          method: METHODS.delete,
          instanceType: INSTANCE.authorize,
        })
          .then((res) => {
            toastMessages(res.data.message, successType);
          })
          .catch((err) => {
            console.log(err, "err");
          });
          const res = await callApi({
            endPoint: PRODUCT_DETAILS,
            method: METHODS.get,
            instanceType: INSTANCE.authorize,
            params: {
              page: "1", 
            },
          });
      }
    }
  };

  const addToBasket = (selectedVariant, quantity) => {
    console.log(selectedVariant,"selectedVariant")
    // const token = localStorage.getItem("token");
    // if (token) {
    callApi({
      endPoint: `/user-basket/${selectedBasket.id}/`,
      method: METHODS.post,
      instanceType: INSTANCE.authorize,
      payload: {
        products: [
          {
            product_variant_id: selectedVariant?.id,
            quantity: quantity,
          },
        ],
      },
    })
      .then((res) => {
        console.log(res.data, "response");
        setUserBasket(res.data);
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

  return (
    <>
      {/* <Cart /> */}
      <div className="bg-gray-50">
        <div className="flex">
          <Sidebar
            sideBarOptions={sideBarOptions}
            selectedCategory={selectedCategory}
            handleSideBar={handleSideBar}
          />
          <main className="px-8 w-[calc(100%-560px)] desktop-calc1200">
            {selectedCategory?.subcategories?.map((subCat, idx) => (
              <ItemSubCategory
                key={idx}
                subCategory={subCat}
                handleClick={handleItemCategory}
              />
            ))}
            {productDetails?.length > 0 ? (
              <>
                <div className="select flex space-x-4 items-center mt-[40px]">
                  <div className="title text-[16px] font-semibold">Sort By</div>
                  <select className="border border-[#4BAF50] rounded-[5px] p-[10px] text-[#4BAF50]">
                    {SORT_BY_OPTIONS?.map(({ value, label }, index) => (
                      <option value={value} key={index}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                {productDetails.map((item, idx) => (
                  <Fragment key={idx}>
                    <ProductCard
                      page={"products"}
                      item={item}
                      addToWishlist={addToWishlist}
                      like={like}
                      selectedId={selectedId}
                      handleItem={handleItem}
                      addToBasket={addToBasket}
                      addToCart={addToCart}
                    />
                  </Fragment>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center w-full h-1/2">
                <NoDataFound />
              </div>
            )}
            {showLoginModal && (
              <AddLoginModal
                closeModal={() => setShowLoginModal(false)}
                setShowLoginModal={setShowLoginModal}
              />
            )}
          </main>
          <Basket userBasket ={userBasket}/>
        </div>
        <ExclusiveOfferBanner />
      </div>
    </>
  );
};

export default Page;
