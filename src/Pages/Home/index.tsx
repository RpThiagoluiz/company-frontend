import { Divider } from '@/components/Divider'
import { TechsCarousel } from './components/TechsCarousel'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { DigitalTransformation } from './components/DigitalTransformation'
import { SpeedUpNow } from './components/SpeedUpNow'
import { SEO } from '@/SEO'

export function Home() {
  return (
    <main className="bg-stone-100 overflow-x-hidden">
      <SEO
        title="TF Soluções"
        description="Solução de software, criação de sites e apps."
        name="description"
        type="article"
      />

      <Hero />
      <About />
      <Features />
      <Divider.HorizontalLeft extraStyles="my-[3rem]" />
      <DigitalTransformation />
      <TechsCarousel extraStyles="my-20" />
      <div className="mt-[10rem]">
        <SpeedUpNow />
      </div>
    </main>
  )
}
