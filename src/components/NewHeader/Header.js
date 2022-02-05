// @flow

import React from 'react'
import { Fragment } from 'react'
import DetailInputsContainer from '../MainContainer/SnippetEditor/DetailInputsContainer'
import Button from '../_generic/Button'
import ConditionalRender from '../_generic/conditional-render'
import HeaderLayout from '../_generic/header-layout'
import HorizontalLayout from '../_generic/horizontal-layout'
import HeaderTools from './HeaderTools'
import { useEditorState } from './withEditorState'

const Header = () => {
  const { dispatch, editorState } = useEditorState()
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

        <HorizontalLayout
          horizontalPosition='between'
          additionalClassName='w-3/4 px-4 sm:px-2 flex-none space-x-4'
        >
          <HorizontalLayout horizontalPosition='start' additionalClassName='flex-none space-x-2'>
            <HeaderTools />
          </HorizontalLayout>
          <ConditionalRender condition={editorState.isCreating || editorState.isEditing}>
            <DetailInputsContainer />
          </ConditionalRender>
        </HorizontalLayout>
      </HeaderLayout>
    </>
  )
}

export default Header
