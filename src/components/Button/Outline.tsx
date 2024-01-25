import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   text: string
   extraStyles?: React.ComponentProps<'button'>['className']
}

export function Outline({ text, extraStyles, ...rest }: Props) {
   return (
      <button
         type="button"
         className={`transition ease-in-out delay-150 bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 mr-auto border border-green-600 hover:border-transparent rounded ${extraStyles}`}
         {...rest}
      >
         {text}
      </button>
   )
}
