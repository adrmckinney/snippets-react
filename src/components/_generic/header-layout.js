// @flow
import React from 'react'
import { useResponsiveConfigs } from './useResponsiveConfigs'

type Props = {
  children: Node,
  as?: String,
  mobileIsHidden?: Boolean,
  responsiveRender?: String,
  additionalClassName?: String,
  styles?: Object,
  position?: String,
}

const HeaderLayout = ({
  children,
  as: CustomTag = 'header',
  mobileIsHidden = false,
  responsiveRender = '',
  classNames = '',
  styles = {},
  position = 'sticky',
}: Props) => {
  const { mobileResponsive, responsiveConfigs } = useResponsiveConfigs()

  return (
    <CustomTag
      className={`
      ${mobileResponsive(mobileIsHidden)}
      ${position}
      ${responsiveConfigs(responsiveRender)}block
      w-full top-0 z-50
      ${classNames}
      `}
      style={{ ...styles }}
    >
      <div className='relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex'>
        {children}
      </div>
    </CustomTag>
  )
}

export default HeaderLayout
