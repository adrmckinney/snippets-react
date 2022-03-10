import { createContext, useContext, useEffect, useState } from 'react'
import * as languages from 'react-syntax-highlighter/dist/cjs/languages/hljs'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { createSnippet } from '../../api/create-snippet'
import { updateSnippet } from '../../api/update-snippet'
import { useEditorState } from '../NewHeader/withEditorState'
import { useSnippetState } from './withSnippetState'

const InputStateContext = createContext()
const SetInputStateContext = createContext()
const DescriptionInputContext = createContext()
const SetDescriptionInputContext = createContext()
const InputChangeContext = createContext()
const HandleSubmitContext = createContext()

const defaultLanguage = `${'javascript' || Object.keys(languages).sort()[0]}`
const defaultTheme = `${'dracula' || Object.keys(themes).sort()[0]}`

export const useInputChangeState = initailDescriptionValue => {
  const inputState = useContext(InputStateContext)
  const setInputState = useContext(SetInputStateContext)
  const descriptionInput = useContext(DescriptionInputContext)
  const setDescriptionInput = useContext(SetDescriptionInputContext)
  const handleChange = useContext(InputChangeContext)
  const handleSubmit = useContext(HandleSubmitContext)

  return {
    inputState,
    setInputState,
    descriptionInput,
    setDescriptionInput,
    handleChange,
    handleSubmit,
  }
}

const initialValues = {
  language: defaultLanguage,
  theme: defaultTheme,
}

export const withInputChangeState =
  Component =>
  ({ ...rest }) => {
    const { snippetState, invalidateSnippetsList } = useSnippetState()
    const { editorState, dispatch } = useEditorState()
    const [inputState, setInputState] = useState(initialValues)
    const [descriptionInput, setDescriptionInput] = useState()

    useEffect(() => {
      editorState?.isEditing ? setInputState(snippetState) : setInputState(initialValues)
    }, [editorState?.isEditing])

    const handleSubmit = () => {
      const inputData = { ...inputState, description: descriptionInput }

      if (editorState?.isEditing) {
        updateSnippet(snippetState?.id, inputData).then(data => {
          dispatch({ type: 'reset' })
          invalidateSnippetsList()
        })
      } else {
        createSnippet(inputData).then(data => {
          dispatch({ type: 'reset' })
          invalidateSnippetsList()
        })
      }
    }

    const handleChange = ({ name, value, id }, expression) => {
      switch (expression) {
        case 'description':
          return setInputState(input => ({
            ...input,
            description: {
              ...input?.description?.[id],
              [name]: value,
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
      <HandleSubmitContext.Provider value={handleSubmit}>
        <InputStateContext.Provider value={inputState}>
          <DescriptionInputContext.Provider value={descriptionInput}>
            <SetInputStateContext.Provider value={setInputState}>
              <SetDescriptionInputContext.Provider value={setDescriptionInput}>
                <InputChangeContext.Provider value={handleChange}>
                  <Component {...rest} />
                </InputChangeContext.Provider>
              </SetDescriptionInputContext.Provider>
            </SetInputStateContext.Provider>
          </DescriptionInputContext.Provider>
        </InputStateContext.Provider>
      </HandleSubmitContext.Provider>
    )
  }
