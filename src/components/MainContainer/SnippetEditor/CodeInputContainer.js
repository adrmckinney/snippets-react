// @flow

import React from 'react'
import { useState } from 'react'
import Button from '../../_generic/Button'
import ConditionalRender from '../../_generic/conditional-render'
import Input from '../../_generic/input'

type Props = {
  handleChange: () => {},
  input: Object,
}

const CodeInputContainer = ({ handleChange, input }: Props) => {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <>
      <ConditionalRender
        condition={showDescription}
        falseRender={
          <Input
            textArea
            name={'snippet'}
            label={'Code'}
            rows='30'
            value={input?.snippet}
            onChange={e => handleChange(e.target.name, e.target.value)}
            onKeyDown={() => {}}
            labelRight={
              <Button
                title={showDescription ? 'Code Editor' : 'Write Desciption'}
                type={'button'}
                buttonSize={'extraSmall'}
                buttonStatus={'primary'}
                icon={'reply'}
                onClick={() => setShowDescription(!showDescription)}
              />
            }
          />
        }
      >
        <Input
          textArea
          name={'description'}
          label={'Description'}
          rows='30'
          value={input?.description}
          onChange={e => handleChange(e.target.name, e.target.value)}
          labelRight={
            <Button
              title={showDescription ? 'Code Editor' : 'Write Desciption'}
              type={'button'}
              buttonSize={'extraSmall'}
              buttonStatus={'primary'}
              icon={'code'}
              onClick={() => setShowDescription(!showDescription)}
            />
          }
        />
      </ConditionalRender>
    </>
  )
}

export default CodeInputContainer
