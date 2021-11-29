// @flow

import * as React from 'react'
import Button from '../../_generic/Button'
import Input from '../../_generic/input'
import SelectDropdown from '../../_generic/select-dropdown'

type Props = {
  handleChange: () => {},
  languages: Array,
  themes: Array,
  input: Object,
}

const DetailInputsContainer = ({ handleChange, languages, themes, input }: Props) => {
  console.log('input?.theme', input?.theme)
  return (
    <>
      <span className='space-y-4'>
        <Input
          label={'Title'}
          name={'title'}
          value={input?.title}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <Input
          label={'Author'}
          name={'author'}
          value={input?.author}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        <SelectDropdown
          label={'Language'}
          data={Object.keys(languages)}
          value={input?.language}
          selected={input?.language}
          onChange={e => handleChange('language', e)}
        />
        <SelectDropdown
          label={'Theme'}
          data={Object.keys(themes)}
          value={input?.theme}
          selected={input?.theme}
          onChange={e => handleChange('theme', e)}
        />
        <Button title={'Submit'} buttonStatus={'primary'} buttonSize={'small'} type={'submit'} />
      </span>
    </>
  )
}

export default DetailInputsContainer
