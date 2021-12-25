import { createContext, useContext, useState } from 'react'

const SnippetStateContext = createContext()
const SnippetDispatchContext = createContext()

export const useSnippetState = () => {
  const snippetState = useContext(SnippetStateContext)
  const setSnippetState = useContext(SnippetDispatchContext)

  return { snippetState, setSnippetState }
}

export const withSnippetState =
  Component =>
  ({ ...rest }) => {
    const [snippetState, setSnippetState] = useState({})
  }
