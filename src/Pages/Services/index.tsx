import { SEO } from '@/SEO'
import { Header } from './components/Header'
import { Solutions } from './components/Solutions'
import { Tools } from './components/Tools'
import { ContactForm } from '@/components/ContactForm'

export function Services() {
  return (
    <main className="bg-stone-100 min-h-screen">
      <SEO
        title="Serviços - TF Soluções"
        description="Serviços criação de sites e apps, TF Soluções"
        name="description"
        type="product"
      />
      <Header />
      <Solutions />
      <Tools />
      <div className="py-5">
        <ContactForm />
      </div>
    </main>
  )
}
