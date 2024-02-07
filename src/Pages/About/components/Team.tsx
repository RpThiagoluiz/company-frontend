import qaTeamImage from '../../../images/TF/team/qa-team.jpg'
import poTeamImage from '../../../images/TF/team/po-team.jpg'
import devTeamImage from '../../../images/TF/team/developer-team.jpg'
import uiTeamImage from '../../../images/TF/team/ui-team.jpg'

export function Team() {
  return (
    <article className="mt-24 p-20 min-h-[25rem] flex items-center justify-around gap-10">
      <section className="grid grid-rows-4 grid-flow-col justify-items-stretch">
        <Member
          name="Software developers"
          src={devTeamImage}
          label="person with job is DEV"
          extraStyles="row-span-2"
        />

        <Member
          name="UX/UI Designers"
          src={uiTeamImage}
          label="person with job is UI/UX"
          extraStyles=""
        />

        <Member
          name="Project managers"
          src={poTeamImage}
          label="person with job is PO"
          extraStyles="row-span-2 self-center"
        />

        <Member
          name="QA engineers"
          src={qaTeamImage}
          label="person with job is QA"
          extraStyles="row-span-2 self-center"
        />
      </section>

      <section className="p-10 w-1/2 self-start">
        <h4 className="text-zinc-700 text-xl leading-8 tracking-wider">
          Nosso <span className="text-green-600 font-bold text-md">time</span>{' '}
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

const Member = (props: {
  src: string
  label: string
  name: string
  extraStyles?: string
}) => (
  <div className={`p-5 flex flex-col items-center ${props.extraStyles}`}>
    <img
      loading="lazy"
      src={props.src}
      alt={props.label}
      className="rounded-full w-[156px] h-[156px]"
    />
    <h4 className="text-zinc-400 mt-5">{props.name}</h4>
  </div>
)
