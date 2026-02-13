import { useState } from "react";
import { MainSquare, Square1, Square2, Square3, Square4, Square5 } from "./squares";

export default function ZoomScene() {
  const [zoom, setZoom] = useState(0);
  const [activeLabel, setActive] = useState(null);

  // Reverse scroll zoom - disabled when a box is active
  const handleWheel = (e) => {
    e.preventDefault();
    
    // Don't allow scrolling when a box is active
    if (activeLabel) return;
    
    setZoom((prev) => {
      let next = prev + e.deltaY * 0.001;
      if (next > 1) next = 1;
      if (next < 0) next = 0;
      return next;
    });
  };

  // Back button returns to "all boxes visible" state
  const goBack = () => {
    setZoom(1);
    setActive(null);
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
      {/* MainSquare slides down and acts as back button */}
      <MainSquare
        zoom={zoom}
        activeLabel={activeLabel}
        onClick={activeLabel ? goBack : null}
      />

      {/* Other squares - pass null as setActive when already active */}
      <Square1 
        zoom={zoom} 
        label="About Me" 
        activeLabel={activeLabel} 
        setActive={activeLabel ? null : setActive} // Disable click when any box is active
      />
      <Square2 
        zoom={zoom} 
        label="Projects" 
        activeLabel={activeLabel} 
        setActive={activeLabel ? null : setActive}
      />
      <Square3 
        zoom={zoom} 
        label="What Do I Do?" 
        activeLabel={activeLabel} 
        setActive={activeLabel ? null : setActive}
      />
      <Square4 
        zoom={zoom} 
        label="Skills" 
        activeLabel={activeLabel} 
        setActive={activeLabel ? null : setActive}
      />
      <Square5 
        zoom={zoom} 
        label="Socials" 
        activeLabel={activeLabel} 
        setActive={activeLabel ? null : setActive}
      />
    </div>
  );
}