// @flow

import React from 'react'
import { useEditorState } from '../../NewHeader/withEditorState'
import ConditionalRender from '../../_generic/conditional-render'
import Input from '../../_generic/input'
import DescriptionEditor from '../Description Container/DescriptionEditor'
import { useInputChangeState } from '../withInputChangeState'

const CodeInputContainer = () => {
  const { editorState } = useEditorState()
  const { handleChange, inputState: input } = useInputChangeState()

  return (
    <>
      <ConditionalRender
        condition={editorState.isDescription}
        falseRender={
          <Input
            textArea
            name={'snippet'}
            label={'Code'}
            rows='30'
            value={input?.snippet}
            onChange={e => handleChange(e.target.name, e.target.value)}
            onKeyDown={() => {}}
          />
        }
      >
        <DescriptionEditor />
      </ConditionalRender>
    </>
  )
}

export default CodeInputContainer
