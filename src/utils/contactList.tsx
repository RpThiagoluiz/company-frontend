import { formattedWhatsAppMsg } from '@/utils/formattedWhatsAppMsg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const CONTACT_WHATS = '+5562981467658'
const WHATS_WELCOME = formattedWhatsAppMsg({
  message: 'Vim pelo site e queria saber mais',
})

export type ContactSocial = {
  name: string
  contact: string
  link: string
  icon: JSX.Element
}

export const whatsApp: ContactSocial = {
  name: 'WhatsApp',
  contact: '(62) 9.8146-7658',
  link: `https://api.whatsapp.com/send?l=pt_br?phone=${CONTACT_WHATS}&text=${WHATS_WELCOME}`,
  icon: <FaWhatsapp className="text-[32px] text-green-700" />,
}

export const CONTACTS: ContactSocial[] = [
  whatsApp,
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
