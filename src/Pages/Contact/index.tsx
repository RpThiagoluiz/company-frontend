import { SEO } from '@/SEO'
import { Contacts } from './components/Contacts'
import { Header } from './components/Header'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <main className="bg-stone-100 min-h-screen overflow-x-hidden">
      <SEO
        title="Contato - Code Nova"
        description="Contato criação de sites e apps, Code Nova"
        name="description"
        type="product"
      />
      <Header />
      <Contacts />
      <ContactForm />
    </main>
  )
}
