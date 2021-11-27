// @flow

import * as React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import ConditionalRender from './conditional-render'
import { MailIcon } from '@heroicons/react/solid'
import { inputTheme } from '../global-styles'

type Props = {
  children?: React.Node,
  validation?: Boolean,
  placeholder?: String,
  type: String,
  name: String,
  id?: String,
  theme?: String,
  hiddenLabel?: Boolean,
  label?: String,
  defaultValue?: String,
  icon?: String,
  inputStyles?: Object,
  labelStyles?: Object,
}

const Input = ({
  children,
  validation = false,
  placeholder = '',
  type = '',
  name = '',
  id = '',
  theme = 'normal',
  hiddenLabel = false,
  label = '',
  defaultValue = '',
  icon = '',
  inputStyles,
  labelStyles,
}: Props) => {
  const ICONS = {
    mail: <MailIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />,
  }
  return (
    <div>
      <label
        htmlFor={name}
        className={`${hiddenLabel ? 'sr-only' : 'block text-sm font-medium text-gray-700'} `}
        style={{ ...labelStyles }}
      >
        {label}
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <ConditionalRender condition={icon}>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            {ICONS[icon]}
          </div>
        </ConditionalRender>
        <input
          type={type}
          name={name}
          id={id}
          className={`block w-full ${icon ? 'pl-10' : 'pl-1 pr-10'} py-1.5 border-${
            inputTheme[theme]['borderColor']
          } border-${inputTheme[theme]['borderWidth']} text-${
            inputTheme[theme]['text']
          } placeholder-${inputTheme[theme]['placeholder']} focus:outline-none focus:ring-${
            inputTheme[theme]['focusRing']
          } focus:border-${inputTheme[theme]['focusBorder']} sm:text-sm rounded-md`}
          placeholder={placeholder}
          defaultValue={defaultValue}
          aria-invalid={validation.toString()}
          aria-describedby={`${name}-${inputTheme[theme]['error']}`}
          style={{ ...inputStyles }}
        />
        <ConditionalRender condition={validation}>
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <ExclamationCircleIcon className='h-5 w-5 text-red-500' aria-hidden='true' />
          </div>
        </ConditionalRender>
      </div>
      <ConditionalRender condition={validation}>
        <p className='mt-2 text-sm text-red-600' id={`${name}-${inputTheme[theme]['error']}`}>
          Your password must be less than 4 characters.
        </p>
      </ConditionalRender>
    </div>
  )
}

export default Input
