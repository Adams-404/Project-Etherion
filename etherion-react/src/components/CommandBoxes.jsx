import React from 'react'
import { motion } from 'framer-motion'

export default function CommandBoxes({ commands = [], onPick }) {
  return (
    <div className="command-boxes">
      {commands.map((cmd, i) => (
        <motion.button
          key={i}
          className="command-box"
          onClick={() => onPick(cmd)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {cmd}
        </motion.button>
      ))}
    </div>
  )
}
