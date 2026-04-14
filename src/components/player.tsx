// TrailerPlayer.tsx
import React from "react";
import { VideoPlayer } from "@graphland/react-video-player";
import type { VideoPlayerProps } from "@graphland/react-video-player";

type PropType = {
    movieSource?: string;
}

const TrailerPlayer: React.FC<PropType> = ({movieSource}) => {
  const sources: VideoPlayerProps["sources"] = [
    { src: movieSource ? movieSource : "", type: "video/mp4" }, // your file
  ];

  const options: VideoPlayerProps = {
    theme: "city",
    height: 720,
    width: 1280,
    autoPlay: false,
    loop: false,
    sources,
    controlBar: {
      skipButtons: { forward: 5, backward: 5 },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    disablePictureInPicture: false,
    onReady: () => {
      console.log("Trailer player ready");
    },
  };

  return <VideoPlayer {...options} />;
};

export default TrailerPlayer;
