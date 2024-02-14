import codingImage from '../../../images/TF/Services/coding.jpg'

export function Header() {
  return (
    <article className="min-h-screen py-5">
      <section className="relative h-[30rem]">
        <div className="z-9 w-1/2 md:py-12 xl:px-30 p-8">
          <h4 className="text-zinc-400">
            Serviços
            <span className="text-green-600 text-xl">.</span>
          </h4>
          <div className="my-5">
            <h1 className="leading-10 tracking-wide text-3xl md:text-5xl font-bold text-center md:text-left text-zinc-700">
              Amplie o alcance de sua empresa
            </h1>
            <h2 className="mt-2 leading-10 tracking-wide text-3xl md:text-5xl font-bold text-center md:text-left text-green-600">
              com nossas soluções de software.
            </h2>
          </div>
          <p className="mt-16 leading-10 tracking-wider text-md text-zinc-600">
            Entregamos software de alta qualidade, contando com talentos de
            primeira linha em nossa equipe interna de desenvolvimento
            <span className="text-green-600 text-xl">.</span>
          </p>
        </div>

        <img
          loading="lazy"
          src={codingImage}
          alt="Person working with laptop"
          className="z-0 absolute top-0 right-0 h-full transition ease-in-out duration-300 hover:drop-shadow-xl shadow-lg opacity-75 hidden md:block"
        />
      </section>
    </article>
  )
}
