import { useMemo } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from 'sanity:client'

interface ImageSanity {
  asset: Object
  alt: string
}

interface Props {
  value: ImageSanity
}


const builder = imageUrlBuilder(sanityClient)

const PortableImage = ({ value }: Props) => {
  const { asset, alt } = value

  const url = useMemo(() => {
    return builder.image(asset).url()
  }, [asset])

  const webpUrl = useMemo(() => {
    return builder.image(asset).format('webp').url()
  }, [asset])

  return (
    <picture>
      <source srcSet={webpUrl} type='image/webp' />
      <img
        className='responsive__img'
        src={url}
        alt={alt}
        width='100%'
        height='100%'
      />
    </picture>
  )
}

export default PortableImage
