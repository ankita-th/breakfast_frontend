import Image from "next/image";
import React from "react";
import productImg from "../../../../Assets/images/croissant-image.png";

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <Image
            src={productImg}
            alt="Croissant"
            className="rounded-lg w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2">Croissant</h1>
          <p className="text-lg text-gray-600">
            <span className="line-through">$120.00</span>{" "}
            <span className="text-green-500">$60.00</span>
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Add to Basket
            </button>
            <button className="px-4 py-2 border border-green-500 text-green-500 rounded">
              Change
            </button>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold">Why shop from us?</h2>
            <ul className="list-disc list-inside mt-2">
              <li>Superfast Delivery</li>
              <li>Exclusive offers on quality items</li>
              <li>Always fresh & in stock</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold">Product Details</h2>
            <p className="text-sm text-gray-500 mt-1">
              Freshly baked croissants. Please check the package for all details
              before purchase.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-pink-100 p-6 rounded-lg flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Exclusive Offers & Sale</h2>
          <p className="text-sm text-gray-600">
            Subscribe to get the latest deals!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 border rounded w-full md:w-auto"
          />
          <button className="px-6 py-2 bg-green-500 text-white rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
