// @flow

import * as React from 'react'
import { Fragment } from 'react'
import { Transition, Menu } from '@headlessui/react'
import { MenuAlt2Icon, PlusSmIcon, SearchIcon } from '@heroicons/react/solid'
import Button from '../_generic/Button'
import { useEditorState } from './withEditorState'

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = ({ setMobileMenuOpen }) => {
  const { editorState: isEditing, setEditorState } = useEditorState()

  return (
    <>
      <header className='w-full sticky top-0'>
        <div className='relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex'>
          <Button
            buttonSize={'small'}
            buttonStatus={'primary'}
            type={'button'}
            icon={'menu'}
            srOnly={'Open sidebar'}
            customButtonStyle={
              'border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            }
            customIconStyle={'h-6 w-6'}
            overrideIconStyle={{ marginRight: 0 }}
            overrideButtonStyle={{
              backgroundColor: 'transparent',
            }}
            onClick={() => setMobileMenuOpen(true)}
          />
          <div className='flex-1 flex justify-between px-4 sm:px-6'>
            <div className='flex-1 flex'>
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
            </div>
            <div className='ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6'>
              {/* Tools section */}

              <Button
                title={isEditing ? 'View Snippets' : 'New Snippet'}
                buttonSize={'small'}
                buttonStatus={'primary'}
                type={'button'}
                icon={isEditing ? 'terminal' : 'code'}
                onClick={() => setEditorState(!isEditing)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
