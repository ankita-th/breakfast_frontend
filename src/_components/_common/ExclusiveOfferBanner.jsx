import React from "react";
import { T } from "@/_utils/LanguageTranslator";

const ExclusiveOfferBanner = () => {
  return (
    <section className="py-[60px] offers_sales">
      <div className="max-w-screen-xl w-full px-4 mx-auto">
        <div className="flex items-center sale-width-mob">
          <div className="exclusive-bg">
            <p className="text-[#4FB050] text-[15px] font-medium">
              {T.dont_miss_deals}
            </p>
            <h6 className="text-[#F4F4F4] font-extrabold text-[40px] leading-[25px] md:text-[32px] md:leading-[45px]">
              {T.exclusive}
            </h6>
            <h6 className="text-[#F4F4F4] font-extrabold text-[40px] leading-[25px] md:text-[32px] md:leading-[45px]">
              {T.offers}
            </h6>
            <p className="text-[#4FB050] text-[15px] font-medium mt-[20px]">
              {T.voucher_worth}
            </p>
          </div>
          <div className="newletter-bg">
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
                  {T.subscribe}
                  <span></span>
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
