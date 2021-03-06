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
    name: 'name',
  },
  {
    label: 'Type',
    name: 'type',
  },
  {
    label: 'Optional/Required',
    name: 'optional_required',
  },
  {
    label: 'Description',
    name: 'description',
    isTextArea: true,
  },
]

const returnValueFields = [
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Type',
    name: 'type',
  },
  {
    label: 'Description',
    name: 'description',
    isTextArea: true,
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
    isTextArea: true,
  },
]

const DescriptionEditor = () => {
  const { inputState, descriptionInput, setDescriptionInput } = useInputChangeState()
  const { editorState } = useEditorState()

  const initialPropValue = {
    key: v4(),
    name: '',
    type: '',
    required: '',
    description: '',
  }

  const initialReturnValue = {
    key: v4(),
    name: '',
    type: '',
    description: '',
  }

  const initialDependencyValue = {
    key: v4(),
    name: '',
    type: '',
    required: '',
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
            horizontalPosition={{ sm: 'evenly' }}
            verticalPosition={{ sm: 'center' }}
            classNames={'p-4'}
          >
            <VerticalLayout>
              {descriptionInput?.props?.map((prop, index) => (
                <ResponsiveGridLayout
                  key={`prop-${prop?.key}`}
                  cols={{ sm: '' + (propFields?.length - 1) }}
                  colGap={{ sm: '2' }}
                  px={{ sm: '2' }}
                  py={{ sm: '2' }}
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
            horizontalPosition={{ sm: 'evenly' }}
            verticalPosition={{ sm: 'center' }}
            classNames={'p-4'}
          >
            <VerticalLayout>
              {descriptionInput?.return_values?.map((value, index) => (
                <ResponsiveGridLayout
                  key={`prop-${value?.key}`}
                  cols={{ sm: '' + (returnValueFields?.length - 1) }}
                  colGap={{ sm: '2' }}
                  px={{ sm: '2' }}
                  py={{ sm: '2' }}
                >
                  <InputsRow
                    item={value}
                    isDescription={value?.isDescription}
                    index={index}
                    fields={returnValueFields}
                    handleChange={handleDescriptionChange}
                    id={'return_values'}
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
              onClick={() => handleAddRow('return_values')}
            />
          </HorizontalLayout>
        </div>

        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Dependencies</h2>
          <HorizontalLayout
            horizontalPosition={{ sm: 'evenly' }}
            verticalPosition={{ sm: 'center' }}
            classNames={'p-4'}
          >
            <VerticalLayout>
              {descriptionInput?.dependencies?.map((dependency, index) => (
                <ResponsiveGridLayout
                  key={`prop-${dependency?.key}`}
                  cols={{ sm: '' + (dependencyFields?.length - 1) }}
                  colGap={{ sm: '2' }}
                  px={{ sm: '2' }}
                  py={{ sm: '2' }}
                >
                  <InputsRow
                    item={dependency}
                    handleChange={handleDescriptionChange}
                    index={index}
                    fields={dependencyFields}
                    id={'dependencies'}
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
              onClick={() => handleAddRow('dependencies')}
            />
          </HorizontalLayout>
        </div>

        <PaddedLayout>
          <Input
            isTextArea
            name={'functionality'}
            label={'Functionality'}
            rows='5'
            value={descriptionInput?.functionality}
            onChange={e => handleDescriptionChange(e.target, 'description')}
          />
        </PaddedLayout>
      </div>
    </>
  )
}

export default DescriptionEditor
