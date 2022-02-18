import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import { isInCart } from "../../Helpers";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../context/product-context";
import Layout from "../../components/shared/Layout";
import "./singleProduct.styles.scss";

const SingleProduct = () => {
  const { products } = useContext(ProductsContext);
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    // if product does not exist , redirect to shop page
    if (!product) {
      return navigate("/shop");
    }

    setProduct(product);
  }, [id, product, products]);

  if (!product) {
    return null;
  }

  const { imageUrl, title, price, description } = product;

  const itemInCart = isInCart(product, cartItems);

  return (
    <Layout>
      <div className="singleProduct-container">
        <div className="product-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="product-details">
          <div className="name-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="add-to-cart-btns">
            {!itemInCart ? (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                onClick={() => addProduct(product)}
              >
                ADD TO CART
              </button>
            ) : (
              <button
                className="button is-white nomad-btn"
                id="btn-white-outline"
                onClick={() => increase(product)}
              >
                ADD MORE
              </button>
            )}

            <button
              className="button is-black nomad-btn"
              id="btn-white-outline"
            >
              PROCEED TO CHECK OUT
            </button>
          </div>
          <div className="product-desc">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
