import React, { useEffect } from 'react'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import VerticalLayout from '../../_generic/vertical-layout'
import { useInputChangeState } from '../withInputChangeState'
import InputsRow from './inputs-row'
import { v4 } from 'uuid'
import PaddedLayout from '../../_generic/padded-layout'
import Input from '../../_generic/input'
import { useEditorState } from '../../NewHeader/withEditorState'
import ResponsiveGridLayout from '../../_generic/responsive-grid-layout'

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
    label: 'Optional/Required',
    name: 'required',
  },
  {
    label: 'Description',
    name: 'prop_description',
    isTextArea: true,
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
  const { inputState, descriptionInput, setDescriptionInput } = useInputChangeState()
  const { editorState } = useEditorState()

  const initialPropValue = {
    key: v4(),
    prop_name: '',
    prop_type: '',
    required: '',
    description: '',
  }

  const initialReturnValue = {
    key: v4(),
    return_name: '',
    return_type: '',
    return_description: '',
  }

  const initialDependencyValue = {
    key: v4(),
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
    editorState?.isEditing
      ? setDescriptionInput(inputState?.description)
      : setDescriptionInput(initialDescriptionValue)
  }, [])

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
          [target]: [...descriptionData[target], Object.assign(propData, { key: v4() })],
        }))
      case 'return_values':
        return setDescriptionInput(descriptionInput => ({
          ...descriptionData,
          [target]: [...descriptionData[target], Object.assign(returnData, { key: v4() })],
        }))
      case 'dependencies':
        return setDescriptionInput(descriptionInput => ({
          ...descriptionData,
          [target]: [...descriptionData[target], Object.assign(dependencyData, { key: v4() })],
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
                <ResponsiveGridLayout
                  key={`prop-${prop?.key}`}
                  cols={'' + (propFields?.length - 1)}
                  colGap='2'
                  rowGap='2'
                  classNames={'lg:px-0 lg:py-2 xl:px-0 xl:py-2'}
                >
                  <InputsRow
                    item={prop}
                    handleChange={handleDescriptionChange}
                    index={index}
                    fields={propFields}
                    id={'props'}
                    inputState={inputState}
                  />
                </ResponsiveGridLayout>
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
            isTextArea
            name={'functionality'}
            label={'Functionality'}
            // id='functionality'
            rows='15'
            value={descriptionInput?.functionality}
            onChange={e => handleDescriptionChange(e.target, 'description')}
          />
        </PaddedLayout>
      </div>
    </>
  )
}

export default DescriptionEditor
