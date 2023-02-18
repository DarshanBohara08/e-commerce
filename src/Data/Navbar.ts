export const sidebarData = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "shop",
    link: "",
    subItem: [
      { id: 1, link: "/shop/shopCategory", name: "Shop Category" },
      { id: 2, link: "/shop/productDetail", name: "Product Details" },
      { id: 3, link: "/shop/productCheckout", name: "Product Checkout" },
      { id: 4, link: "/shop/confirmation", name: "Confirmation" },
      { id: 5, link: "/shop/shoppingCart", name: "Shopping Cart" },
    ],
  },
  {
    id: 3,
    name: "blog",
    link: "",
    subItem: [
      { id: 1, link: "/blog/blog", name: "Blog" },
      { id: 2, link: "/blog/blogDetail", name: "Blog Detail" },
    ],
  },
  {
    id: 4,
    name: "pages",
    link: "",
    subItem: [
      { id: 1, link: "/pages/login", name: "Login" },
      { id: 2, link: "/pages/register", name: "Register" },
      { id: 3, link: "/pages/tracking", name: "Tracking" },
    ],
  },
  {
    id: 5,
    name: "contact",
    link: "/contact",
  },
];
