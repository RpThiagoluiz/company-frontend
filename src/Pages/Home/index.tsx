import { Divider } from '@/components/Divider'
import { TechsCarousel } from './components/TechsCarousel'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Button } from '@/components/Button'
import contactImage from '../../images/TF/Contact/1.jpg'
import { DigitalTransformation } from './components/DigitalTransformation'

import { useRef } from 'react'
import { ContactUs } from './components/ContactUs'

export function Home() {
  const contactFormRef = useRef<HTMLDivElement | null>(null)

  return (
    <main className=" bg-stone-100 overflow-x-hidden">
      <Hero />
      <About />

      <Features />
      <TechsCarousel extraStyles="my-20" />

      <Divider.HorizontalLeft extraStyles="my-[3rem]" />

      <DigitalTransformation />

      <ContactUs
        onClick={() => {
          contactFormRef.current &&
            contactFormRef.current.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      <Divider.HorizontalLeft extraStyles="mt-[6rem]" />

      <article className=" h-svh flex items-center justify-center">
        <p className="text-3xl md:text-5xl font-bold ">
          Projetos terminados e experiencia Dashboard, landing pages, e-comerce,
          catalogos, aplicativos
          'https://flowbite.com/docs/components/device-mockups/'
        </p>
      </article>

      <Divider.HorizontalLeft extraStyles="mt-[6rem]" />

      <article
        ref={contactFormRef}
        className="rounded-xl w-2/3 mx-auto my-24 bg-gradient-to-r p-[3px] from-green-400  to-zinc-800"
      >
        <section className="h-screen relative flex justify-around bg-zinc-100 rounded-lg">
          <div className="flex flex-col justify-center gap-7 p-10">
            <h3 className="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-zinc-600">
              Fale conosco
            </h3>
            <p className="w-2/3">
              Leve o seu negócio a novos horizontes! Deixe-nos impulsionar o seu
              crescimento. Entre em contato agora para estratégias
              personalizadas e soluções que elevam seu sucesso. Não perca tempo,
              transforme suas metas em realidade contate-nos para uma parceria
              de sucesso!
            </p>
            <Button.FilledGradient>
              <span className="text-inherit">Contato</span>
            </Button.FilledGradient>
          </div>

          <img src={contactImage} alt="" className="w-1/3 h-[360px]" />
        </section>
      </article>

      <article className="bg-zinc-800 flex items-center justify-center h-96">
        <h2>test</h2>
      </article>
    </main>
  )
}
