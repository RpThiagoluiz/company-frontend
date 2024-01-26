import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  extraStyles?: React.ComponentProps<'button'>['className']
}

export function FilledGradient({ children, extraStyles, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-400/50 dark:shadow-lg dark:shadow-green-800/80 py-2 px-8 mr-auto text-center font-semibold rounded ${extraStyles}`}
      {...rest}
    >
      {children}
    </button>
  )
}
