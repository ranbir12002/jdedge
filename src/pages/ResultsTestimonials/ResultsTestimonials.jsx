import React from "react";
import { Link } from "react-router-dom";
import "./ResultsTestimonials.css";



const TESTIMONIALS = [
  {
    id: 1,
    name: "Uma Rajdev",
    date: "1 week ago",
    rating: 5,
    review:
      "A truly refreshing and outstanding IELTS learning experience with Judy ma’am! Her teaching style is highly engaging and well-structured, making learning both effective and enjoyable. The personalized guidance, regular practice sessions, and detailed feedback helped me clearly understand my strengths and work on my weaknesses. This approach made a huge difference in my confidence and overall performance. I highly recommend her IELTS coaching to anyone aiming for a strong band score.",
    tags: ["IELTS", "Guidance", "Confidence"],
  },
  {
    id: 2,
    name: "Raghavendra Solanki",
    date: "7 months ago",
    rating: 5,
    review:
      "I am really thankful to Ms Judy Davidson for excellent and comprehensive training for my IELTS exam. It was only because of the clarity of concepts, practice of real exam questions and personalised attention given to me at Judy Davidson’s Edgeucation forum that I was able to score 8 Band in IELTS with a perfect 9 in listening section. With such an excellent score I have received admits from a number of top foreign universities to the likes of London Business School, IE Business School, Lisbon MBA etc.",
    tags: ["IELTS", "Band 8", "Success Story"],
  },
  {
    id: 3,
    name: "Goldy",
    date: "5 months ago",
    rating: 5,
    review:
      "A big thanks to Thrive English Coaching! They really helped boost my confidence for my job interview at TCS. From the start, the teachers created a vibe that made learning easy. The mock interviews by Mrs Judy were especially helpful, allowing me to practice in a low-pressure setting. What I appreciated most was their approach after the initial test. They not only improved my English skills but also helped me believe in myself. Now, I feel ready to tackle any interview that comes my way.",
    tags: ["Interviews", "Confidence", "Job Ready"],
  },
  {
    id: 4,
    name: "Hema Malini",
    date: "7 months ago",
    rating: 5,
    review:
      "I personally found it an amazing institution. The quality of teach is exceptional and the faculty especially Ms Judy has made it incredibly easy for my daughter to understand for a summer camp. If my kid is doing well I hoping to put her in a long term courses as well. Thanks much.",
    tags: ["Kids", "Summer Camp", "Quality"],
  },
  {
    id: 5,
    name: "Pasumarthi Saritha",
    date: "6 months ago",
    rating: 5,
    review: "Good teaching.",
    tags: ["Teaching", "Quality"],
  },
];


const OUTCOME_STEPS = [
  {
    title: "Week 1",
    text: "Baseline clarity: identify what’s holding you back (hesitation, structure, vocabulary-in-context).",
  },
  {
    title: "Week 2",
    text: "Confidence through guided practice: structured speaking drills + real-world prompts.",
  },
  {
    title: "Week 4",
    text: "Refinement: feedback loops improve tone, grammar accuracy, and response flow — consistently.",
  },
];



export default function ResultsTestimonials() {
  return (
    <section className="rtPage">
      {/* HERO */}
      {/* HERO (new layout) */}
      <header className="rtHeroV2">
        <div className="rtHeroBg">
          {/* Reusing hero image or specific one if available */}
          <img src="/assets/hero.png" alt="Testimonials Hero" />
        </div>
        <div className="rtHeroOverlay" />

        <div className="container rtHeroInner">
          <div className="rtHeroContent">
            <p className="kicker">Results & Testimonials</p>

            <h1 className="rtTitleV2">
              Transforming Ambitious Learners
              <br /> into Confident Achievers.
            </h1>

            <p className="rtSubV2">
              A small selection of honest learner stories, showing what changes
              <br /> with consistent practice, feedback, and confidence-building.
            </p>

            <div className="rtActionsV2">
              <Link to="/contact" className="btnPrimary">Book a Free Demo</Link>
              <Link to="/courses" className="btnGhost">Explore Programs</Link>
            </div>
          </div>



        </div>
      </header>




      {/* TESTIMONIAL GRID */}
      <main className="rtBody">
        <div className="container">
          <section className="section">
            <div className="sectionHead">
              <div>
                <p className="sectionKicker">Stories</p>
                <h2 className="sectionTitle">What People Say</h2>
                <p className="sectionSub">
                  See what our students and parents have to say about their experience.
                </p>
              </div>
            </div>

            <div className="storyGrid">
              {TESTIMONIALS.map((t) => (
                <article className="storyCard" key={t.id}>
                  <div className="storyTop">
                    <div className="googleBadge">G</div>
                    <div>
                      <div className="storyName">{t.name}</div>
                      <div className="storyTrack">
                        <span className="stars">★★★★★</span> • {t.date}
                      </div>
                    </div>
                  </div>

                  <p className="storyQuote">“{t.review}”</p>

                  <div className="tagRow">
                    {t.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* OUTCOME TIMELINE */}
          <section className="section">
            <div className="timelineBlock">
              <div className="timelineLeft">
                <p className="sectionKicker">Outcomes</p>
                <h2 className="sectionTitle">What learners typically notice</h2>
                <p className="sectionSub">
                  No shortcuts — just a clear system built on practice, feedback, and confidence.
                </p>
                <Link to="/contact" className="textAction">Talk to us about your goal →</Link>
              </div>

              <div className="timelineRight">
                {OUTCOME_STEPS.map((s) => (
                  <div className="timeCard" key={s.title}>
                    <div className="timeTitle">{s.title}</div>
                    <div className="timeText">{s.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section">
            <div className="ctaCardModern">
              <div>
                <h3>Want to see what this could look like for you?</h3>
                <p>Book a demo session — we’ll recommend the best program based on your goal.</p>
              </div>
              <div className="ctaButtons">
                <Link to="/contact" className="btnPrimary">Book Demo</Link>
                <Link to="/courses" className="btnGhost">View Courses</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
