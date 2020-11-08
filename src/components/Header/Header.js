import React, { useState, useEffect } from "react";
import { headingLinks } from './data';


import './Header.css';

function Header({ setBodyFixedFunc, setBodyUnfixedFunc }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  function handleMobileClick() {
    setBodyUnfixedFunc();
    setMenuOpen(false);
  }


  const mobileOpen = menuOpen ? "active--mobile" : "";


  useEffect(() => {
    if (mobileOpen) {
      setBodyFixedFunc();
    } else {
      setBodyUnfixedFunc();
    }
  }, [mobileOpen, setBodyFixedFunc, setBodyUnfixedFunc]);


  return (
    <header>
      <div className="container">
        <div className="header--layout">
          <span className="logo">Ross Findlay</span>
          <nav className="nav nav--desktop">
            <ul>
              {headingLinks.map((link, index) => (
                <li className="nav--links" key={index}><a href={link.href}>{link.title}</a></li>
              ))}
            </ul>
          </nav>
          <button className="mobile-ham" onClick={handleMenuOpen}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
          <nav className={`nav nav--mobile ${mobileOpen}`}>
            <ul>
              {headingLinks.map((link, index) => (
                <li className="nav--links" key={index}>
                  <a onClick={handleMobileClick} href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

}
export default Header;
