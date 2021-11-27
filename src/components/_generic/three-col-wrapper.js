// @flow

import * as React from 'react'

type Props = {
  leftColContent: React.Node,
  centerColContent: React.Node,
  rightColContent: React.Node,
  constrainedWidth?: boolean,
  constrainedHeight?: boolean,
  leftColStyle?: object,
  centerColStyle?: object,
  rightColStyle?: object,
}

const ThreeColWrapper = ({
  leftColContent,
  centerColContent,
  rightColContent,
  constrainedWidth = true,
  constrainedHeight = true,
  leftColStyle,
  centerColStyle,
  rightColStyle,
}: Props) => {
  return (
    <>
      {/* 3 column wrapper */}
      <div
        className={`${
          constrainedWidth ? 'max-w-7xl' : ''
        } h-full flex-grow w-full mx-auto xl:px-8 lg:flex`}
      >
        {/* Left sidebar & main wrapper */}
        <div className='flex-1 min-w-0 bg-white xl:flex'>
          <div className='border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white'>
            <div className='h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0'>
              {/* Start left column area */}
              <div
                className='h-full relative overflow-scroll'
                style={constrainedHeight ? { minHeight: '12rem' } : styles.containerHeight}
              >
                <div className='absolute inset-0'>{leftColContent}</div>
              </div>
              {/* End left column area */}
            </div>
          </div>

          <div className='bg-white lg:min-w-0 lg:flex-1'>
            <div className='h-full py-6 px-4 sm:px-6 lg:px-8'>
              {/* Start main area*/}
              <div
                className='relative h-full'
                style={constrainedHeight ? { minHeight: '36rem' } : styles.containerHeight}
              >
                <div className='absolute inset-0'>{centerColContent}</div>
              </div>
              {/* End main area */}
            </div>
          </div>
        </div>

        <div className='bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0'>
          <div className='h-full pl-6 py-6 lg:w-80'>
            {/* Start right column area */}
            <div
              className='h-full relative'
              style={constrainedHeight ? { minHeight: '16rem' } : styles.containerHeight}
            >
              <div className='absolute inset-0'>{rightColContent}</div>
            </div>
            {/* End right column area */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ThreeColWrapper

const styles = {
  containerHeight: {
    minHeight: '100vh',
  },
}
