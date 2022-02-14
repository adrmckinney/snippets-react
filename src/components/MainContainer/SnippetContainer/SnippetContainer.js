// @flow

import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import PaddedLayout from '../../_generic/padded-layout'
import { useSnippetState } from '../withSnippetState'

const SnippetContainer = () => {
  const { snippetState, defaultTheme, theme, themes } = useSnippetState()

  const findTheme = () => {
    const test = Object.keys(themes)?.filter(theme => theme === snippetState?.theme)
    return test
  }

  return (
    <>
      <PaddedLayout classNames='h-full'>
        <SyntaxHighlighter
          language={snippetState?.language}
          style={themes[findTheme() || defaultTheme]}
          showLineNumbers
          wrapLines
          className='min-h-full rounded-md'
        >
          {snippetState?.snippet || ''}
        </SyntaxHighlighter>
      </PaddedLayout>
    </>
  )
}

export default SnippetContainer
