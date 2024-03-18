import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";

export default function Cart({ shoppingCart, setShoppingCart }) {
  useEffect(() => {
    async function getData() {
      let a = await JSON.parse(localStorage.getItem("cart"));
      await console.log(a);
      setShoppingCart(a);
      console.log(shoppingCart);
    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      {shoppingCart ? (
        shoppingCart.map((cartItem) => (
          <div>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <p>{cartItem.quantity}</p>
            <img src={cartItem.image} alt="" />
          </div>
        ))
      ) : (
        <p>no item</p>
      )}
    </>
  );
}
