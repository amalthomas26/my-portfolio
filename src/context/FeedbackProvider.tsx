import { useState, ReactNode } from "react"
import { FeedbackContext } from "./FeedbackContext"

export function FeedbackProvider({
  children,
}: {
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isThanking,setIsThanking] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  function triggerThankYou(){
    setIsThanking(true)

    setTimeout(()=>{
      setIsThanking(false)
    },2500)
  }

  return (
    <FeedbackContext.Provider
      value={{ isOpen, open, close,isThanking,triggerThankYou }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}
