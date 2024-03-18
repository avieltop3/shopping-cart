import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Shop from "../pages/shop/Shop";
import Cart from "../pages/cart/Cart";
import { useState } from "react";

const Router = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {
      path: "/shop",
      element: (
        <Shop shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      ),
    },
    {
      path: "/cart",
      element: (
        <Cart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
