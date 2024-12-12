import { baseURL } from "@/_Api-Handlers/apiConfig";
import { ITEM_CATEGORY } from "@/_constants/constant";
import Image from "next/image";

const ItemSubCategory = ({ key,subCategory ,handleClick}) => {
  console.log(subCategory,'subCategory')

  return (
    <div className="flex gap-4 category-mob-screen mx-auto w-full m-0 box-border overflow-auto flex justify-start pb-[20px]">
    {/* <div className="flex"> */}
        <div className="flex flex-col items-center rounded-full p-6 w-[100px] h-35 bg-gradient-to-b from-[#ffffff] to-[#E5E5E5] flex-none" key={key} onClick={()=>handleClick(subCategory)}>
          <img
            src={subCategory.category_image ? `${baseURL}${subCategory.category_image}` :"/images/breadimg.jpg"}
            className="shoptop-card-img"
            alt={"card_image"}
            width={100}
            height={100}
          />
          <h3 className="mt-4 text-[0.8rem] text-black font-semibold text-center truncate">
            {subCategory.name}
          </h3>
        </div>
    </div>
  );
};
export default ItemSubCategory;
