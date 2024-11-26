import { SIDE_BAR_OPTIONS } from "@/_constants/constant";
import { T } from "@/_utils/LanguageTranslator";
import { useState } from "react";

export default function Sidebar() {
  const [selectedCategory , setSelectedCategory] = useState("All")
  const handleSideBar=(itm)=>{
    setSelectedCategory(itm)
  }
  console.log(selectedCategory,"selectedCategory")
  return (
    <aside className="w-64 bg-[#ffffff] text-center rounded-lg">
      {/* <h2 className="text-xl text-black font-bold mb-4">Categories</h2> */}
      <ul className="space-y-2 text-black border border-gray-300">
        {SIDE_BAR_OPTIONS.map((category) => (
          <li
            key={category}
            className={
              selectedCategory==category ? "bg-[#DFFFDC] text-left py-[10px] pl-[40px] text-[16px] font-medium" :"hover:text-green-600 cursor-pointer text-left py-[10px] pl-[40px] text-[16px] font-medium border border-[#C1C1C1] !mt-0"
            }
            onClick={()=>handleSideBar(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
