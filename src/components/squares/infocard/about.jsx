import { delay, motion } from "framer-motion";

export default function AboutCard() {

  const scrollVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={scrollVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: "60vw",
        maxWidth: "800px",
        height: "60vh",
        background: "#f4af69",
        borderRadius: "25px",
        padding: "2rem",
        transformOrigin: "top",   // 👈 IMPORTANT (makes it unroll downward)
        overflow: "hidden",
        boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
      }}
    >
        <h1 style={{ marginBottom: "1rem" }}>About Me</h1>

        <p style={{ lineHeight: 1.6 }}>
            Hi, I'm Justin. I'm a computer science student interested in
            software development, UI animation, and creative web design.
        </p>

        <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
            I enjoy building interactive interfaces and experimenting with
            motion using React and Framer Motion.
        </p>
    
    </motion.div>
  );
}