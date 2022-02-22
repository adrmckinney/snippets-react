// @flow

import React, { useEffect } from 'react'
import ConditionalRender from '../_generic/conditional-render'
import Form from '../_generic/Form'
import SnippetContainer from './SnippetContainer/SnippetContainer'
import CodeInputContainer from './SnippetEditor/CodeInputContainer'
import Highlighter from './SnippetEditor/highlighter'
import { createSnippet } from '../../api/create-snippet'
import TwoColLayout from '../_generic/two-col-layout'
import { useEditorState } from '../NewHeader/withEditorState'
import { useSnippetState } from './withSnippetState'
import { updateSnippet } from '../../api/update-snippet'
import DescriptionContainer from './Description Container/DescriptionContainer'
import { useInputChangeState } from './withInputChangeState'

const MainContainer = () => {
  const { editorState, dispatch } = useEditorState()
  const { invalidateSnippetsList, snippetState, themes, formRef } = useSnippetState()
  const { inputState: input, setInputState } = useInputChangeState()

  useEffect(() => {
    if (snippetState?.isEditing) {
      setInputState(input => ({
        ...input,
        ...snippetState,
      }))
    }
  }, [snippetState, setInputState])

  const handleSubmit = event => {
    event.preventDefault()
    if (editorState?.isEditing) {
      updateSnippet(input, snippetState?.id).then(data => {
        invalidateSnippetsList()
        dispatch({ type: 'reset' })
        setInputState({})
      })
    } else {
      createSnippet(input).then(data => {
        invalidateSnippetsList()
        dispatch({ type: 'reset' })
        setInputState({})
      })
    }
  }

  return (
    <>
      <ConditionalRender
        condition={editorState.isCreating || editorState.isEditing}
        falseRender={
          <TwoColLayout
            leftColContent={<SnippetContainer />}
            rightColContent={<DescriptionContainer />}
          />
        }
      >
        <form ref={formRef} onSubmit={handleSubmit} className='h-full'>
          <TwoColLayout
            wrapperClassNames='h-full'
            rightClassNames='h-full'
            leftClassNames='h-full'
            leftColContent={<CodeInputContainer />}
            rightColContent={
              <Highlighter
                language={input?.language}
                theme={themes[input?.theme]}
                snippet={input?.snippet ?? snippetState?.snippet}
              />
            }
          />
        </form>
      </ConditionalRender>
    </>
  )
}

export default MainContainer
