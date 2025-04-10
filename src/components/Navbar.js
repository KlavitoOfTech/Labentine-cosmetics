import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <h2 className="logo">Labentine</h2>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className="sign-up">Sign Up</a></li>
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>

  );
}
