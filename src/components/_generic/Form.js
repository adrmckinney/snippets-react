// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
}

const Form = ({ children }: Props) => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log(event)
  }

  return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
