import { MdEmail } from 'react-icons/md'
import heroImage from '../../images/TF/hero.png'
import { IoLogoWhatsapp } from 'react-icons/io'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../Button'
import { Loader } from '../Loader'
import { zodResolver } from '@hookform/resolvers/zod'

export function Footer() {
  return (
    <footer className="bg-stone-100 md:grid md:grid-cols-3 flex flex-col-reverse h-[40svh] w-full">
      <article className="col-span-2">
        <section className="bg-white flex flex-col xl:grid xl:grid-cols-3  xl:gap-0 2xl:gap-6 2xl:grid-cols-3  2xl:p-12 lg:p-6 p-4">
          <div className="flex lg:mb-8 mb-2">
            <img
              src={heroImage}
              className="h-8 me-3 drop-shadow-green"
              alt="TF LOGO"
            />
            <span className="text-3xl text-zinc-700 font-semibold whitespace-nowrap">
              TF Soluções
            </span>
          </div>
          <div className=" lg:mb-8 mb-2">
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
                  Api's
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

        <div className="px-8 py-2 bg-white flex justify-center min-h-16">
          <span className="text-xs text-stone-300">
            TF Soluções 2023 - 2024. All rights reserved.
          </span>
        </div>
      </article>

      <article className="bg-zinc-700 p-12 lg:p-8 md:p-3 h-full w-full ">
        <section className="flex flex-col gap-7">
          <h2 className="text-3xl text-white font-semibold whitespace-nowrap">
            Contato
            <span className="text-green-600">.</span>
          </h2>
          <EmailForm />
          <ul>
            <li className="flex items-center gap-5 mb-8">
              <IoLogoWhatsapp className="text-xl text-green-500" />
              <span className="text-md text-green-500">
                +55 (62) 9.8146-7658
              </span>
            </li>
            <li className="flex items-center gap-5">
              <MdEmail className="text-xl text-stone-100" />
              <span className="text-md text-stone-100">
                rp.thiagoluiz@gmail.com
              </span>
            </li>
          </ul>
        </section>
      </article>
    </footer>
  )
}

const schema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
})

type FormFields = z.infer<typeof schema>

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(data)
      reset()
    } catch (error) {
      console.log(error)
      //TODO ? notification
    }
  }

  return (
    <form
      className="flex flex-wrap items-center gap-4 xl:gap-8 xl:h-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="xl:h-full h-auto">
        <input
          {...register('email')}
          type="text"
          placeholder="exemplo@email.com"
          className={`p-2 h-10 rounded-lg  border-2 border-gray-300 bg-white text-sm font-normal text-primaryDarker placeholder-black placeholder-opacity-20 outline-none transition-all',
          ${errors.email ? 'border-red-700' : 'focus:ring-2 focus:ring-green-500 ring-inset'} `}
        />
        {errors.email && (
          <div className="text-red-500 text-sm">{errors.email.message}</div>
        )}
      </div>
      <div className="xl:h-full h-auto">
        <Button.FilledGradient
          type="submit"
          disabled={isSubmitting}
          extraStyles="p-2 h-10 w-30"
        >
          {isSubmitting ? <Loader /> : 'Enviar'}
        </Button.FilledGradient>
      </div>
    </form>
  )
}
