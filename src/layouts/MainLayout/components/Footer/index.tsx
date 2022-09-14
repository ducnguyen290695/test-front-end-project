import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

type FooterMenu = {
  label: string
  link: string
}

const Footer = (): JSX.Element => {
  const menus: FooterMenu[] = [
    {
      label: '会員登録',
      link: '',
    },
    {
      label: '運営会社',
      link: '',
    },
    {
      label: '利用規約',
      link: '',
    },
    {
      label: '個人情報の取扱について',
      link: '',
    },
    {
      label: '特定商取引法に基づく表記',
      link: '',
    },
    {
      label: 'お問い合わせ',
      link: '',
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {menus.map(({ label, link }, index) => (
          <Link key={label + index} to={link} className={styles.menu}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default memo(Footer)
