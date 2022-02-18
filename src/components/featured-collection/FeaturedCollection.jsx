import React, { useContext } from "react";
import { ProductsContext } from "../../context/product-context";
import Featured from "../shared/Featured";

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <Featured {...product} key={product.id} />);

  return (
    <div className="featured-collection container">
      <h2 className="featured-section-title">Featured Collection</h2>
      <div className="products">{productItems}</div>
    </div>
  );
};

export default FeaturedCollection;
