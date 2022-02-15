import React, { useState } from 'react'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import VerticalLayout from '../../_generic/vertical-layout'
import { useInputChangeState } from '../withInputChangeState'
import DependenciesInput from './dependencies-input'
import FunctionalityInput from './functionality-input'
import InputsRow from './inputs-row'
import { uuid } from 'uuidv4'

const propFields = [
  {
    label: 'Name',
    name: 'prop_name',
  },
  {
    label: 'Type',
    name: 'prop_type',
  },
  {
    label: 'Required',
    name: 'required',
  },
  {
    label: 'Description',
    name: 'prop_description',
  },
]

const returnValueFields = [
  {
    label: 'Name',
    name: 'return_name',
  },
  {
    label: 'Type',
    name: 'return_type',
  },
  {
    label: 'Description',
    name: 'return_description',
  },
]

const DescriptionEditor = () => {
  const initailPropValue = {
    key: uuid(),
    prop_name: '',
    prop_type: '',
    required: '',
    description: '',
  }

  const initailReturnValue = {
    key: uuid(),
    return_name: '',
    return_type: '',
    return_description: '',
  }

  const initailDescriptionValue = {
    props: [initailPropValue],
    return_values: [initailReturnValue],
  }

  const [descriptionInput, setDescriptionInput] = useState(initailDescriptionValue)
  const { setInputState, inputState } = useInputChangeState()

  const handleCombine = () => {
    const inputData = { ...inputState }
    const descriptionData = { ...descriptionInput }

    setInputState(inputState => ({
      ...inputData,
      descritpion: descriptionData,
    }))
  }
  console.log('inputState', inputState)
  const handleDescriptionChange = ({ name, value, id }, index) => {
    const descriptionData = { ...descriptionInput }

    descriptionData[id][index][name] = value
    setDescriptionInput(descriptionData)
  }

  const handleAddDescriptionRow = target => {
    const descriptionData = { ...descriptionInput }
    const propData = { ...initailPropValue }
    const returnData = { ...initailReturnValue }
    switch (target) {
      case 'props':
        return setDescriptionInput(descriptionInput => ({
          ...descriptionData,
          [target]: [...descriptionData[target], Object.assign(propData, { key: uuid() })],
        }))
      case 'return_values':
        return setDescriptionInput(descriptionInput => ({
          ...descriptionData,
          [target]: [...descriptionData[target], Object.assign(returnData, { key: uuid() })],
        }))
      default:
        return null
    }
  }

  return (
    <>
      <div className='h-full overflow-scroll'>
        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Props</h2>
          <HorizontalLayout
            horizontalPosition='center'
            verticalPosition='center'
            additionalClassName={'p-4 justify-evenly'}
          >
            <Button
              type={'button'}
              status={'icon'}
              size={'small'}
              icon={'plusSm'}
              onClick={() => handleAddDescriptionRow('props')}
            />
            <VerticalLayout>
              {descriptionInput?.props?.map((item, index) => (
                <HorizontalLayout key={`input-${item?.key}`}>
                  <InputsRow
                    item={item}
                    handleChange={handleDescriptionChange}
                    index={index}
                    fields={propFields}
                    id={'props'}
                  />
                </HorizontalLayout>
              ))}
            </VerticalLayout>
          </HorizontalLayout>
        </div>

        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Return Values</h2>
          <HorizontalLayout
            horizontalPosition='center'
            verticalPosition='center'
            additionalClassName={'p-4 justify-evenly'}
          >
            <Button
              type={'button'}
              status={'icon'}
              size={'small'}
              icon={'plusSm'}
              onClick={() => handleAddDescriptionRow('return_values')}
            />
            <VerticalLayout>
              {descriptionInput?.return_values?.map((item, index) => (
                <HorizontalLayout key={`input-${item?.key}`}>
                  <InputsRow
                    item={item}
                    isDescription={item?.isDescription}
                    index={index}
                    fields={returnValueFields}
                    handleChange={handleDescriptionChange}
                    id={'return_values'}
                  />
                </HorizontalLayout>
              ))}
            </VerticalLayout>
          </HorizontalLayout>
        </div>
        <Button title={'combine'} type='button' size={'small'} onClick={handleCombine} />

        <FunctionalityInput />

        <DependenciesInput />
      </div>
    </>
  )
}

export default DescriptionEditor
