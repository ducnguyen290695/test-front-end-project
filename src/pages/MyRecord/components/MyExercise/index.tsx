import { memo } from 'react'
import ExerciseItem, { ExerciseItemProps } from '../ExerciseItem'
import styles from './index.module.scss'

const MyExercise = () => {
  const exercises: ExerciseItemProps[] = [
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
    {
      title: '家事全般（立位・軽い）',
      time: 10,
      value: 26,
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>
          MY <br /> EXERCISE
        </span>
        <span className={styles.date}>2021.05.21</span>
      </div>

      <div className={styles.exercise_table}>
        {exercises.map((item, index) => (
          <ExerciseItem {...item} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default memo(MyExercise)
