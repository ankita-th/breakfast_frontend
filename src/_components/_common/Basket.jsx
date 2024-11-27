import Image from "next/image";
import breakfastHeroImg2 from "../../assets/Images/breakfast-hero-img2.png";
import anarImg1 from "../../assets/Images/annar.png";
import arrowImage from "../../assets/Images/arrow.svg";


const Basket = () => {
  return (
    <aside className="w-[20rem] p-4 bg-gradient-to-r from-[#D8FFB0] to-yellow-100 mob-product-sidebar flex-none">
      {/* <h2 className="text-xl text-black font-bold mb-4">Your Basket</h2> */}
      <div>
        <div>
          <div className="flex items-center justify-between rounded-lg p-[0.7rem] bg-[#ffffff] mb-[15px]">
            <div>
              <p className="font-bold text-black">Premium Pomegranate</p>
              <p className="text-green-500 text-lg">$280.00 <span className="text-[#8C8C8C]">/ kg</span></p>
            </div>
            <div className="items-center bg-[#ffffff] border rounded-[8px] border-gray-100  gap-1 p-[4px] border border-black flex">
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center rounded-full text-[16px] m-0">-</span>
              <span className=" w-[1rem] h-[1rem] flex items-center justify-center text-[16px] m-0">1</span>
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center text-[16px] m-0 text-[#4BAF50]">+</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg p-[0.7rem] bg-[#ffffff] mb-[15px]">
            <div>
              <p className="font-bold text-black">Premium Pomegranate</p>
              <p className="text-green-500 text-lg">$280.00 <span className="text-[#8C8C8C]">/ kg</span></p>
            </div>
            <div className="items-center bg-[#ffffff] border rounded-[8px] border-gray-100  gap-1 p-[4px] border border-black flex">
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center rounded-full text-[16px] m-0">-</span>
              <span className=" w-[1rem] h-[1rem] flex items-center justify-center text-[16px] m-0">1</span>
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center text-[16px] m-0 text-[#4BAF50]">+</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg p-[0.7rem] bg-[#ffffff] mb-[15px]">
            <div>
              <p className="font-bold text-black">Premium Pomegranate</p>
              <p className="text-green-500 text-lg">$280.00 <span className="text-[#8C8C8C]">/ kg</span></p>
            </div>
            <div className="items-center bg-[#ffffff] border rounded-[8px] border-gray-100  gap-1 p-[4px] border border-black flex">
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center rounded-full text-[16px] m-0">-</span>
              <span className=" w-[1rem] h-[1rem] flex items-center justify-center text-[16px] m-0">1</span>
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center text-[16px] m-0 text-[#4BAF50]">+</span>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg p-[0.7rem] bg-[#ffffff] mb-[15px]">
            <div>
              <p className="font-bold text-black">Premium Pomegranate</p>
              <p className="text-green-500 text-lg">$280.00 <span className="text-[#8C8C8C]">/ kg</span></p>
            </div>
            <div className="items-center bg-[#ffffff] border rounded-[8px] border-gray-100  gap-1 p-[4px] border border-black flex">
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center rounded-full text-[16px] m-0">-</span>
              <span className=" w-[1rem] h-[1rem] flex items-center justify-center text-[16px] m-0">1</span>
              <span className="cursor-pointer text-2xl w-[1rem] h-[1rem] flex-none flex items-center justify-center text-[16px] m-0 text-[#4BAF50]">+</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
                  className="max-w-[450px] w-full mx-auto"
                  src={breakfastHeroImg2}
                  alt="breakfastImg"
          />
          <div className="absolute bottom-[10px] text-center">
            <div className="inline-flex items-center gap-[10px] bg-white p-[6px] rounded-full mb-3">
              <h5 className="text-[16px] font-medium">Basket Items</h5>
              <div className="flex items-center">
                  <Image
                      className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full border border-white"
                      src={anarImg1}
                      alt="breakfastImg"/>

                      <Image
                      className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full border border-white ml-[-10px]"
                      src={anarImg1}
                      alt="breakfastImg"/>
                      <h5 className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full w-[39px] h-[36px] bg-[#92C64E] p-[10px] rounded-full border border-white ml-[-10px]">3+</h5>
              </div>
            </div>
            <div className="inline-flex items-center gap-[20px] bg-white p-[6px] rounded-full mb-3">
              <h5 className="text-[16px] font-medium">Available Space</h5>
              <div className="flex items-center">
                      <h5 className="w-[39px] h-[39px] bg-[#92C64E] p-[10px] rounded-full w-[39px] h-[36px] bg-[#92C64E] p-[10px] rounded-full border border-white ml-[-10px] flex justify-center items-center">8</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-white rounded-[8px] flex justify-between items-center p-3">
          <div className="text-black justify-between">
            <span className="text-[#000000] text-[18px] font-regular">Item Total</span>
            <span className="text-[#55B250] text-[18px] font-semibold ml-[10px]">$1120.00</span>
          </div>
          <button className="text-[14px] p-[10px] flex gap-[10px] bg-gradient-to-r from-[#92C64E] to-[#4BAF50] rounded-full text-white font-semibold items-center" type="button">View All
            <Image alt="arrowImg" loading="lazy" width="11" height="12" decoding="async" data-nimg="1" className="bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[6px] rounded-full w-[25px] h-[25px]" src={arrowImage} /></button>
        </div>
      </div>
      
    </aside>
  );
};

export default Basket;
