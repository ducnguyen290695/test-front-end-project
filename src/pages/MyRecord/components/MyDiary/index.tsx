import { memo } from 'react'
import styles from './index.module.scss'

export interface MyDiaryProps {
  date: string | Date
  content: string
}

const MyDiary = (props: MyDiaryProps) => {
  const { date, content } = props

  return (
    <div data-aos="zoom-in" className={styles.container}>
      <p className={styles.date}>{date}</p>
      <p className={styles.content}>{content}</p>
    </div>
  )
}

export default memo(MyDiary)
