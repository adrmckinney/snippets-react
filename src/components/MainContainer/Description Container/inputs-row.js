import React, { useState } from 'react'
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
  // const { handleChange, inputState: input } = useInputChangeState()
  console.log('item', item)
  // console.log('Object?.keys(item)', Object?.keys(item[index]))
  return (
    <>
      {fields?.map(field => (
        <Input
          key={`field-${item?.key}-${field?.name}`}
          label={field?.label}
          name={field?.name}
          value={item?.[field?.name]}
          onChange={e => handleChange(e.target, index)}
        />
      ))}
    </>
  )
}

export default InputsRow

// const handleAllocateCartItemSpend = () => {
//   const spendAllocationData = [...spendAllocation]

//   // eslint-disable-next-line no-unused-expressions
//   selectedOffices?.forEach((office) => {
//     let found = spendAllocationData.find((data, i) => {
//       if (data.office_id === office?.id) {
//         data['quantity'] += 1
//         spendAllocationData[i] = data

//         return true
//       }
//     })

//     if (!found) {
//       spendAllocationData.push({
//         office_id: office?.id,
//         office_name: office?.name,
//         location_code: office?.location_code,
//         quantity: 1,
//       })
//     }
//   })

//   upsertCartItem({
//     id: item?.id,
//     input: { spend_allocation: spendAllocationData },
//   })
