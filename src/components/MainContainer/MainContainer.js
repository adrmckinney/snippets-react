// @flow

import React, { useEffect } from 'react'
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
import { useSnippetState } from './withSnippetState'
import { updateSnippet } from '../../api/update-snippet'
import DescriptionContainer from './Description Container/DescriptionContainer'
import { useInputChangeState, withInputChangeState } from './withInputChangeState'

const MainContainer = () => {
  const { editorState, dispatch } = useEditorState()
  const { invalidateSnippetsList, snippetState } = useSnippetState()
  const { inputState: input, setInputState } = useInputChangeState()

  useEffect(() => {
    if (!!snippetState) {
      setInputState(input => ({
        ...input,
        ...snippetState,
      }))
    }
  }, [snippetState])

  const handleSubmit = event => {
    event.preventDefault()
    if (editorState?.isEditing) {
      updateSnippet(input, snippetState?.id).then(data => {
        invalidateSnippetsList()
        dispatch({ type: 'is-editing', payload: false })
        setInputState({})
      })
    } else {
      createSnippet(input).then(data => {
        invalidateSnippetsList()
        dispatch({ type: 'is-creating', payload: false })
        setInputState({})
      })
    }
  }

  return (
    <>
      <ConditionalRender
        condition={editorState.isCreating || editorState.isEditing}
        falseRender={
          <TwoColWrapper
            leftColContent={<SnippetContainer />}
            rightColContent={<DescriptionContainer />}
          />
        }
      >
        <Form handleSubmit={handleSubmit}>
          <TwoColWrapper
            wrapperClassNames={'h-full'}
            rightClassNames={'h-full'}
            leftColContent={<CodeInputContainer />}
            rightColContent={
              <TwoRowWrapper
                topSectionContent={<DetailInputsContainer languages={languages} themes={themes} />}
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

export default withInputChangeState(MainContainer)
