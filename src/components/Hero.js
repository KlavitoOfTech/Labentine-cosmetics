import React from "react";
import MainImage from "../images/skincare-pic-1.jpg";
import SecondaryImage from "../images/skincare-pic-2.jpg";
import { products } from './data.js'; // Import products from data.js
import About from '../images/about-us-img.jpg'
import Logo from "../images/labentine-logo.png"

export default function Hero() {
  return (
    <>
      {/* Logo at the top-left corner */}
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      {/* Hero Section */}
      <section className="hero" id="home">
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

      {/* Shop Section */}
      <section id="shop" className="shop-section">
        <h1 className="shop-title">Shop</h1>
        <div className="shop-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card"
              style={{ backgroundImage: `url(${product.image})` }} // Set the background image here
            >
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <span className="product-price">{product.price}</span>
                <a href="#contact" className="contact-now-btn">Contact Now</a>
              </div>
            </div>
          ))}
        </div>
      </section>

          {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2 className="about-title">About Us</h2>
            <p className="about-description">
              Welcome to our store! We specialize in handcrafted beauty products that are made with love and care.
              From our luxurious perfumes to our gentle soaps and nourishing creams, everything is designed to elevate
              your daily self-care routine naturally.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src= {About}
              alt="About"
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtext">
            I’d love to hear from you! Reach out anytime via the platforms below.
          </p>

          <div className="contact-links">
            <a
              href="https://wa.me/1234567890"
              className="contact-link whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://instagram.com/yourhandle"
              className="contact-link instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="mailto:youremail@example.com"
              className="contact-link email"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </>
    
  );
}
