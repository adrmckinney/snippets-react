// @flow

import React, { Node } from 'react'

type Props = {
  children: Node,
  as?: String,
  classNames?: Object,
  cols?: Object,
  colGap?: Object,
  rowGap?: Object,
  py?: Object,
  px?: Object,
}

const ResponsiveGridLayout = ({
  children,
  as: CustomTag = 'div',
  classNames = '',
  cols = { mbl: '1', sm: '2', md: '', lg: '', xl: '' },
  colGap = { mbl: '6', sm: '', md: '', lg: '', xl: '' },
  rowGap = { mbl: '6', sm: '', md: '', lg: '', xl: '' },
  px = { mbl: '4', sm: '', md: '', lg: '', xl: '' },
  py = { mbl: '6', sm: '', md: '', lg: '', xl: '' },
}: Props) => {
  return (
    <CustomTag className={Styles.responsiveGrid({ colGap, rowGap, cols, py, px, classNames })}>
      {children}
    </CustomTag>
  )
}

export default ResponsiveGridLayout

const Styles = {
  responsiveGrid: ({ colGap, rowGap, cols, py, px, classNames }) =>
    [
      'max-w-7xl',
      'mx-auto',
      'grid',
      `grid-cols-${cols.mbl}`,
      `gap-y-${colGap.mbl}`,
      `gap-x-${rowGap.mbl}`,
      `px-${px.mbl}`,
      `py-${py.mbl}`,

      `sm:grid-cols-${cols.sm}`,
      `sm:gap-y-${colGap.sm}`,
      `sm:gap-x-${rowGap.sm}`,
      `sm:px-${px.sm}`,
      `sm:py-${py.sm}`,

      `md:grid-cols-${cols.md}`,
      `md:gap-y-${colGap.md}`,
      `md:gap-x-${rowGap.md}`,
      `md:px-${px.md}`,
      `md:py-${py.md}`,

      `lg:grid-cols-${cols.lg}`,
      `lg:gap-y-${colGap.lg}`,
      `lg:gap-x-${rowGap.lg}`,
      `lg:px-${px.lg}`,
      `lg:py-${py.lg}`,

      `xl:grid-cols-${cols.xl}`,
      `xl:gap-y-${colGap.xl}`,
      `xl:gap-x-${rowGap.xl}`,
      `xl:px-${px.xl}`,
      `xl:py-${py.xl}`,
      classNames,
    ].join(' '),
}
