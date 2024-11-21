export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {["All", "Fruits", "Dairy", "Breakfast"].map((category) => (
          <li key={category} className="hover:text-green-600 cursor-pointer">
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
