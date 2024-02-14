import { Divider } from '@/components/Divider'
import { TechsCarousel } from './components/TechsCarousel'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { DigitalTransformation } from './components/DigitalTransformation'
import { SpeedUpNow } from './components/SpeedUpNow'

export function Home() {
  return (
    <main className="bg-stone-100 overflow-x-hidden">
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
