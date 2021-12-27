import { createContext, useContext } from 'react'
import useEditorStateReducer from './useEditorStateReducer'

const EditorStateContext = createContext()
const EditorDispatchContext = createContext()

export const useEditorState = () => {
  const editorState = useContext(EditorStateContext)
  const dispatch = useContext(EditorDispatchContext)

  return { editorState, dispatch }
}

const initialValues = {
  isEditing: false,
  isDescription: false,
  isSidebarModal: false,
  isDeletingModal: false,
}

export const withEditorState =
  Component =>
  ({ ...rest }) => {
    const [editorState, dispatch] = useEditorStateReducer(initialValues)

    return (
      <EditorStateContext.Provider value={editorState}>
        <EditorDispatchContext.Provider value={dispatch}>
          <Component {...rest} />
        </EditorDispatchContext.Provider>
      </EditorStateContext.Provider>
    )
  }
