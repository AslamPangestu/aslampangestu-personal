import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

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

export type ModalRefType = {
  onClose: () => void;
};

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

const ModalComponent = forwardRef(
  ({ open, children, onClose }: Props, ref) => {
    const innerRef = useRef<HTMLDialogElement>(null)

    useImperativeHandle(ref, () => {
      return {
        onClose() {
          _onClose();
        },
      };
    }, []);

    useEffect(() => {
      if (open) {
        innerRef.current?.showModal()
      }
    }, [open])

    const _onClose = () => {
      innerRef.current?.close()
      onClose()
    }

    const _onClickDialog = (
      event: React.MouseEvent<HTMLDialogElement, MouseEvent>
    ) => {
      if (!isClickInsideRectangle(event, innerRef.current)) {
        _onClose()
      }
    }

    return (
      <dialog
        ref={innerRef}
        onClick={_onClickDialog}
        className={styles.modalContainer}
      >
        {children}
      </dialog>
    )
  }
)

export default ModalComponent
