import { motion } from "framer-motion";
import logo from "../../assets/react.svg";

export default function MainSquare({
  zoom,
  baseVW = 40,
  minScale = 0.3,
  activeLabel,
  setActive,
  label = "Main"
}) {
  const scale = 1 - (1 - minScale) * zoom;

  const isActive = activeLabel === label;
  const isHidden = activeLabel !== null && !isActive;

  return (
    <motion.div
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
        zIndex: 10,
      }}
      animate={{
        x: "-50%",
        y: "-50%",
        scale,
        opacity: isHidden ? 0 : 1, // 👈 this makes it disappear
      }}
      transition={{ type: "spring", stiffness: 120, damping: 25 }}
    >
      <img src={logo} alt="logo" style={{ width: "80%", height: "80%" }} />
    </motion.div>
  );
}