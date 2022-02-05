import React, { useReducer, useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useSnippetState } from '../MainContainer/withSnippetState'
import { getSnippets } from '../../api/get-snippets'

const initialState = {
  search: '',
}

const reducer = (state, { name, value }) => {
  return {
    ...state,
    [name]: value,
  }
}

const Search = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { snippetsListState } = useSnippetState()
  const [searchResults, setSearchResults] = useState([])
  console.log('snippetsListState', snippetsListState)
  console.log('state', state)
  const filteredSnippets = []
  const filterSnippetsList = () => {
    snippetsListState?.map(snippet => {
      if (snippet?.title?.toLowerCase()?.includes(state.search.toLowerCase())) {
        filteredSnippets.push(snippet)
      }
    })
  }

  const handleChange = (name, value) => {
    dispatch({ name: name, value: value })
  }

  const renderSearchResults = props => {
    snippetsListState?.filter(filterSnippetsList)

    return filteredSnippets.map(snippet => snippet)
  }
  console.log('renderSearchResults()', renderSearchResults())

  return (
    <>
      <form className='w-full flex md:ml-0'>
        <label htmlFor='search-field' className='sr-only'>
          Search all files
        </label>
        <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
            <SearchIcon className='flex-shrink-0 h-5 w-5' aria-hidden='true' />
          </div>
          <input
            name='search'
            id='snippet-search'
            className='h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400'
            placeholder='Search'
            type='search'
            value={state.seaerch}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </div>
      </form>
    </>
  )
}

export default Search
