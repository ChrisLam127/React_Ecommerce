import React from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "../../components/icons";

const CartItem = (props) => {
  const {
    title,
    imageUrl,
    price,
    quantity,
    description,
    id,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imageUrl, price, quantity, id, description };
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={imageUrl} alt="product" />
      </div>
      <div className="name-price">
        <h4>{title}</h4>
        <p>$ {price}</p>
      </div>
      <div className="quantity">
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className="btns-container">
        <button className="btn-increase" onClick={() => increase(product)}>
          <i class="fa-solid fa-plus"></i>
        </button>
        {quantity === 1 && (
          <button className="btn-trash" onClick={() => removeProduct(product)}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-decrease" onClick={() => decrease(product)}>
            <i class="fa-solid fa-minus"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
