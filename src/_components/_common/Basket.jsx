const Basket = () => {
  return (
    <aside className="w-[23rem] p-4 bg-gradient-to-r from-[#D8FFB0] to-yellow-100">
      {/* <h2 className="text-xl text-black font-bold mb-4">Your Basket</h2> */}
      <div>
        <div className="flex items-center justify-between rounded-lg p-[0.7rem] bg-[#ffffff]">
          <div>
            <p className="font-bold text-black">Premium Pomegranate</p>
            <p className="text-green-500 text-lg">$280.00 <span className="text-[#8C8C8C]">/ kg</span></p>
          </div>
          <div className="flex items-center bg-[#ffffff] border rounded-[50px] border-gray-100 w-[2.5rem] justify-center gap-1 p-[5px] border border-[#EDEDED] flex-col">
            <span className="cursor-pointer text-2xl w-[1.5rem] h-[1.5rem] flex-none flex items-center justify-center bg-white rounded-full p-4 bg-[#EDEDED]">-</span>
            <span className=" text-xl w-[1.5rem] h-[1.5rem] flex items-center justify-center">1</span>
            <span className="cursor-pointer text-2xl w-[1.5rem] h-[1.5rem] flex-none flex items-center justify-center bg-white rounded-full p-2 bg-[#4BAF50] text-white">+</span>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="border p-4 rounded flex text-black justify-between">
          <span>Brown Bread</span>
          <span>$50.00</span>
        </div>
      </div>
      <button className="w-full bg-green-500 text-white  px-4 py-2 rounded mt-4">
        Checkout
      </button>
    </aside>
  );
};

export default Basket;
