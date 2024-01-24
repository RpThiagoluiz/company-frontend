import React from 'react'

export function SemiDividerHorizontal(props: {
    extraStyles?: React.ComponentProps<'div'>['className']
}) {
    return (
        <div
            className={`w-[70%] h-[2px] bg-gradient-to-r from-green-400 to-zinc-800 ${props.extraStyles}`}
        />
    )
}
