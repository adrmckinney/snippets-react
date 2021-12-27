import { createContext, useContext, useEffect, useState } from 'react'
import { getSnippet } from '../../api/get-snippet'

const SnippetStateContext = createContext()
const SnippetDispatchContext = createContext()

export const useSnippetState = () => {
  const snippetState = useContext(SnippetStateContext)
  const setSnippetId = useContext(SnippetDispatchContext)

  return { snippetState, setSnippetId }
}

export const withSnippetState =
  Component =>
  ({ ...rest }) => {
    const [snippetId, setSnippetId] = useState({})
    const [snippetState, setSnippetState] = useState(snippetId)

    useEffect(() => {
      getSnippet(snippetId).then(data => setSnippetState(data.snippet))
    }, [snippetId, setSnippetId])

    return (
      <SnippetStateContext.Provider value={snippetState}>
        <SnippetDispatchContext.Provider value={setSnippetId}>
          <Component {...rest} />
        </SnippetDispatchContext.Provider>
      </SnippetStateContext.Provider>
    )
  }
