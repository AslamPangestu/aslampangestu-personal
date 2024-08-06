import {
  PortableText as PortableTextInternal,
  type PortableTextReactComponents
} from '@portabletext/react'

import Image from './Image'

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: Image
  }
}

const PortableText = (props: any) => {
  return <PortableTextInternal value={props.value} components={components} />
}

export default PortableText
