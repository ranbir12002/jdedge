import React, { useEffect } from "react";
import "./Hiring.css";

export default function Hiring() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="hiringSection">
      <div className="container">
        <div className="hiringHeader">
          <h1 className="hiringTitle">Join Our Team</h1>
          <p className="hiringSubtitle">
            We are looking for passionate individuals to help us shape the future of education at Thrive Academy.
          </p>
        </div>
        
        <div className="hiringContent">
          <div className="posterContainer">
            <img 
              src="/WhatsApp%20Image%202026-05-01%20at%2010.30.26%20PM.jpeg" 
              alt="We are Hiring English Language Trainer" 
              className="hiringPoster" 
            />
          </div>
          
          <div className="hiringActions">
            <a href="mailto:jdedgeucationforum@gmail.com?subject=Application for English Language Trainer" className="applyBtn">
              Apply via Email
            </a>
            <a href="tel:7207174555" className="callBtn">
              Call Us: 7207174555
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
