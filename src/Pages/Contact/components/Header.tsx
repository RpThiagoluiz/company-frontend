import helpImage from '../../../images/TF/Contact/help.svg'

export const Header = () => {
  return (
    <div className="bg-white">
      <h4 className="text-zinc-400">
        Contato
        <span className="text-green-600 text-xl">.</span>
      </h4>
      <article className="m-10 flex flex-col lg:flex-row justify-evenly gap-5 ">
        <section className="lg:w-1/2 lg:self-center ">
          <h1 className="p-5 leading-10 tracking-wide text-3xl md:text-5xl font-bold text-center lg:text-left text-zinc-700">
            Como podemos <span className="text-green-600">ajudar ?</span>
          </h1>
        </section>
        <img
          src={helpImage}
          alt="Ilustração para ajuda"
          className="h-[28rem] transition ease-in-out duration-300 hover:drop-shadow-xl"
        />
      </article>
    </div>
  )
}
