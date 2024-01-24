import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export function Outline({ text, ...rest }: Props) {
    return (
        <button
            className="transition ease-in-out delay-150 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-auto border border-blue-500 hover:border-transparent rounded"
            {...rest}
        >
            {text}
        </button>
    )
}
