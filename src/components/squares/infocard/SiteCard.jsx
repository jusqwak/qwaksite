import { motion } from "framer-motion";

export default function SiteBox({ link, children }) {
  const boxVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18
      }
    }
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={boxVariants}
      style={{
        width: "230px",
        height: "270px",
        background: "#ebebeb",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
        flexDirection: "column",
      }}
    >
      {children}
    </motion.a>
  );
}