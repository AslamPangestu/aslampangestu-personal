import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import ThemeSwitcher from './components/ThemeSwitcher'

import styles from './index.module.css'

interface Props {
  currentPath: string
}

interface Menu {
  name: string
  path: string
}

const MENUS: Array<Menu> = [
  {
    name: 'Home',
    path: '/'
  },
  // {
  //   name: 'Blog',
  //   path: '/blogs'
  // },
  {
    name: 'Project',
    path: '/projects'
  }
]

function disableScroll() {
  const body = document.querySelector('body')
  if (body) {
    body.style.overflow = 'hidden'
  }
  const scrollTop = window.scrollX || document.documentElement.scrollTop
  const scrollLeft = window.scrollY || document.documentElement.scrollLeft
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop)
  }
}

function enableScroll() {
  const body = document.querySelector('body')
  if (body) {
    body.style.overflow = 'auto'
  }
  window.onscroll = function () {}
}

const HeaderLayout = ({ currentPath }: Props) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 640 })

  const [toggle, setToggle] = useState<boolean>(false)

  const _onToggle = () =>
    setToggle((prevState) => {
      if (prevState) {
        enableScroll()
      } else {
        disableScroll()
      }
      return !prevState
    })

  return (
    <>
      <header className={styles.container}>
        <div className={`container ${styles.innerContainer}`}>
          {/* TODO: Icon */}
          <nav>{/* <a href='/'>Brand Icon</a> */}</nav>

          {isTabletOrMobile ? (
            // https://uiverse.io/ArturCodeCraft/selfish-fish-82
            <div className={styles.mobileMenu} onClick={_onToggle}>
              <button
                className={styles.menuIcon}
                {...(toggle ? { 'data-active': true } : {})}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          ) : (
            <div className={styles.menuContainer}>
              {MENUS.map((item: Menu) => (
                <a
                  href={item.path}
                  {...(currentPath === item.path
                    ? { 'data-active': true }
                    : {})}
                >
                  <nav>{item.name}</nav>
                </a>
              ))}
              <ThemeSwitcher />
            </div>
          )}
        </div>
      </header>
      {isTabletOrMobile ? (
        <div
          className={styles.menuMobileContainer}
          {...(toggle ? { 'data-active': true } : {})}
        >
          {MENUS.map((item) => (
            <a
              href={item.path}
              {...(currentPath === item.path ? { 'data-active': true } : {})}
            >
              <nav>{item.name}</nav>
            </a>
          ))}
          <ThemeSwitcher />
        </div>
      ) : null}
    </>
  )
}

export default HeaderLayout
