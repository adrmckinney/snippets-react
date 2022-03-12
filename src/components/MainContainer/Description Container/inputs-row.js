// @flow

import React from 'react'
import Input from '../../_generic/input'

type Props = {
  id: String,
  isDescription?: Boolean,
  handleChange?: () => {},
  item: String,
  index: Number,
  fields: Array,
  initailValue: Object,
  ref?: Object,
  inputState: Object,
  classNames: String,
}

const InputsRow = ({
  id,
  isDescription = false,
  handleChange,
  item,
  index,
  fields,
  ref,
  inputState,
  classNames,
}: Props) => {
  return (
    <>
      {fields?.map((field, idx) => (
        <div
          key={`field-${item?.key}-${field?.name}`}
          className={idx === fields?.length - 1 ? `col-span-${fields?.length - 1}` : 'col-span-1'}
        >
          <Input
            ref={ref}
            label={field?.label}
            name={field?.name}
            id={id}
            isTextArea={field?.isTextArea}
            value={item?.[field?.name] || ''}
            onChange={e => handleChange(e.target, index)}
          />
        </div>
      ))}
    </>
  )
}

export default InputsRow
