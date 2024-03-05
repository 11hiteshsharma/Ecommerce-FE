import React from "react";

const VideoContainer = () => {
  return (
    <div>
      <video className="w-full" autoPlay muted>
        <source src="/video/video.mp4"></source>
      </video>
    </div>
  );
};

export default VideoContainer;
