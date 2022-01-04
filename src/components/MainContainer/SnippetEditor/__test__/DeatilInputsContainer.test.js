import { render, screen, fireEvent } from '@testing-library/react'
import DetailInputsContainer from '../DetailInputsContainer'

const mockedSetInput = jest.fn()

describe('Add Title Input', () => {
  it('should render title input element', async () => {
    render(<DetailInputsContainer languages={['javascript, ruby']} themes={['dracula, dark']} />)

    const titleInputElement = screen.getByPlaceholderText('Title')
    expect(titleInputElement).toBeInTheDocument()
  })

  it('should be able to type in title input', async () => {
    render(
      <DetailInputsContainer
        input={[]}
        handleChange={mockedSetInput}
        languages={['javascript, ruby']}
        themes={['dracula, dark']}
      />
    )
    const titleInputElement = screen.getByPlaceholderText('Title')
    fireEvent.change(titleInputElement, { target: { name: 'title', value: 'New Snippet' } })
    expect(titleInputElement.value).toBe('New Snippet')
  })
})
