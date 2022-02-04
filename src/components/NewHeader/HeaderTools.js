import { useSnippetState } from '../MainContainer/withSnippetState'
import Button from '../_generic/Button'
import ConditionalRender from '../_generic/conditional-render'
import SelectDropdown from '../_generic/select-dropdown'
import { useEditorState } from './withEditorState'

const HeaderTools = () => {
  const { editorState, dispatch } = useEditorState()
  const { snippetState, themes, defaultTheme, theme, setTheme } = useSnippetState()

  return (
    <>
      {/* <ConditionalRender condition={editorState?.isCreating || editorState?.isEditing}>
        <SelectDropdown
          label={'Theme'}
          width={'40'}
          data={Object.keys(themes)}
          value={theme || defaultTheme}
          selected={defaultTheme}
          onChange={e => setTheme(e)}
        />
      </ConditionalRender> */}

      <ConditionalRender condition={editorState?.isCreating || editorState?.isEditing}>
        <Button
          title={editorState?.isDescription ? 'Code Editor' : 'Write Desciption'}
          type={'button'}
          size={'extraSmall'}
          status={'primary'}
          icon={'reply'}
          onClick={() => dispatch({ type: 'is-description', payload: !editorState?.isDescription })}
        />
      </ConditionalRender>

      <ConditionalRender condition={!!snippetState}>
        <Button
          title={editorState?.isEditing ? 'Cancel' : 'Edit Snippet'}
          size={'extraSmall'}
          status={'primary'}
          type={'button'}
          icon={'pencil'}
          onClick={() => dispatch({ type: 'is-editing', payload: !editorState?.isEditing })}
        />
      </ConditionalRender>

      <ConditionalRender condition={!editorState.isEditing}>
        <Button
          title={editorState?.isCreating ? 'View Snippets' : 'New Snippet'}
          size={'extraSmall'}
          status={'primary'}
          type={'button'}
          icon={editorState?.isCreating ? 'terminal' : 'code'}
          onClick={() => {
            dispatch({ type: 'is-creating', payload: !editorState?.isCreating })
          }}
        />
      </ConditionalRender>
    </>
  )
}

export default HeaderTools
