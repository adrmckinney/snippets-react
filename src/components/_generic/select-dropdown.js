// @flow

import * as React from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { buttonTheme, inputTheme, colorThemes } from '../global-styles'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  children?: React.Node,
  theme?: String,
  hiddenLabel?: Boolean,
  label?: String,
  data: Object,
  initialValue?: String,
  icon?: String,
  inputStyles?: Object,
  labelStyles?: Object,
}

const SelectDropdown = ({ label, data, initialValue }: Props) => {
  const [selected, setSelected] = useState(data[3])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label
            className={`block text-sm font-medium text-${inputTheme.normal.labelText}`}
          >
            {label}
          </Listbox.Label>
          <div className='mt-1 relative'>
            <Listbox.Button
              className={`
                bg-${inputTheme.normal.bgColor} 
                border-${inputTheme.normal.borderColor} 
                border-${inputTheme.normal.borderWidth} 
                focus:ring-${buttonTheme.primary.focus} 
                focus:border-${buttonTheme.primary.focusBorder} 
                sm:text-sm relative w-full rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1`}
            >
              <span className='block truncate'>{selected.name}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options
                className={`
                bg-${inputTheme.normal.bgColor} absolute z-10 mt-1 w-full shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
              >
                {data.map(item => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? `text-${colorThemes.primary.text} bg-${colorThemes.primary.bgColor}`
                          : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {item.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default SelectDropdown
