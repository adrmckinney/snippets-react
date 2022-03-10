import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { getSnippet } from '../../api/get-snippet'
import { getSnippets } from '../../api/get-snippets'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import * as languages from 'react-syntax-highlighter/dist/cjs/languages/hljs'

const SnippetStateContext = createContext()
const SnippetDispatchContext = createContext()
const SnippetsStateContext = createContext()
const InvalidateSnippetsContext = createContext()
const HighlighterThemeContext = createContext()
const SetHighlighterThemeContext = createContext()
const FormRefContext = createContext()

export const useSnippetState = () => {
  const snippetState = useContext(SnippetStateContext)
  const setSnippetId = useContext(SnippetDispatchContext)
  const snippetsListState = useContext(SnippetsStateContext)
  const invalidateSnippetsList = useContext(InvalidateSnippetsContext)
  const theme = useContext(HighlighterThemeContext)
  const setTheme = useContext(SetHighlighterThemeContext)
  const formRef = useContext(FormRefContext)
  const defaultTheme = `${snippetState?.theme || Object.keys(themes).sort()[0]}`

  return {
    snippetState,
    setSnippetId,
    snippetsListState,
    invalidateSnippetsList,
    languages,
    themes,
    defaultTheme,
    theme,
    setTheme,
    formRef,
  }
}

export const withSnippetState =
  Component =>
  (themes, { ...rest }) => {
    const [snippetId, setSnippetId] = useState(null)
    const [snippetState, setSnippetState] = useState(snippetId)
    const [snippetsListState, setSnippetsListState] = useState(null)
    const [theme, setTheme] = useState(snippetState?.theme)
    const formRef = useRef()

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
              <HighlighterThemeContext.Provider value={theme}>
                <SetHighlighterThemeContext.Provider value={setTheme}>
                  <FormRefContext.Provider value={formRef}>
                    <Component themes={themes} {...rest} />
                  </FormRefContext.Provider>
                </SetHighlighterThemeContext.Provider>
              </HighlighterThemeContext.Provider>
            </InvalidateSnippetsContext.Provider>
          </SnippetDispatchContext.Provider>
        </SnippetsStateContext.Provider>
      </SnippetStateContext.Provider>
    )
  }
