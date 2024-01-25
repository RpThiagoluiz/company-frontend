import { TbDeviceMobileUp, TbWorldWww } from 'react-icons/tb'
import { PiArrowFatLinesUpBold } from 'react-icons/pi'
import { BsBarChartLine } from 'react-icons/bs'
import { GrUserExpert } from 'react-icons/gr'
import { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'

export function DigitalTransformation() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(headingRef)
  const motionAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      motionAnimation.start('visible')
    }
  }, [isInView, motionAnimation])

  return (
    <article className="p-8 md:p-24  min-h-screen">
      <motion.h1
        ref={headingRef}
        className="text-3xl md:text-5xl font-bold md:ml-5 text-center mb-28"
      >
        Transforme
      </motion.h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        <motion.section
          ref={divRef}
          variants={{
            hidden: { opacity: 0, scale: 0.25 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          aria-hidden="true"
          animate={motionAnimation}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="group flex flex-col justify-around rounded-xl  p-5 min-h-[20rem]"
        >
          <div className="flex items-center gap-7">
            <TbWorldWww className="text-6xl text-green-500 drop-shadow-3xl group-hover:scale-125 transition ease-in-out delay-150" />
            <h3 className="text-2xl text-white strong font-semibold">
              Desenvolvimento de Site
            </h3>
          </div>

          <p className="mt-10 text-white">
            Criamos sites de alta qualidade, garantindo uma experiência
            responsiva excepcional para seus usuários.
          </p>
        </motion.section>

        <motion.section
          ref={divRef}
          variants={{
            hidden: { opacity: 0, scale: 0.25 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          aria-hidden="true"
          animate={motionAnimation}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="group flex flex-col justify-around rounded-xl bg-slate-800  p-5 min-h-[20rem]"
        >
          <div className="flex items-center gap-7">
            <TbDeviceMobileUp className="text-6xl text-green-500 drop-shadow-3xl group-hover:scale-125 transition ease-in-out delay-150" />
            <h3 className="text-2xl text-white strong font-semibold">
              Desenvolvimento de Aplicativos
            </h3>
          </div>

          <p className="mt-10 text-white">
            Desenvolvemos soluções móveis eficientes e abrangentes. Em todas as
            plataformas, iOS e Android.
          </p>
        </motion.section>

        <motion.section
          ref={divRef}
          variants={{
            hidden: { opacity: 0, scale: 0.25 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          aria-hidden="true"
          animate={motionAnimation}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="group flex flex-col justify-around rounded-xl bg-slate-800  p-5 min-h-[20rem]"
        >
          <div className="flex items-center gap-7">
            <GrUserExpert className="text-6xl text-green-500 drop-shadow-3xl group-hover:scale-125 transition ease-in-out delay-150" />
            <h3 className="text-2xl text-white strong font-semibold">
              UX/UI Design
            </h3>
          </div>

          <p className="mt-10 text-white">
            Contamos com uma equipe especializada para criar designs envolventes
            e intuitivos, aprimorando a experiência do usuário.
          </p>
        </motion.section>

        <motion.section
          ref={divRef}
          variants={{
            hidden: { opacity: 0, scale: 0.25 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          aria-hidden="true"
          animate={motionAnimation}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="group flex flex-col justify-around rounded-xl bg-slate-800 p-5 min-h-[20rem] group"
        >
          <div className="flex items-center gap-7">
            <PiArrowFatLinesUpBold className="text-6xl text-green-500 drop-shadow-3xl group-hover:scale-125 transition ease-in-out delay-150" />
            <h3 className="text-2xl text-white strong font-semibold">
              Trafego Pago
            </h3>
          </div>

          <p className="mt-10 text-white">
            Potencializamos a visibilidade online da sua empresa com estratégias
            de tráfego pago, utilizando ferramentas de ponta como Google Ads,
            Instagram e Facebook ads para impulsionar seu crescimento.
          </p>
        </motion.section>

        <motion.section
          ref={divRef}
          variants={{
            hidden: { opacity: 0, scale: 0.25 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          aria-hidden="true"
          animate={motionAnimation}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="group flex flex-col justify-around rounded-xl bg-slate-800  p-5 min-h-[20rem]"
        >
          <div className="flex items-center gap-7">
            <BsBarChartLine className="text-6xl text-green-500 drop-shadow-3xl group-hover:scale-125 transition ease-in-out delay-150" />
            <h3 className="text-2xl text-white strong font-semibold">
              Trafego Orgânico
            </h3>
          </div>

          <p className="mt-10 text-white">
            Otimizamos sua presença online com estratégias de tráfego orgânico,
            fortalecendo a visibilidade e a reputação da sua empresa.
          </p>
        </motion.section>
      </div>
    </article>
  )
}
