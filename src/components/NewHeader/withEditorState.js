import { createContext, useContext, useEffect } from 'react'
import { useInputChangeState } from '../MainContainer/withInputChangeState'
import { useSnippetState } from '../MainContainer/withSnippetState'
import useEditorStateReducer from './useEditorStateReducer'

const EditorStateContext = createContext()
const EditorDispatchContext = createContext()

export const useEditorState = () => {
  const editorState = useContext(EditorStateContext)
  const dispatch = useContext(EditorDispatchContext)

  return { editorState, dispatch }
}

const initialValues = {
  isCreating: false,
  isEditing: false,
  isDescription: false,
  isSidebarOverlay: false,
  isDeletingModal: {
    isOpen: false,
    id: null,
    title: '',
  },
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
