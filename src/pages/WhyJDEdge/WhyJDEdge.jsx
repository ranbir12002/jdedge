import React from "react";
import { Link } from "react-router-dom";
import "./WhyJDEdge.css";

const STEPS = [
  {
    title: "Baseline & goal mapping",
    text: "We start by understanding the learner’s level, needs, and purpose — so progress is intentional, not random.",
  },
  {
    title: "Foundations in context",
    text: "Grammar, vocabulary, and structure are trained through real-life situations — because meaning matters more than memorising rules.",
  },
  {
    title: "Guided practice (human-led)",
    text: "Learners speak, write, and respond actively — with prompts, scenarios, and real conversations that build confidence.",
  },
  {
    title: "Feedback loops",
    text: "We refine clarity, tone, and accuracy through monitored feedback — helping learners decide what’s appropriate and effective.",
  },
  {
    title: "Cambridge-aligned progression",
    text: "A structured pathway aligned with Cambridge programs and real outcomes — for school, interviews, and global exams.",
  },
];

const DIFFERENCE = [
  { left: "Learning English like a checklist.", right: "Building communication as a lifelong life skill." },
  { left: "Producing impactful content.", right: "Thinking, judging, and expressing with intent." },
  { left: "Tailored to requirements.", right: "Guided learning with real practice + feedback." },
];

export default function WhyJD() {
  return (
    <section className="whyPage">
      {/* INTRO / HERO (LEFT stays same) */}
      <header className="whyIntro whyIntroBg">
        <div className="whyIntroOverlay" aria-hidden="true" />

        <div className="container">
          <div className="whyIntroGrid rightAlign">
            <div className="whyIntroContent">
              <p className="kicker">Why JD <span className="edgeGold">EDGE</span></p>

              <h1 className="whyTitle">
                English is not just a subject —
                <br /> it’s a life skill.
              </h1>

              <p className="whySub">
                Judy Davidson’s <span className="edgeGold">EDGE</span>ucation Forum helps learners communicate with clarity,
                confidence, and purpose in a digital-first world by the keeping English language human
                with thought, intent, empathy, and sound judgment.
              </p>

              <div className="heroButtons">
                <Link to="/courses" className="btnPrimary">Explore Courses</Link>
                <Link to="/contact" className="btnGhost">Talk to Us</Link>
              </div>

              <div className="miniProof">
                <div className="miniProofTitle">Built for real communication</div>
                <div className="miniProofGrid">
                  <div className="proofItem"><span className="dot" /> Human-centred learning</div>
                  <div className="proofItem"><span className="dot" /> Guided practice + feedback</div>
                  <div className="proofItem"><span className="dot" /> Cambridge-aligned programs</div>
                  <div className="proofItem"><span className="dot" /> Small batch learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* HOW IT WORKS (below landing) */}
      <section className="howSection">
        <div className="container">
          <div className="howHead">
            <p className="sectionKicker">How it works</p>
            <h2 className="sectionTitle">A clear learning system</h2>
            <p className="sectionSub">
              Progress through a method designed for confidence, clarity, and real-world use.
            </p>
          </div>

          <div className="howGrid">
            {STEPS.map((s, i) => (
              <div className="howRow" key={s.title}>
                <div className="howIndex">{String(i + 1).padStart(2, "0")}</div>
                <div className="howCard">
                  <div className="howTitle">{s.title}</div>
                  <div className="howText">{s.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="howFooter">
            <Link to="/contact" className="textAction">Get a free demo / assessment →</Link>
          </div>
        </div>
      </section>

      {/* BODY */}
      <main className="whyBody">
        <div className="container">
          {/* DIFFERENCE STRIP */}
          <section className="section differenceBg">
            <div className="differenceStrip"></div>
            <div className="differenceOverlay" aria-hidden="true" />

            <div className="differenceStrip">
              <div className="differenceHead">
                <p className="sectionKicker">The JD <span className="edgeGold">EDGE</span> Difference</p>
                <h2 className="sectionTitle">
                  Not learning English, getting the <span className="edgeGold">edge</span> in communication
                </h2>
                <p className="sectionSub">
                  We focus on how learners think, speak, and respond in real contexts.
                </p>
              </div>

              <div className="compareGrid">
                {DIFFERENCE.map((row, i) => (
                  <div className="compareRow" key={i}>
                    <div className="compareLeft">{row.left}</div>
                    <div className="compareRight">{row.right}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* CTA */}
          <section className="section">
            <div className="ctaCardModern">
              <div>
                <h3>Want a clear path to confident communication?</h3>
                <p>Explore the programs or contact us — we’ll guide you to the best fit.</p>
              </div>
              <div className="ctaButtons">
                <Link to="/courses" className="btnPrimary">View Courses</Link>
                <Link to="/contact" className="btnGhost">Contact</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
