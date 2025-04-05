import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Labentine</h2>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#" className="sign-up">Sign Up</a></li>
      </ul>
    </nav>
  );
}
