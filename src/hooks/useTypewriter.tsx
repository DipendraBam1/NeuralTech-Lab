import { useEffect, useState } from 'react'

export function useTypewriter(words: string[], typeMs = 120, deleteMs = 60, pauseMs = 1500) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? deleteMs : typeMs

    if (!deleting && text === word) delay = pauseMs

    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setIndex((i) => i + 1)
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(t)
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs])

  return text
}