import { useEffect, useRef } from 'react'

import styles from './index.module.css'

interface Props {
  open: boolean
  children: React.ReactNode
  onClose: () => void
  title?: string
}

export interface ModalInterface<T> {
  open: boolean
  data: T
}

const isClickInsideRectangle = (
  e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
  element: HTMLElement | null
) => {
  if (!element) {
    return false
  }
  const r = element.getBoundingClientRect()

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  )
}

const ModalComponent = ({ open, children, onClose, title }: Props) => {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (open) {
      ref.current?.showModal()
    }
  }, [open])

  const _onClose = () => {
    ref.current?.close()
    onClose()
  }

  const _onClickDialog = (
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    if (!isClickInsideRectangle(event, ref.current)) {
      _onClose()
    }
  }

  return (
    <dialog
      ref={ref}
      onClick={_onClickDialog}
      className={styles.modalContainer}
    >
      <div>
        <div>{title && <span>{title}</span>}</div>
        <div>
          <i className="ti ti-x"></i>
        </div>
      </div>
      <div>{children}</div>
    </dialog>
  )
}

export default ModalComponent
