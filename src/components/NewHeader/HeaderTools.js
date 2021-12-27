import Button from '../_generic/Button'
import ConditionalRender from '../_generic/conditional-render'
import { useEditorState } from './withEditorState'

const HeaderTools = () => {
  const { editorState, dispatch } = useEditorState()
  return (
    <>
      <ConditionalRender condition={editorState.isEditing}>
        <Button
          title={editorState.isDescription ? 'Code Editor' : 'Write Desciption'}
          type={'button'}
          buttonSize={'small'}
          buttonStatus={'primary'}
          icon={'reply'}
          onClick={() => dispatch({ type: 'is-description', payload: !editorState.isDescription })}
        />
      </ConditionalRender>
      <Button
        title={editorState.isEditing ? 'View Snippets' : 'New Snippet'}
        buttonSize={'small'}
        buttonStatus={'primary'}
        type={'button'}
        icon={editorState.isEditing ? 'terminal' : 'code'}
        onClick={() => dispatch({ type: 'is-editing', payload: !editorState.isEditing })}
      />
    </>
  )
}

export default HeaderTools
