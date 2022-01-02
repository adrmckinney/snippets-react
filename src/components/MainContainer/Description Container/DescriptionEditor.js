import React from 'react'
import Dependencies from './dependencies'
import Functionality from './functionality'
import PropInputs from './prop-inputs'
import ReturnValues from './ReturnValues'

const DescriptionEditor = () => {
  return (
    <>
      <div className='h-full overflow-scroll'>
        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Props</h2>
          <PropInputs />
        </div>

        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Return Values</h2>
          <ReturnValues />
        </div>

        <Functionality />

        <Dependencies />
      </div>
    </>
  )
}

export default DescriptionEditor
