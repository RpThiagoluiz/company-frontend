import { SEO } from '@/SEO'
import { ContactForm } from './components/ContactForm'
import { Contacts } from './components/Contacts'
import { Header } from './components/Header'

export function Contact() {
  return (
    <main className="bg-stone-100 min-h-screen overflow-x-hidden">
      <SEO
        title="Contato - TF Soluções"
        description="Contato criação de sites e apps, TF Soluções"
        name="description"
        type="product"
      />
      <Header />
      <Contacts />
      <ContactForm />
    </main>
  )
}
