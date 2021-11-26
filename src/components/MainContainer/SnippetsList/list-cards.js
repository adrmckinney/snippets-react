//  @flow

import * as React from 'react'

const projects = [
  { name: 'Graph API', initials: 'Laravel', href: '#', members: 16, bgColor: 'bg-pink-600' },
  { name: 'Button', initials: 'React', href: '#', members: 12, bgColor: 'bg-purple-600' },
  {
    name: 'Install React App',
    initials: 'Shell',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
  },
  { name: 'React Components', initials: 'Django', href: '#', members: 8, bgColor: 'bg-green-500' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  title: string,
}

const ListCards = ({ title }: Props) => {
  return (
    <div>
      <h2 className='text-gray-500 text-xs font-medium uppercase tracking-wide'>{title}</h2>
      <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6'>
        {projects.map(project => (
          <li key={project.name} className='col-span-1 flex shadow-sm rounded-md'>
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.initials}
            </div>
            <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
              <div className='flex-1 px-4 py-2 text-sm'>
                <a href={project.href} className='text-gray-900 font-medium hover:text-gray-600'>
                  {project.name}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListCards
