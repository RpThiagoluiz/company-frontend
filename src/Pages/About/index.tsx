import { Header } from './components/Header'
import { Description } from './components/Description'
import { Team } from './components/Team'
import { Cloud } from './components/Cloud'
import { SEO } from '@/SEO'
import { ContactForm } from '@/components/ContactForm'

export function About() {
  return (
    <main className="min-h-screen bg-stone-100 ">
      <SEO
        title="Sobre - Code Nova"
        description="Code Nova Soluções sobre a empresa"
        name="description"
        type="product"
      />
      <Header />
      <Description />
      <Team />
      <Cloud />
      <div className="py-5">
        <ContactForm />
      </div>
    </main>
  )
}
