import React, { useEffect, useMemo, useRef, useState } from 'react'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import VerticalLayout from '../../_generic/vertical-layout'
import { useInputChangeState } from '../withInputChangeState'
import InputsRow from './inputs-row'
import { uuid } from 'uuidv4'
import PaddedLayout from '../../_generic/padded-layout'
import Input from '../../_generic/input'
import { initailDependencyValue, initialDescriptionValue } from './initialValuesHelper'

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

const dependencyFields = [
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Optional/Required',
    name: 'optional_required',
  },
  {
    label: 'Description',
    name: 'description',
  },
]

const DescriptionEditor = () => {
  const { setInputState, inputState, descriptionInput, setDescriptionInput } = useInputChangeState()
  const rowRef = useRef(null)

  const initialPropValue = {
    key: uuid(),
    prop_name: '',
    prop_type: '',
    required: '',
    description: '',
  }

  const initialReturnValue = {
    key: uuid(),
    return_name: '',
    return_type: '',
    return_description: '',
  }

  const initialDependencyValue = {
    key: uuid(),
    name: '',
    type: '',
    description: '',
  }

  const initialDescriptionValue = {
    props: [initialPropValue],
    return_values: [initialReturnValue],
    dependencies: [initialDependencyValue],
  }

  useEffect(() => {
    setDescriptionInput(initialDescriptionValue)
  }, [])

  console.log('inputState', inputState)
  console.log('descriptionInput', descriptionInput)

  const handleDescriptionChange = ({ name, value, id: descriptionKey }, index) => {
    const descriptionData = { ...descriptionInput }

    switch (descriptionKey) {
      case 'props':
      case 'return_values':
      case 'dependencies':
        descriptionData[descriptionKey][index][name] = value
        setDescriptionInput(descriptionData)
        break
      default:
        setDescriptionInput(descriptionInput => ({
          ...descriptionData,
          [name]: value,
        }))
    }
  }

  const handleAddRow = target => {
    const descriptionData = { ...descriptionInput }
    const propData = { ...initialPropValue }
    const returnData = { ...initialReturnValue }
    const dependencyData = { ...initialDependencyValue }

    const handleInputSelect = () => {
      const nextField = document.querySelector()
    }

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
      case 'dependencies':
        return setDescriptionInput(descriptionInput => ({
          ...descriptionData,
          [target]: [...descriptionData[target], Object.assign(dependencyData, { key: uuid() })],
        }))
      default:
        return null
    }
  }

  const handleKeyPress = e => {
    if (e.keyCode === 13) handleAddRow()
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
            <VerticalLayout>
              {descriptionInput?.props?.map((prop, index) => (
                <HorizontalLayout key={`input-${prop?.key}`} horizontalPosition='between'>
                  <InputsRow
                    item={prop}
                    handleChange={handleDescriptionChange}
                    index={index}
                    fields={propFields}
                    id={'props'}
                    ref={rowRef}
                    inputState={inputState}
                  />
                </HorizontalLayout>
              ))}
            </VerticalLayout>
            <Button
              type={'button'}
              status={'icon'}
              size={'small'}
              icon={'plusSm'}
              onKeyPress={handleKeyPress}
              onClick={() => handleAddRow('props')}
            />
          </HorizontalLayout>
        </div>

        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Return Values</h2>
          <HorizontalLayout
            horizontalPosition='center'
            verticalPosition='center'
            additionalClassName={'p-4 justify-evenly'}
          >
            <VerticalLayout>
              {descriptionInput?.return_values?.map((value, index) => (
                <HorizontalLayout key={`input-${value?.key}`} horizontalPosition='between'>
                  <InputsRow
                    item={value}
                    isDescription={value?.isDescription}
                    index={index}
                    fields={returnValueFields}
                    handleChange={handleDescriptionChange}
                    id={'return_values'}
                    inputState={inputState}
                  />
                </HorizontalLayout>
              ))}
            </VerticalLayout>
            <Button
              type={'button'}
              status={'icon'}
              size={'small'}
              icon={'plusSm'}
              onKeyPress={handleKeyPress}
              onClick={() => handleAddRow('return_values')}
            />
          </HorizontalLayout>
        </div>
        <Button title={'combine'} type='button' size={'small'} onClick={() => {}} />

        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Dependencies</h2>
          <HorizontalLayout
            horizontalPosition='center'
            verticalPosition='center'
            additionalClassName={'p-4 justify-evenly'}
          >
            <VerticalLayout>
              {descriptionInput?.dependencies?.map((dependency, index) => (
                <HorizontalLayout key={`input-${dependency?.key}`} horizontalPosition='between'>
                  <InputsRow
                    item={dependency}
                    handleChange={handleDescriptionChange}
                    index={index}
                    fields={dependencyFields}
                    id={'dependencies'}
                    ref={rowRef}
                    inputState={inputState}
                  />
                </HorizontalLayout>
              ))}
            </VerticalLayout>
            <Button
              type={'button'}
              status={'icon'}
              size={'small'}
              icon={'plusSm'}
              onKeyPress={handleKeyPress}
              onClick={() => handleAddRow('dependencies')}
            />
          </HorizontalLayout>
        </div>

        <PaddedLayout>
          <Input
            textArea
            name={'functionality'}
            label={'Functionality'}
            // id='functionality'
            rows='15'
            value={inputState?.description?.functionality ?? descriptionInput?.functionality}
            onChange={e => handleDescriptionChange(e.target, 'description')}
          />
        </PaddedLayout>
      </div>
    </>
  )
}

export default DescriptionEditor
