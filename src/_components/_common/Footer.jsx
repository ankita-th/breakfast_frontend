import Link from "next/link";
import {
  ADDRESS_ICON,
  EMAIL_ICON,
  // EMAIL_ICON,
  FACEBOOK_ICON,
  LAYER_ICONS,
  LINKEDIN_ICON,
  PHONE_ICON,
  TWITTER_ICON,
} from "../../../public/images/SvgIcons";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="border-b border-gray-600 border-opacity-50 p-6 ">
            <div className="flex items-center gap-4">
              <span className="bg-[#262626] text-white rounded-full p-2 flex items-center justify-center">
                {EMAIL_ICON}
              </span>
              <h2 className="text-lg font-semibold">Email</h2>
            </div>
            <p className="text-gray-300 text-sm pl-10 ml-5 ">info@</p>
            <div className="flex items-center gap-4">
              <span className="bg-[#262626] text-white rounded-full p-2 flex items-center justify-center">
                {PHONE_ICON}
              </span>
              <h2 className="text-lg font-semibold">Phone</h2>
            </div>
            <p className="text-gray-300 pl-10 ml-5 text-sm">666 888 888</p>
            <div className="flex items-center gap-4">
              <span className="bg-[#262626] text-white rounded-full p-2 flex items-center justify-center">
                {ADDRESS_ICON}
              </span>
              <h2 className="text-lg font-semibold">Address</h2>
            </div>
            <p className="text-gray-300 pl-10 text-sm ml-5">
              88 road, Brooklyn street, USA
            </p>
          </div>
          <div className="border-b border-l flex items-center flex-col text-center text-sm justify-center border-gray-600 border-opacity-50 p-6 space-y-4 ">
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum available.
            </p>
            <div className="flex space-x-4">
              <Link href="">
                <span className="text-blue-400 hover:text-blue-600">
                  {FACEBOOK_ICON}
                </span>
              </Link>
              <Link href="">
                <span className="text-blue-400 hover:text-blue-600">
                  {TWITTER_ICON}
                </span>
              </Link>
              <Link href="">
                <span className="text-blue-400 hover:text-blue-600">
                  {LINKEDIN_ICON}
                </span>
              </Link>
            </div>
          </div>

          <div className="border-b border-l border-gray-600 p-6 border-opacity-50 space-y-4">
            <h1 className="text-xl font-bold">CUSTOMER SERVICE</h1>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Contact Us</li>
                <li>Returns Policy</li>
                <li>Delivery Information</li>
                <li>Loyalty Program</li>
                <li>Track Your Order</li>
              </ul>
              <ul className="space-y-2 text-right text-sm">
                <li>Help & FAQ</li>
                <li>Warranty & Repair</li>
                <li>My Account</li>
                <li>Shopping Cart</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center border-opacity-50 text-sm text-gray-400">
          <span>&copy; copyright 2024.</span>
          <span className="flex space-x-4 mt-2 md:mt-0">{LAYER_ICONS}</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
