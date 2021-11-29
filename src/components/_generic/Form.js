// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
  handleSubmit: () => {},
}

const Form = ({ children, handleSubmit }: Props) => {
  return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
