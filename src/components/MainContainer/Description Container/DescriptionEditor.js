import React, { useState } from 'react'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import VerticalLayout from '../../_generic/vertical-layout'
import { useInputChangeState } from '../withInputChangeState'
import DependenciesInput from './dependencies-input'
import FunctionalityInput from './functionality-input'
import InputsRow from './inputs-row'
import { uuid } from 'uuidv4'

const DescriptionEditor = () => {
  const initailValue = {
    key: uuid(),
    prop_name: '',
    prop_type: '',
    required: '',
    description: '',
  }

  const { setInputState, inputState } = useInputChangeState()
  const [propsInput, setPropsInput] = useState([initailValue])
  const [descriptionInput, setDescriptionInput] = useState([])

  const handlePropChange = ({ name, value }, index) => {
    console.log('index', index)
    const propData = [...propsInput]

    propData[index][name] = value
    setPropsInput(propData)
  }

  const handleAddRow = id => {
    // const propsData = [...propsInput]

    setPropsInput(propsInput => [...propsInput, initailValue])
  }

  // const handleDescriptionInput = ({ name, value, id }) => {
  //   setDescriptionInput(descriptionInput => ({
  //     ...descriptionInput,
  //     [name]: value,
  //   }))
  // }

  // const handleDescriptionData = ({ name, value, id }) => {
  //   const descriptionData = [...input?.description]
  // }

  console.log('propsInput', propsInput)
  const propInputsRow = [
    {
      label: 'Name',
      name: 'prop_name',
      id: 'props',
      isDescription: true,
      // handlePropChange,
      // propsInput,
    },
    {
      label: 'Type',
      name: 'prop_type',
      id: 'props',
      isDescription: true,
      // handlePropChange,
      // propsInput,
    },
    {
      label: 'Required',
      name: 'required',
      id: 'props',
      isDescription: true,
      // handlePropChange,
      // propsInput,
    },
    {
      label: 'Description',
      name: 'prop_description',
      id: 'props',
      isDescription: true,
      // handlePropChange,
      // propsInput,
    },
  ]

  const returnValueInputsRow = [
    {
      label: 'Name',
      name: 'return_name',
      id: 'return_values',
      isDescription: true,
    },
    {
      label: 'Type',
      name: 'return_type',
      id: 'return_values',
      isDescription: true,
    },
    {
      label: 'Required',
      name: 'required',
      id: 'return_values',
      isDescription: true,
    },
  ]
  const propsField = [
    {
      label: 'Prop Name',
      name: 'prop_name',
    },
    {
      label: 'Prop Type',
      name: 'prop_type',
    },
    {
      label: 'Required',
      name: 'required',
    },
    {
      label: 'Description',
      name: 'description',
    },
  ]
  console.log('propsInput[0]?.key', propsInput[0]?.key)
  console.log('inputState', inputState)
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
              onClick={handleAddRow}
            />
            <VerticalLayout>
              {propsInput?.map((item, index) => (
                <HorizontalLayout key={`input-${item?.key}`}>
                  <InputsRow
                    item={item}
                    handleChange={handlePropChange}
                    index={index}
                    fields={propsField}
                  />
                  {/* // <Input
                //   key={`input-${propRow?.name}-${index}`}
                //   label={propRow?.label}
                //   name={propRow?.name}
                //   data-id={index}
                //   id={propRow?.id}
                //   value={propsInput[propRow?.name] || ''}
                //   isDescription={propRow?.isDescription}
                //   onChange={e => handlePropChange(e.target, index)}
                // /> */}
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
              onClick={() => {}}
            />
            {returnValueInputsRow?.map(returnRow => (
              <InputsRow
                key={`input-${returnRow?.name}`}
                label={returnRow?.label}
                name={returnRow?.name}
                id={returnRow?.id}
                isDescription={returnRow?.isDescription}
              />
            ))}
          </HorizontalLayout>
        </div>

        <FunctionalityInput />

        <DependenciesInput />
      </div>
    </>
  )
}

export default DescriptionEditor
