import { motion } from "framer-motion";
import logo from "../../assets/react.svg";

export default function MainSquare({
  zoom,
  baseVW = 40,
  minScale = 0.3,
  activeLabel,
  onClick
}) {
  const baseScale = 1 - (1 - minScale) * zoom;
  const targetScale = activeLabel ? baseScale * 0.4 : baseScale;

  // Vertical offset when active
  const moveDown = activeLabel ? 270 : 0; // pixels

  return (
    <motion.div
      onClick={activeLabel ? onClick : null}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: `${baseVW}vw`,
        height: `${baseVW}vw`,
        borderRadius: "15px",
        background: "#ff595e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        cursor: activeLabel ? "pointer" : "default",
      }}
      animate={{
        x: "-50%",           // horizontal centering
        y: `calc(-50% + ${moveDown}px)`, // vertical centering + offset
        scale: targetScale,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 25,
      }}
    >
      <img src={logo} alt="logo" style={{ width: "80%", height: "80%" }} />
    </motion.div>
  );
}