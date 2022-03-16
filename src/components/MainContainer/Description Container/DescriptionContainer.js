import React from 'react'
import PaddedLayout from '../../_generic/padded-layout'
import SectionHeaderTabs from '../../_generic/SectionHeaders/section-header-tabs'
import { useSnippetState } from '../withSnippetState'
import FunctionalityRender from './functionality-render'
import PropsCard from './PropsCard'

const DescriptionContainer = () => {
  const { snippetState: snippet } = useSnippetState()
  const tabs = [
    { name: 'Props', current: true },
    { name: 'Return Value', current: false },
    { name: 'Dependencies', current: false },
  ]

  return (
    <>
      <SectionHeaderTabs
        snippet={snippet}
        title='Description'
        tabs={tabs}
        // handleClick={handleTabClick}
        as={'div'}
        ariaCurrent='location'
      />
      <PaddedLayout classNames={'space-y-4 overflow-scroll'}>
        {snippet?.description?.props?.map((prop, idx) => (
          <PropsCard key={`${prop?.key}-${idx}`} prop={prop} />
        ))}
        <FunctionalityRender />
      </PaddedLayout>
    </>
  )
}

export default DescriptionContainer
