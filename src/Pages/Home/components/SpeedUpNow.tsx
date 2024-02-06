import { Button } from '@/components/Button'
import { Link } from 'react-router-dom'
import image1 from '../../../images/TF/Features/fb11.png'

export function SpeedUpNow() {
  return (
    <article className="relative bg-zinc-800 min-h-40">
      <section className="flex flex-col gap-20 xl:w-[80vw] w-full xl:px-64 xl:py-20 p-16 ">
        <p className="text-2xl lg:text-3xl text-white font-semibold text-wrap text-left">
          Quer impulsionar o crescimento digital da sua empresa? Explore nossas
          soluções e acelere o seu sucesso online agora mesmo
          <span className="text-green-600 ">.</span>
        </p>
        <Link to="/contact">
          <Button.Default extraStyles="lg:w-48 lg:h-14 h-12 w-40 px-0 py-0 ">
            Acelere Agora!
          </Button.Default>
        </Link>
      </section>
      <section
        className="lg:absolute lg:top-[-80px] lg:right-32 hidden xl:block  drop-shadow-black "
        aria-hidden="true"
      >
        <img
          src={image1}
          alt=""
          className="w-[360px] h-[360px]  clip-path-dialog"
        />
      </section>
    </article>
  )
}
