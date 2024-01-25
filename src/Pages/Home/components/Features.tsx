import { useEffect, useRef } from 'react'
import logo1 from '../../../images/Features/f1.png'
import logo2 from '../../../images/Features/f2.png'
import logo3 from '../../../images/Features/f3.png'
import logo4 from '../../../images/Features/f4.png'
import logo5 from '../../../images/Features/f5.png'
import logo6 from '../../../images/Features/f6.png'
import image1 from '../../../images/Features/fb11.png'
import image2 from '../../../images/Features/fb22.png'
import { useAnimation, useInView, motion } from 'framer-motion'

export function Features() {
   return (
      <div className="max-w-screen overflow-x-hidden">
         <section>
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
               <div>
                  <h1 className="text-3xl md:text-5xl font-bold  md:ml-5 text-center mb-20">
                     Avance
                  </h1>
               </div>
               <Innovation />
               <div>
                  <Personalized />
               </div>
            </div>
         </section>
      </div>
   )
}

const Innovation = () => {
   const triggerRef = useRef<HTMLHeadingElement | null>(null)
   const divRef = useRef<HTMLDivElement | null>(null)
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
               Na vanguarda da tecnologia, utilizamos as ferramentas mais
               avançadas para garantir o sucesso do seu projeto. Nossos
               desenvolvedores são proficientes em tecnologias líderes do setor.
               Essas escolhas estratégicas não apenas oferecem desempenho
               superior, escalabilidade e segurança, mas também proporcionam uma
               experiência de usuário excepcional.
            </motion.p>
            <section className="mt-12 space-y-12">
               <motion.div
                  ref={divRef}
                  variants={{
                     hidden: { opacity: 0, x: 75 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={motionAnimation}
                  transition={{ duration: 1.25, delay: 0.75 }}
                  aria-hidden="true"
                  className="flex"
               >
                  <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                        <img
                           src={logo1}
                           alt="logo1"
                           className="drop-shadow-black"
                        />
                     </div>
                  </div>
                  <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 ">
                        Soluções Algorítmicas Avançadas
                     </h4>
                     <p className="mt-2 ">
                        Nossos algoritmos avançados otimizam suas operações,
                        impulsionando eficiência e lucratividade. Tome decisões
                        orientadas por dados.
                     </p>
                  </div>
               </motion.div>
               <motion.div
                  ref={divRef}
                  variants={{
                     hidden: { opacity: 0, x: 75 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={motionAnimation}
                  transition={{ duration: 1.35, delay: 0.85 }}
                  aria-hidden="true"
                  className="flex"
               >
                  <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                        <img
                           src={logo2}
                           alt="logo2"
                           className="drop-shadow-black"
                        />
                     </div>
                  </div>
                  <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 ">
                        Integração Tecnológica Inovadora
                     </h4>
                     <p className="mt-2 ">
                        Integração de forma contínua tecnologias de ponta como
                        IA, IoT e computação em nuvem. Automatize tarefas,
                        melhore a comunicação e desbloqueie o potencial de
                        crescimento.
                     </p>
                  </div>
               </motion.div>
               <motion.div
                  ref={divRef}
                  variants={{
                     hidden: { opacity: 0, x: 75 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={motionAnimation}
                  transition={{ duration: 1.45, delay: 0.95 }}
                  aria-hidden="true"
                  className="flex"
               >
                  <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                        <img
                           src={logo3}
                           alt="logo3"
                           className="drop-shadow-black"
                        />
                     </div>
                  </div>
                  <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 ">
                        Suporte de Pessoal Treinado
                     </h4>
                     <p className="mt-2 ">
                        Especialistas treinados garantem implementação tranquila
                        e orientação contínua. Aproveite efetivamente nosso
                        software com assistência personalizada.
                     </p>
                  </div>
               </motion.div>
            </section>
         </section>

         <section aria-hidden="true" className="mt-10 lg:mt-0">
            <img
               src={image1}
               alt="image1"
               className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
         </section>
      </article>
   )
}

const Personalized = () => {
   const triggerRef = useRef<HTMLParagraphElement | null>(null)
   const divRef = useRef<HTMLDivElement | null>(null)
   const isInView = useInView(triggerRef)
   const motionAnimation = useAnimation()

   useEffect(() => {
      if (isInView) {
         motionAnimation.start('visible')
      }
   }, [isInView, motionAnimation])

   return (
      <section className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
         <div className="lg:col-start-2">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
               Decisões Embasadas em Dados, Soluções Personalizadas e Otimização
               para Motores de Busca (SEO)
            </h3>
            <motion.p ref={triggerRef} className="mt-3 text-lg ">
               Impulsione o seu negócio com decisões embasadas em dados,
               soluções personalizadas e uma presença online robusta. Na
               vanguarda da inovação, nossas análises poderosas são adaptadas
               especificamente às suas necessidades, preparando o terreno para o
               futuro com nosso compromisso inabalável com a inovação.
            </motion.p>
            <div className="mt-12 space-y-12">
               <motion.div
                  ref={divRef}
                  variants={{
                     hidden: { opacity: 0, x: 75 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={motionAnimation}
                  transition={{
                     duration: 1.25,
                     delay: 0.75,
                  }}
                  aria-hidden="true"
                  className="flex"
               >
                  <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                        <img
                           src={logo4}
                           alt="logo4"
                           className="drop-shadow-black"
                        />
                     </div>
                  </div>
                  <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 ">
                        Capacidades Poderosas de Análise
                     </h4>
                     <p className="mt-2 ">
                        Especialistas em serviços de otimização para motores de
                        busca (SEO) e publicidade digital, oferecemos soluções
                        integradas para elevar a visibilidade online. Utilizando
                        estratégias de SEO, Google Ads, Facebook Ads e
                        Instagram, garantimos uma presença digital otimizada,
                        aumentando a relevância nos motores de busca, alcançando
                        instantaneamente o público-alvo e expandindo a presença
                        nas redes sociais. Nossa abordagem integrada impulsiona
                        o engajamento, a conversão e o crescimento sustentável
                        para os negócios de nossos clientes.
                     </p>
                  </div>
               </motion.div>
               <motion.div
                  ref={divRef}
                  variants={{
                     hidden: { opacity: 0, x: 75 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={motionAnimation}
                  transition={{
                     duration: 1.35,
                     delay: 0.85,
                  }}
                  aria-hidden="true"
                  className="flex"
               >
                  <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                        <img
                           src={logo5}
                           alt="logo5"
                           className="drop-shadow-black"
                        />
                     </div>
                  </div>
                  <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 ">
                        Soluções Personalizadas
                     </h4>
                     <p className="mt-2 ">
                        Desenvolvemos soluções de software personalizadas, sob
                        medida para atender às suas necessidades exclusivas.
                        Alcance um crescimento sustentável alinhado aos seus
                        objetivos comerciais
                     </p>
                  </div>
               </motion.div>
               <motion.div
                  ref={divRef}
                  variants={{
                     hidden: { opacity: 0, x: 75 },
                     visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={motionAnimation}
                  transition={{
                     duration: 1.45,
                     delay: 0.95,
                  }}
                  aria-hidden="true"
                  className="flex"
               >
                  <div className="flex-shrink-0">
                     <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                        <img
                           src={logo6}
                           alt="logo6"
                           className="drop-shadow-black"
                        />
                     </div>
                  </div>
                  <div className="ml-4">
                     <h4 className="text-lg font-medium leading-6 ">
                        Inovação Contínua
                     </h4>
                     <p className="mt-2 ">
                        Mantenha-se à frente com as últimas características e
                        funcionalidades, garantindo sua relevância no mercado
                        dinâmico. Adapte-se às mudanças nos motores de busca e
                        conquiste uma vantagem competitiva através da inovação
                        contínua.
                     </p>
                  </div>
               </motion.div>
            </div>
         </div>
         <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
            <img
               src={image2}
               alt="image2"
               className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
            />
         </div>
      </section>
   )
}
