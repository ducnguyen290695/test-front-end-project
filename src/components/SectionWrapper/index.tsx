import React, { memo } from 'react'
import styles from './index.module.scss'

const SectionWrapper = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[]
}) => {
  return <div className={styles.container}>{children}</div>
}

export default memo(SectionWrapper)
