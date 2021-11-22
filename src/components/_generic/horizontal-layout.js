// @flow
import * as React from "react";

type Props = {
  children: React.Node,
  verticalPosition?: string,
  horizontalPosition?: string,
  mobileHidden?: string,
  sizeToDisplay?: string,
  styles?: Object,
};

const HorizontalLayout = ({
  children,
  verticalPosition = "center",
  horizontalPosition = "left",
  mobileHidden = "",
  sizeToDisplay = "",
  styles = {},
}: Props) => {
  return (
    <div
      className={`${mobileHidden} ${sizeToDisplay}flex-1 ${sizeToDisplay}flex ${sizeToDisplay}items-${verticalPosition} ${sizeToDisplay}justify-${horizontalPosition}`}
      style={{ ...styles }}
    >
      {children}
    </div>
  );
};

export default HorizontalLayout;
