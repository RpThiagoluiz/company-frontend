import { Link } from 'react-router-dom'
import notFoundImage from '../../images/TF/NotFound/notFound.svg'

export const NotFound = () => {
  return (
    <main className="h-screen w-full  bg-stone-100 ">
      <div className="flex flex-col items-center ">
        <h1 className="text-5xl font-extrabold tracking-widest my-20 ">
          404 - Pagina não encontrada
        </h1>
        <img
          src={notFoundImage}
          alt="Ilustração para pagina não encontrado"
          className="h-[28rem] drop-shadow-xl"
        />
      </div>

      <button className="mt-12 w-full self-center ">
        <a className="relative inline-block text-sm font-medium text-zinc-900 group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-zinc-900 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-green-600 border border-current">
            <Link to="/" className="text-white">
              Inicio
            </Link>
          </span>
        </a>
      </button>
    </main>
  )
}
