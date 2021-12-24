// @flow

import * as React from 'react'
import { Fragment, useState } from 'react'
import {
  CogIcon,
  CollectionIcon,
  HomeIcon,
  PhotographIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import MobileTransition from './MobileSidebarTransition'
import MobileSidebar from './MobileSidebarContent'
import Button from '../_generic/Button'

const sidebarNavigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: false },
  { name: 'All Files', href: '#', icon: ViewGridIcon, current: false },
  { name: 'Photos', href: '#', icon: PhotographIcon, current: true },
  { name: 'Shared', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Albums', href: '#', icon: CollectionIcon, current: false },
  { name: 'Settings', href: '#', icon: CogIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SkinnySideBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className='hidden w-28 bg-indigo-700 overflow-y-auto md:block'>
        <div className='w-full py-6 flex flex-col items-center'>
          <div className='flex-shrink-0 flex items-center'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
              alt='Workflow'
            />
          </div>
          <div className='flex-1 mt-6 w-full px-2 space-y-1'>
            {sidebarNavigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                  'group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
                    'h-6 w-6'
                  )}
                  aria-hidden='true'
                />
                <span className='mt-2'>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileTransition
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        closeModalButton={
          <Button
            buttonSize={'small'}
            buttonStatus={'primary'}
            type={'button'}
            icon={'xicon'}
            srOnly={'Close sidebar'}
            customButtonStyle={
              'h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white'
            }
            customIconStyle={'h-6 w-6 text-white'}
            overrideIconStyle={{ marginRight: 0 }}
            overrideButtonStyle={{
              backgroundColor: 'transparent',
            }}
            onClick={() => setMobileMenuOpen(false)}
          />
        }
      >
        <MobileSidebar sidebarNavigation={sidebarNavigation} />
      </MobileTransition>
    </>
  )
}

export default SkinnySideBar
