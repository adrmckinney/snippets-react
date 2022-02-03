import { fireEvent, render, screen } from '@testing-library/react'
import Input from '../input'

const mockedSetInput = jest.fn()

describe('New Input', () => {
  it('should render input element', async () => {
    render(<Input placeholder={'test placeholder'} />)

    const inputElement = screen.getByPlaceholderText('test placeholder')
    expect(inputElement).toBeInTheDocument()
  })

  it('should be able to type in input', () => {
    render(<Input value={[]} onChange={mockedSetInput} placeholder={'test placeholder'} />)

    const inputElement = screen.getByPlaceholderText('test placeholder')
    fireEvent.change(inputElement, { target: { value: 'New Snippet' } })
    expect(inputElement.value).toBe('New Snippet')
  })
})
