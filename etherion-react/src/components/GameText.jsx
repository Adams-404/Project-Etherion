import React from 'react'
import { motion } from 'framer-motion'

export default function GameText({ messages }) {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div ref={containerRef} className="game-text" aria-live="polite">
      {messages.map((m) => (
        <motion.p key={m.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {m.text}
        </motion.p>
      ))}
    </div>
  )
}
