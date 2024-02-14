import { Header } from './components/Header'
import { Solutions } from './components/Solutions'

//Metodologias
// Agile - fla um pouco dela
// Desenvolvimento remoto
// suporte 24h
// tecnologias para seu negocio

export function Services() {
  return (
    <main className="bg-stone-100 min-h-screen">
      <Header />
      <Solutions />
      <section className="min-h-screen"></section>
    </main>
  )
}
