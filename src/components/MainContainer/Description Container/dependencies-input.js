import React from 'react'
import Input from '../../_generic/input'
import PaddedLayout from '../../_generic/padded-layout'
import { useInputChangeState } from '../withInputChangeState'

const DependenciesInput = () => {
  const { handleChange, inputState: input } = useInputChangeState()

  return (
    <>
      <PaddedLayout>
        <Input
          textArea
          name={'dependencies'}
          label={'Dependencies'}
          id='dependencies'
          rows='10'
          value={input?.description?.dependencies?.dependencies}
          onChange={e => handleChange(e.target, 'description')}
        />
      </PaddedLayout>
    </>
  )
}

export default DependenciesInput
