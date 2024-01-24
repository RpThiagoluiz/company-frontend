import { SemiDividerHorizontal } from '@/components/SemiDividerHorizontal'
import { TechsCarousel } from './components/TechsCarousel'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'

export function Home() {
    return (
        <div className="px-5 bg-stone-100 overflow-x-hidden">
            <Hero />
            <About />
            <SemiDividerHorizontal extraStyles="my-[6rem]" />
            <Features />
            <TechsCarousel extraStyles="my-20" />

            <SemiDividerHorizontal extraStyles="my-[6rem]" />

            <section className="my-10 ">
                <h1 className="text-3xl md:text-5xl font-bold  md:ml-5 text-center mb-20">
                    Transformação digital
                </h1>
                <span>Acelere a Transformação digital da sua empresa</span>
                <span>colocar imagens de apps e sites</span>
            </section>

            <section>
                <span>
                    banner para levar a parte de contatos. Form fale conosco via
                    whatsapp ou email
                </span>
            </section>

            <section>
                <span>
                    duas colunas, image da logo da empresa e um formulário para
                    ir para o fale conosco.
                </span>
            </section>
        </div>
    )
}
