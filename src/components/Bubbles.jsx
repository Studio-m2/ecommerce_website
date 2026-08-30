import { motion } from "framer-motion";

const bubbleData = [
  { left: "5%", size: 30, delay: 0, duration: 7 },
  { left: "15%", size: 18, delay: 2, duration: 9 },
  { left: "28%", size: 45, delay: 1, duration: 8 },
  { left: "42%", size: 25, delay: 3, duration: 10 },
  { left: "55%", size: 55, delay: 0, duration: 9 },
  { left: "70%", size: 22, delay: 2, duration: 8 },
  { left: "85%", size: 40, delay: 1, duration: 10 },
  { left: "94%", size: 18, delay: 4, duration: 7 },
];

export default function Bubbles() {
  return (
    <div className="pointer-events-none absolute left-0 top-20 z-20 h-[650px] w-full overflow-hidden">
      {bubbleData.map((bubble, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-white/70 bg-white/30 shadow-xl backdrop-blur"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
          }}
          initial={{ y: -80, opacity: 0, scale: 0.5 }}
          animate={{
            y: 700,
            opacity: [0, 0.8, 0.8, 0],
            x: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute left-[20%] top-[15%] h-[25%] w-[25%] rounded-full bg-white/80" />
        </motion.div>
      ))}
    </div>
  );
}