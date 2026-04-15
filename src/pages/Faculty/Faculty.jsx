import React from "react";
import { Link } from "react-router-dom";
import "./Faculty.css";

const FACULTY = [
  {
    id: 1,
    name: "Judy Davidson",
    role: "Founder & Director",
    photo: "/assets/staff/judydav.jpeg",
    teaches: ["Leadership", "Communication Excellence", "Strategy"],
    bio:
      "Founder and Director of Judy Davidson’s EDGEucation Forum and an ex-Indian Army Major with over 16 years of leadership experience across education and training. She specializes in communication excellence, leadership development, and professional upskilling. Her work bridges strategic thinking with measurable learning outcomes.",
    highlights: ["Ex-Indian Army Major", "16+ Years Experience", "Leadership Development"],
  },
  {
    id: 2,
    name: "Sheila Basu Raju",
    role: "Soft Skills Trainer & Life Skills Coach",
    photo: "/assets/staff/sheila.jpeg",
    teaches: ["Soft Skills", "Happiness Coaching", "Corporate Training"],
    bio:
      "With 22 years of Corporate Experience, Sheila has delivered over 5000+ workshops. She has worked with People One Consulting Chennai as a senior trainer and content creator. A certified Happiness and Wellness Coach, she calls herself 'The Joy Catalyst' and conducts language training for corporates and institutions.",
    highlights: ["22+ Years Corporate Exp", "The Joy Catalyst", "5000+ Workshops"],
  },
  {
    id: 3,
    name: "Deeksha Singh",
    role: "Instructional Designer & Mentor",
    photo: "/assets/staff/deeksha.jpeg",
    teaches: ["Curriculum Design", "Mentorship", "Instructional Thinking"],
    bio:
      "An Instructional Designer and Mentor who creates learner-centred, outcome-driven educational experiences. She specialises in curriculum design, engaging learning materials, and meaningful assessments aligned with real-world goals. As a mentor, she guides educators to build strong instructional thinking and reflective practice.",
    highlights: ["Curriculum Design", "Outcome-Driven", "Educator Mentorship"],
  },
];

export default function FacultyPage() {
  return (
    <section className="facPage">
      {/* HERO */}
      {/* HERO */}
      <header className="facHero">
        <div className="facHeroBg">
          <img src="/assets/faculty.jpeg" alt="Faculty Hero" />
        </div>
        <div className="facHeroOverlay" />

        <div className="container facHeroInner">
          <div className="facHeroContent">
            <p className="kicker">Outstanding Faculty</p>

            <h1 className="facTitle">
              Educators who teach English
              <br /> the way it’s meant to be used.
            </h1>

            <p className="facSub">
              Judy Davidson’s EDGEucation Forum is guided by a dedicated teaching team that focuses on clarity,
              confidence, and real-world communication.
            </p>

            <div className="facActions">
              <Link to="/contact" className="btnPrimary">Talk to Us</Link>
              <Link to="/courses" className="btnGhost">Explore Programs</Link>
            </div>
          </div>
        </div>
      </header>

      {/* LIST */}
      <main className="facBody">
        <div className="container">
          <div className="facList">
            {FACULTY.map((m, idx) => (
              <article className="facRow" key={m.id}>
                <div className="facRowIndex" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="facCard">
                  <div className="facCardLeft">
                    <div className="facPhotoWrap">
                      <img
                        src={m.photo}
                        alt={`${m.name} portrait`}
                        className="facPhoto"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="facCardRight">
                    <div className="facHeader">
                      <div>
                        <div className="facName">{m.name}</div>
                        <div className="facRole">{m.role}</div>
                      </div>


                    </div>

                    <p className="facBio">{m.bio}</p>




                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <section className="facCTA">
            <div className="ctaCardModern">
              <div>
                <h3>Want a learning plan matched to your goal?</h3>
                <p>Tell us what you need — IELTS, Cambridge, Campus or Corporate Interviews — and we’ll guide you.</p>
              </div>
              <div className="ctaButtons">
                <Link to="/contact" className="btnPrimary">Book a Demo</Link>
                <Link to="/courses" className="btnGhost">View Courses</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
