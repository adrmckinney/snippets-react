// @flow
import React from 'react'
import type { Node } from 'react'

type Props = {
  children?: Node,
  as?: String,
  verticalPosition?: string,
  horizontalPosition?: string,
  mobileHidden?: string,
  sizeToDisplay?: string,
  additionalClassName?: String,
  styles?: Object,
  onClick?: () => {},
}

const VerticalLayout = ({
  children,
  as: CustomTag = 'div',
  verticalPosition = 'center',
  horizontalPosition = 'left',
  mobileHidden = '',
  sizeToDisplay = '',
  additionalClassName = '',
  styles = {},
  onClick,
}: Props) => (
  <CustomTag
    onClick={onClick}
    className={`
    ${mobileHidden} 
    ${sizeToDisplay}flex-1 
    ${sizeToDisplay}flex 
    ${sizeToDisplay}flex-col
    ${sizeToDisplay}justify-${verticalPosition}
    ${sizeToDisplay}items-${horizontalPosition}
    ${additionalClassName}
    `}
    style={{ ...styles }}
  >
    {children}
  </CustomTag>
)

export default VerticalLayout
