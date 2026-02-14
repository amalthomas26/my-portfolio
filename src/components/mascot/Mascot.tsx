import { motion, AnimatePresence } from "framer-motion"
import { useFeedback } from "@/context/use-feedback"

export function Mascot() {
  const { open, isThanking } = useFeedback()

  return (
    <motion.div
      onClick={open}
      className="absolute -right-8 -bottom-8 z-20 cursor-pointer"
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isThanking
          ? { rotate: [0, 20, -20, 15, -15, 0] }
          : { y: [0, -6, 0] }
      }
      transition={
        isThanking
          ? { duration: 0.8 }
          : { duration: 3, repeat: Infinity }
      }
    >
      
      <div
        className="
          absolute inset-0 -z-10
          rounded-2xl
          bg-gradient-to-br
          from-indigo-500
          via-fuchsia-500
          to-cyan-400
          blur-xl
          opacity-70
        "
      />

      
      <div
        className="
          relative
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          border border-white/30
          shadow-2xl
          p-4
        "
      >
        
        <svg
          width="44"
          height="44"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" fill="#ffffff" />

          <circle cx="35" cy="45" r="5" fill="#111827" />
          <circle cx="65" cy="45" r="5" fill="#111827" />

          <path
            d="M35 60 Q50 72 65 60"
            stroke="#111827"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      
      <AnimatePresence>
        {isThanking && (
          <motion.div
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 2.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="
              absolute inset-0
              rounded-2xl
              bg-fuchsia-500/40
              blur-xl
              -z-20
            "
          />
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {isThanking && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="
              absolute -top-32 right-0
              w-48
              rounded-2xl
              bg-white/95
              backdrop-blur-2xl
              border border-white/30
              shadow-2xl
              p-4
              text-center
            "
          >
            <p className="text-sm font-semibold text-zinc-900">
              Thank you 👋
            </p>
            <p className="mt-1 text-xs text-zinc-600">
              Your feedback means a lot.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
