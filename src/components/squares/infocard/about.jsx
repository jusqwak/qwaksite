import { motion } from "framer-motion";
import { createLineVariant, textVariant } from "./animations/linesabout";

export default function AboutCard() {
  const lines = [
    { d: "M -60 17 L 160 17", delay: 0, opacity: 0.2 },
    { d: "M -60 20 L 160 20", delay: 0.5, opacity: 0.2 },
    { d: "M 22 0 L 22 100", delay: 0.75, opacity: 0.2 },
    { d: "M 25 0 L 25 100", delay: 1, opacity: 0.2 },
    { d: "M -47 43 L 20 43", delay: 2, opacity: 0.5 },
    { d: "M -2 80 L 64 80", delay: 2.6, opacity: 0.5 },
    { d: "M 80 62 L 147 62", delay: 2.3, opacity: 0.5 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <svg 
        width="100vw" 
        height="100vh"
        viewBox="0 0 100 100"
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
      >
        {lines.map((line, index) => (
          <motion.path
            key={index}
            d={line.d}
            stroke="#cdcdcd"
            strokeWidth={line.opacity === 0.5 ? "0.5" : "0.3"}
            fill="none"
            {...createLineVariant(line.delay, line.opacity)}
          />
        ))}
      </svg>

      <motion.h1
        initial={{ opacity: 0, x: "-100vw"}}
        animate={{ opacity: 1, x: "0" }}
        transition={{ type: "spring", stiffness: 30, duration: 6, delay: 1.5 }}
        variants={textVariant}
        style={{ 
          position: "absolute",
          top: "-7%",
          left: "2%",
          fontSize: "5rem" 
        }}
      >
        Who Am I?
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ delay: 0.2 }}
        style={{ 
          position: "absolute",
          top: "30%",
          left: "3%",
          lineHeight: 1.6,
          maxWidth: "400px" 
        }}
      >
        Hi, I'm Justin. A Computer Science Student in the Chicagoland area.
      </motion.p>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ delay: 0.4 }}
        style={{ 
          position: "absolute",
          top: "45%",
          right: "3%",
          lineHeight: 1.6,
          maxWidth: "400px" 
        }}
      >
        What is this site for you may ask? Well you might wanna take a look in
        the 'What Do I Do?' card for that answer.
      </motion.p>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariant}
        transition={{ delay: 0.6 }}
        style={{ 
          position: "absolute",
          bottom: "20%",
          left: "25%",
          lineHeight: 1.6,
          maxWidth: "400px" 
        }}
      >
        In the meantime, I'm currently as student doing some projects on the side. I do
        like to cook and do some photography on the side.
      </motion.p>
    </div>
  );
}