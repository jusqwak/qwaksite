export const createLineVariant = (delay = 0, opacity = 0.2) => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 2, ease: "easeInOut", delay },
  opacity: `${opacity * 100}%`
});

export const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};