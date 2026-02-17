import { motion } from "framer-motion";
import AboutCard from "./infocard/about";

export default function Square1({ zoom, label, activeLabel, setActive }) {

  const widthVW = 55; // Width
  const aspect = 700 / 220; // Height
  const gapVW = 2;
  const pos = { x: -0.378, y: -0.78 };

  const fadeStart = 0.35;   // zoom value where fade begins
  const fadeLength = 0.3;  // how long the fade lasts

  const opacity = Math.min(1, Math.max(0, (zoom - fadeStart) / fadeLength));

  const isActive = activeLabel === label;
  const isHidden = activeLabel !== null && !isActive;

  return (
    <motion.div
      onClick={() => setActive(isActive ? null : label)}
      style={{
        position: "absolute",
        background: "#01233f",
        color: "#fff",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      animate={
        isActive
          ? {
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              borderRadius: 0,
              transform: "none",
              opacity: 1,
              zIndex: 20,
            }
          : {
              top: "50%",
              left: "50%",
              width: `${widthVW}vw`,
              height: `${widthVW / aspect}vw`,
              opacity: isHidden ? 0 : opacity,
              transform: `translate(
                calc(-50% + ${pos.x * (widthVW + gapVW) * zoom}vw),
                calc(-50% + ${pos.y * (widthVW / aspect + gapVW) * zoom}vw)
              )`,
              zIndex: 1,
            }
      }
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {isActive ? (<AboutCard/>
      ) : (
        label
      )}
    </motion.div>
  );
}