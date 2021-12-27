// @flow

import React from 'react'
import { useEditorState } from '../../NewHeader/withEditorState'
import ConditionalRender from '../../_generic/conditional-render'
import Input from '../../_generic/input'

type Props = {
  handleChange: () => {},
  input: Object,
}

const CodeInputContainer = ({ handleChange, input }: Props) => {
  const { editorState } = useEditorState()

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
        <Input
          textArea
          name={'description'}
          label={'Description'}
          rows='30'
          value={input?.description}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
      </ConditionalRender>
    </>
  )
}

export default CodeInputContainer
