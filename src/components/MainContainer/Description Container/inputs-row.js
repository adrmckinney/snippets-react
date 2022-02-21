import React from 'react'
import Input from '../../_generic/input'

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
  ref?: Object,
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
  ref,
}: Props) => {
  return (
    <>
      {fields?.map(field => (
        <Input
          key={`field-${item?.key}-${field?.name}`}
          ref={ref}
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
