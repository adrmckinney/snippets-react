// @flow

import * as React from 'react'
import { useEditorState } from '../../NewHeader/withEditorState'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import SelectDropdown from '../../_generic/select-dropdown'
import { useInputChangeState } from '../withInputChangeState'

type Props = {
  languages: Array,
  themes: Array,
}

const DetailInputsContainer = ({ languages, themes }: Props) => {
  const { editorState } = useEditorState()
  const { handleChange, inputState: input } = useInputChangeState()

  return (
    <>
      <span className='space-y-4'>
        <Input
          label={'Title'}
          name={'title'}
          placeholder={'Title'}
          value={input?.title}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <Input
          label={'Author'}
          name={'author'}
          value={input?.author}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <HorizontalLayout additionalClassName={'justify-around'}>
          <SelectDropdown
            label={'Language'}
            hasLabel={false}
            data={Object.keys(languages)}
            value={input?.language}
            selected={input?.language}
            wrapperClassNames={'justify-center'}
            onChange={e => handleChange('language', e)}
          />
          <SelectDropdown
            label={'Theme'}
            hasLabel={false}
            data={Object.keys(themes)}
            value={input?.theme}
            selected={input?.theme}
            wrapperClassNames={'justify-center'}
            onChange={e => handleChange('theme', e)}
          />
        </HorizontalLayout>
        <Button
          title={editorState?.isEditing ? 'Update' : 'Create'}
          buttonStatus={'primary'}
          buttonSize={'small'}
          type={'submit'}
        />
      </span>
    </>
  )
}

export default DetailInputsContainer
