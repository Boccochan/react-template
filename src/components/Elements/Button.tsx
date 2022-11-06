import { ButtonHTMLAttributes } from 'react'

import { styles } from './styles'


type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: string
} 


export const Button = (props: Props) => {
  return (
    <button css={styles.primary}>Button</button>
  )
}
