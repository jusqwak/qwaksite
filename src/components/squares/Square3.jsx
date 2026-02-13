import { motion } from "framer-motion";

export default function Square3({ zoom, label, activeLabel, setActive }) {

  const widthVW = 20;              // responsive width
  const aspect = 700 / 1650;        // preserve shape
  const gapVW = 2;                 // responsive gap
  const pos = { x: 1.76, y: 0 };

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
        background: "#FFBA9B",
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
              zindex: 1,
            }
      }
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {label}
    </motion.div>
  );
}