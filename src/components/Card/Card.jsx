import "./Card.css";
import { useState, useEffect } from "react";

export default function Card({
  title,
  price,
  desc,
  image,
  shoppingCart,
  setShoppingCart,
  index,
}) {
  const [modal, setModal] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    console.log(shoppingCart);
  }, [shoppingCart]);

  function addToCart() {
    if (quantity > 0) {
      const existingItemIndex = shoppingCart.findIndex(
        (item) => item.id === index
      );
      const updatedCart = [...shoppingCart];

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
      } else {
        updatedCart.push({
          id: index,
          name: title,
          quantity: quantity,
          price: price,
        });
      }

      setShoppingCart(updatedCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(existingItemIndex !== -1 ? "Quantity updated!" : "Added to cart!");
    } else {
      alert("Please select a quantity more than 0");
    }
  }

  return (
    <div className="card">
      <img src={image} alt={title} onClick={() => setModal(true)} />
      <div className="info">
        <p className="title">{title}</p>
        <p>Price: ${price}</p>
        <div className="addtocart">
          <button onClick={() => setQuantity(() => quantity - 1)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => setQuantity(() => quantity + 1)}>+</button>
        </div>
        <button
          onClick={() => {
            addToCart();
          }}
        >
          Add To Cart
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div className="modal-box">
            <img src={image} alt="" />
            <p>{desc}</p>
            <button className="button" onClick={() => setModal(false)}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
