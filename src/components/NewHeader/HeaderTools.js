import { useSnippetState } from '../MainContainer/withSnippetState'
import Button from '../_generic/Button'
import ConditionalRender from '../_generic/conditional-render'
import { useEditorState } from './withEditorState'

const HeaderTools = () => {
  const { editorState, dispatch } = useEditorState()
  const { snippetState } = useSnippetState()
  console.log('editorState', editorState)
  return (
    <>
      <ConditionalRender condition={editorState?.isCreating || editorState?.isEditing}>
        <Button
          title={editorState?.isDescription ? 'Code Editor' : 'Write Desciption'}
          type={'button'}
          buttonSize={'small'}
          buttonStatus={'primary'}
          icon={'reply'}
          onClick={() => dispatch({ type: 'is-description', payload: !editorState?.isDescription })}
        />
      </ConditionalRender>

      <ConditionalRender condition={!!snippetState}>
        <Button
          title={editorState?.isEditing ? 'Cancel' : 'Edit Snippet'}
          buttonSize={'small'}
          buttonStatus={'primary'}
          type={'button'}
          icon={'pencil'}
          onClick={() => dispatch({ type: 'is-editing', payload: !editorState?.isEditing })}
        />
      </ConditionalRender>

      <ConditionalRender condition={!editorState.isEditing}>
        <Button
          title={editorState?.isCreating ? 'View Snippets' : 'New Snippet'}
          buttonSize={'small'}
          buttonStatus={'primary'}
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
