import React from 'react'

type Props = {
   extraStyles?: React.ComponentProps<'div'>['className']
}

export function HorizontalRight(props: Props) {
   return (
      <div
         className={`flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-zinc-800 to-green-400 ${props.extraStyles}`}
      />
   )
}
