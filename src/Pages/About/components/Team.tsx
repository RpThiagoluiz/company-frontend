import qaTeamImage from '../../../images/TF/team/qa-team.jpg'
import poTeamImage from '../../../images/TF/team/po-team.jpg'
import devTeamImage from '../../../images/TF/team/developer-team.jpg'
import uiTeamImage from '../../../images/TF/team/ui-team.jpg'
import React, { useEffect, useRef } from 'react'
import {
  useAnimation,
  useInView,
  motion,
  type AnimationControls,
} from 'framer-motion'

export function Team() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const isInView = useInView(sectionRef)
  const motionAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      motionAnimation.start('visible')
    }
  }, [isInView, motionAnimation])

  return (
    <article className="mt-24 p-20 min-h-[25rem] 2xl:flex items-center justify-around gap-10">
      <motion.section
        ref={sectionRef}
        className="2xl:grid 2xl:grid-rows-4 2xl:grid-flow-col flex flex-row flex-wrap justify-center items-center"
      >
        <Member
          ref={imgRef}
          motionAnimation={motionAnimation}
          name="Software developers"
          src={devTeamImage}
          label="person with job is DEV"
          extraStyles="row-span-2"
        />

        <Member
          ref={imgRef}
          motionAnimation={motionAnimation}
          name="UX/UI Designers"
          src={uiTeamImage}
          label="person with job is UI/UX"
          extraStyles=""
        />

        <Member
          ref={imgRef}
          motionAnimation={motionAnimation}
          name="Project managers"
          src={poTeamImage}
          label="person with job is PO"
          extraStyles="row-span-2 self-center"
        />

        <Member
          ref={imgRef}
          motionAnimation={motionAnimation}
          name="QA engineers"
          src={qaTeamImage}
          label="person with job is QA"
          extraStyles="row-span-2 self-center"
        />
      </motion.section>

      <section className="2xl:p-10 p-2 2xl:w-1/2 w-full self-start">
        <h4 className="text-zinc-700 2xl:text-xl text-sm 2xl:leading-8 2xl:tracking-wider">
          Nosso <span className="text-green-600 font-bold text-md">time</span>
          de desenvolvedores de software, gerentes de projeto, engenheiros de QA
          e designers se envolve apaixonadamente em uma ampla gama de projetos.
          Em cada empreendimento, estamos imersos na criação, planejamento,
          implementação e teste de soluções inovadoras. Desafiamos
          constantemente os limites do possível, buscando sempre a excelência.
          Cada projeto representa uma emocionante oportunidade para colaborar,
          inovar e alcançar novos patamares. Nosso compromisso com a qualidade e
          a criatividade nos impulsiona a superar desafios, entregar resultados
          excepcionais e exceder as expectativas de nossos clientes. Somos uma
          equipe dedicada, apaixonada e determinada, pronta para transformar
          ideias em realidade e moldar o futuro do desenvolvimento de software,
          um projeto de cada vez
          <span className="text-green-600 font-bold text-3xl">.</span>
        </h4>
      </section>
    </article>
  )
}

const Member = React.forwardRef(
  (
    props: {
      src: string
      label: string
      name: string
      extraStyles?: string
      motionAnimation: AnimationControls
    },
    ref: React.Ref<HTMLImageElement>,
  ) => (
    <div className={`p-5 flex flex-col items-center ${props.extraStyles}`}>
      <motion.img
        ref={ref}
        initial="hidden"
        aria-hidden="true"
        animate={props.motionAnimation}
        transition={{ duration: 1.25, delay: 0.5 }}
        src={props.src}
        alt={props.label}
        className="rounded-full w-[156px] h-[156px]"
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
      />
      <h4 className="text-zinc-400 mt-5">{props.name}</h4>
    </div>
  ),
)
