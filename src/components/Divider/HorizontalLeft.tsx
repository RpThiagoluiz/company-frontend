import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  extraStyles?: React.ComponentProps<'div'>['className']
}

export const HorizontalLeft = React.forwardRef(
  (props: Props, ref?: React.Ref<HTMLDivElement>) => {
    return (
      <motion.div
        ref={ref}
        className={`w-[70%] h-[2px] bg-gradient-to-r from-green-400 to-zinc-800 ${props.extraStyles}`}
      />
    )
  },
)
