import React from "react";
import "./WhatsNew.css";

export default function WhatsNew() {
  return (
    <div className="whatsNewPage">
      <header className="whatsNewHero">
        <div className="container">
          <p className="kicker">Updates & Events</p>
          <h1 className="whatsNewTitle">What’s New at JD EDGE</h1>
        </div>
      </header>

      <main className="whatsNewContent container">
        {/* SUMMER CAMP SECTION */}
        <section className="newsSection">
          <div className="newsGrid">
            <div className="newsMedia">
              <img src="/assets/course.png" alt="Summer Camp 2026" className="newsImg" />
            </div>
            <div className="newsText">
              <div className="newBadge">Coming Soon</div>
              <h2>Summer Camp 2026</h2>
              <p>
                Get ready for an unforgettable summer! Our upcoming Summer Camp is designed to blend fun, 
                creativity, and intensive language learning. From interactive workshops to group projects, 
                this program is perfect for students looking to sharpen their communication skills while 
                making new friends.
              </p>
              <ul className="newsList">
                <li>Interactive Speaking Sessions</li>
                <li>Creative Writing Workshops</li>
                <li>Confidence Building Activities</li>
                <li>Age-appropriate Groups</li>
              </ul>
              <button className="btnPrimary">Express Interest</button>
            </div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="videoSection">
          <div className="sectionHeader">
            <h2>Throwback to Last Year</h2>
            <p>Catch a glimpse of the energy and excitement from our previous school sessions.</p>
          </div>
          <div className="videoWrapper">
            <video 
              src="/assets/get the edge.mp4" 
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
