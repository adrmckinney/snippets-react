// @flow

import React from 'react'
import { useState } from 'react'
import ConditionalRender from '../_generic/conditional-render'
import Form from '../_generic/Form'
import SnippetContainer from './SnippetContainer/SnippetContainer'
import CodeInputContainer from './SnippetEditor/CodeInputContainer'
import * as languages from 'react-syntax-highlighter/dist/esm/languages/hljs'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Highlighter from './SnippetEditor/highlighter'
import { createSnippet } from '../../api/create-snippet'
import TwoColWrapper from '../_generic/two-col-wrapper'
import { useEditorState } from '../NewHeader/withEditorState'
import DetailInputsContainer from './SnippetEditor/DetailInputsContainer'
import TwoRowWrapper from '../_generic/two-row-wrapper'

const defaultLanguage = `${'javascript' || Object.keys(languages).sort()[0]}`
const defaultTheme = `${'dracula' || Object.keys(themes).sort()[0]}`

const MainContainer = () => {
  const { editorState } = useEditorState()
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
        condition={editorState.isEditing}
        falseRender={
          <TwoColWrapper
            leftColContent={<SnippetContainer />}
            rightColContent={<p>This is the description area</p>}
          />
        }
      >
        <Form handleSubmit={handleSubmit}>
          <TwoColWrapper
            wrapperClassNames={'h-full'}
            rightClassNames={'h-full'}
            leftColContent={<CodeInputContainer handleChange={handleChange} input={input} />}
            rightColContent={
              <TwoRowWrapper
                topSectionContent={
                  <DetailInputsContainer
                    handleChange={handleChange}
                    languages={languages}
                    themes={themes}
                    input={input}
                  />
                }
                bottomSectionContent={
                  <Highlighter
                    language={input?.language}
                    theme={themes[input?.theme]}
                    snippet={input?.snippet}
                  />
                }
              />
            }
          />
        </Form>
      </ConditionalRender>
    </>
  )
}

export default MainContainer
