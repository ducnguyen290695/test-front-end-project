import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Icon } from 'assets/icons'
import { scrollToTop } from 'utils/helperFuncs'
import styles from './index.module.scss'

interface MainLayoutProps {
  children: React.ReactChild | React.ReactElement
}

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />

      <button className={styles.scroll_top_btn} onClick={scrollToTop}>
        <Icon.CustomIcon icon={Icon.faChevronUp} />
      </button>
    </div>
  )
}

export default MainLayout
