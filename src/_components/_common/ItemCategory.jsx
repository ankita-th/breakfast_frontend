import { ITEM_CATEGORY } from "@/_constants/constant";
import Image from "next/image";

const ItemCategory = ({ handleClick }) => {

  return (
    <div className="flex gap-4 category-mob-screen mx-auto w-full m-0 box-border overflow-auto flex justify-start pb-[20px]">
      {ITEM_CATEGORY?.map((item, i) => (
        <div className="flex flex-col items-center rounded-full p-6 w-[100px] h-35 bg-gradient-to-b from-[#ffffff] to-[#E5E5E5] flex-none" key={i} onClick={handleClick}>
          <Image
            src={item.item_img}
            className="shoptop-card-img"
            alt={item.item_name}
            width={100}
            height={100}
          />
          <h3 className="mt-4 text-[0.8rem] text-black font-semibold text-center truncate">
            {item.item_name}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default ItemCategory;
