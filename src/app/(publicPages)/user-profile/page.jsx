"use client"
import React, { Fragment, useState } from "react";
import Orders from "@/app/(publicPages)/user-profile/orders/page";
import Favourites from "@/app/(publicPages)/favourites/page";
import Payments from "@/app/(publicPages)/user-profile/payments/page";
import Address from "@/app/(publicPages)/user-profile/address/page";
import Settings from "@/app/(publicPages)/user-profile/settings/page"; 
import { HEART_ICON, ORDER_ICON, PAYMENT_ICON, SETTINGS_ICON } from "@/Assets/SVGIcons";
import { ADDRESS_ICON } from "../../../../public/images/SvgIcons";
import EditProfile from "@/_components/_common/EditProfile";
import OrderDetails from "@/_components/_common/OrderDetails";


function page() {
  const [currentCategory, setCurrentCategory] = useState("orders");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const handleCategoryChange = (category) => {
    console.log(category);
    setCurrentCategory(category);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sideBarOptions = [
 {
  name: "orders",
  icon: ORDER_ICON
 }, 
 {
  name: "favorites",
  icon: HEART_ICON
 }, 
 {
  name: "payments",
  icon: PAYMENT_ICON
 }, 
 {
  name: "addresses",
  icon: ADDRESS_ICON
 }, 
 {
  name: "settings",
  icon: SETTINGS_ICON
 }];

  const renderContent = () => {
    console.log("new");
    switch (currentCategory) {
      case 'orders':
        return <Orders toggleSidebar={toggleSidebar}/>;
      case 'favorites':
        return <Favourites/>;
      case 'payments':
        return <Payments/>;
      case 'addresses':
        return <Address />;
      case 'settings':
        return <Settings/>;
      default:
        return <Orders toggleSidebar={toggleSidebar}/>;
    }
  };

  const handleEditProfile = () => {
    setIsEditProfileOpen(!isEditProfileOpen);
  };
const handleSubmit = () => {
  
}

  return (
    <>
    <div className="bg-white scroller-hide px-12 py-20">
      {/* navbar */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-black text-xl font-semibold mb-2">
            David Williams
          </h2>
          <div className="flex gap-4">
            <p className="text-black"> +46 123 456 7890 </p>
            <p className="text-black">davidwilliams@gmail.com</p>
          </div>
        </div>
        <div>
          <button
            className="bg-[#FF6D2F] text-white py-2 px-4 rounded-md"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        </div>
      </div>
      {/* main section */}
      <div className="flex p-6 gap-6">
        <div className="w-[250px] bg-[#f8f9fa] p-5 border border-[#ddd] rounded-lg">
          <ul className="space-y-6">
           {sideBarOptions?.map((option ,idx) =>(
            <Fragment key={idx}>
            <li
              className={currentCategory === option?.name ? "bg-green-500 rounded-full flex gap-2 items-center cursor-pointer" : "flex gap-2 items-center cursor-pointer"}
              onClick={() => handleCategoryChange(option.name)}
            >
              <div className="p-2 rounded-full bg-[#D9D9D9]">
                {option?.icon}
               
              </div>
              <div className="text-[#808080] no-underline">{option?.name.charAt(0).toUpperCase() + option?.name.slice(1)}</div>
            </li>
          </Fragment>
          ))}
          </ul>
        </div>
        {/* right side section */}
        {renderContent()}
      </div>
    </div>
    <OrderDetails isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <EditProfile isSidebarOpen={isEditProfileOpen} toggleSidebar={handleEditProfile}/>
    </>
  );
}

export default page;
