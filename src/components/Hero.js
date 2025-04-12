import React, { useState } from 'react';
import MainImage from "../images/skincare-pic-1.jpg";
import SecondaryImage from "../images/skincare-pic-2.jpg";
import { products } from './data.js';
import About from '../images/about-us-img.jpg';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [activeIndices, setActiveIndices] = useState(products.map(() => 0));

  const scroll = (direction, productIndex) => {
    const maxIndex = products[productIndex].images.length - 1;
    const newIndex = direction === 'left'
      ? Math.max(0, activeIndices[productIndex] - 1)
      : Math.min(maxIndex, activeIndices[productIndex] + 1);

    setActiveIndices(prev => {
      const updated = [...prev];
      updated[productIndex] = newIndex;
      return updated;
    });
  };

  const goToImage = (index, productIndex) => {
    setActiveIndices(prev => {
      const updated = [...prev];
      updated[productIndex] = index;
      return updated;
    });
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome!</h1>
          <p>Discover the best skincare products for glowing skin.</p>
          <a href="#shop">
            <button className="shop-now">Shop Now</button>
          </a>
        </div>
        <div className="hero-images">
            <img src={MainImage} alt="Main Skincare" className="hero-image main-image" />
            <img src={SecondaryImage} alt="Secondary Product" className="hero-image overlay-image" />
        </div>
      </section>

      <section id="shop" className="shop-section">
        <h1 className="shop-title">Shop</h1>
        <div className="shop-grid">
          {products.map((product, productIndex) => (
            <div key={productIndex} className="product-card">
              <div className="carousel-container">
                <button className="scroll-btn left" onClick={() => scroll('left', productIndex)}>
                  <ChevronLeft size={24} />
                </button>
                <img
                  src={product.images[activeIndices[productIndex]]}
                  alt=""
                  className="carousel-img"
                />
                <button className="scroll-btn right" onClick={() => scroll('right', productIndex)}>
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="dots-container">
                {product.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${activeIndices[productIndex] === idx ? 'active' : ''}`}
                    onClick={() => goToImage(idx, productIndex)}
                  />
                ))}
              </div>

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
            <img src={About} alt="About" className="about-image" />
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtext">
            I’d love to hear from you! Reach out anytime via the platforms below.
          </p>
          <div className="contact-icons">
            <a href="https://wa.me/2348110862695" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#E4405F" />
            </a>
            <a href="mailto:yourEmail@gmail.com">
              <SiGmail size={30} color="#D44638" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
