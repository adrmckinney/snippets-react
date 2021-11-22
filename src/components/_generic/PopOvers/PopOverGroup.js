import { Popover } from "@headlessui/react";

const PopOverGroup = ({ children }) => {
  return (
    <>
      <Popover.Group as="nav" className="flex space-x-10">
        {children}
      </Popover.Group>
    </>
  );
};

export default PopOverGroup;
