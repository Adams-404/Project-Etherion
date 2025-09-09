import create from 'zustand'
import { levels, correctCode, correctPassword, correctSequence, correctSum, specialInputs } from '../game/gameData'

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

export const useGameStore = create((set, get) => ({
  // state
  currentLevel: 0,
  lastSavedLevel: 0,
  maxUnlockedLevel: 0,
  initialized: false,
  messages: [],
  queue: [],
  isTyping: false,
  inputPrompt: null, // { kind: 'code'|'password'|'sequence'|'sum' }
  idCounter: 1,

  // actions
  init() {
    const st = get()
    if (st.initialized) return
    set({ initialized: true })
    get().append(levels[0].description)
  },
  genId() {
    const n = get().idCounter
    set({ idCounter: n + 1 })
    return n
  },
  append(text, isUser = false) {
    const st = get()
    st.queue.push({ text, isUser })
    get().processQueue()
  },

  async processQueue() {
    const st = get()
    if (st.isTyping || st.queue.length === 0) return

    const { text, isUser } = st.queue.shift()
    if (isUser) {
      const id = get().genId()
      set((s) => ({ messages: [...s.messages, { id, text, user: true }] }))
      return get().processQueue()
    }

    // typewriter effect
    set({ isTyping: true })
    const id = get().genId()
    set((s) => ({ messages: [...s.messages, { id, text: '', user: false }] }))
    for (let i = 0; i < text.length; i++) {
      set((s) => ({
        messages: s.messages.map((m) => (m.id === id ? { ...m, text: m.text + text[i] } : m)),
      }))
      await sleep(25)
    }
    set({ isTyping: false })
    get().processQueue()
  },

  getCommands() {
    const st = get()
    const level = levels[st.currentLevel]
    if (!level) return []
    return st.isTyping ? [] : (level.commands || [])
  },

  goToLevel(levelNumber) {
    const level = levels[levelNumber]
    if (!level) return
    set({ currentLevel: levelNumber })
    get().append(level.description)
  },

  saveCheckpoint() {
    const st = get()
    if (st.currentLevel > st.lastSavedLevel) {
      set({ lastSavedLevel: st.currentLevel })
    }
    if (st.currentLevel > st.maxUnlockedLevel) {
      set({ maxUnlockedLevel: st.currentLevel })
    }
  },

  handleWrongOption() {
    const st = get()
    st.append('Incorrect choice. The system detects your error.')
    if (st.currentLevel > st.lastSavedLevel) {
      st.append('Security protocols engaged. Reverting to last secure checkpoint.')
      setTimeout(() => {
        set({ currentLevel: st.lastSavedLevel })
        get().append(`Restored to Level ${st.lastSavedLevel}. Stay vigilant, hacker.`)
        get().append(levels[st.lastSavedLevel]?.description || '')
      }, 1200)
    } else {
      st.append('No previous checkpoint detected. Proceed with caution.')
    }
  },

  handleCommand(raw) {
    const cmd = String(raw).trim()
    const st = get()
    st.append(cmd, true)

    const levelData = levels[st.currentLevel]
    if (!levelData) return

    // Special early game branching (match original index.html seen snippet)
    if (st.currentLevel === 0) {
      const outcome0 = levelData.outcomes[cmd]
      if (outcome0) {
        if (cmd === "What's my mission?" || cmd === 'Who are you?') {
          get().append(outcome0)
          set({ currentLevel: 1 })
          get().append(levels[1].description)
          return
        }
        if (typeof outcome0 === 'string') {
          get().append(outcome0)
          return
        }
      }
    }

    const outcome = levelData.outcomes[cmd]

    if (outcome === 'wrongAnswer') {
      return st.handleWrongOption()
    }

    if (typeof outcome === 'number') {
      set({ currentLevel: outcome })
      return get().append(levels[outcome].description)
    }

    if (typeof outcome === 'string') {
      // Special input triggers
      if (outcome in specialInputs) {
        const kind = specialInputs[outcome]
        return set({ inputPrompt: { kind } })
      }
      return get().append(outcome)
    }

    // Allow numeric next level input when user types level number equal to current
    if (/^\d+$/.test(cmd)) {
      const n = Number(cmd)
      if (n === st.currentLevel) {
        const next = n + 1
        if (levels[next]) {
          set({ currentLevel: next })
          return get().append(levels[next].description)
        }
      }
    }

    // No match
    get().append('Command not recognized. Try one of the options above or type a valid input.')
  },

  submitPrompt(value) {
    const st = get()
    const kind = st.inputPrompt?.kind
    const v = String(value).trim()

    if (kind === 'code') {
      if (v === correctCode) {
        set({ inputPrompt: null })
        set({ currentLevel: 4 })
        return st.append(levels[4].description)
      }
      set({ inputPrompt: null })
      return st.handleWrongOption()
    }

    if (kind === 'password') {
      if (v.toLowerCase() === correctPassword) {
        set({ inputPrompt: null })
        set({ currentLevel: 6 })
        return st.append(levels[6].description)
      }
      set({ inputPrompt: null })
      return st.handleWrongOption()
    }

    if (kind === 'sequence') {
      if (v === correctSequence) {
        set({ inputPrompt: null })
        set({ currentLevel: 9 })
        return st.append(levels[9].description)
      }
      set({ inputPrompt: null })
      return st.handleWrongOption()
    }

    if (kind === 'sum') {
      if (v === correctSum) {
        set({ inputPrompt: null })
        set({ currentLevel: 14 })
        return st.append(levels[14].description)
      }
      set({ inputPrompt: null })
      return st.handleWrongOption()
    }

    set({ inputPrompt: null })
  },

  closePrompt() {
    set({ inputPrompt: null })
  },
}))
