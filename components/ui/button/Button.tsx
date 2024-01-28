import styles from './Button.module.scss'
import { ButtonProps } from './props'

export const Button = ({ text }: ButtonProps): JSX.Element => {
  return <button className={styles.button}>{text}</button>
}
