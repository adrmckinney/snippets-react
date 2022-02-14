import React from 'react'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import { useInputChangeState } from '../withInputChangeState'

const ReturnValueInputs = () => {
  const { handleChange, inputState: input } = useInputChangeState()
  return (
    <>
      <HorizontalLayout
        horizontalPosition='center'
        verticalPosition='center'
        additionalClassName={'p-4 justify-evenly'}
      >
        <Input
          label={'Return Name'}
          name={'return_name'}
          id={'return_values'}
          value={input?.description?.return_values?.return_name || ''}
          onChange={e => handleChange(e.target, 'description')}
        />
        <Input
          label={'Return Type'}
          name={'return_type'}
          id={'return_values'}
          value={input?.description?.return_values?.return_type || ''}
          onChange={e => handleChange(e.target, 'description')}
        />
        <Input
          label={'Return Description'}
          name={'return_description'}
          id={'return_values'}
          value={input?.description?.return_values?.return_description || ''}
          onChange={e => handleChange(e.target, 'description')}
        />
      </HorizontalLayout>
    </>
  )
}

export default ReturnValueInputs
