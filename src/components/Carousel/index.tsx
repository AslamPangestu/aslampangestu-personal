import type { LegacyRef } from 'react'

import styles from './index.module.css'

interface Props {
  emblaRef: LegacyRef<HTMLDivElement> | undefined
  containerClass: string
  children: React.ReactNode
}

const Carousel = ({ children, emblaRef, containerClass }: Props) => (
  <div className={styles.viewport} ref={emblaRef}>
    <div className={containerClass}>{children}</div>
  </div>
)

export default Carousel
