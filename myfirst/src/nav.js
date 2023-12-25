import React, { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (item) => {
    // Handle content rendering for each item
    console.log("Clicked:", item);
  };

  return (
    <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
      <div className="nav__flex-container">
        <div className="nav__logo">Logo</div>
        <div className="nav__portfolio">Portfolio</div>
        <button className="nav__hamburger" onClick={toggleMenu}>
          {/* Hamburger icon */}
        </button>
      </div>
      <ul className={`nav__menu ${isMenuOpen ? "nav__menu--active" : ""}`}>
        <li onClick={() => handleMenuItemClick("Item 1")}>Item 1</li>
        <li onClick={() => handleMenuItemClick("Item 2")}>Item 2</li>
        <li onClick={() => handleMenuItemClick("Item 3")}>Item 3</li>
      </ul>
      {isMenuOpen && (
        <div className="nav__content-section">
          {/* Render content based on selected item */}
        </div>
      )}
    </nav>
  );
}

export default Nav;
