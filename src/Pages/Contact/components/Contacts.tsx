import { Link } from 'react-router-dom'
import { CONTACTS, type ContactSocial } from '@/utils/contactList'

export const Contacts = () => {
  return (
    <article className="w-full p-5 flex flex-col gap-5 md:flex-row items-center justify-center">
      {CONTACTS.map((el) => (
        <Card key={el.name} {...el} />
      ))}
    </article>
  )
}

const Card = (props: ContactSocial) => (
  <section className="w-[35rem] h-40 bg-white rounded-lg shadow-2xl flex flex-col items-center justify-around gap-5 p-5 my-5">
    <h2 className="font-semibold  text-zinc-900">{props.name}</h2>
    <div className="flex items-center justify-around gap-5">
      <Link to={props.link} target="_blank">
        {props.icon}
      </Link>
      <p>{props.contact}</p>
    </div>
  </section>
)
