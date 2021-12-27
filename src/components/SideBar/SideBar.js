// @flow

import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import MobileTransition from './MobileSidebarTransition'
import MobileSidebar from './MobileSidebarContent'
import Button from '../_generic/Button'
import VerticalLayout from '../_generic/vertical-layout'
import { getSnippets } from '../../api/get-snippets'
import { useSnippetState } from '../MainContainer/withSnippetState'
import { useEditorState } from '../NewHeader/withEditorState'
import HorizontalLayout from '../_generic/horizontal-layout'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SideBar = ({ sideBarWidth }) => {
  const { setSnippetId } = useSnippetState()
  const { dispatch } = useEditorState()
  const [snippets, setSnippets] = useState({})

  useEffect(() => {
    getSnippets()?.then(data => setSnippets(data?.snippets))
  }, [])

  const width = {
    skinny: '28',
    regular: '64',
  }

  return (
    <>
      <div className={`hidden w-${width[sideBarWidth]} bg-indigo-700 overflow-y-auto md:block`}>
        <div className='w-full py-6 flex flex-col items-center'>
          <div className='flex-shrink-0 flex items-center'>
            <h3>Snippets</h3>
          </div>
          <div className='flex-1 mt-6 w-full px-2 space-y-1'>
            {!!snippets[0]?.id &&
              snippets?.map(snippet => (
                <VerticalLayout
                  key={snippet?.id}
                  horizontalPosition='center'
                  additionalClassName={classNames(
                    snippet?.current
                      ? 'bg-indigo-800 text-white'
                      : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                    'group w-full p-3 rounded-md text-xs font-medium'
                  )}
                  aria-current={snippet?.current ? 'page' : undefined}
                >
                  <HorizontalLayout additionalClassName={'w-full justify-between'}>
                    <Button
                      className='mt-0'
                      onClick={() => setSnippetId(snippet?.id)}
                      type={'button'}
                      buttonStatus={'icon'}
                      title={snippet?.title}
                      overrideButtonStyle={{ fontSize: 14 }}
                    />
                    <Button
                      icon={'xicon'}
                      buttonSize={'extraSmall'}
                      buttonStatus={'icon'}
                      type={'button'}
                      onClick={() => dispatch({ type: 'is-deleting-modal', payload: true })}
                    />
                  </HorizontalLayout>
                </VerticalLayout>
              ))}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <MobileTransition
        closeModalButton={
          <Button
            buttonSize={'small'}
            buttonStatus={'primary'}
            type={'button'}
            icon={'xicon'}
            srOnly={'Close sidebar'}
            customButtonStyle={
              'h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white'
            }
            customIconStyle={'h-6 w-6 text-white'}
            overrideIconStyle={{ marginRight: 0 }}
            overrideButtonStyle={{
              backgroundColor: 'transparent',
            }}
            onClick={() => dispatch({ type: 'is-sidebar-modal', payload: false })}
          />
        }
      >
        <MobileSidebar snippets={snippets} />
      </MobileTransition>
    </>
  )
}

export default SideBar
