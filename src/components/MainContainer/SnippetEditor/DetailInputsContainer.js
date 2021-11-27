// @flow

import * as React from 'react'
import Input from '../../_generic/input'
import SelectDropdown from '../../_generic/select-dropdown'

const data = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const DetailInputsContainer = () => {
  return (
    <>
      <span className='space-y-4'>
        <Input label={'Title'} />
        <Input label={'Author'} />
        <SelectDropdown label={'Language'} data={data} />
        <Input label={'Style'} />
      </span>
    </>
  )
}

export default DetailInputsContainer
