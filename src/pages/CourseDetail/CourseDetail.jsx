import React, { useLayoutEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { COURSES } from "../../data/coursesData";
import "./CourseDetail.css";

export default function CourseDetail() {
    const { slug } = useParams();
    const course = COURSES.find((c) => c.slug === slug);

    // Scroll to top on mount
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!course) {
        return <Navigate to="/courses" replace />;
    }

    const { details } = course;

    return (
        <div className="courseDetailPage">
            {/* HERO */}
            {/* HERO */}
            <header className="detailHero">
                <div
                    className="detailHeroBg"
                    style={{ backgroundImage: `url(${course.img})` }}
                />
                <div className="detailHeroOverlay" />

                <div className="detailHeroContent">
                    <Link to="/courses" className="backLink">← Back to Courses</Link>
                    <h1 className="detailTitle">{course.title}</h1>
                    <p className="detailTagline">{course.desc}</p>

                    <div className="heroMeta">
                        <div className="metaItem">
                            <span className="metaIcon">⚡</span> {course.category === 'year' ? 'Year-Long' : course.category === 'capsule' ? '1 Week' : course.category === 'monthly' ? '1 Month' : 'Course'}
                        </div>
                        <div className="metaItem">
                            <span className="metaIcon">📶</span> {course.level}
                        </div>
                        <div className="metaItem">
                            <span className="metaIcon">📍</span> {course.mode}
                        </div>
                    </div>

                    <div className="detailTags">
                        {course.tags.map(t => (
                            <span className="detailTag" key={t}>{t}</span>
                        ))}
                    </div>
                </div>
            </header>

            {/* CONTENT */}
            <div className="container detailContent">
                {/* LEFT MAIN */}
                <div className="mainCol">

                    {/* Overview */}
                    <section className="section">
                        <h2 className="sectionTitle">Overview</h2>
                        <p className="sectionText">{details.overview}</p>
                    </section>

                    {/* Exam Structure / Format (Show only if exists) */}
                    {details.examFormat && details.examFormat.length > 0 && (
                        <section className="section">
                            <h2 className="sectionTitle">
                                {course.category === 'year' || course.category === 'exam' ? 'Exam Format & Structure' : 'Course Modules'}
                            </h2>
                            <div className="formatGrid">
                                {details.examFormat.map((item, idx) => (
                                    <div className="formatCard" key={idx}>
                                        <div className="formatTitle">{item.title}</div>
                                        <div className="formatDesc">{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Who is it for */}
                    <section className="section">
                        <h2 className="sectionTitle">Who is this for?</h2>
                        <div className="checkList">
                            {details.whoFor.map((item, idx) => (
                                <div className="checkItem" key={idx}>
                                    <span className="checkIcon">✔</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="section">
                        <h2 className="sectionTitle">Key Benefits</h2>
                        <div className="checkList">
                            {details.benefits.map((item, idx) => (
                                <div className="checkItem" key={idx}>
                                    <span className="checkIcon">★</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* RIGHT SIDEBAR */}
                <aside className="sidebar">
                    <div className="enrollCard">
                        <h3 className="enrollTitle">Ready to Start?</h3>
                        <p className="enrollDesc">
                            Join <strong>Judy Davidson’s EDGEucation Forum</strong> and Polish your Communication skills today.
                        </p>
                        <Link to="/contact" className="btnEnroll">Enquire Now &rarr;</Link>
                    </div>
                </aside>
            </div>
        </div>
    );
}
