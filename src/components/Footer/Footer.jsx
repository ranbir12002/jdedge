import React from "react";
import { Link } from "react-router-dom";
import { IconFacebook, IconInstagram } from "../Icons/SocialIcons";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footerTop">
                    {/* Brand */}
                    <div className="footerBrand">
                        <h2>Judy Davidson’s EDGEucation Forum</h2>
                        <p className="footerFranchise">
                            Official Franchisee of Thrive Academy of Cambridge English.
                            <br />
                            Empowering learners with global communication skills.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="footerLinks">
                        <h3>Quick Links</h3>
                        <div className="linkList">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/faculty">Outstanding Faculty</Link>
                            <Link to="/results">Results & Testimonials</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footerContact">
                        <h3>Contact Us</h3>
                        <div className="contactList">
                            <div className="contactItem">
                                <span className="contactIcon">📞</span>
                                <a href="tel:+917207174555">+91 72071 74555</a>
                            </div>
                            <div className="contactItem">
                                <span className="contactIcon">✉️</span>
                                <a href="mailto:jdedgeucationforum@gmail.com">jdedgeucationforum@gmail.com</a>
                            </div>
                            <div className="contactItem">
                                <span className="contactIcon">📍</span>
                                <span>
                                    <a href="https://maps.app.goo.gl/sE9cRYToKycrZzF7A" target="_blank" rel="noreferrer">
                                        Judy Davidson’s EDGEucation Forum, Hyderabad
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="footerSocials">
                            <a href="https://www.facebook.com/share/1BKuU3QcCa/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="socialBtn" aria-label="Facebook">
                                <IconFacebook className="iconSvg" />
                            </a>
                            <a href="https://www.instagram.com/thrive.hyd/" target="_blank" rel="noreferrer" className="socialBtn" aria-label="Instagram">
                                <IconInstagram className="iconSvg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <div className="footerCopy">
                        © {year} Judy Davidson’s EDGEucation Forum. All rights reserved.
                    </div>
                </div>
            </div>
        </footer >
    );
}
