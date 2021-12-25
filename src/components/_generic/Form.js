// @flow

import React from 'react'

type Props = {
  children: Node,
  handleSubmit: () => {},
}

const Form = ({ children, handleSubmit }: Props) => {
  return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
