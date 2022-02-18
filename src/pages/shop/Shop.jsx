import React, { useContext } from "react";
import "./shop.style.scss";
import Featured from "../../components/shared/Featured";
import { ProductsContext } from "../../context/product-context";
import Layout from "../../components/shared/Layout";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  const allProducts = products.map((product) => (
    <Featured {...product} key={product.id} />
  ));
  return (
    <Layout>
      <div className="product-list-container">
        <h2 className="product-list-title">Shop</h2>
        <div className="product-list">{allProducts}</div>
      </div>
    </Layout>
  );
};

export default Shop;
