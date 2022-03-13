// @flow
import React, { Node } from 'react'
import ResponsiveGridLayout from '../responsive-grid-layout'

type Props = {
  title: String,
  subTitle?: String,
  rightSideContent?: Node,
  children?: Node,
}

const CardBody = ({ title, subTitle, rightSideContent, children }: Props) => {
  return (
    <>
      <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
        <ResponsiveGridLayout
          as={'dl'}
          cols={{ mbl: '1', sm: '2' }}
          colGap={{ mbl: '8' }}
          rowGap={{ mbl: '4' }}
        >
          {children}
        </ResponsiveGridLayout>
      </div>
    </>
  )
}

export default CardBody
