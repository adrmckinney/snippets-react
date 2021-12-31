import React from 'react'
import HorizontalLayout from '../../_generic/horizontal-layout'
import { useSnippetState } from '../withSnippetState'

const PropsRender = () => {
  const { snippetState: snippet } = useSnippetState()

  return (
    <>
      <HorizontalLayout>
        <div>{snippet?.description?.prop_name}</div>
        <div>{snippet?.description?.prop_type}</div>
        <div>{snippet?.description?.prop_description}</div>
      </HorizontalLayout>
    </>
  )
}

export default PropsRender
