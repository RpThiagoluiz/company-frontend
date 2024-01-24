import { useEffect, useState } from 'react'

export enum TypePhase {
    Typing,
    Pausing,
    Deleting,
}

interface Return {
    typedWord: string
}

const TYPING_INTERVAL_MIN = 80
const TYPING_INTERVAL_MAX = 150
const TYPING_PAUSE_MS = 2000
const DELETING_INTERVAL = 50
const DELETING_PAUSE_MS = 500

const getRandomTypingInterval = () =>
    Math.floor(
        Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1),
    ) + TYPING_INTERVAL_MIN

export const useTypedWords = (words: string[]): Return => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState(TypePhase.Typing)
    const [typedWord, setTypedWord] = useState('')

    useEffect(() => {
        const phaseHandlers = {
            [TypePhase.Typing]: () => {
                const nextTypedWord = words[selectedIndex].slice(
                    0,
                    typedWord.length + 1,
                )

                if (nextTypedWord === typedWord) {
                    setPhase(TypePhase.Pausing)
                    return
                }

                const timeout = setTimeout(() => {
                    setTypedWord(nextTypedWord)
                }, getRandomTypingInterval())

                return () => clearTimeout(timeout)
            },
            [TypePhase.Deleting]: () => {
                if (!typedWord) {
                    const timeout = setTimeout(() => {
                        const nextIndex = selectedIndex + 1
                        setSelectedIndex(words[nextIndex] ? nextIndex : 0)
                        setPhase(TypePhase.Typing)
                    }, DELETING_PAUSE_MS)
                    return () => clearTimeout(timeout)
                }

                const nextRemaining = words[selectedIndex].slice(
                    0,
                    typedWord.length - 1,
                )

                const timeout = setTimeout(() => {
                    setTypedWord(nextRemaining)
                }, DELETING_INTERVAL)

                return () => clearTimeout(timeout)
            },
            [TypePhase.Pausing]: () => {
                const timeout = setTimeout(() => {
                    setPhase(TypePhase.Deleting)
                }, TYPING_PAUSE_MS)

                return () => clearTimeout(timeout)
            },
        }

        const handler = phaseHandlers[phase]
        return handler()
    }, [words, typedWord, selectedIndex, phase])

    return {
        typedWord,
    }
}
