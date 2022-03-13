import React from 'react'
import PaddedLayout from '../../_generic/padded-layout'
import { useSnippetState } from '../withSnippetState'
import FunctionalityRender from './functionality-render'
import PropsCard from './PropsCard'

const DescriptionContainer = () => {
  const { snippetState: snippet } = useSnippetState()

  return (
    <PaddedLayout classNames={'space-y-4 overflow-scroll'}>
      {snippet?.description?.props?.map((prop, idx) => (
        <PropsCard key={`${prop?.key}-${idx}`} prop={prop} />
      ))}
      <FunctionalityRender />
    </PaddedLayout>
  )
}

export default DescriptionContainer
