"use client";
import Youtube from "react-youtube";

const VideoPlayer = ({ idYoutube }) => {
  const optsDekstop = {
    width: "100%",
    height: "400",
  };
  const optsMobile = {
    width: "100%",
    height: "200px",
  };
  return (
    <div>
      <Youtube
        videoId={idYoutube}
        opts={optsDekstop}
        className="hidden md:block"
      />
      <Youtube
        videoId={idYoutube}
        opts={optsMobile}
        className="block md:hidden"
      />
    </div>
  );
};

export default VideoPlayer;
