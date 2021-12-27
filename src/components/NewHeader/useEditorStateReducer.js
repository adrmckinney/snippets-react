import { useReducer } from 'react'

const EditorStateReducer = (state, action) => {
  switch (action.type) {
    case 'is-editing':
      return { ...state, isEditing: action.payload }
    case 'is-description':
      return { ...state, isDescription: action.payload }
    case 'is-sidebar-modal':
      return { ...state, isSidebarModal: action.payload }
    case 'is-deleting-modal':
      return { ...state, isDeletingModal: action.payload }
    default:
      return state
  }
}

const useEditorStateReducer = initialState => {
  return useReducer(EditorStateReducer, initialState)
}

export default useEditorStateReducer
