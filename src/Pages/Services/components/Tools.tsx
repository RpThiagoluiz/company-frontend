import qaImage from '../../../images/TF/Tools/QA.svg'
import softwareImage from '../../../images/TF/Tools/software.svg'
import uxImage from '../../../images/TF/Tools/ux.svg'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

type Tool = {
  name: string
  description: string
  imageUrl: string
}

const TOOLS: Tool[] = [
  {
    name: 'Metodologia',
    description:
      'A abordagem ágil promove uma entrega contínua e iterativa de funcionalidades, permitindo que você tenha acesso a atualizações frequentes e possa fornecer feedback em tempo real. Além disso, a metodologia ágil nos permite responder rapidamente a mudanças nos requisitos e prioridades, garantindo que possamos entregar um software de alta qualidade que agregue valor ao seu negócio de maneira ágil e eficaz.',
    imageUrl: uxImage,
  },
  {
    name: 'Desenvolvimento',
    description:
      'Comunicação transparente e constante, garantimos que suas expectativas sejam entendidas e atendidas ao longo de todo o projeto. Dividindo o desenvolvimento em etapas menores e iterativas, você tem a oportunidade de fornecer feedback contínuo, assegurando que o produto final seja exatamente o que você deseja. Além disso, nosso foco na qualidade e na eficiência nos permite entregar soluções de software que agregam valor ao seu negócio de forma rápida e confiável.',
    imageUrl: softwareImage,
  },
  {
    name: 'Testes',
    description:
      'Nossa abordagem centrada na qualidade nos permite identificar e corrigir problemas precocemente, reduzindo custos e tempo de desenvolvimento no longo prazo. Isso resulta em um produto final mais confiável e livre de erros, garantindo uma experiência suave e consistente para seus usuários. Sua empresa pode ter confiança na qualidade e desempenho do software, proporcionando maior satisfação aos seus clientes e agregando valor ao seu negócio.',
    imageUrl: qaImage,
  },
]

export function Tools() {
  return (
    <article className="min-h-screen mt-[15rem] px-10">
      <section className="grid grid-cols-3 gap-10">
        <div className=" flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl  leading-8 tracking-wide">
            Potencialize seu{' '}
            <span className="text-green-600 font-bold leading-8 tracking-wide">
              Projeto.
            </span>
          </h2>
          <p className="text-zinc-500 text-lg leading-6 tracking-wide text-center">
            Recursos de Desenvolvimento de Software para Transformar Ideias em
            Realidade.
          </p>
        </div>
        <div className=" flex flex-row items-center justify-around gap-3 col-span-2 min-h-[24rem]">
          {TOOLS.map((tool) => (
            <Card key={tool.name} {...tool} />
          ))}
        </div>
      </section>
    </article>
  )
}

const Card = (props: Tool) => {
  return (
    <div className="group w-[25rem] h-[30rem] border  bg-transparent relative transition ease-in-out delay-350 rounded-lg shadow-xl overflow-hidden">
      <div className="p-5 flex flex-row items-center justify-between">
        <h3 className="border-b border-green-600 leading-8 tracking-wide">
          {props.name}
          <span className="text-green-600 text-xl">.</span>
        </h3>
        <IoIosArrowDown className="text-zinc-800 group-hover:hidden block" />
        <IoIosArrowUp className="text-green-400 hidden group-hover:block" />
      </div>
      <div
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
        className="absolute top-[8rem] inset-0 bg-cover bg-center z-0 opacity-100 group-hover:opacity-0 transition ease-in-out delay-350 h-[80%]"
      />
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-white font-semibold transition ease-in-out delay-350 p-2 border-b ">
        <p className="text-xs leading-5 font-normal ">{props.description}</p>
      </div>
    </div>
  )
}
