import { callApi, METHODS } from "@/_Api-Handlers/apiFunctions";
import { DEFAULT_ERROR_MESSAGE, SIDE_BAR_OPTIONS } from "@/_constants/constant";
import { T } from "@/_utils/LanguageTranslator";
import { toastMessages } from "@/_utils/toastMessage";
import { INSTANCE } from "@/app/_constant/UrlConstant";
import { useEffect, useState } from "react";
import ItemSubCategory from "./_common/ItemSubCategory";

export default function Sidebar({
  sideBarOptions,
  selectedCategory,
  handleSideBar,
  handleAllCategories,
}) {

  return (
    <aside className="w-[15rem] bg-[#ffffff] text-center rounded-lg mob-product-category flex-none">
      {/* <h2 className="text-xl text-black font-bold mb-4">Categories</h2> */}
      <ul className="space-y-2 text-black border border-gray-300">
        <li
          className={
            selectedCategory === "All"
              ? "bg-[#DFFFDC] text-left py-[10px] pl-[40px] text-[16px] font-medium"
              : "hover:text-green-600 cursor-pointer text-left py-[10px] pl-[40px] text-[16px] font-medium border border-[#C1C1C1] !mt-0"
          }
          onClick={() => handleSideBar("All")}
        >
          All
        </li>
        {sideBarOptions?.map((category) => (
          <li
            key={category.id}
            className={
              selectedCategory?.name == category?.name
                ? "bg-[#DFFFDC] text-left py-[10px] pl-[40px] text-[16px] font-medium"
                : "hover:text-green-600 cursor-pointer text-left py-[10px] pl-[40px] text-[16px] font-medium border border-[#C1C1C1] !mt-0"
            }
            onClick={() => handleSideBar(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
