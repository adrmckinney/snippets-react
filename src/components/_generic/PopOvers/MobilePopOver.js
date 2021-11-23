// @flow

import * as React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

type Props = {
  children: React.Node,
}

const MobilePopOver = ({ children }: Props) => {
  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel
        focus
        className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
      >
        {children}
      </Popover.Panel>
    </Transition>
  )
}

export default MobilePopOver
