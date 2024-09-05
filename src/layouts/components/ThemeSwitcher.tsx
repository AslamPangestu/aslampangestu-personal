import { useEffect, useState } from 'react'

import styles from './index.module.css'

const ThemeSwitcher = () => {
  const [value, setValue] = useState<boolean>(false)

  const _onSetTheme = (value: string) => {
    const doc = document.firstElementChild
    doc?.setAttribute('color-scheme', value)
    localStorage.setItem('theme', value)
    setValue(value === 'dark')
  }

  useEffect(() => {
    const local = localStorage.getItem('theme')
    if (local) {
      _onSetTheme(local)
      return
    }

    const theme = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
    _onSetTheme(theme)
  }, [])

  const _onChange = () => {
    const doc = document.firstElementChild
    const theme = doc?.getAttribute('color-scheme')
    _onSetTheme(theme === 'light' ? 'dark' : 'light')
  }

  // https://uiverse.io/JkHuger/old-falcon-20
  return (
    <div className={styles.themeSelector}>
      <span className={styles.themeToggleWrap} onClick={_onChange}>
        <input
          id='theme'
          className={styles.themeToggle}
          type='checkbox'
          role='switch'
          name='theme'
          value='dark'
          aria-label='theme-toggle'
          checked={value}
          readOnly
        />
        <span className={styles.themeIcon}>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
          <span className={styles.themeIconPart}></span>
        </span>
      </span>
    </div>
  )
}

export default ThemeSwitcher
