import * as React from 'react'

import { btn, primary } from './css'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size: string
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  function ButtonComponent(props, ref) {
    console.log('Hello', props.size)

    return (
      <button css={[btn, primary]} ref={ref}>
        Button
      </button>
    )
  }
)
