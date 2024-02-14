import React, { useEffect, useRef } from 'react'
import logo1 from '../../../images/TF/Features/f1.png'
import logo2 from '../../../images/TF/Features/f2.png'
import logo3 from '../../../images/TF/Features/f3.png'
import logo4 from '../../../images/TF/Features/f4.png'
import logo5 from '../../../images/TF/Features/f5.png'
import logo6 from '../../../images/TF/Features/f6.png'
import image1 from '../../../images/TF/Features/fb11.png'
import image2 from '../../../images/TF/Features/fb22.png'
import {
  useAnimation,
  useInView,
  motion,
  type AnimationControls,
} from 'framer-motion'

export function Features() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <article className="mx-5 p-6 py-12  space-y-24 lg:px-8 w-full ">
        <h1 className="text-3xl md:text-5xl font-bold  md:ml-5 text-center mb-20">
          Avance
          <span className="text-green-600">.</span>
        </h1>

        <Innovation />

        <Personalized />
      </article>
    </main>
  )
}

const CARD_INNOVATION = [
  {
    title: 'Soluções Algorítmicas Avançadas',
    description:
      'Nossos algoritmos avançados otimizam suas operações, impulsionando eficiência e lucratividade. Tome decisões orientadas por dados.',
    image: logo1,
  },
  {
    title: 'Integração Tecnológica Inovadoras',
    description:
      'Integração de forma contínua tecnologias de ponta como IA, IoT e computação em nuvem. Automatize tarefas, melhore a comunicação e desbloqueie o potencial de crescimento.',
    image: logo2,
  },
  {
    title: 'Suporte de Pessoal Treinado',
    description:
      'Especialistas treinados garantem implementação tranquila e orientação contínua. Aproveite efetivamente nosso software com assistência personalizada.',
    image: logo3,
  },
]

const Innovation = () => {
  const triggerRef = useRef<HTMLHeadingElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const isInView = useInView(triggerRef)
  const motionAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      motionAnimation.start('visible')
    }
  }, [isInView, motionAnimation])

  return (
    <article className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <section>
        <motion.h3
          ref={triggerRef}
          className="text-2xl font-bold tracking-tight sm:text-3xl "
        >
          Inovação começa aqui
        </motion.h3>
        <motion.p
          ref={paragraphRef}
          variants={{
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          aria-hidden="true"
          animate={motionAnimation}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="mt-3 text-lg "
        >
          Na vanguarda da tecnologia, utilizamos as ferramentas mais avançadas
          para garantir o sucesso do seu projeto. Nossos desenvolvedores são
          proficientes em tecnologias líderes do setor. Essas escolhas
          estratégicas não apenas oferecem desempenho superior, escalabilidade e
          segurança, mas também proporcionam uma experiência de usuário
          excepcional.
        </motion.p>
        <ol className="mt-12 space-y-12 relative border-s-2 border-dashed  border-opacity-70 border-gray-200 dark:border-zinc-400">
          {CARD_INNOVATION.map((el, index) => (
            <Card
              key={el.title}
              imgRef={imgRef}
              divRef={divRef}
              motionAnimation={motionAnimation}
              info={el}
              animationDelay={index / 2 + 0.5}
            />
          ))}
        </ol>
      </section>

      <section aria-hidden="true" className="mt-10 lg:mt-0">
        <img
          src={image1}
          alt="image1"
          className="hidden md:block taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
        />
      </section>
    </article>
  )
}

const CARD_PERSONALIZED = [
  {
    title: 'Capacidades Poderosas de Análise',
    description:
      ' Especialistas em serviços de otimização para motores de busca (SEO) e publicidade digital, oferecemos soluções integradas para elevar a visibilidade online. Utilizando estratégias de SEO, Google Ads, Facebook Ads e Instagram, garantimos uma presença digital otimizada, aumentando a relevância nos motores de busca, alcançando instantaneamente o público-alvo e expandindo a presença nas redes sociais. Nossa abordagem integrada impulsiona o engajamento, a conversão e o crescimento sustentável para os negócios de nossos clientes.',
    image: logo4,
  },
  {
    title: 'Soluções Personalizadas',
    description:
      'Desenvolvemos soluções de software personalizadas, sob medida para atender às suas necessidades exclusivas. Alcance um crescimento sustentável alinhado aos seus objetivos comerciais',
    image: logo5,
  },
  {
    title: 'Inovação Contínua',
    description:
      ' Mantenha-se à frente com as últimas características e funcionalidades, garantindo sua relevância no mercado dinâmico. Adapte-se às mudanças nos motores de busca e conquiste uma vantagem competitiva através da inovação contínua.',
    image: logo6,
  },
]

const Personalized = () => {
  const triggerRef = useRef<HTMLParagraphElement | null>(null)
  const divRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const isInView = useInView(triggerRef)
  const motionAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      motionAnimation.start('visible')
    }
  }, [isInView, motionAnimation])

  return (
    <section className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div className="mt-[-50px] lg:mt-[-200px] ">
        <img
          src={image2}
          alt="image2"
          className="hidden md:block taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
        />
      </div>
      <div className="lg:col-start-2">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
          Decisões Embasadas em Dados, Soluções Personalizadas e Otimização para
          Motores de Busca (SEO)
        </h3>
        <motion.p ref={triggerRef} className="mt-3 text-lg ">
          Impulsione o seu negócio com decisões embasadas em dados, soluções
          personalizadas e uma presença online robusta. Na vanguarda da
          inovação, nossas análises poderosas são adaptadas especificamente às
          suas necessidades, preparando o terreno para o futuro com nosso
          compromisso inabalável com a inovação.
        </motion.p>
        <ol className="mt-12 space-y-12 relative border-s-2 border-dashed  border-opacity-70 border-gray-200 dark:border-zinc-400">
          {CARD_PERSONALIZED.map((el, index) => (
            <Card
              key={el.title}
              divRef={divRef}
              imgRef={imgRef}
              motionAnimation={motionAnimation}
              info={el}
              animationDelay={index / 2 + 0.5}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

const Card = ({
  divRef,
  imgRef,
  animationDelay,
  motionAnimation,
  info,
}: {
  divRef?: React.Ref<HTMLDivElement>
  imgRef?: React.Ref<HTMLImageElement>
  motionAnimation: AnimationControls
  animationDelay?: number
  info: {
    title: string
    description: string
    image: string
  }
}) => {
  return (
    <li className="flex ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-4 ring-white dark:ring-gray-200 dark:bg-zinc-700 drop-shadow-black">
        <motion.img
          ref={imgRef}
          variants={{
            hidden: { opacity: 0, scale: 0.25 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          aria-hidden="true"
          animate={motionAnimation}
          transition={{ duration: 0.75, delay: 0.5 }}
          src={info.image}
          alt="logo1"
          className="drop-shadow-black"
        />
      </span>
      <ImageDescription
        ref={divRef}
        info={info}
        motionAnimation={motionAnimation}
        animationDelay={animationDelay}
      />
    </li>
  )
}

const ImageDescription = React.forwardRef(
  (
    props: {
      motionAnimation: AnimationControls
      animationDelay?: number
      info: {
        title: string
        description: string
        image: string
      }
    },
    ref: React.Ref<HTMLDivElement>,
  ) => {
    return (
      <motion.section
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={props.motionAnimation}
        transition={{ duration: 1.25, delay: props.animationDelay ?? 0.75 }}
        aria-hidden="true"
        className="ml-4"
      >
        <h4 className="text-lg font-medium leading-6 ">{props.info.title}</h4>
        <p className="mt-2 ">{props.info.description}</p>
      </motion.section>
    )
  },
)
