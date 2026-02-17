import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import "./socials.css"
import { createLineVariant} from "./animations/linesabout";

export default function SocialCard() {
    const lines = [
      { d: "M 19 0 L 19 100", delay: 0.75, opacity: 0.2 },
      { d: "M 16 0 L 16 100", delay: 1, opacity: 0.2 },
      { d: "M15.9 56 L -60 56 ", delay: 2.5, opacity: 0.3 },
    ];

    const containerRef = useRef(null)
    const x = useMotionValue(0)
    const smoothX = useSpring(x, { stiffness: 100, damping: 30, mass: 0.5 })
    const [animationComplete, setAnimationComplete] = useState(false)
    
    // Add opacity that fades out at boundaries
    const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
    const opacity = useTransform(
        x,
        [-totalDistance - 200, -totalDistance, 0, 200],
        [0, 1, 1, 0]
    )

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault()
            
            // Only allow scrolling after animation completes
            if (!animationComplete) return
            
            // Calculate max scroll distance
            const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP)
            
            // Update position based on wheel delta
            const currentX = x.get()
            let newX = currentX - e.deltaY
            
            // Clamp between 0 and -totalDistance
            newX = Math.max(-totalDistance, Math.min(0, newX))
            
            x.set(newX)
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false })
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel)
            }
        }
    }, [x, animationComplete])

    // Mark animation complete after entrance finishes
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true)
        }, 4000) // 2.5s delay + 6s animation duration
        return () => clearTimeout(timer)
    }, [])

    return (
        <div ref={containerRef} id="example">
            <motion.h1
                initial={{ opacity: 0, y: "-100vw"}}
                animate={{ opacity: 1, y: "0" }}
                transition={{ type: "spring", stiffness: 30, duration: 6, delay: 1.7 }}
                style={{ 
                    position: "absolute",
                    top: "40%",
                    left: "1.8%",
                    fontSize: "5rem",
                    color: "#f5f5f5",
                    margin: 0,
                    zIndex: 10
                }}
            >
                My Socials
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: "-100vw"}}
                animate={{ opacity: 1, y: "0" }}
                transition={{ type: "spring", stiffness: 30, duration: 6, delay: 1.5 }}
                style={{ 
                  position: "absolute",
                  top: "54%",
                  left: "8%",
                  lineHeight: 1.6,
                  maxWidth: "400px",
                  textAlign: "right",
                }}
            >
                These are some of my socials<br/>
                You can check out some of my works here
            </motion.p>

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

            <div className="viewport">
                <motion.div 
                  className="gallery" 
                  style={animationComplete ? { x: smoothX, opacity } : {}}
                  initial={{ opacity: 0, x: "100vw"}}
                  animate={{ opacity: 1, x: "0" }}
                  transition={{ type: "spring", stiffness: 30, duration: 6, delay: 2.5 }}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item"
                            style={{
                                "--item-color": item.color,
                                "--item-image": `url(${item.image})`,
                            }}
                            onClick={() => window.open(item.url, '_blank')}
                        >
                            <div className="item-content">
                                <h2>{item.label}</h2>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

/**
 * ==============   Data   ================
 */

const items = [
    { id: 1, color: "#28394d", label: "Github", image: "https://www.svgrepo.com/show/512317/github-142.svg", url: "https://github.com/jusqwak" },
    { id: 2, color: "#0077B7", label: "LinkedIn", image: "https://www.svgrepo.com/show/157006/linkedin.svg", url: "https://linkedin.com/in/justinimpoy" },
    { id: 3, color: "#B31B83", label: "Instagram", image: "https://www.svgrepo.com/show/13639/instagram.svg", url: "https://instagram.com/poy.png" },
    { id: 4, color: "#C5221F", label: "Email", image: "https://www.svgrepo.com/show/452213/gmail.svg", url: "mailto:jusimpoy@example.com" },
]

const ITEM_WIDTH = 250
const GAP = 25