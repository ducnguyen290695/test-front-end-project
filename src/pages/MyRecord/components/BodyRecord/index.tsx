import { memo, useCallback, useState } from 'react'
import BodyWeightGraph from 'pages/TopPage/components/BodyWeightGraph'
import styles from './index.module.scss'

type FilterButton = {
  label: string
  value: string
}

const BodyRecord = () => {
  const [activedFilter, setActivedFilter] = useState('')

  const filterButtons: FilterButton[] = [
    {
      label: '日',
      value: '日',
    },
    {
      label: '週',
      value: '週',
    },
    {
      label: '月',
      value: '月',
    },
    {
      label: '年',
      value: '年',
    },
  ]

  const handleChangeActivedFilter = useCallback((activedValue: string) => {
    setActivedFilter(activedValue)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>
          BODY <br /> RECORD
        </span>
        <span className={styles.date}>2021.05.21</span>
      </div>
      <BodyWeightGraph className={styles.body_record_chart} />

      <div className={styles.filter_buttons}>
        {filterButtons.map(({ label, value }, index) => (
          <button
            key={label + index}
            className={`${styles.filter_btn} ${
              activedFilter === value && styles.actived_btn
            }`}
            onClick={() => handleChangeActivedFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default memo(BodyRecord)
