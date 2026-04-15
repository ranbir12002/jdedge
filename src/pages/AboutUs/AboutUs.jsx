import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutPage() {
  return (
    <section className="aboutPage">
      {/* HERO */}
      <header className="aboutHero">
        <div
          className="aboutHeroBg"
          style={{ backgroundImage: "url(/assets/about.png)" }}
          aria-hidden="true"
        />

        <div className="aboutHeroOverlay" />

        <div className="container aboutHeroContent">
          <p className="kicker">About Us</p>
          <h1 className="aboutHeroTitle">
            Communication is not just language —
            <br /> it is judgment, intent, and confidence.
          </h1>
          <p className="aboutHeroSub">
            At Judy Davidson’s EDGEucation Forum, we help learners develop English as a
            lifelong human skill — not just an academic requirement.
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <main className="aboutBody">
        <div className="container">
          {/* WHO WE ARE */}
          <section className="aboutSection whoSplit">
            <div className="whoText">
              <div className="sectionHeader">
                <h2>Who We Are</h2>
              </div>

              <p>
                At <strong>Judy Davidson’s EDGEucation Forum</strong>, we believe in helping young
                learners communicate with clarity, confidence, and purpose in a digital-first world.
                Today’s students are digital natives, surrounded by technology and powerful tools,
                with English firmly established as the global language.
              </p>

              <p>
                We focus on maintaining a <strong>humanised connection with English</strong>—one that
                values thought, intent, empathy, and sound judgment. Our programmes follow the Common
                European Framework of Reference (CEFR), ensuring your progress is recognised and
                meaningful wherever your journey takes you.
              </p>

              <p>
                We work with learners of all ages, from young children taking their first steps in
                English to adults preparing for exams, interviews, and the workplace. Our focus is
                on developing practical skills across Listening, Reading, Writing, and Speaking,
                supported by regular feedback and personalised guidance.
              </p>

              <div className="whoActions">
                <Link to="/courses" className="btnPrimary">Explore Courses</Link>
                <Link to="/contact" className="btnGhost">Talk to Us</Link>
              </div>
            </div>

            <div className="whoMedia">
              <img
                src="/assets/hero.png"
                alt="Students learning at JD EDGEucation"
                className="whoImg"
              />
            </div>
          </section>

          {/* VISION / MISSION */}
          <section className="aboutSection softBg">
            <div className="sectionHeader">
              <h2>Helping You Use English with Confidence</h2>
            </div>
            <p>
              Whether you are looking for a short refresher, a structured monthly course, or a
              long-term Cambridge qualification, we offer clear learning pathways that match your
              goals and your level. With experienced trainers, small groups, and a supportive
              learning environment, we help you build lasting confidence in English.
            </p>
          </section>

          {/* FOUNDER */}
          <section className="aboutSection">
            <div className="founderBlock">
              <div className="founderText">
                <h3>A Note from the Founder</h3>

                <p>
                  Judy Davidson’s EDGEucation Forum was created from a simple observation: many
                  students have access to knowledge and tools but struggle to express themselves
                  with confidence and clarity.
                </p>

                <p>
                  I wanted to build a space where communication is developed as a
                  human skill—one that values thinking, judgment, and authentic
                  expression alongside modern learning tools. My aim is to help learners find their
                  voice and use it meaningfully - in classrooms, careers, and life.
                </p>

                <p className="founderQuote">
                  “We don’t just put words into action — we put action into words.”
                </p>

                <p className="founderName">— Judy Davidson</p>
              </div>
            </div>
          </section>

          {/* AFFILIATION */}
          <section className="aboutSection softBg">
            <div className="sectionHeader">
              <h2>Our Academic Association</h2>
            </div>

            <p>
              <strong>Judy Davidson’s EDGEucation Forum</strong> is a franchisee of the
              <strong> Thrive Academy of Cambridge English</strong>.
            </p>
            <p>
              EDGEucation is the core company, and this association enables us to deliver
              globally recognised Cambridge-aligned programs. We operate in
              <strong> Hyderabad</strong>.
            </p>
          </section>

          {/* CTA */}
          <section className="aboutCTA">
            <div className="ctaCard">
              <div>
                <h3>Ready to build your communication edge?</h3>
                <p>
                  Explore our programs or speak with us to find the right learning
                  path for your goals.
                </p>
              </div>

              <div className="ctaButtons">
                <Link to="/courses" className="btnPrimary">View Courses</Link>
                <Link to="/contact" className="btnGhost">Contact Us</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
