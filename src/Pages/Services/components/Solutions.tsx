import siteImage from '../../../images/TF/Services/sites.svg'
import appImage from '../../../images/TF/Services/app.svg'
import apiImage from '../../../images/TF/Services/api.svg'
import adsImage from '../../../images/TF/Services/ADS.svg'
import seoImage from '../../../images/TF/Services/SEO.svg'
import { Divider } from '@/components/Divider'
import React, { useEffect, useRef } from 'react'
import {
  useAnimation,
  useInView,
  motion,
  type AnimationControls,
} from 'framer-motion'

type SolutionItem = {
  title: string
  highlightTitle: string
  image: string
  altImage: string
  description: string
}

const SOLUTIONS: SolutionItem[] = [
  {
    title: 'Criação de',
    highlightTitle: 'Sites',
    image: siteImage,
    altImage: 'Ilustração de um pessoa desenvolvendo sites',
    description:
      ' Nossa empresa de software oferece um serviço completo de criação de sites, personalizado para atender às necessidades específicas de cada cliente. Iniciam com uma análise detalhada dos objetivos e do público-alvo, seguida pela criação de um conceito visual atraente e uma arquitetura de informações intuitiva. Com uma abordagem focada no cliente, implementam recursos avançados e garantem uma experiência de usuário envolvente. Após testes rigorosos e aprovação do cliente, realizam a implantação em servidores confiáveis, entregando um site de alta qualidade que destaca seus clientes no mercado digital',
  },

  {
    title: 'Criação de',
    highlightTitle: 'Aplicativos',
    image: appImage,
    altImage: 'Ilustração de uma pessoa criação aplicativo para celular',
    description:
      'Nossa empresa de software oferece um serviço completo de desenvolvimento de aplicativos móveis, adaptado às necessidades específicas de cada cliente. Começamos com uma análise detalhada dos requisitos e do público-alvo, seguida pelo design e desenvolvimento de uma interface intuitiva e funcional. Utilizando as melhores práticas de codificação, garantimos a qualidade e desempenho do aplicativo em diversas plataformas móveis. Após testes rigorosos e refinamentos baseados no feedback do cliente, realizamos os procedimentos necessários para disponibilizar o aplicativo nas lojas Google Play e App Store, seguindo os requisitos e diretrizes específicos de cada plataforma. Uma vez publicado, oferecemos suporte contínuo para garantir uma experiência satisfatória aos usuários e acompanhamos o desempenho do aplicativo para possíveis melhorias',
  },

  {
    title: 'Criação de',
    highlightTitle: "Api's",
    image: apiImage,
    altImage: 'Ilustração de desenvolvimento de api',
    description:
      'Oferecemos um serviço completo de desenvolvimento de APIs (Interfaces de Programação de Aplicações), personalizado para atender às necessidades específicas de cada cliente. Começamos com uma análise detalhada dos requisitos e do contexto de integração, projetando e implementando APIs robustas e escaláveis que facilitam a comunicação entre diferentes sistemas e aplicativos. Utilizando as melhores práticas de desenvolvimento e segurança de dados, garantimos a confiabilidade e eficiência das APIs. Após testes rigorosos e refinamentos baseados no feedback do cliente, preparamos a documentação completa e oferecemos suporte para a integração bem-sucedida das APIs em seus projetos. Estamos comprometidos em fornecer soluções de integração de alta qualidade que impulsionam a eficiência e a inovação nos negócios de nossos clientes',
  },

  {
    title: 'Trafego Pago',
    highlightTitle: 'Google ADS',
    image: adsImage,
    altImage: 'Ilustração de um homem com gráfico de dinheiro',
    description:
      'Nossa empresa oferece serviços especializados em gerenciamento de campanhas de tráfego pago com Google Ads, visando maximizar o retorno sobre o investimento (ROI) de nossos clientes. Iniciamos com uma análise detalhada das metas e do público-alvo, para desenvolver estratégias de segmentação e palavras-chave altamente eficazes. Criamos anúncios persuasivos e otimizados, que são exibidos em locais estratégicos nas páginas de resultados de pesquisa do Google e em sua rede de parceiros. Utilizando técnicas avançadas de otimização e monitoramento em tempo real, ajustamos continuamente as campanhas para garantir o melhor desempenho possível. Fornecemos relatórios regulares e insights valiosos para nossos clientes, permitindo uma tomada de decisão informada e aprimorando constantemente a eficácia de suas campanhas de tráfego pago. Com nosso compromisso com a excelência e resultados mensuráveis, ajudamos nossos clientes a alcançar seus objetivos de marketing e impulsionar o crescimento de seus negócios',
  },

  {
    title: 'Search Engine Optimization',
    highlightTitle: '(SEO)',
    image: seoImage,
    altImage: 'Ilustração de gráfico de dinheiro',
    description:
      'Oferecemos serviços abrangentes de Search Engine Optimization (SEO) para ajudar nossos clientes a melhorar sua visibilidade online e aumentar o tráfego orgânico para seus sites. Começamos com uma análise completa da presença online do cliente e de seu mercado-alvo, identificando oportunidades de melhoria e desenvolvendo uma estratégia personalizada de SEO. Isso inclui a otimização de elementos-chave do site, como tags meta, estrutura de URL, conteúdo e velocidade de carregamento, para garantir que eles atendam aos requisitos dos mecanismos de busca e ofereçam uma experiência positiva ao usuário. Além disso, implementamos estratégias de criação de links e marketing de conteúdo para aumentar a autoridade do site e sua relevância nos resultados de pesquisa. Através de monitoramento contínuo e análise de dados, ajustamos nossa abordagem para garantir resultados consistentes e duradouros para nossos clientes. Com nosso foco em melhores práticas de SEO e compromisso com o sucesso do cliente, ajudamos empresas de todos os tamanhos a alcançar uma classificação mais alta nos mecanismos de busca e a atrair mais tráfego qualificado para seus sites.',
  },
] as const

