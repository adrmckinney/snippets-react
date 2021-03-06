// @flow

import React, { useMemo } from 'react'
import { Fragment } from 'react'
import MobileTransition from './MobileSidebarTransition'
import MobileSidebar from './MobileSidebarContent'
import Button from '../_generic/Button'
import VerticalLayout from '../_generic/vertical-layout'
import { useSnippetState } from '../MainContainer/withSnippetState'
import { useEditorState } from '../NewHeader/withEditorState'
import HorizontalLayout from '../_generic/horizontal-layout'
import DeleteSnippetAlert from '../_generic/Alerts/delete-snippet-alert'
import ConditionalRender from '../_generic/conditional-render'
import Search from '../_generic/search/search'
import PaddedLayout from '../_generic/padded-layout'
import { useSearch, withSearch } from '../_generic/search/withSearch'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SideBar = ({ sideBarWidth }) => {
  const { setSnippetId, snippetsListState: snippets } = useSnippetState()
  const { dispatch, editorState } = useEditorState()
  const { searchState, renderSearchResults } = useSearch()

  const width = {
    skinny: '28',
    regular: '64',
  }

  const handleNoResults = () => {
    return (
      <PaddedLayout>
        <p className='text-md text-white'>No Results Found</p>
      </PaddedLayout>
    )
  }

  const renderSnippets = useMemo(() => {
    const snippitsList = !!searchState?.search ? renderSearchResults() : snippets

    return snippitsList?.map(snippet => (
      <VerticalLayout
        key={snippet?.id}
        horizontalPosition={{ mbl: 'center' }}
        classNames={classNames(
          snippet?.current
            ? 'bg-indigo-800 text-white'
            : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
          'group w-full p-3 rounded-md text-xs font-medium'
        )}
        aria-current={snippet?.current ? 'page' : undefined}
      >
        <HorizontalLayout horizontalPosition={{ sm: 'between' }} classNames={['w-full'].join(' ')}>
          <Button
            className='mt-0'
            onClick={() => setSnippetId(snippet?.id)}
            type={'button'}
            status={'icon'}
            title={snippet?.title}
            overrideButtonStyle={{ fontSize: '1rem' }}
          />
          <Button
            icon={'xicon'}
            size={'extraSmall'}
            status={'icon'}
            type={'button'}
            onClick={() =>
              dispatch({
                type: 'is-deleting-modal',
                payload: { isOpen: true, id: snippet?.id, title: snippet?.title },
              })
            }
          />
        </HorizontalLayout>
      </VerticalLayout>
    ))
  }, [snippets, setSnippetId, dispatch, renderSearchResults, searchState?.search])

  return (
    <>
      <DeleteSnippetAlert />
      <div className={`hidden w-${width[sideBarWidth]} bg-indigo-700 overflow-y-auto md:block`}>
        <div className='w-full py-6 flex flex-col items-center'>
          <div className='flex-shrink-0 flex items-center'>
            <h3>Snippets</h3>
          </div>
          <ConditionalRender condition={!editorState.isCreating || !editorState.isEditing}>
            <PaddedLayout>
              <Search />
            </PaddedLayout>
          </ConditionalRender>
          <div className='flex-1 mt-6 w-full px-2 space-y-1'>
            {renderSearchResults()?.length === 0 ? handleNoResults() : null}
            {renderSnippets}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <MobileTransition
        closeModalButton={
          <Button
            size={'small'}
            status={'primary'}
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
            onClick={() => dispatch({ type: 'is-sidebar-overlay', payload: false })}
          />
        }
      >
        <MobileSidebar snippets={snippets} />
      </MobileTransition>
    </>
  )
}

export default withSearch(SideBar)
