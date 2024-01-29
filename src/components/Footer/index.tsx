import heroImage from '../../images/TF/hero.png'

export function Footer() {
  return (
    <footer className="bg-stone-100 grid grid-cols-3 min-h-[40svh] w-full">
      <article className="col-span-2 ">
        <section className="grid grid-cols-2  gap-8 sm:gap-6 sm:grid-cols-3 bg-white p-12">
          <div className="flex">
            <img
              src={heroImage}
              className="h-8 me-3 drop-shadow-green"
              alt="TF LOGO"
            />
            <span className="text-3xl text-zinc-700 font-semibold whitespace-nowrap">
              TF Soluções
            </span>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold uppercase">
              Serviços
              <span className="text-green-600">.</span>
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
              <li className="mb-2">
                <a href="" className="hover:underline ">
                  Dashboard
                </a>
              </li>
              <li className="mb-2">
                <a href="t" className="hover:underline">
                  E-commerce
                </a>
              </li>
              <li className="mb-2">
                <a href="t" className="hover:underline">
                  Catálogos
                </a>
                <li className="my-2">
                  <a href="" className="hover:underline ">
                    Landing Page
                  </a>
                </li>
              </li>
              <li className="mb-2">
                <a href="t" className="hover:underline">
                  Aplicativos
                </a>
              </li>
              <li className="mb-2">
                <a href="t" className="hover:underline">
                  Apits
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold uppercase ">
              Legal<span className="text-green-600">.</span>
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Politica de privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Termos &amp; Condições
                </a>
              </li>
            </ul>
          </div>
        </section>
        <hr className="" />

        <div className="px-8 py-2 bg-white flex justify-center">
          <span className="text-xs text-stone-300">
            TF Soluções 2023 - 2024. All rights reserved.
          </span>
        </div>
      </article>

      <section className="bg-zinc-700 p-12">
        <div className="flex">
          <img
            src={heroImage}
            className="h-8 me-3 drop-shadow-green"
            alt="TF LOGO"
          />
          <span className="text-3xl font-semibold whitespace-nowrap">
            TF Soluções
          </span>
        </div>
      </section>
    </footer>
  )
}
