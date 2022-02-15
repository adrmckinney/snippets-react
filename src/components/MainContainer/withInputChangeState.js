import { createContext, useContext, useState } from 'react'
import * as languages from 'react-syntax-highlighter/dist/cjs/languages/hljs'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'

const InputStateContext = createContext()
const SetInputStateContext = createContext()
const InputChangeContext = createContext()

const defaultLanguage = `${'javascript' || Object.keys(languages).sort()[0]}`
const defaultTheme = `${'dracula' || Object.keys(themes).sort()[0]}`

export const useInputChangeState = () => {
  const inputState = useContext(InputStateContext)
  const setInputState = useContext(SetInputStateContext)
  const handleChange = useContext(InputChangeContext)

  return { inputState, setInputState, handleChange }
}

const initialValues = {
  language: defaultLanguage,
  theme: defaultTheme,
}

export const withInputChangeState =
  Component =>
  ({ ...rest }) => {
    const [inputState, setInputState] = useState(initialValues)

    const handleChange = ({ name, value, id }, expression) => {
      switch (expression) {
        case 'description':
          return setInputState(input => ({
            ...input,
            description: {
              ...input?.description,
              [id]: {
                ...input?.description?.[id],
                [name]: value,
              },
            },
          }))
        default:
          return setInputState(input => ({
            ...input,
            [name]: value,
          }))
      }
    }

    return (
      <InputStateContext.Provider value={inputState}>
        <SetInputStateContext.Provider value={setInputState}>
          <InputChangeContext.Provider value={handleChange}>
            <Component {...rest} />
          </InputChangeContext.Provider>
        </SetInputStateContext.Provider>
      </InputStateContext.Provider>
    )
  }
