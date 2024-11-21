const Basket = () => {
  return (
    <aside className="w-64 p-4 bg-green-50">
      <h2 className="text-xl text-black font-bold mb-4">Your Basket</h2>
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
