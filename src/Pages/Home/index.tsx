import { SemiDividerHorizontal } from '@/components/SemiDividerHorizontal'
import heroImage from '../../images/level.png'
import teamImage from '../../images/Team/team1.png'
import { useTypedWords } from './hooks/useTypedWords'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'

const WORDS = ['com inovação', 'com eficiência', 'e gerando resultados']

export function Home() {
    const { typedWord } = useTypedWords(WORDS)
    return (
        <div className="px-5 ">
            <section className="flex flex-col justify-center items-center gap-5 my-10">
                <img
                    src={heroImage}
                    alt="hero"
                    className="w-[180px]  rounded-l-[20%] rounded-br-[6%]  drop-shadow-3xl"
                />

                <h3 className="text-3xl font-bold pt-5 text-center ">
                    Transforme sua visão em realidade digital.
                </h3>
                <p>
                    Desenvolvemos software sob medida, potencializando seus
                    negócios {typedWord}{' '}
                    <span className="animate-blink h-5 border-s-2 border-green-800" />
                </p>
            </section>

            <section className="mt-32 ">
                <div className="flex flex-col-reverse md:flex-row md:h-[25rem] gap-20 my-5">
                    <img
                        src={teamImage}
                        alt="hero"
                        className="w-full rounded-l-[20%] rounded-br-[6%]"
                    />
                    <div className="flex flex-col justify-around">
                        <h1 className="text-3xl font-bold">Sobre nós</h1>
                        <p className="text-justify">
                            Somos especialistas em criar soluções digitais que
                            elevam sua presença online. Desenvolvemos desde
                            sites e landing pages impressionantes até sistemas
                            complexos como painéis administrativos, e-commerce,
                            catálogos online e aplicativos intuitivos. Com
                            expertise em Search Engine Optimization (SEO) e
                            Google Ads, garantimos que sua empresa seja
                            encontrada e se destaque na web.
                        </p>
                        <Link to="/about">
                            <Button.Outline text="Saiba mais" />
                        </Link>
                    </div>
                </div>
            </section>

            <SemiDividerHorizontal extraStyles="my-[6rem]" />

            <section className="my-10">
                <h1 className="text-3xl font-bold  md:ml-5">Tecnologias</h1>
                <div className="flex flex-col md:flex-row md:h-[80px] gap-5 my-5">
                    <div className="border-s-4  border-green-800 hidden md:inline" />

                    <p className="self-center text-justify">
                        Na vanguarda da tecnologia, utilizamos as ferramentas
                        mais avançadas para garantir o sucesso do seu projeto.
                        Nossos desenvolvedores são proficientes em tecnologias
                        líderes do setor. Essas escolhas estratégicas não apenas
                        oferecem desempenho superior, escalabilidade e
                        segurança, mas também proporcionam uma experiência de
                        usuário excepcional.
                    </p>
                    <h3>
                        BANER COM OS NOMES passando : React JS, Node JS, AWS,
                        Firebase, React Native, Flutter e Angular
                    </h3>
                </div>
            </section>

            <section className="my-10">
                <h3 className="text-3xl font-bold  md:ml-5">
                    Acelere a transformação digital da sua empresa
                </h3>
                <span>Form fale conosco via whatsapp ou email</span>
            </section>
        </div>
    )
}
