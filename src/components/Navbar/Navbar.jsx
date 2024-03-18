import "./Navbar.css";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="logo">Goods</div>
        <div className="links">
          <a href="cart">
            <FaCartArrowDown />
          </a>
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => setShowNav(true)}
          />
        </div>
      </nav>
      <div className={showNav ? "show" : "hidden"}>
        <div className="linkers">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/cart">Cart</a>
          <a onClick={() => setShowNav(false)}>x</a>
        </div>
      </div>
    </>
  );
}
