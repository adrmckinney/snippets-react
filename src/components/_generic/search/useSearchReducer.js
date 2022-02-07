import { useReducer } from 'react'

export const useSearchReducer = initialState => {
  const reducer = (state, { name, value }) => {
    return {
      ...state,
      [name]: value,
    }
  }

  return useReducer(reducer, initialState)
}
