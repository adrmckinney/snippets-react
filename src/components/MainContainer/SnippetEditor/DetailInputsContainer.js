// @flow

import * as React from 'react'
import { useEditorState } from '../../NewHeader/withEditorState'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import SelectDropdown from '../../_generic/select-dropdown'
import { useInputChangeState } from '../withInputChangeState'
import { useSnippetState } from '../withSnippetState'

const DetailInputsContainer = () => {
  const { editorState } = useEditorState()
  const { handleChange, handleSubmit, inputState: input } = useInputChangeState()
  const { languages, themes } = useSnippetState()

  return (
    <>
      <HorizontalLayout flex1={{ sm: 'none' }} horizontalPosition={{ sm: 'evenly' }}>
        <Input
          hasLabel={false}
          name={'title'}
          placeholder={'Title'}
          value={input?.title}
          onChange={e => handleChange(e.target)}
        />
        <Input
          hasLabel={false}
          placeholder={'Author'}
          name={'author'}
          value={input?.author}
          onChange={e => handleChange(e.target)}
        />
        <SelectDropdown
          label={'Language'}
          name='language'
          hasLabel={false}
          data={Object.keys(languages)}
          width='32'
          value={input?.language}
          selected={input?.language}
          wrapperClassNames={'justify-center'}
          onChange={value => handleChange({ value, name: 'language' })}
        />
        <SelectDropdown
          label={'Theme'}
          hasLabel={false}
          data={Object.keys(themes)}
          width='48'
          value={input?.theme}
          selected={input?.theme}
          wrapperClassNames={'justify-center'}
          onChange={value => handleChange({ value, name: 'theme' })}
        />
        <Button
          title={editorState?.isEditing ? 'Update' : 'Create'}
          status={'primary'}
          size={'small'}
          type='button'
          onClick={handleSubmit}
        />
      </HorizontalLayout>
    </>
  )
}

export default DetailInputsContainer
