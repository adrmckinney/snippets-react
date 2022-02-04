// @flow

import * as React from 'react'
import { useEditorState } from '../../NewHeader/withEditorState'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import PaddedLayout from '../../_generic/padded-layout'
import SelectDropdown from '../../_generic/select-dropdown'
import { useInputChangeState } from '../withInputChangeState'
import { useSnippetState } from '../withSnippetState'

const DetailInputsContainer = () => {
  const { editorState } = useEditorState()
  const { handleChange, inputState: input } = useInputChangeState()
  const { languages, themes } = useSnippetState()

  return (
    <>
      {/* <PaddedLayout> */}
      <HorizontalLayout horizontalPosition='evenly'>
        <div>
          <Input
            hasLabel={false}
            name={'title'}
            placeholder={'Title'}
            value={input?.title}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <Input
            hasLabel={false}
            placeholder={'Author'}
            name={'author'}
            value={input?.author}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </div>
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
        <Button
          title={editorState?.isEditing ? 'Update' : 'Create'}
          status={'primary'}
          size={'small'}
          type={'submit'}
        />
      </HorizontalLayout>
      {/* </PaddedLayout> */}
    </>
  )
}

export default DetailInputsContainer
