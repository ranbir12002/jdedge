import React from "react";
import "./OurPartners.css";

export default function OurPartners() {
  return (
    <div className="partnersPage">
      <header className="partnersHero">
        <div className="container">
          <p className="kicker">Strategic Alliance</p>
          <h1 className="partnersTitle">Our Valued Partners</h1>
        </div>
      </header>

      <main className="partnersContent container">
        <section className="partnerCard">
          <div className="partnerLogo">
            <img src="/assets/hero.png" alt="CMR Group of Institutions" className="partnerImg" />
          </div>
          <div className="partnerInfo">
            <h2>CMR Group of Institutions</h2>
            <p>
              Judy Davidson’s EDGEucation Forum is proud to partner with the CMR Group of Institutions. 
              This strategic alliance brings together academic excellence and professional communication training. 
              Together, we focus on empowering students with the skills they need to excel in their academic 
              journeys and future careers.
            </p>
            <p>
              Our collaboration ensures that learners at CMR have access to world-class language programs 
              aligned with global standards, fostering a culture of clarity, confidence, and continuous growth.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
