import React from 'react'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import { useInputChangeState } from '../withInputChangeState'

const ReturnValues = () => {
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
          value={input?.description?.return_name || ''}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
        <Input
          label={'Return Type'}
          name={'return_type'}
          value={input?.description?.return_type || ''}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
        <Input
          label={'Return Description'}
          name={'return_description'}
          value={input?.description?.return_description || ''}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
      </HorizontalLayout>
    </>
  )
}

export default ReturnValues
