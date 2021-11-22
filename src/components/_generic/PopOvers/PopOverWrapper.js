import { Popover } from "@headlessui/react";

const PopOverWrapper = ({ children }) => {
  return <Popover className="relative bg-white">{children}</Popover>;
};

export default PopOverWrapper;
