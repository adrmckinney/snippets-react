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
      console.log('name', name)
      console.log('value', value)
      console.log('id', id)
      console.log('input?.description?.[id]?.length', !!inputState?.description?.[id])
      console.log('inputState?.description', inputState?.description)
      // console.log('Object.keys(inputState?.description)', Object?.keys(inputState?.length))
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

//   return setInputState(input => ({
//     ...input,
//     description: {
//       ...input?.description,
//       [id]: !!input?.description?.[id]
//         ? [
//             ...input?.description?.[id],
//             {
//               ...input?.description?.[id],
//               [name]: value,
//             },
//           ]
//         : [
//             {
//               ...input?.description?.[id],
//               [name]: value,
//             },
//           ],
//     },
//   }))
// default:
//   return setInputState(input => ({
//     ...input,
//     [name]: value,
//   }))

// setAllocations(
//   {
//     ...allocations,
//     [cartItem?.id]: {
//       productAllocations:
//         allocations?.[cartItem?.id]?.productAllocations
//           ?.length > 0
//           ? [
//               ...allocations?.[cartItem?.id]
//                 ?.productAllocations,
//               {
//                 office_id: selectedOffice?.id,
//                 office_name: selectedOffice?.name,
//                 location_code:
//                   selectedOffice?.location_code,
//                 product_id: cartItem?.product?.id,
//                 quantity: 0,
//               },
//             ]
//           : [
//               {
//                 office_id: selectedOffice?.id,
//                 office_name: selectedOffice?.name,
//                 location_code:
//                   selectedOffice?.location_code,
//                 product_id: cartItem?.product?.id,
//                 quantity: 0,
//               },
//             ],
//     },
//   },
