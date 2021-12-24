// @flow
import * as React from 'react'

type Props = {
  children: React.Node,
  as?: String,
  verticalPosition?: string,
  horizontalPosition?: string,
  mobileHidden?: string,
  sizeToDisplay?: string,
  additionalClassName?: String,
  styles?: Object,
}

const HorizontalLayout = ({
  children,
  as: CustomTag = 'div',
  verticalPosition = 'center',
  horizontalPosition = 'left',
  mobileHidden = '',
  sizeToDisplay = '',
  additionalClassName = '',
  styles = {},
}: Props) => {
  return (
    <CustomTag
      className={`
      ${mobileHidden} 
      ${sizeToDisplay}flex-1 
      ${sizeToDisplay}flex 
      ${sizeToDisplay}items-${verticalPosition} 
      ${sizeToDisplay}justify-${horizontalPosition}
      ${additionalClassName}
      `}
      style={{ ...styles }}
    >
      {children}
    </CustomTag>
  )
}

export default HorizontalLayout
