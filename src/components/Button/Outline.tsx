import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export function Outline({ text, ...rest }: Props) {
    return (
        <button
            className="transition ease-in-out delay-150 bg-transparent hover:bg-green-600 text-green-600 font-semibold hover:text-white py-2 px-4 mr-auto border border-green-600 hover:border-transparent rounded"
            {...rest}
        >
            {text}
        </button>
    )
}
