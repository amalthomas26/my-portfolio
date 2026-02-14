import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Star } from "lucide-react"
import { useFeedback } from "@/context/use-feedback"

export function FeedbackModal() {
  const { isOpen, close, triggerThankYou } =
    useFeedback()

  const [rating, setRating] =
    useState<number | null>(null)
  const [message, setMessage] = useState("")

  function handleSubmit() {
    if (!rating) return

    const payload = {
      rating,
      message,
      date: new Date().toISOString(),
    }

    localStorage.setItem(
      "portfolio-feedback",
      JSON.stringify(payload)
    )

    close()
    triggerThankYou()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h3 className="text-lg font-semibold">
              Rate My Portfolio
            </h3>

        
            <div className="mt-4 flex gap-1">
              {[...Array(10)].map((_, i) => {
                const value = i + 1
                return (
                  <button
                    key={value}
                    onClick={() => setRating(value)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`
                        size-6 transition-colors
                        ${
                          rating &&
                          value <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-zinc-300"
                        }
                      `}
                    />
                  </button>
                )
              })}
            </div>

            <textarea
              className="mt-4 w-full rounded-md border p-2 text-sm"
              rows={3}
              placeholder="Optional feedback..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
            />

            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={close}
                className="text-sm text-zinc-500"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
