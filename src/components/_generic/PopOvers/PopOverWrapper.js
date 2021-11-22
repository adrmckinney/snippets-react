// @flow

import * as React from "react";
import { Popover } from "@headlessui/react";

type Props = {
  children: React.Node,
};

const PopOverWrapper = ({ children }: Props) => {
  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          {children}
        </div>
      </div>
    </Popover>
  );
};

export default PopOverWrapper;
