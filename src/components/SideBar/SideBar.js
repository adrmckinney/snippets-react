// @flow

import * as React from 'react'
import { Fragment } from 'react'
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
import VerticalLayout from '../_generic/vertical-layout'

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

const SideBar = ({ sideBarWidth, mobileMenuOpen, setMobileMenuOpen }) => {
  const width = {
    skinny: '28',
    regular: '64',
  }

  return (
    <>
      <div className={`hidden w-${width[sideBarWidth]} bg-indigo-700 overflow-y-auto md:block`}>
        <div className='w-full py-6 flex flex-col items-center'>
          <div className='flex-shrink-0 flex items-center'>
            <h3>Snippets</h3>
          </div>
          <div className='flex-1 mt-6 w-full px-2 space-y-1'>
            {sidebarNavigation.map(item => (
              <VerticalLayout
                key={item.name}
                horizontalPosition='center'
                additionalClassName={classNames(
                  item.current
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                  'group w-full p-3 rounded-md text-xs font-medium'
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
              </VerticalLayout>
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

export default SideBar
