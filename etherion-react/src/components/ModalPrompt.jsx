import React from 'react'
import { motion } from 'framer-motion'

export default function ModalPrompt({ title, placeholder, onSubmit, onClose }) {
  const [value, setValue] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit?.(value)
    setValue('')
  }

  React.useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal" role="dialog" aria-labelledby="prompt-title">
      <motion.div className="modal-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <button className="close" aria-label="Close" onClick={onClose}>×</button>
        <h2 id="prompt-title">{title}</h2>
        <form onSubmit={handleSubmit} className="input-row" style={{ marginTop: 16 }}>
          <input autoFocus value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
          <button type="submit">Submit</button>
        </form>
      </motion.div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  )
}
