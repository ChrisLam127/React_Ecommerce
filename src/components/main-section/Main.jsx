import React from "react";
import "./main.styles.scss";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/heroImg.jpg";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={heroImg} alt="studio bag" />
        </div>
        <div className="ms-m-desc">
          <h2>Designed for fashion. Creafter for Sport.</h2>
          <p>
            We have products that effortlessly transition from day to night.
            From the board room to the fitness studio, and everywhere in
            between, each Lambo piece is thoughfully created to be the perfect
            balance of form and ffunction.
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => navigate("/product/1")}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
