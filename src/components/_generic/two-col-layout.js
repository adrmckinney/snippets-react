// @flow

import React, { Node } from 'react'
import HorizontalLayout from './horizontal-layout'

type Props = {
  leftColContent: Node,
  rightColContent: Node,
  leftSrOnlyTitle?: String,
  leftClassNames?: String,
  leftStyles?: Object,
  rightClassNames?: String,
  rightStyles?: Object,
  wrapperClassNames?: String,
}

const TwoColLayout = ({
  leftColContent,
  rightColContent,
  leftSrOnlyTitle,
  leftClassNames,
  leftStyles,
  rightClassNames,
  rightStyles,
  wrapperClassNames,
  columnDistribution,
}: Props) => {
  return (
    <>
      <HorizontalLayout additionalClassName={`overflow-hidden ${wrapperClassNames}`}>
        {/* Left Section */}
        <section
          aria-labelledby='primary-heading'
          className={`min-w-0 flex-1 h-full flex flex-col overflow-auto ${leftClassNames}`}
          style={{ ...leftStyles }}
        >
          <h1 id='primary-heading' className='sr-only'>
            {leftSrOnlyTitle}
          </h1>
          {leftColContent}
        </section>

        {/* Right Section */}
        <section
          className={`hidden flex-1 w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block ${rightClassNames}`}
          style={{ ...rightStyles }}
        >
          {rightColContent}
        </section>
      </HorizontalLayout>
    </>
  )
}

export default TwoColLayout
