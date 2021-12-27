// @flow

import React from 'react'
import { useSnippetState } from '../MainContainer/withSnippetState'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  snippets: Object,
}

const MobileSidebarContent = ({ snippets }: Props) => {
  const { setSnippetId } = useSnippetState()
  return (
    <>
      <div className='flex-shrink-0 px-4 flex items-center'>
        <h3>Snippets</h3>
      </div>
      <div className='mt-5 flex-1 h-0 px-2 overflow-y-auto'>
        <nav className='h-full flex flex-col'>
          <div className='space-y-1'>
            {snippets.map(snippet => (
              <div
                key={snippet.id}
                onClick={() => setSnippetId(snippet?.id)}
                className={classNames(
                  snippet.current
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                  'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                )}
                aria-current={snippet.current ? 'page' : undefined}
              >
                <span>{snippet.title}</span>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileSidebarContent
