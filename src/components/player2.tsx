// TrailerPlayer.tsx
import React from "react";
import ReactPlayer from "react-player";

type PropType = {
    movieSource?: string;
}

const TrailerPlayer: React.FC<PropType> = ({movieSource}) => {
  return (
    <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
      <ReactPlayer
        src={movieSource}
        controls
        width="100%"
        height="450px"
      />
    </div>
  );
};

export default TrailerPlayer;
