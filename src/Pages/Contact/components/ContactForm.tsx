import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { whatsApp } from '../utils/contactList'
import { Link } from 'react-router-dom'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
)

const favFoodFormSchema = z.object({
  name: z
    .string({
      required_error: 'Campo obrigatório.',
    })
    .trim()
    .min(3, 'Campo obrigatório.'),
  email: z
    .string()
    .min(1, { message: 'Campo obrigatório.' })
    .email('Email não é valido.'),
  phone: z
    .string({
      required_error: 'Campo obrigatório.',
    })
    .min(9, { message: 'Telefone deve ter no mínimo 9 dígitos' })
    .regex(phoneRegex, 'Número invalido!'),
  description: z.string().optional(),
})

type FavFoodFormType = z.infer<typeof favFoodFormSchema>

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FavFoodFormType>({
    resolver: zodResolver(favFoodFormSchema),
  })

  const submitHandler = (data: FavFoodFormType) => {
    console.log({ form: data })
  }

  return (
    <article className="min-h-1/2">
      <section className="bg-white h-full w-full m-0 md:w-2/3 md:mx-auto  my-24 xl:rounded-xl shadow-2xl p-5">
        <h4 className="text-zinc-400 text-center mb-20 text-2xl">
          Fale com um{' '}
          <span className="text-green-600 font-semibold">Especialista</span>
        </h4>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col justify-center space-y-8 xl:px-24"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Nome
            </label>
            <input
              placeholder="Nome completo"
              type="text"
              className="bg-stone-100 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-zinc-700 focus:border-zinc-700 block w-full p-2.5 "
              {...register('name')}
            />
            <p className="text-red-900">{errors.name?.message}</p>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              placeholder="Email"
              type="text"
              className="bg-stone-100 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-zinc-700 focus:border-zinc-700 block w-full p-2.5"
              {...register('email')}
            />
            <p className="text-red-900">{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">
              Telefone
            </label>
            <input
              placeholder="Telefone"
              type="text"
              className="bg-stone-100 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-zinc-700 focus:border-zinc-700 block w-full p-2.5 "
              {...register('phone')}
            />
            <p className="text-red-900">{errors.phone?.message}</p>
          </div>

          <div>
            <label htmlFor="description" className="sr-only">
              Descrição
            </label>
            <textarea
              {...register('description')}
              className="bg-stone-1000  border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
              rows={12}
              maxLength={700}
              placeholder="Fale um pouco sobre o seus desafios"
            />
          </div>

          <button
            type="submit"
            className="group shadow-xl w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white  bg-green-600 opacity-80 hover:opacity-100 transition ease-in-out delay-150"
          >
            Enviar
          </button>
        </form>

        <div className="h-full w-full flex flex-col items-center justify-center gap-10 mt-10 xl:px-24">
          <div className="inline-flex items-center justify-center w-1/2">
            <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-600 -translate-x-1/2 bg-white left-1/2 ">
              ou
            </span>
          </div>

          <Link
            to={whatsApp.link}
            target="_blank"
            className="group w-full  flex justify-center items-center gap-10 py-2  text-sm font-medium rounded-md text-white bg-zinc-700 hover:bg-zinc-900 shadow-xl transition ease-in-out delay-150"
          >
            {whatsApp.icon} {whatsApp.contact}
          </Link>
        </div>
      </section>
    </article>
  )
}
