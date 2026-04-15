import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogResources.css";

const CATEGORIES = ["All", "IELTS", "Cambridge", "Speaking", "Writing", "Kids", "Career"];

const POSTS = [
  {
    id: 1,
    title: "Blog Title Goes Here (Featured)",
    excerpt:
      "Short description goes here. This is a placeholder introduction that will be replaced with the actual blog content summary.",
    category: "Speaking",
    date: "Jan 2026",
    readTime: "5 min read",
    image: "/assets/blog/featured-hero.jpg",
    href: "/blog/featured-post",
    featured: true,
  },
  {
    id: 2,
    title: "Blog Title Goes Here",
    excerpt:
      "Short placeholder summary goes here.",
    category: "IELTS",
    date: "Jan 2026",
    readTime: "4 min read",
    image: "/assets/blog/thumb-1.jpg",
    href: "/blog/post-1",
  },
  {
    id: 3,
    title: "Blog Title Goes Here",
    excerpt: "Short placeholder summary goes here.",
    category: "Cambridge",
    date: "Jan 2026",
    readTime: "6 min read",
    image: "/assets/blog/thumb-2.jpg",
    href: "/blog/post-2",
  },
  {
    id: 4,
    title: "Blog Title Goes Here",
    excerpt: "Short placeholder summary goes here.",
    category: "Writing",
    date: "Jan 2026",
    readTime: "5 min read",
    image: "/assets/blog/thumb-3.jpg",
    href: "/blog/post-3",
  },
  {
    id: 5,
    title: "Blog Title Goes Here",
    excerpt: "Short placeholder summary goes here.",
    category: "Kids",
    date: "Jan 2026",
    readTime: "3 min read",
    image: "/assets/blog/thumb-4.jpg",
    href: "/blog/post-4",
  },
  {
    id: 6,
    title: "Blog Title Goes Here",
    excerpt: "Short placeholder summary goes here..",
    category: "Career",
    date: "Jan 2026",
    readTime: "7 min read",
    image: "/assets/blog/thumb-5.jpg",
    href: "/blog/post-5",
  },
];

const RESOURCES = [
  {
    id: "r1",
    title: "Resource Title (PDF / Guide)",
    desc: "Short placeholder description for the resource.",
    type: "Downloadable PDF",
    image: "/assets/blog/resource-1.jpg",
    cta: "Download",
    href: "/resources/resource-1",
  },
  {
    id: "r2",
    title: "Resource Title (Worksheet)",
    desc: "Short placeholder description for the worksheet.",
    type: "Worksheet",
    image: "/assets/blog/resource-2.jpg",
    cta: "View",
    href: "/resources/resource-2",
  },
  {
    id: "r3",
    title: "Resource Title (Checklist)",
    desc: "Short placeholder description for the checklist.",
    type: "Checklist",
    image: "/assets/blog/resource-3.jpg",
    cta: "Open",
    href: "/resources/resource-3",
  },
];

export default function BlogsResources() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");

  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return rest.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQ =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query);
      return matchCat && matchQ;
    });
  }, [active, q, rest]);

  return (
    <section className="brPage">
      {/* HERO */}
      <header className="brHero">
        <div className="container brHeroGrid">
          <div className="brHeroLeft">
            <p className="kicker">Blogs & Resources</p>
            <h1 className="brTitle">
              Learn smarter.
              <br /> Practice better.
            </h1>
            <p className="brSub">
              Blogs and Summary resources are placeholders for now. Content will be updated
              as it is finalized.
            </p>

            <div className="brSearchRow">
              <input
                className="brSearch"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search placeholder content..."
                aria-label="Search blogs"
              />
              <Link to="/contact" className="btnPrimary">Get Guidance</Link>
            </div>

            <div className="brCats">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`catPill ${active === c ? "active" : ""}`}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Featured */}
          {featured && (
            <div className="brFeatured">
              <Link to={featured.href} className="featuredCard">
                <div
                  className="featuredMedia"
                  style={{ backgroundImage: `url(${featured.image})` }}
                  aria-hidden="true"
                />
                <div className="featuredOverlay" aria-hidden="true" />

                <div className="featuredContent">
                  <div className="metaRow">
                    <span className="metaPill">{featured.category}</span>
                    <span className="metaText">{featured.date}</span>
                    <span className="metaDot">•</span>
                    <span className="metaText">{featured.readTime}</span>
                  </div>

                  <div className="featuredTitle">{featured.title}</div>
                  <div className="featuredExcerpt">{featured.excerpt}</div>

                  <div className="featuredAction">Read article →</div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* BODY */}
      <main className="brBody">
        <div className="container">
          {/* Latest posts */}
          <section className="section">
            <div className="sectionHead">
              <div>
                <p className="sectionKicker">Latest</p>
                <h2 className="sectionTitle">Articles & insights</h2>
                <p className="sectionSub">
                  Placeholder titles and summaries are used here. Articles will be updated as content is finalized.
                </p>
              </div>
            </div>

            <div className="postGrid">
              {filtered.map((p) => (
                <Link to={p.href} className="postCard" key={p.id}>
                  <div
                    className="postImg"
                    style={{ backgroundImage: `url(${p.image})` }}
                    aria-hidden="true"
                  />
                  <div className="postBody">
                    <div className="metaRow small">
                      <span className="metaPill">{p.category}</span>
                      <span className="metaText">{p.readTime}</span>
                    </div>
                    <div className="postTitle">{p.title}</div>
                    <div className="postExcerpt">{p.excerpt}</div>
                    <div className="postAction">Open →</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section className="section">
            <div className="resourceBlock">
              <div className="resourceLeft">
                <p className="sectionKicker">Resources</p>
                <h2 className="sectionTitle">Guides you can use right away</h2>
                <p className="sectionSub">
                  Downloadable placeholders for now — the library will be updated with official PDFs, worksheets, and checklists.
                </p>
                <Link to="/contact" className="textAction">Request a resource pack →</Link>
              </div>

              <div className="resourceRight">
                {RESOURCES.map((r) => (
                  <Link to={r.href} className="resCard" key={r.id}>
                    <div
                      className="resImg"
                      style={{ backgroundImage: `url(${r.image})` }}
                      aria-hidden="true"
                    />
                    <div className="resBody">
                      <div className="resType">{r.type}</div>
                      <div className="resTitle">{r.title}</div>
                      <div className="resDesc">{r.desc}</div>
                      <div className="resAction">{r.cta} →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section">
            <div className="ctaCardModern">
              <div>
                <h3>Want learning content tailored to your goal?</h3>
                <p>Tell us what you’re preparing for — we’ll guide you to the right program and resources.</p>
              </div>
              <div className="ctaButtons">
                <Link to="/contact" className="btnPrimary">Talk to Us</Link>
                <Link to="/courses" className="btnGhost">Explore Courses</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
