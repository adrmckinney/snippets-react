// @flow

import * as React from 'react'
import { useState } from 'react'
import ConditionalRender from '../_generic/conditional-render'
import HorizontalLayout from '../_generic/horizontal-layout'
import ThreeColWrapper from '../_generic/three-col-wrapper'
import SnippetContainer from './SnippetContainer/SnippetContainer'
import DetailInputsContainer from './SnippetEditor/DetailInputsContainer'
import ListCards from './SnippetsList/list-cards'

const MainContainer = () => {
  const [snippetEditor, setSnippetEditor] = useState(true)

  return (
    <>
      <ConditionalRender
        condition={snippetEditor}
        falseRender={
          <ThreeColWrapper
            leftColContent={<ListCards title={'Snippets'} />}
            centerColContent={
              <SnippetContainer>
                <HorizontalLayout />
              </SnippetContainer>
            }
            rightColContent={<p>This is the description area</p>}
            constrainedWidth={false}
            constrainedHeight={true}
          />
        }
      >
        <ThreeColWrapper
          leftColContent={<DetailInputsContainer />}
          centerColContent={'text area to write code'}
          rightColContent={'highlighted code for real time render'}
          constrainedWidth={false}
          constrainedHeight
        />
      </ConditionalRender>
    </>
  )
}

export default MainContainer
