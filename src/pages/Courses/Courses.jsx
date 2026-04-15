import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Courses.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "capsule", label: "1 Week (Capsule)" },
  { key: "monthly", label: "1 Month" },
  { key: "year", label: "Year-Long (Cambridge)" },
  { key: "exam", label: "IELTS" },
  { key: "workshops", label: "Workshops" },
];

import { COURSES } from "../../data/coursesData";

export default function Courses() {
  const [active, setActive] = useState("all");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return COURSES.filter((c) => {
      const matchesFilter = active === "all" ? true : c.category === active;

      const hay = `${c.title} ${c.desc} ${c.tags.join(" ")} ${c.level} ${c.mode}`.toLowerCase();
      const matchesSearch = query.length === 0 ? true : hay.includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [active, q]);

  const activeLabel = FILTERS.find((f) => f.key === active)?.label ?? "All";

  return (
    <section className="coursesPageModern">
      {/* HERO (modern split) */}
      <header className="coursesHeroModern">
        <div
          className="heroBgImg"
          style={{ backgroundImage: "url(/assets/course.png)" }}
          aria-hidden="true"
        />
        <div className="heroBgOverlay" aria-hidden="true" />

        <div className="container heroGrid">
          <div className="heroLeft">
            <p className="kicker">Courses</p>
            <h1 className="heroTitle">
              Find the right program for clarity, confidence, and outcomes.
            </h1>
            <p className="heroSub">
              Use filters and search to quickly explore programs. Each course links to
              a dedicated page with full details.
            </p>

            {/* Search */}
            <div className="searchRow">
              <div className="searchBox">
                <span className="searchIcon" aria-hidden="true">⌕</span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search IELTS, Cambridge, speaking, 4 weeks…"
                  className="searchInput"
                />
              </div>

              <Link to="/contact" className="btnPrimary">
                Contact Us
              </Link>
            </div>

            {/* Filters */}
            <div className="filterRow" role="tablist" aria-label="Course filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`filterPill ${active === f.key ? "active" : ""}`}
                  onClick={() => setActive(f.key)}
                  type="button"
                  role="tab"
                  aria-selected={active === f.key}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Status */}
            <div className="statusRow">
              <span className="statusText">
                Showing <strong>{filtered.length}</strong> program(s)
              </span>
              <span className="statusDot" aria-hidden="true" />
              <span className="statusText">
                Filter: <strong>{activeLabel}</strong>
              </span>
            </div>
          </div>

          {/* Hero right visual */}
          <div className="heroRight" aria-hidden="true">
            <div className="heroCard">
              <div className="heroCardTop">
                <div className="heroCardTitle">Quick Picks</div>
                <div className="heroCardHint">Popular programs</div>
              </div>

              <div className="heroMiniList">
                {COURSES.slice(0, 3).map((c) => (
                  <div className="heroMiniItem" key={c.slug}>
                    <div className="miniThumb">
                      <img src={c.img} alt="" />
                    </div>
                    <div className="miniMeta">
                      <div className="miniName">{c.title}</div>
                      <div className="miniSub">{c.mode}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="heroCardBottom">
                <div className="heroChip">Online & Offline</div>
                <div className="heroChip">Small Batch</div>
                <div className="heroChip">Guided Practice</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* GRID */}
      <main className="coursesBodyModern">
        <div className="container">
          <div className="gridHeader">
            <h2 className="gridTitle">Browse programs</h2>
            <Link to="/courses" className="resetLink" onClick={() => { setActive("all"); setQ(""); }}>
              Reset
            </Link>
          </div>

          {active === "all" && !q ? (
            /* SECTIONS VIEW (Only when ALL selected and NO search) */
            <div className="coursesSections">
              {FILTERS.filter(f => f.key !== 'all').map(group => {
                const groupCourses = filtered.filter(c => c.category === group.key);
                if (groupCourses.length === 0) return null;

                return (
                  <div className="courseGroup" key={group.key}>
                    <h2 className="groupTitle">{group.label}</h2>
                    <div className="courseGridModern">
                      {groupCourses.map((c) => (
                        <Link key={c.slug} to={`/courses/${c.slug}`} className="courseCardModern">
                          <div className="cardMedia">
                            <img src={c.img} alt="" loading="lazy" />
                            <div className="mediaFade" aria-hidden="true" />
                          </div>

                          <div className="cardBody">
                            <h3 className="cardTitle">{c.title}</h3>
                            <p className="cardDesc">{c.desc}</p>

                            <div className="metaRow">
                              <span className="metaItem">{c.level}</span>
                              <span className="metaDot" aria-hidden="true" />
                              <span className="metaItem">{c.mode}</span>
                            </div>

                            <div className="tagRow">
                              {c.tags.map((t) => (
                                <span className="tag" key={t}>{t}</span>
                              ))}
                            </div>

                            <span className="goLink">Explore →</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* FLAT GRID VIEW (Filtered or Searching) */
            <div className="courseGridModern">
              {filtered.map((c) => (
                <Link key={c.slug} to={`/courses/${c.slug}`} className="courseCardModern">
                  <div className="cardMedia">
                    <img src={c.img} alt="" loading="lazy" />
                    <div className="mediaFade" aria-hidden="true" />
                  </div>

                  <div className="cardBody">
                    <h3 className="cardTitle">{c.title}</h3>
                    <p className="cardDesc">{c.desc}</p>

                    <div className="metaRow">
                      <span className="metaItem">{c.level}</span>
                      <span className="metaDot" aria-hidden="true" />
                      <span className="metaItem">{c.mode}</span>
                    </div>

                    <div className="tagRow">
                      {c.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>

                    <span className="goLink">Explore →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <section className="bottomCTA">
            <div className="ctaCardModern">
              <div>
                <h3>Not sure where to start?</h3>
                <p>Message us and we’ll recommend a program based on your goals.</p>
              </div>
              <div className="ctaButtons">
                <Link to="/contact" className="btnPrimary">Talk to Us</Link>
                <Link to="/" className="btnGhost">Back to Home</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
