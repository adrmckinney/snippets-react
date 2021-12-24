// @flow

import * as React from 'react'
import VerticalLayout from '../_generic/vertical-layout'
import SnippetContainer from './SnippetContainer/SnippetContainer'

const NewMain = () => {
  return (
    <>
      {/* <div className='flex-1 flex items-stretch overflow-hidden'> */}
      <VerticalLayout additionalClassName={'overflow-hidden'}>
        {/* <main className='flex-1 overflow-y-auto'> */}
        {/* Primary column */}
        <section aria-labelledby='primary-heading' className='min-w-0 flex-1 flex flex-col h-1/2'>
          <h1 id='primary-heading' className='sr-only'>
            Snippet
          </h1>
          <SnippetContainer />
        </section>
        {/* </main> */}

        {/* Secondary column (hidden on smaller screens) */}
        <section className=' bg-white w-full h-1/2 border-l border-gray-200 overflow-y-auto lg:block'>
          {/* Your content */}
        </section>
      </VerticalLayout>
      {/* </div> */}
    </>
  )
}

export default NewMain
