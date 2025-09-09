import React from 'react'
import { motion } from 'framer-motion'

export default function NavBar({ onAbout, onHelp }) {
  return (
    <nav className="nav">
      <div className="brand">Etherion</div>
      <ul className="nav-links">
        <li><button onClick={onAbout}>About</button></li>
        <li><button onClick={onHelp}>Help</button></li>
        <li><button onClick={() => alert('Clear progress coming soon')}>Clear Progress</button></li>
      </ul>
    </nav>
  )
}
