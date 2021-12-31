import React from 'react'
import Input from '../../_generic/input'
import PaddedLayout from '../../_generic/padded-layout'
import { useInputChangeState } from '../withInputChangeState'

const Functionality = () => {
  const { handleChange, inputState: input } = useInputChangeState()

  return (
    <>
      <PaddedLayout>
        <Input
          textArea
          name={'functionality'}
          label={'Functionality'}
          rows='15'
          value={input?.description?.functionality}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
      </PaddedLayout>
    </>
  )
}

export default Functionality
