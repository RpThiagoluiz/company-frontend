import { formattedWhatsAppMsg } from '@/utils/formattedWhatsAppMsg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CONTACT_WHATS = '+5562981467658'
const WHATS_WELCOME = formattedWhatsAppMsg({
  message: 'Vim pelo site e queria saber mais',
})

type ContactSocial = {
  name: string
  contact: string
  link: string
  icon: JSX.Element
}

const CONTACTS: ContactSocial[] = [
  {
    name: 'WhatsApp',
    contact: '(62) 9.8146-7658',
    link: `https://api.whatsapp.com/send?l=pt_br?phone=${CONTACT_WHATS}&text=${WHATS_WELCOME}`,
    icon: <FaWhatsapp className="text-[32px] text-green-700" />,
  },
  {
    name: 'Email',
    contact: 'rp.thiagoluiz@gmail.com',
    link: '',
    icon: <MdEmail className="text-[32px] text-blue-500" />,
  },
  {
    name: 'Instagram',
    contact: '@TFSoluções',
    link: '',
    icon: <FaInstagram className="text-[32px] text-pink-500" />,
  },
]

export const Contacts = () => {
  return (
    <article className="w-full  p-5 flex flex-col gap-5 md:flex-row items-center justify-center">
      {CONTACTS.map((el) => (
        <Card key={el.name} {...el} />
      ))}
    </article>
  )
}

const Card = (props: ContactSocial) => (
  <section className="w-72 bg-white rounded-lg shadow-2xl flex flex-col items-center gap-5 p-5 my-5">
    <h2 className="font-semibold text-zinc-900  ">{props.name}</h2>
    <div className="flex items-center justify-around gap-5">
      <Link to={props.link} target="_blank">
        {props.icon}
      </Link>
      <p>{props.contact}</p>
    </div>
  </section>
)
