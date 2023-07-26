import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Error = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="https://lottie.host/47310faf-f441-40c4-9941-b1c80cf15f0b/72G5ttdIAS.json"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default Error;
