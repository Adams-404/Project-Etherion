import React from 'react'
import { motion } from 'framer-motion'

export default function Modal({ title, children, onClose }) {
  React.useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-labelledby="modal-title">
      <motion.div className="modal-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <button className="close" aria-label="Close" onClick={onClose}>×</button>
        <h2 id="modal-title">{title}</h2>
        <div className="modal-body">{children}</div>
      </motion.div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  )
}
