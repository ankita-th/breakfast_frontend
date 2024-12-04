"use client";
import { HEADER_NAV_OPTIONS } from "@/_constants/constant";
import {
  CalenderImg,
  CallIcon,
  CartListIcon,
  CloudImg,
  DummyUser,
  WishListIcon,
} from "@/assets/Icons/Svg";
import { LOGO } from "@/assets/Images";
import { SwedenFlagIcon } from "@/assets/SVGIcons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = ({}) => {
  const pathname = usePathname();
  const urlName = pathname.split("/")[1];
  const [profileStatus, setProfileStatus] = useState();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setProfileStatus("My Account");
    } else {
      setProfileStatus("Login");
    }
  }, []);

  const handleAllCategories = () => {
    router.push("/products");
  };

  const handleLogin = () => {
    router.push("/login");
  };
  const handleLogout = () => {
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div>
      <section className="p-4 w-full bg-[#F5F5F5] mob-dnone">
        <div className="max-w-screen-xl w-full px-0 mx-auto">
          <div className=" flex justify-between items-center">
            <div className="head-calender-sec flex gap-2 text-base font-normal">
              {CalenderImg}
              <span className="text-[13px] text-black font-semibold">
                October 21,2024 11:09 AM
              </span>
            </div>
            <div>
              <h5 className="text-[13px] text-black font-semibold">
                GRAB 10% Discount on your first purchase use
                <span className="text-custom-green">FLAT10</span>
              </h5>
            </div>
            <div className="head-degree-sec flex gap-[10px] text-black font-normal text-[16px]">
              {CloudImg}
              <p className="degree-text">20 C, Thunderstorm</p>
            </div>
          </div>
        </div>
      </section>
      <section className="second-head">
        <div className="max-w-screen-xl w-full px-4 mx-auto">
          <div className="second-head-flex">
            <Image
              className="w-[150px]"
              width={500}
              height={20}
              src={LOGO}
              alt="logo"
            />
            <div>
              <form>
                <div className="relative w-[300px] header-search-mob">
                  <label
                    className="bg-[#F5F5F5] px-[46px] py-[11px] rounded-full absolute right-[-1px] text-[13px] font-semibold"
                    htmlFor="fname"
                  >
                    Search
                  </label>
                  <input
                    className="border border-[#F5F5F5] p-2 rounded-full w-full"
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-[10px] text-[13px] font-bold text-[#3E4B5F]">
              <div>{CallIcon}</div>
              <div>
                <h6 className="text-[#3E4B5F] text-[13px] font-bold">
                  CALL US FREE
                </h6>
                <p className="text-[#96B416] text-[17px] font-bold">
                  (1900)-1088-88
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-4">
          <div className="max-w-screen-xl w-full px-4 mx-auto flex justify-between items-center">
            <button className="flex items-center bg-gradient-to-r from-[#92C64E] to-[#4BAF50] text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition all-category-btn">
              <span className="mr-2" onClick={handleAllCategories}>
                ☰
              </span>
              All Categories
            </button>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8 text-sm font-semibold">
                {HEADER_NAV_OPTIONS?.map((option) => {
                  return (
                    <a
                      href={`/${option.url}`}
                      key={option.name}
                      className={
                        urlName == option.url
                          ? "text-green-500"
                          : "hover:text-gray-300"
                      }
                    >
                      {option.name}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span>{SwedenFlagIcon}</span>
                <span className="sw">SW</span>
              </div>

              <div className="flex items-center space-x-2">
                <span>{DummyUser}</span>
                <span
                  onClick={
                    profileStatus === "My Account" ? undefined : handleLogin
                  }
                >
                  {profileStatus}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative">
                  <span>{WishListIcon}</span>
                  {/* <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishListQuantity}
                  </span> */}
                </button>
                <button className="relative">
                  <span>{CartListIcon}</span>
                  {/* <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemQuantity}
                  </span> */}
                </button>
                {profileStatus === "My Account" && (
                  <div className="flex items-center space-x-2">
                    <span className="cursor-pointer" onClick={handleLogout}>
                      Logout
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
