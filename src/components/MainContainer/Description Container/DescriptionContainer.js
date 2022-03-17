import React, { useState } from 'react'
import PaddedLayout from '../../_generic/padded-layout'
import SectionHeaderTabs from '../../_generic/SectionHeaders/section-header-tabs'
import { useSnippetState } from '../withSnippetState'
import FunctionalityRender from './functionality-render'
import PropsCard from './DescriptionCards/PropsCard'
import ReturnValuesCard from './DescriptionCards/ReturnValuesCard'
import DependenciesCard from './DescriptionCards/DependenciesCard'

const DescriptionContainer = () => {
  const { snippetState: snippet } = useSnippetState()
  const [tabs, setTabs] = useState([
    { name: 'Props', current: true },
    { name: 'Return Values', current: false },
    { name: 'Dependencies', current: false },
    { name: 'Functionality', current: false },
  ])
  console.log('snippet', snippet)
  const handleSelect = idx => {
    const tabsCopy = [...tabs]
    tabsCopy?.map(tab => (tab.current = false))

    tabsCopy[idx]['current'] = true
    setTabs(tabsCopy)
  }

  const renderCard = () => {
    const currentName = tabs?.filter(tab => tab.current === true)[0].name

    if (currentName === 'Props') {
      return snippet?.description?.props?.map((prop, idx) => (
        <PropsCard key={`${prop?.key}-${idx}`} prop={prop} />
      ))
    }
    if (currentName === 'Return Values') {
      return snippet?.description?.return_values?.map((value, idx) => (
        <ReturnValuesCard key={`${value?.key}-${idx}`} value={value} />
      ))
    }
    if (currentName === 'Dependencies') {
      return snippet?.description?.dependencies?.map((dependency, idx) => (
        <DependenciesCard key={`${dependency?.key}-${idx}`} dependency={dependency} />
      ))
    }
    if (currentName === 'Functionality') {
      return <FunctionalityRender />
    }
  }

  return (
    <>
      <PaddedLayout>
        <SectionHeaderTabs
          snippet={snippet}
          title='Description'
          tabs={tabs}
          handleSelect={handleSelect}
          as={'div'}
          ariaCurrent='location'
        />
      </PaddedLayout>
      <PaddedLayout classNames={styles.paddedLayout}>{renderCard()}</PaddedLayout>
    </>
  )
}

export default DescriptionContainer

const styles = {
  paddedLayout: ['space-y-4', 'overflow-scroll'].join(' '),
}
