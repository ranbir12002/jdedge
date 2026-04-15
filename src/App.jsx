import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import GlobalHeader from "./components/GlobalHeader/GlobalHeader.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Loader from "./components/Loader/Loader.jsx";

// Lazy Load Pages
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs.jsx"));
const Courses = lazy(() => import("./pages/Courses/Courses.jsx"));
const CourseDetail = lazy(() => import("./pages/CourseDetail/CourseDetail.jsx"));
const WhyJDEdge = lazy(() => import("./pages/WhyJDEdge/WhyJDEdge.jsx"));
const ResultsTestimonials = lazy(() => import("./pages/ResultsTestimonials/ResultsTestimonials.jsx"));
const Faculty = lazy(() => import("./pages/Faculty/Faculty.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs.jsx"));

export default function App() {
  return (
    <div className="appShell">
      <GlobalHeader />

      <main className="pageMain">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/why-jdedge" element={<WhyJDEdge />} />
            <Route path="/results" element={<ResultsTestimonials />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
