import Image from "next/image";
const ProductCard = ({ name, price, image, unit }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg">
      <Image src={image} alt={name} className="h-32 w-full object-cover mb-4" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm">
        {price} {unit}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add
        </button>
        <button className="text-green-500">❤</button>
      </div>
    </div>
  );
};

export default ProductCard;
