import { Header } from './components/Header'
import { Solutions } from './components/Solutions'
import { Tools } from './components/Tools'

export function Services() {
  return (
    <main className="bg-stone-100 min-h-screen">
      <Header />
      <Solutions />
      <Tools />
      <section className="h-screen w-full flex items-center justify-center bg-red-400">
        <span className="text-zinc-900">
          form que vai ter em todas as paginas que não forem home e contato
        </span>
      </section>
    </main>
  )
}
