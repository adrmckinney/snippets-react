// @flow
import React from 'react'
import ConditionalRender from '../conditional-render'

type Props = {
  title: String,
  data: String,
  colSpan?: String,
}
const DescriptionList = ({ title, data, colSpan = '1' }: Props) => {
  console.log('data', data)
  const noData = data === null

  return (
    <>
      <ConditionalRender condition={!noData}>
        <div className={`sm:col-span-${colSpan}`}>
          <dt className='text-sm font-medium text-gray-500'>{title}</dt>
          <dd className='mt-1 text-sm text-gray-900'>{data}</dd>
        </div>
      </ConditionalRender>
    </>
  )
}

export default DescriptionList
