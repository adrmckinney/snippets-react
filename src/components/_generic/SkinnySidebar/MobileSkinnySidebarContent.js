// @flow

import * as React from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MobileSkinnySidebarContent = ({ sidebarNavigation }) => {
  return (
    <>
      <div className='flex-shrink-0 px-4 flex items-center'>
        <img
          className='h-8 w-auto'
          src='https://tailwindui.com/img/logos/workflow-mark.svg?color=white'
          alt='Workflow'
        />
      </div>
      <div className='mt-5 flex-1 h-0 px-2 overflow-y-auto'>
        <nav className='h-full flex flex-col'>
          <div className='space-y-1'>
            {sidebarNavigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white',
                  'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-white' : 'text-indigo-300 group-hover:text-white',
                    'mr-3 h-6 w-6'
                  )}
                  aria-hidden='true'
                />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileSkinnySidebarContent
