import { Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/HomePage";
import NotFoud from "./components/NotFoud";
import SingleProduct from "./components/single-product/SingleProduct";
import Shop from "./pages/shop/Shop";
import CartPage from "./pages/cartPage/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoud />} />
      </Routes>
    </div>
  );
}

export default App;
