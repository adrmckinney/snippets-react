import { useReducer } from 'react'

const EditorStateReducer = (state, action) => {
  switch (action.type) {
    case 'is-creating':
      return { ...state, isCreating: action.payload }
    case 'is-editing':
      return { ...state, isEditing: action.payload }
    case 'is-description':
      return { ...state, isDescription: action.payload }
    case 'is-sidebar-overlay':
      return { ...state, isSidebarOverlay: action.payload }
    case 'is-deleting-modal':
      return {
        ...state,
        isDeletingModal: {
          ...action.payload,
          isOpen: action.payload.isOpen,
          id: action.payload.id,
          title: action.payload.title,
        },
      }
    default:
      return state
  }
}

const useEditorStateReducer = initialState => {
  return useReducer(EditorStateReducer, initialState)
}

export default useEditorStateReducer
