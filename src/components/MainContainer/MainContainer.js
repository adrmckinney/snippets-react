// @flow

import * as React from 'react'
import { useState } from 'react'
import ConditionalRender from '../_generic/conditional-render'
import Form from '../_generic/Form'
import HorizontalLayout from '../_generic/horizontal-layout'
import ThreeColWrapper from '../_generic/three-col-wrapper'
import SnippetContainer from './SnippetContainer/SnippetContainer'
import CodeInputContainer from './SnippetEditor/CodeInputContainer'
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
        <Form>
          <ThreeColWrapper
            leftColContent={<DetailInputsContainer />}
            centerColContent={<CodeInputContainer />}
            rightColContent={'highlighted code for real time render'}
            constrainedWidth={false}
            constrainedHeight
          />
        </Form>
      </ConditionalRender>
    </>
  )
}

export default MainContainer
