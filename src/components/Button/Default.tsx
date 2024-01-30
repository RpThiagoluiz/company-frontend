import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  extraStyles?: React.ComponentProps<'button'>['className']
}

export function Default({ children, extraStyles, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`transition ease-in-out delay-150 bg-green-600 font-semibold text-white py-2 px-4 border border-green-600 hover:border-transparent rounded-lg ${extraStyles}`}
      {...rest}
    >
      {children}
    </button>
  )
}
