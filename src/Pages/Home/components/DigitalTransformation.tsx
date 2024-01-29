import { TbDeviceMobileUp, TbWorldWww } from 'react-icons/tb'
import { PiArrowFatLinesUpBold } from 'react-icons/pi'
import { BsBarChartLine } from 'react-icons/bs'
import { GrUserExpert } from 'react-icons/gr'
import { useEffect, useRef } from 'react'
import {
  useAnimation,
  useInView,
  motion,
  type AnimationControls,
} from 'framer-motion'
import { type IconType } from 'react-icons'

const CARDS_INFO = [
  {
    title: 'Desenvolvimento de Site',
    description:
      'Criamos sites de alta qualidade, garantindo uma experiência responsiva excepcional para seus usuários.',
    icon: TbWorldWww,
  },
  {
    title: 'Desenvolvimento de Aplicativos',
    description:
      'Desenvolvemos soluções móveis eficientes e abrangentes. Em todas as plataformas, iOS e Android.',
    icon: TbDeviceMobileUp,
  },
  {
    title: 'UX/UI Design',
    description:
      'Contamos com uma equipe especializada para criar designs envolventes e intuitivos, aprimorando a experiência do usuário.',
    icon: GrUserExpert,
  },
  {
    title: 'Trafego Pago',
    description:
      'Potencializamos a visibilidade online da sua empresa com estratégias de tráfego pago, utilizando ferramentas de ponta como Google Ads, Instagram e Facebook ads para impulsionar seu crescimento.',
    icon: PiArrowFatLinesUpBold,
  },
  {
    title: 'Trafego Orgânico',
    description:
      'Otimizamos sua presença online com estratégias de tráfego orgânico, fortalecendo a visibilidade e a reputação da sua empresa.',
    icon: BsBarChartLine,
  },
]

export function DigitalTransformation() {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const liRef = useRef<HTMLLIElement | null>(null)
  const isInView = useInView(headingRef)
  const motionAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      motionAnimation.start('visible')
    }
  }, [isInView, motionAnimation])

  return (
    <article className="p-8 md:p-24 m-5 md:m-20 bg-zinc-700 rounded-2xl">
      <motion.h1
        ref={headingRef}
        className="text-3xl text-white md:text-5xl font-bold md:ml-5 text-center mb-28"
      >
        Transforme
      </motion.h1>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
        {CARDS_INFO.map((el, index) => (
          <Card
            key={el.title}
            ref={liRef}
            motionAnimation={motionAnimation}
            info={el}
            animationDelay={index / 4 + 0.25}
          />
        ))}
      </ul>
    </article>
  )
}

const Card = ({
  ref,
  motionAnimation,
  animationDelay,
  info,
}: {
  ref?: React.Ref<HTMLLIElement>
  motionAnimation: AnimationControls
  animationDelay?: number
  info: {
    title: string
    description: string
    icon: IconType
  }
}) => {
  return (
    <motion.li
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.25 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      aria-hidden="true"
      animate={motionAnimation}
      transition={{ duration: 0.75, delay: animationDelay ?? 0.5 }}
      className="group flex flex-col justify-around rounded-xl bg-slate-100  p-5 min-h-[20rem]"
    >
      <div className="flex items-center gap-7">
        <info.icon className="text-6xl text-green-500 drop-shadow-green group-hover:scale-125 transition ease-in-out delay-150" />
        <h3 className="text-2xl  strong font-semibold">{info.title}</h3>
      </div>

      <p className="mt-10 ">{info.description}</p>
    </motion.li>
  )
}
