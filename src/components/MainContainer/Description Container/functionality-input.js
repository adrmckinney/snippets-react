import React from 'react'
import Input from '../../_generic/input'
import PaddedLayout from '../../_generic/padded-layout'
import { useInputChangeState } from '../withInputChangeState'

const FunctionalityInput = () => {
  const { handleChange, inputState: input } = useInputChangeState()

  return (
    <>
      <PaddedLayout>
        <Input
          isTextArea
          name={'functionality'}
          label={'Functionality'}
          id='functionality'
          rows='15'
          value={input?.description?.functionality}
          onChange={e => handleChange(e.target, 'description')}
        />
      </PaddedLayout>
    </>
  )
}

export default FunctionalityInput
