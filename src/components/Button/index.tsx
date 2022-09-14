import { memo } from 'react'
import styles from './index.module.scss'

interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  const { label } = props
  return <button className={styles.button}>{label}</button>
}

export default memo(Button)
