import React from 'react'
import PaddedLayout from '../../_generic/padded-layout'
import { useInputChangeState } from '../withInputChangeState'
import FunctionalityRender from './functionality-render'
import PropsRender from './PropsRender'

const DescriptionContainer = () => {
  const { handleChange, inputState: input } = useInputChangeState()
  const handleAddRow = () => {}

  const renderPropInputRow = () => <PropsRender />
  return (
    <PaddedLayout classNames={'space-y-4'}>
      {renderPropInputRow()}
      <FunctionalityRender />
    </PaddedLayout>
  )
}

export default DescriptionContainer
