import { memo, useCallback, useEffect, useRef, useState } from 'react'
import Img from 'assets/images'
import { Link, RouteComponentProps } from 'react-router-dom'
import paths from 'config/paths'
import { SvgIcon } from 'assets/icons'
import { withRouter } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Icon } from 'assets/icons'
import { useOnClickOutside } from 'usehooks-ts'
import styles from './index.module.scss'

type Menu = {
  icon: JSX.Element
  label: string
  path: string
  bage?: number | string
}

type MenuItem = {
  label: string
  path: string
}

const Header = ({ history }: RouteComponentProps): JSX.Element => {
  const [activedMenu, setActivedMenu] = useState<string>('')
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const location = useLocation()
  const menuRef = useRef(null)

  const menus: Menu[] = [
    {
      icon: <SvgIcon.EditIcon />,
      label: '自分の記録',
      path: paths.myRecordPage,
    },
    {
      icon: <SvgIcon.MedalIcon />,
      label: '自分の記録',
      path: paths.topPage,
    },
    {
      icon: <SvgIcon.InfoIcon />,
      label: '自分の記録',
      path: paths.columnPage,
      bage: 1,
    },
  ]

  const menuItems: MenuItem[] = [
    {
      label: '自分の記録',
      path: '',
    },
    {
      label: '体重グラフ',
      path: '',
    },
    {
      label: '目標',
      path: '',
    },
    {
      label: '選択中のコース',
      path: '',
    },
    {
      label: 'コラム一覧',
      path: '',
    },
    {
      label: '設定',
      path: '',
    },
  ]

  const handleClickOutside = () => {
    setShowMenu(false)
  }

  const handleCloseMenu = useCallback(() => {
    setShowMenu(false)
  }, [])

  const handleToggleMenu = useCallback(() => {
    setShowMenu(!showMenu)
  }, [showMenu])

  useEffect(() => {
    history.listen((location) => {
      setActivedMenu(location?.pathname)
      handleCloseMenu()
    })
    setActivedMenu(location?.pathname)
  }, [])

  useOnClickOutside(menuRef, handleClickOutside)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left_col}>
          <Link to={'/'}>
            <img src={Img.Logo} alt="" />
          </Link>
        </div>

        <div className={styles.right_col}>
          <div className={styles.menu_items}>
            {menus.map((item, index) => (
              <div
                className={`${styles.menu} ${
                  activedMenu === item?.path ? styles.actived_menu : ''
                }}`}
                key={index}
              >
                <div className={styles.menu_icon}>
                  {item.bage && (
                    <span className={styles.bage}>{item.bage}</span>
                  )}{' '}
                  {item?.icon}
                </div>
                {item?.path ? (
                  <Link
                    style={{
                      color: activedMenu === item?.path ? '#ff963c' : '',
                    }}
                    to={item?.path || ''}
                  >
                    {item?.label}
                  </Link>
                ) : (
                  item?.label
                )}
              </div>
            ))}

            <div
              className={styles.menu}
              onClick={handleToggleMenu}
              ref={menuRef}
            >
              <div
                className={`${styles.menu_list} ${
                  showMenu && styles.menu_opened
                }`}
              >
                {menuItems.map(({ label }, index) => (
                  <p key={label + index} className={styles.menu_item}>
                    {label}
                  </p>
                ))}
              </div>

              {showMenu ? (
                <Icon.CustomIcon
                  className={styles.close_icon}
                  icon={Icon.faTimes}
                />
              ) : (
                <SvgIcon.MenuIcon />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(memo(Header))
