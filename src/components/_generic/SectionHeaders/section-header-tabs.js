// @flow
import React from 'react'

type Props = {
  snippet: Object,
  as?: String,
  title: String,
  tabs: Object,
  handleSelect: () => {},
  ariaCurrent: String,
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SectionHeaderTabs = ({
  snippet,
  as: CustomTag = 'a',
  title,
  tabs,
  handleSelect,
  ariaCurrent = 'page',
}: Props) => {
  return (
    <div className='border-b border-gray-200 cursor-pointer'>
      <div className='sm:flex sm:items-baseline'>
        <h3 className='text-lg leading-6 font-medium text-gray-900'>{title}</h3>
        <div className='mt-4 sm:mt-0 sm:ml-10'>
          <nav className='-mb-px flex space-x-8'>
            {tabs?.map((tab, idx) => (
              <CustomTag
                key={tab?.name}
                href={tab?.href}
                className={classNames(
                  tab?.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab?.current ? ariaCurrent : undefined}
                onClick={() => handleSelect(idx)}
              >
                {tab?.name}
              </CustomTag>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SectionHeaderTabs
