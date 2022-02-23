import { createContext, useContext, useEffect, useState } from 'react'
import * as languages from 'react-syntax-highlighter/dist/cjs/languages/hljs'
import * as themes from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useEditorState } from '../NewHeader/withEditorState'
import { useSnippetState } from './withSnippetState'
import { uuid } from 'uuidv4'
import InputsRow from './Description Container/inputs-row'
// import { initailDescriptionValue } from './Description Container/initialValuesHelper'

const InputStateContext = createContext()
const SetInputStateContext = createContext()
const DescriptionInputContext = createContext()
const SetDescriptionInputContext = createContext()
const InputChangeContext = createContext()
const MergeDescriptionContext = createContext()

const defaultLanguage = `${'javascript' || Object.keys(languages).sort()[0]}`
const defaultTheme = `${'dracula' || Object.keys(themes).sort()[0]}`

export const useInputChangeState = initailDescriptionValue => {
  const inputState = useContext(InputStateContext)
  const setInputState = useContext(SetInputStateContext)
  const descriptionInput = useContext(DescriptionInputContext)
  const setDescriptionInput = useContext(SetDescriptionInputContext)
  const handleChange = useContext(InputChangeContext)
  const handleMergeDescriptionData = useContext(MergeDescriptionContext)

  return {
    inputState,
    setInputState,
    descriptionInput,
    setDescriptionInput,
    handleChange,
    handleMergeDescriptionData,
  }
}

const initialValues = {
  language: defaultLanguage,
  theme: defaultTheme,
}

export const withInputChangeState =
  Component =>
  ({ ...rest }) => {
    const { snippetState } = useSnippetState()
    const { editorState } = useEditorState()
    const [inputState, setInputState] = useState(initialValues)
    const [descriptionInput, setDescriptionInput] = useState()

    useEffect(() => {
      editorState?.isEditing ? setInputState(snippetState) : setInputState(initialValues)
    }, [editorState?.isEditing])

    const handleMergeDescriptionData = () => {
      const inputData = { ...inputState }
      const descriptionData = { ...descriptionInput }
      console.log('inputData', inputData)
      console.log('inputState', inputState)
      setInputState(inputState => ({
        ...inputData,
        description: descriptionData,
      }))
      console.log('inputState?.description', inputState)
    }
    console.log('inputState?.description', inputState?.description)
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
      <InputStateContext.Provider value={inputState}>
        <DescriptionInputContext.Provider value={descriptionInput}>
          <SetInputStateContext.Provider value={setInputState}>
            <SetDescriptionInputContext.Provider value={setDescriptionInput}>
              <InputChangeContext.Provider value={handleChange}>
                <MergeDescriptionContext.Provider value={handleMergeDescriptionData}>
                  <Component {...rest} />
                </MergeDescriptionContext.Provider>
              </InputChangeContext.Provider>
            </SetDescriptionInputContext.Provider>
          </SetInputStateContext.Provider>
        </DescriptionInputContext.Provider>
      </InputStateContext.Provider>
    )
  }
