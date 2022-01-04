import { render, screen } from '@testing-library/react'
import Button from '../Button'

it('button title should render', async () => {
  render(<Button title={'Button Title'} />)
  const title = screen.getByText(/Button Title/i)
  expect(title).toBeInTheDocument()
})

it('button should render', async () => {
  render(<Button title='Button Title' />)
  const button = screen.getByRole('button', { name: 'Button Title' })
  expect(button).toBeInTheDocument()
})

// FIND BY

it('find button by', async () => {
  render(<Button title={'Button Title'} />)
  const title = await screen.findByText(/Button Title/i)
  expect(title).toBeInTheDocument()
})

// QUERY BY

it('find button does not exist', async () => {
  render(<Button title={'Button Title'} />)
  const title = screen.queryByText(/dogs/i)
  expect(title).not.toBeInTheDocument()
})
