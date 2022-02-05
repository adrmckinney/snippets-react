// @flow

import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import PaddedLayout from '../../_generic/padded-layout'

type Props = {
  snippet: String,
  language: String,
  theme: String,
}

const Highlighter = ({ snippet = '', language, theme }: Props) => {
  return (
    <PaddedLayout classNames='h-full'>
      <SyntaxHighlighter
        language={language}
        style={theme}
        customStyle={{ height: '300px' }}
        className='min-h-full rounded-md'
      >
        {snippet}
      </SyntaxHighlighter>
    </PaddedLayout>
  )
}

export default Highlighter
