import { memo } from 'react'
import styles from './index.module.scss'

export interface RecommendedPostProps {
  date: string | Date
  title: string
  description: string
  img: string
}

const RecommendedPost = (props: RecommendedPostProps) => {
  const { date, title, description, img } = props
  return (
    <div data-aos="zoom-in" className={styles.container}>
      <div className={styles.thumnail}>
        <img src={img} alt="" />
        <span className={styles.time}>{date}</span>
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default memo(RecommendedPost)
