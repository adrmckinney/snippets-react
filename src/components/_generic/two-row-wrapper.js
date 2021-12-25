// @flow

import React, { Node } from 'react'
import ConditionalRender from './conditional-render'
import VerticalLayout from './vertical-layout'

type Props = {
  topSectionContent: Node,
  bottomSectionContent: Node,
  topSrOnlyTitle?: String,
  topClassNames?: String,
  topStyles?: Object,
  bottomSrOnlyTitle?: String,
  bottomClassNames?: String,
  bottomStyles?: Object,
  wrapperClassNames?: String,
}

const TwoRowWrapper = ({
  topSectionContent,
  bottomSectionContent,
  topSrOnlyTitle,
  topClassNames,
  topStyles,
  bottomSrOnlyTitle,
  bottomClassNames,
  bottomStyles,
  wrapperClassNames,
}: Props) => {
  return (
    <>
      <VerticalLayout additionalClassName={`overflow-hidden items-between ${wrapperClassNames}`}>
        {/* Top Section */}
        <section
          aria-labelledby='primary-heading'
          className={`
          min-w-0 flex-1 flex flex-col h-1/2
          ${topClassNames}
        `}
          style={{ ...topStyles }}
        >
          <ConditionalRender condition={!!topSrOnlyTitle}>
            <h1 id='primary-heading' className='sr-only'>
              {topSrOnlyTitle}
            </h1>
          </ConditionalRender>
          {topSectionContent}
        </section>

        {/* Bottom Section */}
        <section
          className={`
            bg-white w-full h-1/2 border-l border-gray-200 overflow-y-auto lg:block
            ${bottomClassNames}
          `}
        >
          <ConditionalRender condition={!!bottomSrOnlyTitle}>
            <h1 id='primary-heading' className='sr-only'>
              {bottomSrOnlyTitle}
            </h1>
          </ConditionalRender>
          {bottomSectionContent}
        </section>
      </VerticalLayout>
    </>
  )
}

export default TwoRowWrapper
