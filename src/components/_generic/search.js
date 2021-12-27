import { SearchIcon } from '@heroicons/react/solid'

const Search = () => {
  return (
    <>
      <form className='w-full flex md:ml-0' action='#' method='GET'>
        <label htmlFor='search-field' className='sr-only'>
          Search all files
        </label>
        <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
            <SearchIcon className='flex-shrink-0 h-5 w-5' aria-hidden='true' />
          </div>
          <input
            name='search-field'
            id='search-field'
            className='h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400'
            placeholder='Search'
            type='search'
          />
        </div>
      </form>
    </>
  )
}

export default Search
