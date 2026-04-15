import React from "react";
import Spline from "@splinetool/react-spline";
import "./SplineBackground.css";

/**
 * mode:
 *  - "fixed": full-screen background (old behavior)
 *  - "section": fills parent container only (NEW)
 */
export default function SplineBackground({ sceneUrl, mode = "fixed" }) {
    return (
        <div className={`splineBg ${mode === "section" ? "section" : "fixed"}`} aria-hidden="true">
            <Spline scene={sceneUrl} />
            <div className="splineOverlay" />
        </div>
    );
}
