import { motion } from "framer-motion";
import SiteCard from "./SiteCard";

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/jusqwak",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Where my project are stored"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/justinimpoy/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    description: "My professional experience and background"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/poy.png/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    description: "Photography and creative content"
  }
];

export default function SocialCard({ setActive }) {

  const cardVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.75,
        duration: 0.6,
        ease: "backInOut"
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.18
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: "60vw",
        maxWidth: "800px",
        height: "60vh",
        background: "#f4af69",
        borderRadius: "25px",
        boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <button
        onClick={() => setActive(null)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <h1>My Socials</h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          marginTop: "2rem",
          display: "flex",
          gap: "2rem"
        }}
      >
        {socials.map((site, index) => {
          return (
            <SiteCard key={index} link={site.link}>
              <img
                src={site.icon}
                alt={site.name}
                style={{ width: "50px", height: "50px" }}
              />
              <h3 style={{ marginTop: "0.75rem", marginBottom: "0.3rem" }}>
                {site.name}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  textAlign: "center",
                  margin: 0,
                  padding: "0 0.5rem"
                }}
              >
                {site.description}
              </p>
            </SiteCard>
          );
        })}
      </motion.div>
    </motion.div>
  );
}