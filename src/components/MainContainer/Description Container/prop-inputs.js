import React from 'react'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import { useInputChangeState } from '../withInputChangeState'

type Props = {
  addPropRow: () => {},
}

const PropInputs = ({ addPropRow }: Props) => {
  const { handleChange, inputState: input } = useInputChangeState()
  return (
    <>
      <HorizontalLayout
        horizontalPosition='center'
        verticalPosition='center'
        additionalClassName={'p-4 justify-evenly'}
      >
        <Button status={'icon'} size={'small'} icon={'plusSm'} onClick={addPropRow} />
        <Input
          label={'Prop Name'}
          name={'prop_name'}
          value={input?.description?.prop_name || ''}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
        <Input
          label={'Prop Type'}
          name={'prop_type'}
          value={input?.description?.prop_type || ''}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
        <Input
          label={'Required'}
          name={'required'}
          value={input?.description?.required || ''}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
        <Input
          label={'Prop Description'}
          name={'prop_description'}
          value={input?.description?.prop_description || ''}
          onChange={e => handleChange(e.target.name, e.target.value, 'description')}
        />
      </HorizontalLayout>
    </>
  )
}

export default PropInputs
