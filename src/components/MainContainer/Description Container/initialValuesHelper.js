import { uuid } from 'uuidv4'

export const initailPropValue = {
  key: uuid(),
  prop_name: '',
  prop_type: '',
  required: '',
  description: '',
}

export const initailReturnValue = {
  key: uuid(),
  return_name: '',
  return_type: '',
  return_description: '',
}

export const initailDependencyValue = {
  key: uuid(),
  name: '',
  type: '',
  description: '',
}

export const initailDescriptionValue = {
  props: [initailPropValue],
  return_values: [initailReturnValue],
  dependencies: [initailDependencyValue],
}
