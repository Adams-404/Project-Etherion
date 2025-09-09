export const levels = {
  0: {
    description:
      "You wake up in a strange room, feeling dizzy, confused and disoriented. The screens' light makes it hard to see clearly. Suddenly, a woman’s voice echoes in your head, 'Ah, you’re finally awake?' You touch your ears, searching for earbuds or any device but there’s nothing. The voice is speaking directly inside your head.",
    commands: ['Who are you?', "What's my mission?", 'Tell me everything'],
    outcomes: {
      'Who are you?':
        "We are the Shadows, a hidden organization working to shape the world for the greater good. Our existence is highly CLASSIFIED! Known to only a select few, and we orchestrate operations that influence world events. For this mission, your memories were erased for your protection and ours.",
      "What's my mission?":
        'Your mission: infiltrate the system, uncover Project Etherion, and decide the fate of digital security.',
      'Tell me everything':
        "So, we are the 'SHADOWS', a hidden organization working to shape the world for the greater good. Our existence is highly CLASSIFIED! Known to only a select few, and we orchestrate operations that influence world events. >> For this mission, your memories were erased for your protection and ours. You have been chosen for your exceptional skills, but they will be put to the ultimate test. >> Recently we've uncovered a mysterious organization known only as 'The Architects' the Architects has been secretly developing a powerful AI system for years, codenamed 'Etherion'. They aim to unleash Etherion upon an unsuspecting world. An AI capable of manipulating data streams and controlling systems globally. The implications are dire; this technology could lead to catastrophic consequences if misused. And grant its creators unparalleled power. >> Now your MISSION: Infiltrate the system, uncover what Project Etherion really is, and decide the fate of digital security. For now, we've managed to get you access into one of the Architect's main facility as a security guard. >> You can get started by using the systems infront of you. But be warned: nothing is as it seems. Every shadow hides a secret, every line of code a potential trap. Your journey begins now. May your wits be sharp and your mind sharper. You will face increasingly complex challenges, requiring you to decrypt messages, bypass security systems, and make crucial decisions that will shape the outcome of your quest. Remember, in this digital battleground, knowledge is power, and every choice you make could tip the balance between order and chaos. >> We believe that you are now ready to dive into the depths of the network and confront the architects of our digital realm",
    },
  },
  1: {
    description:
      ">>> The call ended somehow, like something jammed it, you see monitors in the room right infront of you.",
    commands: ['examine room', 'Inspect monitors', 'check pockets', 'next level'],
    outcomes: {
      'examine room':
        "You notice the glow of security monitors showing camera feeds from all over the building. The room is dark, with a track board on the wall covered in pictures and notes about suspects. On one side, weapons like a baton and taser hang neatly, next to a first aid kit. And you quickly realize you’re wearing a security uniform.",
      'Inspect monitors': 2,
      'check pockets':
        'You check your pockets and feel a few items. A keycard, a folded piece of paper. You’re wearing a security uniform, the fabric slightly rough but sturdy, with a badge on the chest.',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  2: {
    description:
      "The screens, showing security feeds from various locations, some labeled as 'Lab.' The lab footage was the only footage that is blurred and the only way to access it is by logging in. The footage is heavily encrypted, revealing nothing more unless you can find a way to log in.",
    commands: ['Open Terminal', 'check pocket note', 'Inspect security feeds', 'next level'],
    outcomes: {
      'Open Terminal':
        "the screen goes black for a moment before a blinking cursor appears. A few lines of text scroll quickly:   Access Restricted: Login Required >_   The terminal seems operational but locked with heavy security... It waits for input, but without proper credentials, you might only not be able to access anything.",
      'check pocket note': 3,
      'Inspect security feeds':
        "The screens show security footage from around the facility.... The blurred footage from the lab looks like there are scientists working on a large machine. Or could it even possibly, be the room where they work on 'Project Etherion'",
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  3: {
    description:
      "Username: GuardX42 |  Password: BGG  | Note: 'You'd have to think to get the correct code. | Hint: Try spacing the B to get a number... Perhaps, G could also be a number? You could get a four digit code after the decryption.",
    commands: ['show hint', 'solve maths?', 'input access code', 'next level'],
    outcomes: {
      'show hint':
        'Hint: Henry II deposes his half-brother, Pedro of Castile, to become King of Castile.',
      'solve maths?': 'Evaluate the expression: (5^2 + 3^3) * 2 - 4^2',
      'input access code': 'codeInput',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  4: {
    description:
      "A series of encrypted files are now visible... Some of which named 'surveillance'",
    commands: ['Hint', 'search for clues', 'access files', 'next level'],
    outcomes: {
      Hint:
        "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I? ACCESS FILES TO PROCEED!",
      'search for clues':
        'A picture beside the system... It looks like a mythical bird, is often associated with rebirth and the sun. perhaps, you should consider the color of its plumage.',
      'access files': 5,
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  5: {
    description: 'Node Beta contains a complex firewall. A cryptic message flashes on the screen.',
    commands: ['analyze firewall', 'input password', 'return to Node Alpha', 'next level'],
    outcomes: {
      'analyze firewall':
        "Analysis reveals a hint: 'The key is hidden in plain sight, where light and shadow meet'",
      'input password': 'passwordInput',
      'return to Node Alpha': 4,
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  6: {
    description: "You've breached Node Beta. A maze of data streams surrounds you.",
    commands: ['follow red stream', 'follow blue stream', 'analyze data patterns', 'next level'],
    outcomes: {
      'follow red stream':
        "The stream leads to a dead end. A message appears: 'Sometimes, the path less traveled is the right one.'",
      'follow blue stream': 7,
      'analyze data patterns': 'You notice a recurring sequence: 13-21-34-55. It seems significant.',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  7: {
    description: 'The blue stream leads to a virtual room. Holographic symbols float in the air.',
    commands: ['touch symbols', 'read symbols', 'ignore symbols', 'next level'],
    outcomes: {
      'touch symbols': "As you touch a symbol, it shatters. The others rearrange to form: 'FIBONACCI'",
      'read symbols':
        "The symbols spell out a message: 'The sequence holds the key to the next level'",
      'ignore symbols': "As you turn away, you hear a whisper: 'Ignorance is the enemy of progress'",
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  8: {
    description: 'You find yourself facing a locked door. A keypad awaits input.',
    commands: ['enter sequence', 'analyze keypad', 'look for clues', 'next level'],
    outcomes: {
      'enter sequence': 'sequenceInput',
      'analyze keypad':
        'The keypad has an unusual layout. The Fibonacci sequence comes to mind.',
      'look for clues':
        'You notice scratch marks near the keypad. They resemble the number 89.',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  9: {
    description:
      'The door opens to reveal a vast library of digital information.',
    commands: ['search for Project Omega', 'access library index', 'examine nearby terminal', 'next level'],
    outcomes: {
      'search for Project Omega':
        "Your search is blocked. A message appears: 'Knowledge is power, but some secrets are best left uncovered.'",
      'access library index': 'The index is encrypted. It requires a key phrase.',
      'examine nearby terminal': 10,
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  10: {
    description:
      "The terminal displays a chess board with pieces in an unusual position.",
    commands: ['analyze board', 'move white knight', 'move black pawn', 'next level'],
    outcomes: {
      'analyze board':
        "You realize it's not just a chess game, but a code. The positions represent something.",
      'move white knight':
        "As you move the knight, the board shifts. A message appears: 'The knight's tour begins'",
      'move black pawn': "Nothing happens. Perhaps this isn't about playing chess.",
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  11: {
    description: 'The chess board transforms into a map of interconnected nodes.',
    commands: ["follow knight's path", 'count nodes', 'reset board', 'next level'],
    outcomes: {
      "follow knight's path": 12,
      'count nodes':
        'You count 64 nodes, arranged in an 8x8 grid. This seems familiar.',
      'reset board': 'wrongAnswer',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  12: {
    description:
      "The knight's path leads to a hidden chamber. Ancient and modern tech blend seamlessly here.",
    commands: [
      'activate ancient device',
      'examine modern console',
      'search for hidden passages',
      'next level',
    ],
    outcomes: {
      'activate ancient device':
        'The device hums to life. Symbols matching those from the virtual room appear.',
      'examine modern console':
        "The console displays a prompt: 'Enter the sum of wisdom'",
      'search for hidden passages':
        'You find nothing, but feel that the answer lies in plain sight.',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  13: {
    description:
      "Symbols from the ancient device swirl and combine with the modern console's display.",
    commands: ['input sum', 'show hint', 'combine ancient and modern', 'next level'],
    outcomes: {
      'input sum': 'sumInput',
      'show hint':
        "The symbols seem to represent the Fibonacci sequence. But what's the sum of the first 10?",
      'combine ancient and modern':
        'As you attempt to interface the ancient device with the modern console, you notice they fit perfectly together.',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  14: {
    description:
      
        'A new path opens, leading deeper into the system. You sense you\'re getting closer to Project Omega.',
    commands: ['proceed cautiously', 'run system scan', 'leave breadcrumb trail', 'next level'],
    outcomes: {
      'proceed cautiously': 15,
      'run system scan': 'Scan complete. You detect a powerful AI guardian ahead.',
      'leave breadcrumb trail':
        'You implement a subtle trace program. It might help if you need to backtrack.',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  15: {
    description:
      "You encounter the AI guardian. It speaks: 'To pass, you must prove your worth. Answer my riddles three.'",
    commands: ['accept challenge', 'attempt to bypass', 'analyze AI', 'next level'],
    outcomes: {
      'accept challenge': 16,
      'attempt to bypass': "The AI anticipates your move. 'There is no bypassing wisdom,' it says.",
      'analyze AI':
        'Your analysis reveals that the AI is bound by its own rules. It cannot lie, but it can mislead.',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  16: {
    description:
      "First riddle: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?'",
    commands: ['A map', 'A globe', 'A painting', 'next level'],
    outcomes: {
      'A map': 17,
      'A globe': 'wrongAnswer',
      'A painting': 'wrongAnswer',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  17: {
    description:
      "'Correct,' the AI nods. 'Second riddle: What comes once in a minute, twice in a moment, but never in a thousand years?'",
    commands: ['The letter M', 'Time', 'Chance', 'next level'],
    outcomes: {
      'The letter M': 18,
      Time: 'wrongAnswer',
      Chance: 'wrongAnswer',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  18: {
    description:
      "'Impressive,' the AI commends. 'Final riddle: I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?'",
    commands: ['Fire', 'Plant', 'Rust', 'next level'],
    outcomes: {
      Fire: 19,
      Plant: 'wrongAnswer',
      Rust: 'wrongAnswer',
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  19: {
    description:
      "The AI guardian dissolves, revealing the core of Project Omega. 'You have proven yourself worthy,' echoes its final words.",
    commands: ['access Project Omega', 'destroy the system', 'implement backdoor', 'next level'],
    outcomes: {
      'access Project Omega':
        "You gain access to humanity's most advanced AI system. The power to reshape the digital world is at your fingertips.",
      'destroy the system':
        "With Project Omega destroyed, the digital world is safe from its potential threat, but its benefits are lost forever.",
      'implement backdoor': 20,
      'next level': 'To proceed, enter your current level number in the command box below.',
    },
  },
  20: {
    description:
      "You've successfully implemented a backdoor into Project Omega. The future of the digital world now rests in your hands.",
    commands: ['use for good', 'exploit for personal gain', 'share with the world', 'next level'],
    outcomes: {
      'use for good':
        "You dedicate Project Omega to solving humanity's greatest challenges. The world will never be the same.",
      'exploit for personal gain':
        "With Project Omega's power, you become the unseen ruler of the digital realm. But at what cost?",
      'share with the world':
        'You release Project Omega to the public. The consequences of this decision will echo through history.',
      'next level':
        "Congratulations! You have completed Hacker's Quest. There are no more levels.",
    },
  },
}

export const correctCode = '1366'
export const correctPassword = 'fire'
export const correctSequence = '89'
export const correctSum = '88'

export const specialInputs = {
  codeInput: 'code',
  passwordInput: 'password',
  sequenceInput: 'sequence',
  sumInput: 'sum',
}
