// @flow

import * as React from 'react'
import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { getSnippet } from '../../../api/get-snippet'
import SelectDropdown from '../../_generic/select-dropdown'

const SnippetContainer = () => {
  const [snippetData, setSnippetData] = useState('')
  const [theme, setTheme] = useState(snippetData?.theme)

  useEffect(() => {
    getSnippet().then(data => setSnippetData(data?.snippet))
  }, [])

  const defaultTheme = `${snippetData?.theme || Object.keys(themes).sort()[0]}`

  return (
    <>
      <SelectDropdown
        label={'Theme'}
        data={Object.keys(themes)}
        value={theme || defaultTheme}
        selected={defaultTheme}
        onChange={e => setTheme(e)}
      />
      <SyntaxHighlighter
        language={snippetData?.language}
        style={themes[theme || defaultTheme]}
        showLineNumbers
        wrapLines
        className='min-h-full'
      >
        {snippetData?.snippet || ''}
      </SyntaxHighlighter>
    </>
  )
}

export default SnippetContainer
