import serviceCardImg from "../../../public/images/service card1.svg";
import serviceCardImg1 from "../../../public/images/service card2.svg";
import serviceCardImg2 from "../../../public/images/service card3.svg";
import breadImg from "../../../public/images/breadimg.jpg";
import productImg from "../../../public/images/dough.png";
import heartImg from "../../../public/images/heart.svg";
import shoppingcartImg from "../../../public/images/shopping-cart.svg";

export const SERVICE_CARD = [
  {
    logo_img: serviceCardImg,
    heading: "Fresh from ",
    subHeading: "Nutrition",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy",
  },
  {
    logo_img: serviceCardImg1,
    heading: "Premium ",
    subHeading: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy",
  },
  {
    logo_img: serviceCardImg2,
    heading: "100% ",
    subHeading: "Natural Product",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy",
  },
];

export const PREMIUM_CARD = [
  {
    logo_img: breadImg,
    title: "Eggs",
    old_price: "$70.00",
    new_price: "$60.00",
  },
  {
    logo_img: breadImg,
    title: "Muffins",
    old_price: "$80.00",
    new_price: "$45.00",
  },
  {
    logo_img: breadImg,
    title: "Bread",
    old_price: "$70.00",
    new_price: "$50.00",
  },
  {
    logo_img: breadImg,
    title: "Chocolate",
    old_price: "$30.00",
    new_price: "$20.00",
  },
];

export const PRODUCT_DATA = [
  {
    logo_img: breadImg,
    name: "Brown Bread",
    old_price: "$70.00",
    new_price: "$60.00",
  },
  {
    logo_img: breadImg,
    name: "Eggs",
    old_price: "$80.00",
    new_price: "$45.00",
  },
  {
    logo_img: breadImg,
    name: "White Bread",
    old_price: "$70.00",
    new_price: "$50.00",
  },
  {
    logo_img: breadImg,
    name: "Chocolate Muffins",
    old_price: "$30.00",
    new_price: "$20.00",
  },
  {
    logo_img: breadImg,
    name: "Eggs",
    old_price: "$80.00",
    new_price: "$45.00",
  },
  {
    logo_img: breadImg,
    name: "White Bread",
    old_price: "$70.00",
    new_price: "$50.00",
  },
  {
    logo_img: breadImg,
    name: "Chocolate Muffins",
    old_price: "$30.00",
    new_price: "$20.00",
  },
  {
    logo_img: breadImg,
    name: "Eggs",
    old_price: "$80.00",
    new_price: "$45.00",
  },
  {
    logo_img: breadImg,
    name: "White Bread",
    old_price: "$70.00",
    new_price: "$50.00",
  },
  {
    logo_img: breadImg,
    name: "Chocolate Muffins",
    old_price: "$30.00",
    new_price: "$20.00",
  },
];
export const ADDRESS_CARD_DATA = [
  "Storgatan 45, 2 tr(2nd floor),123 45 Goteborg, Sweden",
  "Storgatan 45, 2 tr(2nd floor),123 45 Goteborg, Sweden",
  "Storgatan 45, 2 tr(2nd floor),123 45 Goteborg, Sweden",
  "Storgatan 45, 2 tr(2nd floor),123 45 Goteborg, Sweden",
];

export const ARRIVAL_CARDS = [
  {
    logo_img: productImg,
    item_status: "fresh",
    item_name: "brown_bread",
    price: "$80.00",
    description: "great_height",
    heartImg: heartImg,
    shoppingcartImg: shoppingcartImg,
  },
  {
    logo_img: productImg,
    item_status: "fresh",
    item_name: "brown_bread",
    price: "$80.00",
    description: "great_height",
    heartImg: heartImg,
    shoppingcartImg: shoppingcartImg,
  },
  {
    logo_img: productImg,
    item_status: "fresh",
    item_name: "brown_bread",
    price: "$80.00",
    description: "great_height",
    heartImg: heartImg,
    shoppingcartImg: shoppingcartImg,
  },
  {
    logo_img: productImg,
    item_status: "fresh",
    item_name: "brown_bread",
    price: "$80.00",
    description: "great_height",
    heartImg: heartImg,
    shoppingcartImg: shoppingcartImg,
  },
];
export const SORT_BY_OPTIONS = [
  { value: "most_revelance", label: "Most Revelance" },
  { value: "most_revelance", label: "Most Revelance" },
  { value: "most_revelance", label: "Most Revelance" },
];

