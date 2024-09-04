import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'

import PortableText from 'src/components/PortableTextReact'
import Carousel from 'src/components/Carousel'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from 'src/components/Carousel/Buttons'

import styles from './index.module.css'

interface Props {
  data: Array<Project>
}

interface ItemProps {
  data: Project
  onClick: () => void
}

const OPTIONS: EmblaOptionsType = {
  align: 'start',
  dragFree: true
}

// TODO: Full styling
const PortfolioItem = ({ data, onClick }: ItemProps) => (
  <div className={styles.itemContainer} onClick={onClick}>
    <div>
      <PortableText
        value={{ ...data.coverImage, alt: `${data.title} Picture` }}
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

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  // TODO: Implement Modal
  const _onClick = () => { }

  return (
    <section className={`container ${styles.portfolioContainer}`}>
      <div className={styles.titleContainer}>
        <div></div>
        <h3> My Recent Work</h3>
        <div>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
  )
}

export default PortfolioContainer
