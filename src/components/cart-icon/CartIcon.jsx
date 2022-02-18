import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import "./cartIcon.styles.scss";

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(cartItems);
  return (
    <div className="cart-container" onClick={() => navigate("/cart")}>
      <span>
        <i className="fas fa-shopping-cart"></i>
      </span>
      {itemCount > 0 ? <span className="cart-count"> {itemCount} </span> : null}
    </div>
  );
};

export default CartIcon;
