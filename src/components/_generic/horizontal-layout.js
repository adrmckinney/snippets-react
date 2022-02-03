// @flow
import * as React from 'react'
import { useResponsiveConfigs } from './useResponsiveConfigs'

type Props = {
  children: React.Node,
  as?: String,
  verticalPosition?: string,
  horizontalPosition?: string,
  mobileIsHidden?: Boolean,
  sizeToDisplay?: string,
  additionalClassName?: String,
  styles?: Object,
}

const HorizontalLayout = ({
  children,
  as: CustomTag = 'div',
  verticalPosition = 'center',
  horizontalPosition = 'start',
  mobileIsHidden = false,
  responsiveRender = '',
  additionalClassName = '',
  styles = {},
}: Props) => {
  const { mobileResponsive, responsiveConfigs } = useResponsiveConfigs()

  return (
    <CustomTag
      className={`
      ${mobileResponsive(mobileIsHidden)}
      ${responsiveConfigs(responsiveRender)}flex-1 
      ${responsiveConfigs(responsiveRender)}flex 
      ${responsiveConfigs(responsiveRender)}items-${verticalPosition} 
      ${responsiveConfigs(responsiveRender)}justify-${horizontalPosition}
      ${additionalClassName}
      `}
      style={{ ...styles }}
    >
      {children}
    </CustomTag>
  )
}

export default HorizontalLayout
