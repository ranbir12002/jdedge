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
        <section className="partnershipSection">
          <div className="logosContainer">
            <div className="logoWrapper">
              <img src="/assets/hero.png" alt="JD Edge Logo" className="brandLogo" />
            </div>
            <div className="partnershipX">×</div>
            <div className="logoWrapper">
              <img src="/assets/cmr.png" alt="CMR Group of Institutions" className="partnerLogoImg" />
            </div>
          </div>

          <div className="partnershipInfo">
            <h2>CMR Group of Institutions</h2>
            <p>
              Judy Davidson’s <span className="edgeGold">EDGE</span>ucation Forum is proud to partner with the <strong>CMR Group of Institutions</strong>, 
              a name synonymous with academic excellence and innovation.
            </p>
            <p>
              This strategic collaboration brings together strong academic foundations and high-impact communication 
              training, creating a powerful learning ecosystem for students.
            </p>
            
            <div className="benefitsBox">
              <h3>Together, we equip learners with:</h3>
              <ul className="benefitsList">
                <li>
                  <span className="checkIcon">✓</span>
                  Global-standard language and communication skills
                </li>
                <li>
                  <span className="checkIcon">✓</span>
                  Confidence to express ideas with clarity and impact
                </li>
                <li>
                  <span className="checkIcon">✓</span>
                  Career-ready competencies for a competitive world
                </li>
              </ul>
            </div>

            <p className="partnershipClosing">
              At CMR, this partnership goes beyond the classroom—fostering a culture of confidence, 
              clarity, and continuous growth that prepares students not just for exams, but for life and leadership.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
