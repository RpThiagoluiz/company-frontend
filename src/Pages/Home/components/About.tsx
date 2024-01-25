import { Button } from '@/components/Button'
import teamImage from '../../../images/TF/team/team1.png'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'

export function About() {
    const headingRef = useRef<HTMLHeadingElement | null>(null)
    const paragraphRef = useRef<HTMLParagraphElement | null>(null)
    const isInView = useInView(headingRef)
    const motionAnimation = useAnimation()

    useEffect(() => {
        if (isInView) {
            motionAnimation.start('visible')
        }
    }, [isInView, motionAnimation])

    return (
        <section className="mt-8 md:mt-32 px-8">
            <div className="flex flex-col-reverse md:flex-row md:h-[25rem] gap-20 my-5">
                <img
                    loading="lazy"
                    src={teamImage}
                    alt="hero"
                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-zinc-900"
                />

                <div className="flex flex-col gap-12 md:gap-0 justify-around">
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold text-center md:text-left"
                        ref={headingRef}
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={motionAnimation}
                        transition={{ duration: 0.75, delay: 0.5 }}
                        aria-hidden="true"
                    >
                        Sobre nós
                    </motion.h1>
                    <motion.p
                        ref={paragraphRef}
                        className="text-justify"
                        variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        aria-hidden="true"
                        animate={motionAnimation}
                        transition={{ duration: 1.25, delay: 0.75 }}
                    >
                        Somos especialistas em criar soluções digitais que
                        elevam sua presença online. Desenvolvemos desde sites e
                        landing pages impressionantes até sistemas complexos
                        como painéis administrativos, e-commerce, catálogos
                        online e aplicativos intuitivos. Com expertise em Search
                        Engine Optimization (SEO) e Google Ads, garantimos que
                        sua empresa seja encontrada e se destaque na web.
                    </motion.p>
                    <Link to="/about">
                        <Button.Outline text="Saiba mais" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
