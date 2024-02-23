import { Header } from './components/Header'
import { Description } from './components/Description'
import { Team } from './components/Team'
import { Cloud } from './components/Cloud'
import { SEO } from '@/SEO'

export function About() {
  return (
    <main className="min-h-screen bg-stone-100 ">
      <SEO
        title="Sobre - TF Soluções"
        description="TF Soluções sobre a empresa"
        name="description"
        type="product"
      />
      <Header />
      <Description />
      <Team />
      <Cloud />

      <section className="h-screen w-full flex items-center justify-center bg-red-400">
        <span className="text-zinc-900">
          form que vai ter em todas as paginas que não forem home e contato
        </span>
      </section>
    </main>
  )
}
