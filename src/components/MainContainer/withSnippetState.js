import { createContext, useContext, useEffect, useState } from 'react'
import { getSnippet } from '../../api/get-snippet'
import { getSnippets } from '../../api/get-snippets'

const SnippetStateContext = createContext()
const SnippetDispatchContext = createContext()
const SnippetsStateContext = createContext()
const InvalidateSnippetsContext = createContext()

export const useSnippetState = () => {
  const snippetState = useContext(SnippetStateContext)
  const setSnippetId = useContext(SnippetDispatchContext)
  const snippetsListState = useContext(SnippetsStateContext)
  const invalidateSnippetsList = useContext(InvalidateSnippetsContext)

  return { snippetState, setSnippetId, snippetsListState, invalidateSnippetsList }
}

export const withSnippetState =
  Component =>
  ({ ...rest }) => {
    const [snippetId, setSnippetId] = useState({})
    const [snippetState, setSnippetState] = useState(snippetId)
    const [snippetsListState, setSnippetsListState] = useState({})

    useEffect(() => {
      getSnippet(snippetId).then(data => setSnippetState(data.snippet))
    }, [snippetId, setSnippetId])

    useEffect(() => {
      getSnippets().then(data => setSnippetsListState(data?.snippets))
    }, [])

    const invalidateSnippetsList = () => {
      getSnippets().then(data => setSnippetsListState(data?.snippets))
    }

    return (
      <SnippetStateContext.Provider value={snippetState}>
        <SnippetsStateContext.Provider value={snippetsListState}>
          <SnippetDispatchContext.Provider value={setSnippetId}>
            <InvalidateSnippetsContext.Provider value={invalidateSnippetsList}>
              <Component {...rest} />
            </InvalidateSnippetsContext.Provider>
          </SnippetDispatchContext.Provider>
        </SnippetsStateContext.Provider>
      </SnippetStateContext.Provider>
    )
  }
