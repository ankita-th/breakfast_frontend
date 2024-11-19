import { SIDE_BAR_OPTIONS } from "@/_constants/constant";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-100 text-center rounded-lg">
      <h2 className="text-xl text-black font-bold mb-4">Categories</h2>
      <ul className="space-y-2 text-black border border-gray-300">
        {SIDE_BAR_OPTIONS.map((category) => (
          <li
            key={category}
            className={
              "hover:text-green-600 cursor-pointer border-t  align-center border-gray-300 pt-2"
            }
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
