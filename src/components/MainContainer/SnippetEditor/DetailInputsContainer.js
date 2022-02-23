// @flow

import * as React from 'react'
import { updateSnippet } from '../../../api/update-snippet'
import { useEditorState } from '../../NewHeader/withEditorState'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import SelectDropdown from '../../_generic/select-dropdown'
import { useInputChangeState } from '../withInputChangeState'
import { useSnippetState } from '../withSnippetState'

const DetailInputsContainer = () => {
  const { editorState, dispatch } = useEditorState()
  const { handleChange, handleMergeDescriptionData, inputState: input } = useInputChangeState()
  const { languages, themes } = useSnippetState()
  const { snippetState, invalidateSnippetsList } = useSnippetState()

  const handleSubmit = e => {
    e.preventDefault()
    handleMergeDescriptionData()
    // TODO: need to get the update to handle the combine data…not working for some reason

    // updateSnippet(snippetState?.id, input).then(data => {
    //   // dispatch({ type: 'is-editing', payload: !editorState?.isEditing })
    //   invalidateSnippetsList()
    // })
  }

  return (
    <>
      <HorizontalLayout horizontalPosition='evenly flex-none'>
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
          type='submit'
          onClick={handleSubmit}
        />
      </HorizontalLayout>
    </>
  )
}

export default DetailInputsContainer
