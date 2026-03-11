"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuActive(!menuActive);
  };

  const closeMenu = (): void => {
    setMenuActive(false);
  };

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('menu-open');
    };
  }, [menuActive]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header>
      <nav className="menu">
        <div id="A">
          <li>Area</li>
        </div>
        <div className={`centro ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><Link href="#benefict">Benefits</Link></li>
            <li><Link href="#specifications">Specifications</Link></li>
            <li><Link href="#how_to">How To</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
          <input
            id="btn1-mobile"
            type="button"
            value="Learn More"
            onClick={closeMenu}
          />
        </div>

        <div>
          <button className="discover" id="btn1">
            Learn More
            <img src="/assets/↗.png" alt="" />
          </button>
        </div>

        <div
          className={`menu-toggle ${menuActive ? 'active' : ''}`}
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div
        className={`menu-overlay ${menuActive ? 'active' : ''}`}
        id="menu-overlay"
        onClick={closeMenu}
      ></div>
    </header>
  );
}