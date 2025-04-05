import React from "react";
import MainImage from "../skincare-pic-1.jpg";
import SecondaryImage from "../skincare-pic-2.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome!</h1>
        <p>Discover the best skincare products for glowing skin.</p>
        <button className="shop-now">Shop Now</button>
      </div>
      <div className="hero-images">
        <img
          src={MainImage}
          alt="Main Skincare"
          className="hero-image main-image"
        />
        <img
          src={SecondaryImage}
          alt="Secondary Product"
          className="hero-image overlay-image"
        />
      </div>
    </section>
  );
}