export const PRODUCT_LIST = [
  {
    id: 113,
    name: "Bread",
    product_tag: ["Upcomng Deal"],
    category: 1,
    subcategory: 4,
    description: "This is pure bread no artifical suppliment in it.",
    status: "available",
    is_premium: true,
    product_detail: {
      inventory: {
        sku: "3432",
        regular_price: "120.00",
        sale_price: "100.00",
        sale_price_dates_from: "2024-12-03",
        sale_price_dates_to: "2024-12-03",
        weight: "110.00",
        unit: "kg",
        barcode: null,
        bulking_price_rules: [
          {
            quantity_from: 1,
            quantity_to: 2,
            price: "344",
          },
        ],
        start_series: null,
        end_series: null,
      },
      variants: [
        {
          sku: "3432",
          regular_price: "120.00",
          sale_price: "100.00",
          sale_price_dates_from: "2024-12-03",
          sale_price_dates_to: "2024-12-03",
          quantity: 200,
          weight: "110.00",
          unit: "kg",
          enabled: true,
          managed_stock: true,
          allow_backorders: "Allow",
          description: "",
        },
      ],
      advanced: {
        purchase_note: "This is pure ",
        min_order_quantity: 10,
      },
    },
    product_seo: {
      product: 113,
      focused_keyword: "",
      seo_title: "",
      slug: "",
      preview_as: "mobile",
      meta_description: "",
    },
    featured_image: "/media/product_images/.jpg_Gkv7OV2",
    product_images: ["/media/product_images/imagesbread_aBswoe4.jpeg"],
  },
  {
    id: 72,
    name: "Milk",
    product_tag: ["Hot"],
    category: 3,
    subcategory: 6,
    description: "This is Pure milk",
    status: "available",
    is_premium: false,
    product_detail: {
      inventory: {
        sku: "434543",
        regular_price: "120.00",
        sale_price: "100.00",
        sale_price_dates_from: "2024-12-03",
        sale_price_dates_to: "2024-12-03",
        weight: "110.00",
        unit: "kg",
        barcode: null,
        bulking_price_rules: [
          {
            quantity_from: 1,
            quantity_to: 2,
            price: "344",
          },
        ],
        start_series: null,
        end_series: null,
      },
      variants: [
        {
          sku: "2341",
          regular_price: "222.00",
          sale_price: "200.00",
          sale_price_dates_from: "2024-12-03",
          sale_price_dates_to: "2024-12-03",
          quantity: 200,
          weight: "110.00",
          unit: "kg",
          enabled: true,
          managed_stock: true,
          allow_backorders: "Allow",
          description: "",
        },
      ],
      advanced: {
        purchase_note: "",
        min_order_quantity: 1,
      },
    },
    product_seo: {
      product: 72,
      focused_keyword: "",
      seo_title: "",
      slug: "",
      preview_as: "mobile",
      meta_description: "",
    },
    featured_image: "/media/product_images/milk_UtBKkFe.jpeg",
    product_images: [
      "/media/product_images/milk3_1rUhf96.jpg",
      "/media/product_images/milk2_GDxDXat.jpg",
    ],
  },
  {
    id: 77,
    name: "mango",
    product_tag: [],
    category: 4,
    subcategory: 2,
    description: "This is mango",
    status: "available",
    is_premium: false,
    product_detail: {
      inventory: {
        sku: "2345",
        regular_price: "120.00",
        sale_price: "100.00",
        sale_price_dates_from: "2024-12-03",
        sale_price_dates_to: "2024-12-03",
        weight: "110.00",
        unit: "kg",
        barcode: null,
        bulking_price_rules: [
          {
            quantity_from: 1,
            quantity_to: 2,
            price: "344",
          },
        ],
        start_series: null,
        end_series: null,
      },
      variants: [
        {
          sku: "45454",
          regular_price: "222.00",
          sale_price: "200.00",
          sale_price_dates_from: "2024-12-03",
          sale_price_dates_to: "2024-12-03",
          quantity: 200,
          weight: "110.00",
          unit: "kg",
          enabled: true,
          managed_stock: true,
          allow_backorders: "Allow",
          description: "",
        },
      ],
      advanced: {
        purchase_note: "",
        min_order_quantity: 1,
      },
    },
    product_seo: {
      product: 77,
      focused_keyword: "",
      seo_title: "",
      slug: "",
      preview_as: "mobile",
      meta_description: "",
    },
    featured_image: "/media/product_images/mango_4npRddW.jpg",
    product_images: ["/media/product_images/imagesmango1_0ASzakz.jpeg"],
  },
  {
    id: 104,
    name: "Lady Finger",
    product_tag: ["hot deals"],
    category: 2,
    subcategory: 3,
    description: "discontinued",
    status: "available",
    is_premium: true,
    product_detail: {
      inventory: {
        sku: "32231",
        regular_price: "120.00",
        sale_price: "100.00",
        sale_price_dates_from: "2024-12-03",
        sale_price_dates_to: "2024-12-03",
        weight: "110.00",
        unit: "kg",
        barcode: null,
        bulking_price_rules: [
          {
            quantity_from: 1,
            quantity_to: 2,
            price: "344",
          },
        ],
        start_series: null,
        end_series: null,
      },
      variants: [
        {
          sku: "32231",
          regular_price: "120.00",
          sale_price: "100.00",
          sale_price_dates_from: "2024-12-03",
          sale_price_dates_to: "2024-12-03",
          quantity: 200,
          weight: "110.00",
          unit: "kg",
          enabled: true,
          managed_stock: true,
          allow_backorders: "Allow",
          description: "",
        },
      ],
      advanced: {
        purchase_note: "",
        min_order_quantity: 1,
      },
    },
    product_seo: {
      product: 104,
      focused_keyword: "",
      seo_title: "",
      slug: "",
      preview_as: "mobile",
      meta_description: "",
    },
    featured_image: "/media/product_images/greenvegetable_Xh984o6.jpg",
    product_images: [
      "/media/product_images/ladies-finger_DL9C6hy.png",
      "/media/product_images/ladyfinger2_2r6qMI9.jpeg",
    ],
  },
];
