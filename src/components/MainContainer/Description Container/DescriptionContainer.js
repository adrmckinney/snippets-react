import React from 'react'
import PaddedLayout from '../../_generic/padded-layout'
import FunctionalityRender from './functionality-render'
import PropsRender from './PropsRender'

const DescriptionContainer = () => {
  return (
    <PaddedLayout classNames={'space-y-4'}>
      <PropsRender />
      <FunctionalityRender />
    </PaddedLayout>
  )
}

export default DescriptionContainer
