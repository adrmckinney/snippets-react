import React from 'react'
import Functionality from './functionality'
import PropInputs from './prop-inputs'
import ReturnValues from './ReturnValues'

const DescriptionEditor = () => {
  return (
    <>
      <div>
        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Props</h2>
          <PropInputs />
        </div>

        <div className='m-4 border-4'>
          <h2 className='pl-4 pt-2'>Return Values</h2>
          <ReturnValues />
        </div>

        <Functionality />
      </div>
    </>
  )
}

export default DescriptionEditor
