import React from "react";
import "./WhatsNew.css";

export default function WhatsNew() {
  return (
    <div className="whatsNewPage">
      <header className="whatsNewHero">
        <div className="container">
          <p className="kicker">Updates & Events</p>
          <h1 className="whatsNewTitle">What's New at JD <span className="goldText">EDGE</span></h1>
        </div>
      </header>

      <main className="whatsNewContent container">
        {/* SUMMER CAMP MAIN POSTER SECTION */}
        <section className="newsSection">
          <div className="newsGrid">
            <div className="newsMedia">
              <img src="/assets/whats new/image.png" alt="Summer Camp 2026 Poster" className="newsImg" />
            </div>
            <div className="newsText">
              <div className="newBadge">Registration Open</div>
              <h2>Summer Camp 2026</h2>
              <p>
                Unleash your child's potential this summer at Thrive Academy! Our Summer Camp 2026 
                is a 4-week intensive program focusing on Communication, Creativity, and Confidence. 
                Experience a perfect blend of learning and fun in a supportive environment.
              </p>
              <div className="eventInfo">
                <div className="infoItem">
                  <strong>Dates:</strong> 4th May – 5th June
                </div>
                <div className="infoItem">
                  <strong>Time:</strong> 10:00 AM – 12:00 PM (Mon-Fri)
                </div>
                <div className="infoItem">
                  <strong>Location:</strong> AS Rao Nagar, Hyderabad
                </div>
              </div>
              <div className="earlyBird">
                <span className="starIcon">⭐</span> 
                Register before <strong>30th April</strong> for an Early Bird Advantage!
              </div>
              <div className="contactSection">
                <p>Call / WhatsApp for Details:</p>
                <div className="phoneNumbers">
                  <a href="tel:+917207174555" className="phoneLink">7207174555</a>
                  <span>|</span>
                  <a href="tel:+917842071555" className="phoneLink">7842071555</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BATCH DETAILS SECTION */}
        <section className="batchDetailsSection">
          <div className="sectionHeader">
            <h2>Programme Batches</h2>
            <p>Tailored learning paths for every age group</p>
          </div>
          <div className="batchGrid">
            <div className="batchCard explorer">
              <div className="batchHeader">
                <h3>Batch 1: Little Explorers</h3>
                <span className="ageTag">Ages 5 - 7</span>
              </div>
              <p className="batchTagline">Fun & Creative Learning!</p>
              <ul className="batchList">
                <li>Phonics & Storytime</li>
                <li>Games & Art</li>
                <li>Music & Confidence</li>
              </ul>
            </div>

            <div className="batchCard communicator">
              <div className="batchHeader">
                <h3>Batch 2: Young Communicators</h3>
                <span className="ageTag">Ages 8 - 11</span>
              </div>
              <p className="batchTagline">Express & Create!</p>
              <ul className="batchList">
                <li>Speaking & Writing</li>
                <li>Drama & Role Play</li>
                <li>Public Speaking</li>
              </ul>
            </div>

            <div className="batchCard leader">
              <div className="batchHeader">
                <h3>Batch 3: Future Leaders</h3>
                <span className="ageTag">Ages 12 - 15</span>
              </div>
              <p className="batchTagline">Lead & Inspire!</p>
              <ul className="batchList">
                <li>Debates & Discussions</li>
                <li>Leadership Skills</li>
                <li>Presentations</li>
              </ul>
            </div>
          </div>
          <div className="batchPosterWrapper">
            <img src="/assets/whats new/image2.jpeg" alt="Batch Details Poster" className="batchPosterImg" />
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="videoSection">
          <div className="sectionHeader">
            <h2>Glimpses of Last Summer Camp</h2>
            <p>Relive the magic and energy of our 2025 Summer Camp sessions.</p>
          </div>
          <div className="videoWrapper reel">
            <video 
              src="/assets/reel.mp4" 
              controls 
              autoPlay 
              muted 
              loop 
              className="featuredVideo"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </div>
  );
}
