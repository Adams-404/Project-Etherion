import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import NavBar from './components/NavBar.jsx'
import CommandBoxes from './components/CommandBoxes.jsx'
import GameText from './components/GameText.jsx'
import Modal from './components/Modal.jsx'
import ModalPrompt from './components/ModalPrompt.jsx'
import { useGameStore } from './store/game'
import { levels } from './game/gameData'

export default function App() {
  const [aboutOpen, setAboutOpen] = React.useState(false)
  const [helpOpen, setHelpOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  // Game store hooks
  const messages = useGameStore((s) => s.messages)
  const isTyping = useGameStore((s) => s.isTyping)
  const currentLevel = useGameStore((s) => s.currentLevel)
  const handleCommand = useGameStore((s) => s.handleCommand)
  const append = useGameStore((s) => s.append)
  const inputPrompt = useGameStore((s) => s.inputPrompt)
  const closePrompt = useGameStore((s) => s.closePrompt)
  const submitPrompt = useGameStore((s) => s.submitPrompt)

  const commands = React.useMemo(() => {
    return levels[currentLevel]?.commands || []
  }, [currentLevel])

  // On mount, show the initial level description (0)
  React.useEffect(() => {
    append(levels[0].description)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!inputValue.trim()) return
    handleCommand(inputValue.trim())
    setInputValue('')
  }

  return (
    <div className="container crt">
      <NavBar onAbout={() => setAboutOpen(true)} onHelp={() => setHelpOpen(true)} />

      <main className="main">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          Project Etherion
        </motion.h1>

        <CommandBoxes commands={commands} onPick={handleCommand} />

        <GameText messages={messages} />

        <form className="input-row" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your command..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Execute</button>
        </form>
      </main>

      <AnimatePresence>
        {aboutOpen && (
          <Modal title="About Project Etherion" onClose={() => setAboutOpen(false)}>
            <p>
              React-powered reimagining with animation (Framer Motion) and audio capabilities (Howler). We can migrate the
              level system and typewriter effects next.
            </p>
          </Modal>
        )}
        {helpOpen && (
          <Modal title="Help" onClose={() => setHelpOpen(false)}>
            <ol>
              <li>Click a command box or type your own command.</li>
              <li>Press Execute.</li>
              <li>We will port the full game state machine here in the next step.</li>
            </ol>
          </Modal>
        )}

        {inputPrompt && (
          <ModalPrompt
            title={
              inputPrompt.kind === 'code' ? 'Enter Access Code' :
              inputPrompt.kind === 'password' ? 'Enter Password' :
              inputPrompt.kind === 'sequence' ? 'Enter Sequence' :
              inputPrompt.kind === 'sum' ? 'Enter Sum' : 'Input'
            }
            placeholder={
              inputPrompt.kind === 'code' ? 'e.g., 1366' :
              inputPrompt.kind === 'password' ? 'e.g., fire' :
              inputPrompt.kind === 'sequence' ? 'e.g., 89' :
              inputPrompt.kind === 'sum' ? 'e.g., 88' : ''
            }
            onSubmit={(v) => submitPrompt(v)}
            onClose={() => closePrompt()}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
