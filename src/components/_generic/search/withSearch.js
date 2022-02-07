import { createContext, useContext, useReducer } from 'react'
import { useSnippetState } from '../../MainContainer/withSnippetState'

const SearchStateContext = createContext()
const InputChangeContext = createContext()
const SearchResults = createContext()
const RenderSearchContext = createContext()

export const useSearch = () => {
  const searchState = useContext(SearchStateContext)
  const handleChange = useContext(InputChangeContext)
  const searchResults = useContext(SearchResults)
  const renderSearchResults = useContext(RenderSearchContext)

  return { searchState, handleChange, searchResults, renderSearchResults }
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
    const searchResults = []

    const handleChange = (name, value) => {
      dispatch({ name: name, value: value })
    }

    const filterSnippetsList = () => {
      snippetsListState?.map(snippet => {
        if (snippet?.title?.toLowerCase()?.includes(searchState.search.toLowerCase())) {
          searchResults.push(snippet)
        }
      })
    }

    const renderSearchResults = props => {
      snippetsListState?.filter(filterSnippetsList)

      return searchResults
    }
    // console.log('renderSearchResults()', renderSearchResults())
    // console.log('searchResults?.length', searchResults?.length)

    return (
      <InputChangeContext.Provider value={handleChange}>
        <SearchStateContext.Provider value={searchState}>
          <RenderSearchContext.Provider value={renderSearchResults}>
            <SearchResults.Provider value={searchResults}>
              <Component {...rest} />
            </SearchResults.Provider>
          </RenderSearchContext.Provider>
        </SearchStateContext.Provider>
      </InputChangeContext.Provider>
    )
  }
