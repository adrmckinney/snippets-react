// @flow

import React from 'react'
import { Fragment } from 'react'
import Button from '../_generic/Button'
import ConditionalRender from '../_generic/conditional-render'
import Search from '../_generic/search'
import HeaderTools from './HeaderTools'
import { useEditorState } from './withEditorState'

const Header = () => {
  const { editorState, dispatch } = useEditorState()
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
            onClick={() => dispatch({ type: 'is-sidebar-overlay', payload: true })}
          />
          <div className='flex-1 flex justify-between px-4 sm:px-6'>
            <div className='flex-1 flex'>
              <ConditionalRender condition={!editorState.isCreating || !editorState.isEditing}>
                <Search />
              </ConditionalRender>
            </div>
            <div className='ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6'>
              <HeaderTools />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
