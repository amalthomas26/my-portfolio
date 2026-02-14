import { motion } from "framer-motion"

export function LaptopPreview() {
  return (
    <motion.div className="relative mt-6 flex justify-center">
      <svg
        width="140"
        height="90"
        viewBox="0 0 200 130"
        className="transition-all duration-300"
      >
        
        <rect
          x="20"
          y="10"
          width="160"
          height="90"
          rx="6"
          className="
            fill-zinc-800
            transition-all duration-300
            group-hover:fill-zinc-900
          "
        />

        
        <rect
          x="28"
          y="18"
          width="144"
          height="74"
          rx="4"
          className="
            fill-zinc-900
            transition-all duration-300

            /* OFF state */
            group-hover:fill-indigo-500

            /* Glow effect */
            group-hover:drop-shadow-[0_0_12px_rgba(99,102,241,0.6)]
          "
        />

        
        <rect
          x="10"
          y="100"
          width="180"
          height="12"
          rx="6"
          className="fill-zinc-400"
        />
      </svg>
    </motion.div>
  )
}
