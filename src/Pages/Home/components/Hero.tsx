import { useEffect, useRef } from 'react'
import { useTypedWords } from '../hooks/useTypedWords'
import { useScroll, useTransform, motion } from 'framer-motion'
import heroImage from '../../../images/TF/hero.png'

const WORDS = ['com inovação', 'com eficiência', 'e gerando resultados']

export function Hero() {
  const { typedWord } = useTypedWords(WORDS)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.25])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.25])

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return
      const { clientX, clientY } = ev
      targetRef.current.style.setProperty('--x', `${clientX}px`)
      targetRef.current.style.setProperty('--y', `${clientY}px`)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <motion.section
      style={{ opacity, scale }}
      ref={targetRef}
      className="flex flex-col md:py-20 py-2 items-center gap-5 h-screen"
    >
      <img
        loading="lazy"
        src={heroImage}
        alt="hero"
        className="w-[280px]  rounded-l-[20%] rounded-br-[6%]  drop-shadow-3xl mt-20"
      />

      <h3 className="pt-5 text-center text-3xl md:text-5xl font-bold ">
        Transforme sua visão em realidade digital.
      </h3>
      <p>
        Desenvolvemos software sob medida, potencializando seus negócios{' '}
        {typedWord}{' '}
        <span className="animate-blink h-5 border-s-4 border-green-500" />
      </p>
    </motion.section>
  )
}
