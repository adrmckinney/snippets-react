// @flow

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import PaddedLayout from '../../_generic/padded-layout'
import { useSnippetState } from '../withSnippetState'

const SnippetContainer = () => {
  const { snippetState, defaultTheme, theme, themes } = useSnippetState()

  return (
    <>
      <PaddedLayout>
        <SyntaxHighlighter
          language={snippetState?.language}
          style={themes[theme || defaultTheme]}
          showLineNumbers
          wrapLines
          className='min-h-full'
        >
          {snippetState?.snippet || ''}
        </SyntaxHighlighter>
      </PaddedLayout>
    </>
  )
}

export default SnippetContainer
