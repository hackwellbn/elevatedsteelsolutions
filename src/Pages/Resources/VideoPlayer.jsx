// VideoPlayer.jsx
import React from 'react';

const VideoPlayer = ({ src, title }) => {
  return (
    <div className="video-container">
      <h3>{title}</h3>
      <video
        controls
        loop
        muted
        src={src}
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
