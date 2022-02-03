// @flow

import React from 'react'
import { Fragment } from 'react'
import Button from '../_generic/Button'
import HeaderLayout from '../_generic/header-layout'
import HorizontalLayout from '../_generic/horizontal-layout'
import HeaderTools from './HeaderTools'
import { useEditorState } from './withEditorState'

const Header = () => {
  const { dispatch } = useEditorState()
  return (
    <>
      <HeaderLayout>
        <Button
          size={'small'}
          status={'primary'}
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

        <HorizontalLayout horizontalPosition='between' additionalClassName='px-4 sm:px-6'>
          <HorizontalLayout
            horizontalPosition='end'
            additionalClassName='ml-2 space-x-4 sm:ml-6 sm:space-x-6'
          >
            <HeaderTools />
          </HorizontalLayout>
        </HorizontalLayout>
      </HeaderLayout>
    </>
  )
}

export default Header
