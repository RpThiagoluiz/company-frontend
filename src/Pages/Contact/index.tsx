import { ContactForm } from './components/ContactForm'
import { Contacts } from './components/Contacts'
import { Header } from './components/Header'

export function Contact() {
  return (
    <main className="bg-stone-100 min-h-screen overflow-x-hidden">
      <Header />
      <Contacts />
      <ContactForm />
    </main>
  )
}
