import React from "react";
import "./Landing.css";
import electronicStoreLogo from "../../Assets/logo.svg";
import landingImage from "../../Assets/giftComputer.svg";
import hamburgerLogo from "../../Assets/ham.svg";

const Landing = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={electronicStoreLogo} alt="logo" />
          <span>Electronic Store Aviyel</span>
        </div>
        <div className="navbar__items">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Our Teams</a>
          <a href="#">Orders</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="navbar__mobile">
          <img src={hamburgerLogo} alt="menu logo" />
        </div>
      </div>

      <div className="landing__wrapper">
        <div className="landing">
          <div className="landing__details">
            <div className="landing__title">
              <h1>Electronic Store Aviyel</h1>
            </div>
            <div className="landing__subtitle">
              <h2>A gift computer Store</h2>
            </div>
            <button>Sign up</button>
            <div className="landing__image">
              <img
                src={landingImage}
                alt="some computer with gift box inside it"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
