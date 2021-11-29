// @flow

import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'

type Props = {
  snippet: String,
  language: String,
  theme: String,
}

const Highlighter = ({ snippet = '', language, theme }: Props) => {
  return (
    <SyntaxHighlighter language={language} style={theme}>
      {snippet}
    </SyntaxHighlighter>
  )
}

export default Highlighter
