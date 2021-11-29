// @flow

import * as React from 'react'
import { useState } from 'react'
import ConditionalRender from '../_generic/conditional-render'
import Form from '../_generic/Form'
import ThreeColWrapper from '../_generic/three-col-wrapper'
import SnippetContainer from './SnippetContainer/SnippetContainer'
import CodeInputContainer from './SnippetEditor/CodeInputContainer'
import DetailInputsContainer from './SnippetEditor/DetailInputsContainer'
import ListCards from './SnippetsList/list-cards'
import * as languages from 'react-syntax-highlighter/dist/esm/languages/hljs'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Highlighter from './SnippetEditor/highlighter'
import { createSnippet } from '../../api/create-snippet'

const defaultLanguage = `${'javascript' || Object.keys(languages).sort()[0]}`
const defaultTheme = `${'dracula' || Object.keys(themes).sort()[0]}`

type Props = {
  showEditor: Boolean,
}
console.log('languages', languages)
const MainContainer = ({ showEditor }: Props) => {
  const [input, setInput] = useState({
    language: defaultLanguage,
    theme: defaultTheme,
  })

  const handleSubmit = event => {
    event.preventDefault()
    createSnippet(input).then(data =>
      setInput(input => ({
        ...input,
        author: '',
        title: '',
        snippet: '',
        description: '',
        language: defaultLanguage,
        theme: defaultTheme,
      }))
    )
  }

  const handleChange = (name, value) => {
    setInput(input => ({
      ...input,
      [name]: value,
    }))
  }

  return (
    <>
      <ConditionalRender
        condition={showEditor}
        falseRender={
          <ThreeColWrapper
            leftColContent={<ListCards title={'Snippets'} />}
            centerColContent={<SnippetContainer />}
            rightColContent={<p>This is the description area</p>}
            constrainedWidth={false}
            constrainedHeight={true}
          />
        }
      >
        <Form handleSubmit={handleSubmit}>
          <ThreeColWrapper
            leftColContent={
              <DetailInputsContainer
                handleChange={handleChange}
                languages={languages}
                themes={themes}
                input={input}
              />
            }
            centerColContent={<CodeInputContainer handleChange={handleChange} input={input} />}
            rightColContent={
              <Highlighter
                language={input?.language}
                theme={themes[input?.theme]}
                snippet={input?.snippet}
              />
            }
            constrainedWidth={false}
            constrainedHeight={false}
            centerRightDominant
          />
        </Form>
      </ConditionalRender>
    </>
  )
}

export default MainContainer
