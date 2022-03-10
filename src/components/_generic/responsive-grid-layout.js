// @flow

import React, { Node } from 'react'

type Props = {
  children: Node,
  classNames?: String,
  cols?: String,
  colGap?: String,
  rowGap?: String,
}

const ResponsiveGridLayout = ({
  children,
  classNames = '',
  cols = '4',
  colGap = '6',
  rowGap = '6',
}: Props) => {
  return (
    <div
      className={`max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-${colGap} sm:px-6 sm:py-8 lg:grid-cols-${cols} lg:px-8 lg:py-12 xl:py-16 ${classNames}`}
    >
      {children}
    </div>
  )
}

export default ResponsiveGridLayout
