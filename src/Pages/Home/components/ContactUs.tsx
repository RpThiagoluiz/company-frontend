import { Button } from '@/components/Button'
import { useAnimation, useInView, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { LuArrowBigRightDash } from 'react-icons/lu'

export function ContactUs({ onClick }: { onClick(): void }) {
  const divRef = useRef<HTMLDivElement | null>(null)
  const spanRef = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(divRef)
  const motionAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      motionAnimation.start('visible')
    }
  }, [isInView, motionAnimation])

  return (
    <motion.article
      ref={divRef}
      className="flex flex-col items-center justify-center p-10 gap-24 mt-8 "
    >
      <p className="text-4xl md:text-6xl bg-gradient-to-r from-green-400 via-green-700 to-zinc-800 inline-block text-transparent bg-clip-text  text-center">
        Venha evoluir
      </p>

      <Button.Outline
        extraStyles="px-8 py-2 md:px-12 md:py-4 shadow-2xl"
        onClick={onClick}
      >
        <div className="flex justify-center items-center gap-5">
          <motion.span
            ref={spanRef}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={motionAnimation}
            transition={{ duration: 1.25, delay: 0.75 }}
            aria-hidden="true"
            className="text-inherit"
          >
            Contato
          </motion.span>

          <LuArrowBigRightDash className=" text-2xl" />
        </div>
      </Button.Outline>
    </motion.article>
  )
}
