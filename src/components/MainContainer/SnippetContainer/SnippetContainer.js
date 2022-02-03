// @flow

import React from 'react'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import PaddedLayout from '../../_generic/padded-layout'
import SelectDropdown from '../../_generic/select-dropdown'
import { useSnippetState } from '../withSnippetState'

const SnippetContainer = () => {
  const { snippetState } = useSnippetState()
  const [theme, setTheme] = useState(snippetState?.theme)

  const defaultTheme = `${snippetState?.theme || Object.keys(themes).sort()[0]}`

  return (
    <>
      <SelectDropdown
        label={'Theme'}
        width={'40'}
        data={Object.keys(themes)}
        value={theme || defaultTheme}
        selected={defaultTheme}
        onChange={e => setTheme(e)}
      />
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
