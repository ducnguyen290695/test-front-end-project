import { memo } from 'react'
import styles from './index.module.scss'

export interface RecomendProps {
  title: string
  description: string
  img: string
  onClick?: () => void
  elementId?: string
}

const Recommend = (props: RecomendProps) => {
  const { title, description, img, onClick } = props

  return (
    <div data-aos="zoom-in" className={styles.container} onClick={onClick}>
      <img src={img} alt="" />
      <div className={styles.over_lay}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default memo(Recommend)
