// Resources.jsx
import React from "react";
import { videos } from "../../assets/Videos/Videos"; // Import your video list from a separate file
import VideoPlayer from "./VideoPlayer"; // Import the VideoPlayer component
import "./Resources.css";
const Resources = () => {
  return (
    <div className="gallery">
      <h1>Video Resources</h1>
      <p>
        Explore our collection of high-quality, free-to-watch videos to help you understand our products and services better.
      </p>
      <div className="video-gallery">
        {videos.map((video) => (
          <VideoPlayer key={video.id} src={video.src} title={video.title} />
        ))}
      </div>
    </div>
  );
};

export default Resources;
