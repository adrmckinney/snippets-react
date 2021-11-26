// @flow

import * as React from 'react'
import { useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import HorizontalLayout from '../../_generic/horizontal-layout'
import ResponsiveGridLayout from '../../_generic/ResponsiveGridLayout'
import { getSnippet } from '../../../api/get-snippet'

type Props = {
  children: React.Node,
}

const SnippetContainer = ({ children }: Props) => {
  const [snippet, setSnippet] = useState('')
  useEffect(() => {
    getSnippet().then(data => setSnippet(data?.snippet))
  }, [])

  console.log('snippet?.snippet', snippet?.snippet)

  const string = renderToStaticMarkup(<ResponsiveGridLayout />)
  return (
    <>
      <SyntaxHighlighter
        language='javascript'
        style={dracula}
        showLineNumbers
        wrapLongLines
        useInLieStyles={false}
        className='min-h-full'
      >
        {snippet?.snippet}
      </SyntaxHighlighter>
    </>
  )
}

export default SnippetContainer
