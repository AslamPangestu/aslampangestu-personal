import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'

import Carousel from 'src/components/Carousel'
import Modal from 'src/components/Modal'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from 'src/components/Carousel/Buttons'
import PortableText from 'src/components/PortableTextReact'

import type { ModalInterface } from 'src/components/Modal'

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
      <Modal open={modal.open} onClose={_onClose}>
        {modal.data && (
          <>
            <PortableText
              value={{
                ...modal.data.coverImage,
                alt: `${modal.data.title} Portfolio`
              }}
            />
            <span>{modal.data.client}</span>
            <span>{modal.data.endDate}</span>
            <PortableText value={modal.data.projectDescription} />
            <span>{JSON.stringify(modal.data.roles)}</span>
            <span>{modal.data.site}</span>
            <span>{modal.data.startDate}</span>
            <span>{modal.data.title}</span>
          </>
        )}
      </Modal>
    </>
  )
}

export default PortfolioContainer
