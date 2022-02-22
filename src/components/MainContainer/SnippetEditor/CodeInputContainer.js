// @flow

import React from 'react'
import { useEditorState } from '../../NewHeader/withEditorState'
import ConditionalRender from '../../_generic/conditional-render'
import Input from '../../_generic/input'
import PaddedLayout from '../../_generic/padded-layout'
import DescriptionEditor from '../Description Container/DescriptionEditor'
import { useInputChangeState } from '../withInputChangeState'
import { useSnippetState } from '../withSnippetState'

const CodeInputContainer = () => {
  const { editorState } = useEditorState()
  const { handleChange, inputState: input, setInputState } = useInputChangeState()
  const { snippetState } = useSnippetState()
  console.log('snippetState', snippetState)
  // setInputState(snippetState)
  console.log('input', input)
  return (
    <>
      <PaddedLayout classNames='h-full'>
        <ConditionalRender
          condition={editorState.isDescription}
          falseRender={
            <Input
              textArea
              name={'snippet'}
              placeholder={'Code'}
              textAreaHeight='h-full'
              rows='30'
              value={input?.snippet}
              onChange={e => handleChange(e.target)}
              onKeyDown={() => {}}
            />
          }
        >
          <DescriptionEditor />
        </ConditionalRender>
      </PaddedLayout>
    </>
  )
}

export default CodeInputContainer
