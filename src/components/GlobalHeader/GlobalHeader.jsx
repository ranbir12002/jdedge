import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./GlobalHeader.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Why JDedge?", to: "/why-jdedge" },
  { label: "Results & Testimonials", to: "/results" },
  { label: "Faculty", to: "/faculty" },
  { label: "Contact Us", to: "/contact" },
];

export default function GlobalHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  const activeClass = useMemo(
    () => ({ isActive }) => (isActive ? "navLink active" : "navLink"),
    []
  );

  return (
    <header className="globalHeader">
      <div className="container headerRow">
        <NavLink className="brand" to="/" aria-label="JDedgecuationforum home">
          <span className="brandLogoBox" aria-hidden="true">
            <img
              className="brandLogo"
              src="/assets/hero.png"
              alt="JDEDGEUCATION logo"
            />
          </span>
        </NavLink>


        <div className="rightSide">
          <div className="trustBadge" title="Franchisee of Thrive Academy">
            <img
              src="/assets/thrive-logo.png"
              alt="Thrive Academy Logo"
              className="thriveLogo"
            />
          </div>

          <button
            className={open ? "hamburger isOpen" : "hamburger"}
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="site-menu" className={open ? "menu open" : "menu"}>
        <div className="container menuInner">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={activeClass}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
