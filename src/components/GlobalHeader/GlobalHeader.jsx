import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./GlobalHeader.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Why JDedge?", to: "/why-jdedge" },
  { label: "Results & Testimonials", to: "/results" },
  { label: "The Team", to: "/faculty" },
  { label: "Our Partners", to: "/partners" },
  { label: "What's New", to: "/whats-new" },
  { label: "Contact Us", to: "/contact" },
  { label: "We are HIRING!!", to: "/hiring" },
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
              alt=""
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

      {/* Scrolling Text Trail */}
      <div className="tickerWrapper">
        <div className="tickerContent">
          <NavLink to="/whats-new" className="tickerLink">
            ✨ Summer Camp 2026 Registration Open! ✨ Unleash your child's potential this summer at Thrive Academy! ✨ 4th May – 5th June ✨ Call 7207174555 for Details ✨ Limited Seats Available! ✨
          </NavLink>
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