export function Solutions() {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const cardImgRef = useRef<HTMLImageElement | null>(null)
  const cardParRef = useRef<HTMLParagraphElement | null>(null)

  const isInView = useInView(triggerRef)
  const motionAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      motionAnimation.start('visible')
    }
  }, [isInView, motionAnimation])

  return (
    <motion.article
      ref={triggerRef}
      className="min-h-screen flex flex-col gap-10 items-center justify-center bg-zinc-800 p-8 m-16  rounded-lg"
    >
      {SOLUTIONS.map((el, index) => (
        <div key={el.title.concat(el.highlightTitle)}>
          <section className="flex flex-row  justify-around  p-10 w-full min-h-96">
            <SolutionCard.description
              ref={cardParRef}
              animationDelay={index / 2 + 0.5}
              motionAnimation={motionAnimation}
              item={el}
            />
            <SolutionCard.image
              ref={cardImgRef}
              animationDelay={index + 0.5}
              motionAnimation={motionAnimation}
              image={el.image}
              altImage={el.altImage}
            />
          </section>

          <Divider.HorizontalLeft />
        </div>
      ))}
    </motion.article>
  )
}

const CardDescription = React.forwardRef(
  (
    props: {
      item: SolutionItem
      animationDelay: number
      motionAnimation: AnimationControls
    },
    ref: React.Ref<HTMLParagraphElement>,
  ) => {
    const { item } = props

    return (
      <div className="w-1/2 flex flex-col items-left justify-around gap-9">
        <div>
          <h2 className="leading-10 tracking-wide text-xl md:text-3xl font-bold text-center md:text-left text-zinc-200">
            {item.title}{' '}
          </h2>
          <h2 className="mt-2 leading-10 tracking-wide text-3xl md:text-5xl font-bold text-center md:text-left text-green-600">
            {item.highlightTitle}
          </h2>
        </div>
        <motion.p
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          animate={props.motionAnimation}
          transition={{
            duration: props.animationDelay + 0.25,
            delay: props.animationDelay,
          }}
          initial="hidden"
          className="leading-8 tracking-wide"
        >
          {item.description}
          <span className="text-green-600 text-xl">.</span>
        </motion.p>
      </div>
    )
  },
)

const CardImage = React.forwardRef(
  (
    props: {
      animationDelay: number
      motionAnimation: AnimationControls
      image: string
      altImage: string
    },
    ref: React.Ref<HTMLImageElement>,
  ) => {
    return (
      <motion.img
        ref={ref}
        src={props.image}
        alt={props.altImage}
        variants={{
          hidden: { opacity: 0 }, //scale: 0.25
          visible: { opacity: 1 }, //scale: 1
        }}
        initial="hidden"
        animate={props.motionAnimation}
        transition={{
          duration: props.animationDelay + 0.5,
          delay: props.animationDelay,
        }}
        aria-hidden="true"
        className="h-[28rem] transition ease-in-out duration-300 hover:drop-shadow-xl"
      />
    )
  },
)

const SolutionCard = {
  description: CardDescription,
  image: CardImage,
}
