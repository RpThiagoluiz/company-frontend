import heroImage from '../../images/TF/hero.png'

export function Footer() {
  return (
    <footer className="bg-stone-100 grid grid-cols-2 min-h-[30svh] w-full">
      <section className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 bg-white p-12">
        <div className="flex">
          <img
            src={heroImage}
            className="h-8 me-3 drop-shadow-green"
            alt="TF LOGO"
          />
          <span className="text-2xl font-semibold whitespace-nowrap">
            TF Soluções
          </span>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase ">Legal</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 bg-zinc-700 p-12">
        <div className="flex">
          <img
            src={heroImage}
            className="h-8 me-3 drop-shadow-green"
            alt="TF LOGO"
          />
          <span className="text-2xl font-semibold whitespace-nowrap">
            TF Soluções
          </span>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow us
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                className="hover:underline "
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/4eeurUVvTy"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Legal
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
