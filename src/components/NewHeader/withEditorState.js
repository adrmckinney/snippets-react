import { createContext, useContext, useState } from 'react'

const EditorStateContext = createContext()
const EditorSetContext = createContext()

export const useEditorState = () => {
  const editorState = useContext(EditorStateContext)
  const setEditorState = useContext(EditorSetContext)

  return { editorState, setEditorState }
}

export const withEditorState =
  Component =>
  ({ ...rest }) => {
    const [editorState, setEditorState] = useState(false)

    return (
      <EditorStateContext.Provider value={editorState}>
        <EditorSetContext.Provider value={setEditorState}>
          <Component {...rest} />
        </EditorSetContext.Provider>
      </EditorStateContext.Provider>
    )
  }
