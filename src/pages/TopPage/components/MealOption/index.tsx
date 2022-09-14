import { memo } from 'react'
import Img from 'assets/images'
import styles from './index.module.scss'

export interface MealOptionProps {
  img: string
  label: string
}

const MealOption = (props: MealOptionProps) => {
  const { img, label } = props

  return (
    <div data-aos="zoom-in" data-aos-offset="200" className={styles.container}>
      <img src={img} alt="" />
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default memo(MealOption)
