import { ITEM_CATEGORY } from "@/_constants/constant";
import Image from "next/image";

const ItemCategory = ({ handleClick }) => {

  return (
    <div className="grid grid-cols-5 md:grid-cols-7 gap-4">
      {ITEM_CATEGORY?.map((item, i) => (
        <div className="flex flex-col items-center rounded-full p-6 w-30 h-35 bg-gradient-to-b from-[#ffffff] to-[#E5E5E5]" key={i} onClick={handleClick}>
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
