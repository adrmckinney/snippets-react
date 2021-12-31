import React from 'react'
import { useSnippetState } from '../withSnippetState'

const FunctionalityRender = () => {
  const { snippetState: snippet } = useSnippetState()

  return (
    <>
      <div>{snippet?.description?.functionality}</div>
    </>
  )
}

export default FunctionalityRender
