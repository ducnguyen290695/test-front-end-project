import { memo } from 'react'
import styles from './index.module.scss'

export interface MealCardProps {
  icon: JSX.Element
  label: string
}

const MealCard = (props: MealCardProps) => {
  const { icon, label } = props
  return (
    <div data-aos="zoom-in" data-aos-offset="200" className={styles.container}>
      {icon}
      <span>{label}</span>
    </div>
  )
}

export default memo(MealCard)
