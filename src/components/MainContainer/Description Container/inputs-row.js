import React from 'react'
import Input from '../../_generic/input'
import { useInputChangeState } from '../withInputChangeState'

type Props = {
  label?: String,
  name: String,
  dataId: Number,
  id: String,
  isDescription?: Boolean,
  handleChange?: () => {},
  item: String,
  index: Number,
  fields: Array,
  initailValue: Object,
}

const InputsRow = ({
  label,
  name,
  dataId,
  id,
  isDescription = false,
  handleChange,
  item,
  index,
  fields,
}: Props) => {
  return (
    <>
      {fields?.map(field => (
        <Input
          key={`field-${item?.key}-${field?.name}`}
          label={field?.label}
          name={field?.name}
          id={id}
          value={item?.[field?.name]}
          onChange={e => handleChange(e.target, index)}
        />
      ))}
    </>
  )
}

export default InputsRow
