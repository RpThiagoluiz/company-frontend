import React from 'react'

type Props = {
    extraStyles?: React.ComponentProps<'div'>['className']
}

export function HorizontalLeft(props: Props) {
    return (
        <div
            className={`w-[70%] h-[2px] bg-gradient-to-r from-green-400 to-zinc-800 ${props.extraStyles}`}
        />
    )
}
