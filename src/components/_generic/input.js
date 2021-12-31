// @flow

import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import ConditionalRender from './conditional-render'
import { MailIcon } from '@heroicons/react/solid'
import { inputTheme } from '../global-styles'

type Props = {
  validation?: Boolean,
  placeholder?: String,
  type: String,
  name: String,
  id?: String,
  theme?: String,
  hiddenLabel?: Boolean,
  label?: String,
  labelRight?: any,
  defaultValue?: String,
  value: String,
  icon?: String,
  inputStyles?: Object,
  labelStyles?: Object,
  textArea?: Boolean,
  rows?: Number,
  onChange: () => {},
  onKeyDown?: () => {},
}

const Input = ({
  validation = false,
  placeholder = '',
  type = '',
  name = '',
  id = '',
  theme = 'normal',
  hiddenLabel = false,
  label = '',
  labelRight = null,
  defaultValue = '',
  value = '',
  icon = '',
  inputStyles,
  labelStyles,
  textArea = false,
  rows = 4,
  onChange,
  onKeyDown,
}: Props) => {
  const ICONS = {
    mail: <MailIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />,
  }

  return (
    <div>
      <ConditionalRender
        condition={!textArea}
        falseRender={
          <div>
            <ConditionalRender
              condition={!labelRight}
              falseRender={
                <div className='flex justify-between'>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                    {label}
                  </label>
                  <span className='text-sm text-gray-500' id='email-optional'>
                    {labelRight}
                  </span>
                </div>
              }
            >
              <label
                htmlFor={name}
                className={`block text-sm font-medium text-${inputTheme.normal.labelText}`}
                style={{ ...labelStyles }}
              >
                {label}
              </label>
            </ConditionalRender>
            <div className='mt-1'>
              <textarea
                rows={rows}
                name={name}
                id={id}
                value={value}
                style={{ ...inputStyles }}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className={`
                    focus:ring-${inputTheme.normal.focusRing} 
                    focus:border-${inputTheme.normal.focusBorder} 
                    border-${inputTheme.normal.borderColor} 
                    border-${inputTheme.normal.borderWidth} 
                    shadow-sm block w-full sm:text-sm rounded-md px-2`}
              />
            </div>
          </div>
        }
      >
        <ConditionalRender
          condition={!labelRight}
          falseRender={
            <div className='flex justify-between'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                {label}
              </label>
              <span className='text-sm text-gray-500' id='email-optional'>
                {labelRight}
              </span>
            </div>
          }
        >
          <label
            htmlFor={name}
            className={`${
              hiddenLabel
                ? 'sr-only'
                : `block text-sm font-medium text-${inputTheme.normal.labelText}`
            } `}
            style={{ ...labelStyles }}
          >
            {label}
          </label>
        </ConditionalRender>
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
            placeholder={placeholder}
            value={value}
            aria-invalid={validation.toString()}
            aria-describedby={`${name}-${inputTheme[theme]['error']}`}
            style={{ ...inputStyles }}
            onChange={onChange}
            className={`
                ${icon ? 'pl-10' : 'pl-1 pr-10'} py-1.5 
                border-${inputTheme[theme]['borderColor']} 
                border-${inputTheme[theme]['borderWidth']} 
                text-${inputTheme[theme]['text']} 
                placeholder-${inputTheme[theme]['placeholder']} 
                focus:ring-${inputTheme[theme]['focusRing']} 
                focus:border-${inputTheme[theme]['focusBorder']} 
                block w-full sm:text-sm focus:outline-none rounded-md`}
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
      </ConditionalRender>
    </div>
  )
}

export default Input
