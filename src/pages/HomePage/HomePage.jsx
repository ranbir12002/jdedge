import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { COURSES } from "../../data/coursesData";
import "./HomePage.css";

export default function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
        }
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const featuredCourses = COURSES;

  return (
    <section className="homePage">
      <header className="heroStage">
        {/* Full background image for the entire hero */}
        <div
          className="heroImage"
          style={{ backgroundImage: "url(/bg-img.png)" }}
          aria-hidden="true"
        />
        <div className="heroBackdrop" aria-hidden="true" />

        {/* Readability overlay */}
        <div className="heroOverlay" aria-hidden="true" />

        {/* Content */}
        <div className="container heroContent">
          <div className="pill">Franchisee of Thrive Academy of Cambridge English</div>

          <h1 className="heroTitle">
            <span className="heroBrand">
              JUDY DAVIDSON&apos;S
              <span className="edgeLine">
                <span className="edgeGold">EDGE</span>UCATION FORUM
              </span>
            </span>
          </h1>

          <p className="heroTagline">
            Helping You Use <strong>ENGLISH WITH CONFIDENCE</strong>
          </p>

          <div className="ctaRow">
            <Link className="btnPrimary" to="/courses">Explore Courses</Link>
            <Link className="btnGhost" to="/contact">Contact Us</Link>
          </div>

          <div className="trustRow">
            <div className="trustItem"><span className="trustDot" /><span>Cambridge-aligned programs</span></div>
            <div className="trustItem"><span className="trustDot" /><span>Online & Offline learning</span></div>
            <div className="trustItem"><span className="trustDot" /><span>Free assessment available</span></div>
          </div>

          <div className="heroMeta">
            <span>Hyderabad</span>
            <span className="dot" />
            <span>Small batch, guided practice</span>
          </div>
        </div>
      </header>

      {/* HOME SECTIONS */}
      <main className="belowStage">
        <div className="container">
          {/* ABOUT PREVIEW (short) */}
          <section className="aboutBlock">
            <div className="sectionHeaderRow">
              <div>
                <p className="kicker">About</p>
                <h2 className="sectionTitle">
                  JUDY DAVIDSON&apos;S{" "}
                  <span className="edgeGold">EDGE</span>UCATION FORUM
                </h2>

              </div>

              <Link className="btnGhost small" to="/about">Read More</Link>
            </div>

            <div className="aboutInner">
              <div className="aboutContent">
                <p className="aboutText">
                  Founded in 2025, we believe in helping young learners communicate with clarity,
                  confidence, and purpose. We focus on maintaining a humanised connection with English
                  —one that values thought, intent, empathy, and sound judgment.
                  <br /><br />
                  Whether you are looking for a short refresher, a structured monthly course, or a
                  long-term Cambridge qualification, we help you build lasting confidence.
                </p>
              </div>
              <div className="aboutMedia">
                <video
                  ref={videoRef}
                  className="aboutVideo"
                  muted
                  playsInline
                  src="/assets/get%20the%20edge.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* PROGRAMS */}
          <section className="programsBlock">
            <div className="sectionHeaderRow">
              <div>
                <p className="kicker">Programs</p>
                <h2 className="sectionTitle">Programs & Services</h2>
                <p className="sectionSub">
                  Quick overview — full details inside the Courses page.
                </p>
              </div>

              <Link className="btnGhost small" to="/courses">View All Courses</Link>
            </div>

            {/* Marquee Wrapper */}
            <div className="marqueeWrapper">
              <div className="marqueeTrack">
                {/* Duplicate courses enough times for smooth indefinite scroll */}
                {[...featuredCourses, ...featuredCourses, ...featuredCourses, ...featuredCourses].map((c, index) => (
                  <Link
                    key={`${c.slug}-${index}`}
                    to={`/courses/${c.slug}`}
                    className="programCard"
                    aria-label={`Go to ${c.title} course details`}
                  >
                    <div className="programMedia" aria-hidden="true">
                      <img src={c.img} alt="" className="programImgRaw" />
                    </div>
                    <div className="programBody">
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                      <div className="programMeta">
                        <span className="chip">{c.level}</span>
                        <span className="chip">{c.tags[0]}</span>
                      </div>
                      <span className="textLink">Explore →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mini quick links */}

          </section>

          {/* Bottom CTA (redirect) */}
          <section className="homeCTA">
            <div className="ctaCard">
              <div>
                <h3>Not sure where to start?</h3>
                <p>Contact us — we’ll guide you to the right program based on your goals.</p>
              </div>
              <div className="ctaButtons">
                <Link className="btnPrimary" to="/contact">Talk to Us</Link>
                <Link className="btnGhost" to="/courses">Browse Courses</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
