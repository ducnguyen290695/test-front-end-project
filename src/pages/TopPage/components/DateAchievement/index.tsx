import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import styles from './index.module.scss'

interface DateAchievementProps {
  percent: number
  date: string
}

const DateAchievement = (props: DateAchievementProps) => {
  const { percent, date } = props

  return (
    <div className={styles.container}>
      <div className={styles.circular_progress_bar}>
        <CircularProgressbarWithChildren
          value={percent}
          strokeWidth={2}
          styles={{
            path: {
              stroke: 'white',
              strokeLinecap: 'butt',
              transformOrigin: 'center center',
            },
            trail: {
              stroke: 'transparent',
            },
            text: {
              fill: 'white',
              textShadow: '0px 0px 6px #FC7400',
              fontSize: '16px',
            },
          }}
        >
          <div className={styles.circular_text}>
            <span>{date}</span>
            {percent}%
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}

export default DateAchievement
