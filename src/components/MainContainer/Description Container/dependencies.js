import React from 'react'
import Input from '../../_generic/input'
import PaddedLayout from '../../_generic/padded-layout'
import { useInputChangeState } from '../withInputChangeState'

const Dependencies = () => {
  const { handleChange, inputState: input } = useInputChangeState()

  return (
    <>
      <PaddedLayout>
        <Input
          textArea
          name={'dependencies'}
          label={'Dependencies'}
          rows='10'
          value={input?.description?.dependencies}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
      </PaddedLayout>
    </>
  )
}

export default Dependencies
