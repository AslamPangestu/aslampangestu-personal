import { useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import dayjs from 'dayjs'

import Carousel from 'src/components/Carousel'
import Modal from 'src/components/Modal'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from 'src/components/Carousel/Buttons'
import PortableText from 'src/components/PortableTextReact'

import type { ModalInterface, ModalRefType } from 'src/components/Modal'

import styles from './index.module.css'

interface Props {
  data: Array<Project>
}

interface ItemProps {
  data: Project
  onClick: (value: Project) => void
}

const OPTIONS: EmblaOptionsType = {
  align: 'start',
  dragFree: true
}

// TODO: Full styling
const PortfolioItem = ({ data, onClick }: ItemProps) => (
  <div className={styles.itemContainer} onClick={() => onClick(data)}>
    <div>
      <PortableText
        value={{ ...data.coverImage, alt: `${data.title} Portfolio` }}
      />
    </div>
    <div>
      <span>{data.title}</span>
      <PortableText value={data.projectDescription} />
    </div>
  </div>
)

const PortfolioContainer = ({ data = [] }: Props) => {
  const modalRef = useRef<ModalRefType>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [modal, setModal] = useState<ModalInterface<Project | null>>({
    open: false,
    data: null
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const _onClick = (value: Project) => {
    setModal({ open: true, data: value })
  }

  const _onClose = () => {
    setModal({ open: false, data: null })
  }
  const _onVisit = (link: string | undefined) => {
    window.open(link, '_blank')
  }

  return (
    <>
      <section className={`container ${styles.portfolioContainer}`}>
        <div className={styles.titleContainer}>
          <div></div>
          <h3> My Recent Work</h3>
          <div>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        {data?.length && (
          <div className={styles.bodyContainer}>
            <Carousel
              emblaRef={emblaRef}
              containerClass={styles.innerBodyContainer}
            >
              {data.map((item: Project) => (
                <PortfolioItem key={item.id} data={item} onClick={_onClick} />
              ))}
              <div className={styles.viewMoreContainer}>
                <div>View More</div>
              </div>
            </Carousel>
          </div>
        )}
      </section>
      <Modal ref={modalRef} open={modal.open} onClose={_onClose}>
        {modal.data && (
          <div className={styles.modalContainer}>
            <div>
              <div>
                <i
                  className='ti ti-x'
                  onClick={() => modalRef.current?.onClose()}
                ></i>
              </div>
            </div>
            <PortableText
              value={{
                ...modal.data.coverImage,
                alt: `${modal.data.title} Portfolio`
              }}
            />
            <div>
              <div>
                <h5>
                  {modal.data.title} (
                  {dayjs(modal.data.startDate).format('MMMM YYYY')} -{' '}
                  {dayjs(modal.data.endDate).format('MMMM YYYY')})
                </h5>
                {modal.data.site && (
                  <button onClick={() => _onVisit(modal.data?.site)}>
                    Open
                  </button>
                )}
              </div>
              <span>{modal.data.client}</span>
              <span>
                {modal.data.roles.map((role: string) => role).join(', ')}
              </span>
              <PortableText value={modal.data.projectDescription} />
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

export default PortfolioContainer
