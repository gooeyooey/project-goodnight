import React from "react";
import ReactHowler from "react-howler";

export default function Sound({ source, play, on_end }) {
  return <ReactHowler src={source} playing={play} onEnd={on_end} />;
}
