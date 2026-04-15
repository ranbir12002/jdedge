import React from "react";
import "./Loader.css";

export default function Loader() {
    return (
        <div className="loaderOverlay">
            <video
                className="loaderVideo"
                src="/assets/globe.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    );
}
