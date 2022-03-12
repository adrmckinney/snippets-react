// @flow

import React, { Node } from 'react'

type Props = {
  children: Node,
  classNames?: Object,
  cols?: Object,
  colGap?: Object,
  rowGap?: Object,
  py?: Object,
  px?: Object,
}

const ResponsiveGridLayout = ({
  children,
  classNames = '',
  cols = { sm: '2', lg: '4' },
  colGap = { mbl: '6', sm: '6' },
  rowGap = { sm: '6' },
  px = { mbl: '4', sm: '6', lg: '8' },
  py = { mbl: '6', sm: '8', lg: '12', xl: '16' },
}: Props) => {
  return (
    <div className={Styles.responsiveGrid({ colGap, cols, py, px, classNames })}>{children}</div>
  )
}

export default ResponsiveGridLayout

const Styles = {
  responsiveGrid: ({ colGap, cols, py, px, classNames }) =>
    [
      'max-w-7xl',
      'mx-auto',
      'grid',
      `gap-y-${colGap.mbl}`,
      `px-${px.mbl}`,
      `py-${py.mbl}`,
      `sm:grid-cols-${cols.sm}`,
      `sm:gap-${colGap.sm}`,
      `sm:px-${px.sm}`,
      `sm:py-${py.sm}`,
      `lg:grid-cols-${cols.lg}`,
      `lg:px-${px.lg}`,
      `lg:py-${py.lg}`,
      `xl:py-${py.xl}`,
      classNames,
    ].join(' '),
}
