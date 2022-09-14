import { memo } from 'react'
import styles from './index.module.scss'

export interface RecommendColumnProps {
  title: string
  description: string
}

const RecommendColumn = (props: RecommendColumnProps) => {
  const { title, description } = props
  return (
    <div data-aos="zoom-in" data-aos-offset="200" className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.line} />
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default memo(RecommendColumn)
