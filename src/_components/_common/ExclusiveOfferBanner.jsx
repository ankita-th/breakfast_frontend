import React from "react";

const ExclusiveOfferBanner = () => {
  return (
    <section className="py-[60px]">
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <div className="flex items-center">
          <div className="exclusive-offer bg-[url(../assets/images/offerbg.png)] bg-cover p-[40px] w-[40%] min-h-[230px] rounded-tl-[10px] rounded-bl-[10px]">
            <p className="text-[#4FB050] text-[15px] font-medium">
              DON’T MISS OUR DEALS.
            </p>
            <h6 className="text-[#F4F4F4] font-extrabold text-[40px] leading-[45px]">
              EXCLUSIVE{" "}
            </h6>
            <h6 className="text-[#F4F4F4] font-extrabold text-[40px] leading-[45px]">
              OFFERS & SALE
            </h6>
            <p className="text-[#4FB050] text-[15px] font-medium mt-[20px]">
              Sign up and get a voucher of worth $250.00
            </p>
          </div>
          <div className="w-[60%] bg-[url(../assets/images/Clip-path-group.png)] bg-cover p-[40px] bg-[#ffe3df] min-h-[230px] rounded-tr-[10px] rounded-br-[10px]">
            <div className="">
              <div className="max-w-[500px] w-full flex flex-col items-center justify-center mx-auto">
                <input
                  className=" p-[18px] px-[20px] rounded-full w-full"
                  type="text"
                  id="first_name"
                  placeholder="Email Address"
                  required
                />
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#92C64E] to-[#4BAF50] p-[10px_30px] rounded-full text-white font-semibold items-center mt-[20px]"
                >
                  Subsrcribe Now<span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOfferBanner;
