import { useState } from "react";
import {
  MainSquare, Square1, Square2, Square3, Square4, Square5
} from "./squares"

export default function ZoomScene() {
  const [zoom, setZoom] = useState(0);
  const [activeLabel, setActive] = useState(null);

  const handleWheel = (e) => {
    e.preventDefault();
    setZoom((prev) => {
      let next = prev - e.deltaY * 0.001;
      if (next > 1) next = 1;
      if (next < 0) next = 0;
      return next;
    });
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#f0f0f0",
      }}
    >
      <MainSquare zoom={zoom} activeLabel={activeLabel} setActive={setActive}/>
      <Square1 zoom={zoom} label="About Me" activeLabel={activeLabel} setActive={setActive}/>
      <Square2 zoom={zoom} label="Projects" activeLabel={activeLabel} setActive={setActive}/>
      <Square3 zoom={zoom} label="What Do I Do?" activeLabel={activeLabel} setActive={setActive}/>
      <Square4 zoom={zoom} label="Skills" activeLabel={activeLabel} setActive={setActive}/>
      <Square5 zoom={zoom} label="Socials" activeLabel={activeLabel} setActive={setActive}/>
    </div>
  );
}