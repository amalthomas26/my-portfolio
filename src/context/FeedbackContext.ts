import { createContext } from "react"

export type FeedbackContextType = {
  isOpen: boolean
  isThanking:boolean
  open: () => void
  close: () => void
  triggerThankYou: () => void
}

export const FeedbackContext =
  createContext<FeedbackContextType | null>(null)
