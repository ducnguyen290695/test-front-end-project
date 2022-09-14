import React, { memo } from 'react'
import styles from './index.module.scss'

export interface ExerciseItemProps {
  title: string
  value: number
  time: number
}

const ExerciseItem = (props: ExerciseItemProps) => {
  const { title, value, time } = props

  return (
    <div className={styles.container}>
      <div className={styles.left_col}>
        <div className={styles.dot} />
        <div className={styles.info}>
          <p>{title}</p>
          <p>{value} kcal</p>
        </div>
      </div>

      <p className={styles.time}>{time} min</p>
    </div>
  )
}

export default memo(ExerciseItem)
