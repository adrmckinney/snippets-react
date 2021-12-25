// @flow

import * as React from 'react'
import Button from '../../_generic/Button'
import HorizontalLayout from '../../_generic/horizontal-layout'
import Input from '../../_generic/input'
import SelectDropdown from '../../_generic/select-dropdown'

type Props = {
  handleChange: () => {},
  languages: Array,
  themes: Array,
  input: Object,
}

const DetailInputsContainer = ({ handleChange, languages, themes, input }: Props) => {
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
        <HorizontalLayout additionalClassName={'justify-around'}>
          <SelectDropdown
            label={'Language'}
            hasLabel={false}
            data={Object.keys(languages)}
            value={input?.language}
            selected={input?.language}
            wrapperClassNames={'justify-center'}
            onChange={e => handleChange('language', e)}
          />
          <SelectDropdown
            label={'Theme'}
            hasLabel={false}
            data={Object.keys(themes)}
            value={input?.theme}
            selected={input?.theme}
            wrapperClassNames={'justify-center'}
            onChange={e => handleChange('theme', e)}
          />
        </HorizontalLayout>
        <Button title={'Submit'} buttonStatus={'primary'} buttonSize={'small'} type={'submit'} />
      </span>
    </>
  )
}

export default DetailInputsContainer
