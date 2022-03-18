import { createContext, useContext, useReducer } from 'react'
import { useSnippetState } from '../../MainContainer/withSnippetState'

const SearchStateContext = createContext()
const InputChangeContext = createContext()
const RenderSearchContext = createContext()

export const useSearch = () => {
  const searchState = useContext(SearchStateContext)
  const handleChange = useContext(InputChangeContext)
  const renderSearchResults = useContext(RenderSearchContext)

  return { searchState, handleChange, renderSearchResults }
}

const initialState = {
  search: '',
}

const reducer = (state, { name, value }) => {
  return {
    ...state,
    [name]: value,
  }
}

export const withSearch =
  Component =>
  ({ ...rest }) => {
    const [searchState, dispatch] = useReducer(reducer, initialState)
    const { snippetsListState } = useSnippetState()

    const handleChange = (name, value) => {
      dispatch({ name, value })
    }

    const renderSearchResults = props => {
      return snippetsListState?.filter(snippet =>
        snippet?.title?.toLowerCase()?.includes(searchState.search.toLowerCase())
      )
    }

    return (
      <InputChangeContext.Provider value={handleChange}>
        <SearchStateContext.Provider value={searchState}>
          <RenderSearchContext.Provider value={renderSearchResults}>
            <Component {...rest} />
          </RenderSearchContext.Provider>
        </SearchStateContext.Provider>
      </InputChangeContext.Provider>
    )
  }
