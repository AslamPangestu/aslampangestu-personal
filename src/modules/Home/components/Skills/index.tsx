import { useCallback, useEffect, useMemo, useState } from 'react'
import { sanityClient } from 'sanity:client'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'

import Carousel from 'src/components/Carousel'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from 'src/components/Carousel/Buttons'

import styles from './index.module.css'

interface Props {
  data: Array<Skill>
}

interface Option extends Skill {
  icon?: string
}

const OPTIONS: EmblaOptionsType = {
  align: 'center',
  loop: true,
  startIndex: 0
}

const SkillsContainer = ({ data }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [params, setParams] = useState<Array<SkillParam>>([])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const [currentIndex, setCurrentIndex] = useState(0)

  const currentData: Skill = useMemo(() => data[currentIndex], [currentIndex])
  const options: Array<Option> = useMemo(() => {
    return data.map((item: Skill) => ({
      ...item,
      icon: params.find((param: SkillParam) => param.key === item.name)?.icon
    }))
  }, [data, params])

  const onSlideChange = useCallback((emblaApi: EmblaCarouselType) => {
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) {
      return
    }
    emblaApi.on('slidesInView', onSlideChange)
    return () => {
      emblaApi?.off('slidesInView', onSlideChange)
    }
  }, [emblaApi, onSlideChange])

  useEffect(() => {
    const _onFetch = async () => {
      const paramSkills: string | Array<SkillParam> | null =
        localStorage.getItem('skills_param')
      if (paramSkills) {
        setParams(JSON.parse(paramSkills))
        return
      }
      const skills: Array<SkillParam> =
        await sanityClient.fetch(`*[_type == "skill"]{
          'id': _id,
          name,
          key,
          icon
        }`)
      localStorage.setItem('skills_param', JSON.stringify(skills))
      setParams(skills)
    }
    _onFetch()
  }, [])

  return (
    <section className={styles.skillsContainer}>
      <div className='container'>
        <h3>My Experties</h3>
        <div className={styles.iconsContainer}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

          <div className={styles.bodyContainer}>
            <Carousel
              emblaRef={emblaRef}
              containerClass={styles.innerBodyContainer}
            >
              {options.map((item: Option, index: number) => (
                <div
                  key={item.name}
                  className={styles.itemContainer}
                  data-active={index === currentIndex}
                >
                  <div>
                    <i className={`ti ${item.icon}`}></i>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <div>
          <p>{currentData.description}</p>
        </div>
      </div>
    </section>
  )
}

export default SkillsContainer
