// @flow

import React from 'react'
import { useEditorState } from '../../NewHeader/withEditorState'
import ConditionalRender from '../../_generic/conditional-render'
import Input from '../../_generic/input'
import PaddedLayout from '../../_generic/padded-layout'
import DescriptionEditor from '../Description Container/DescriptionEditor'
import { useInputChangeState } from '../withInputChangeState'

const CodeInputContainer = () => {
  const { editorState } = useEditorState()
  const { handleChange, inputState: input } = useInputChangeState()

  return (
    <>
      <PaddedLayout>
        <ConditionalRender
          condition={editorState.isDescription}
          falseRender={
            <Input
              textArea
              name={'snippet'}
              // label={'Code'}
              placeholder={'Code'}
              rows='30'
              value={input?.snippet}
              onChange={e => handleChange(e.target.name, e.target.value)}
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
