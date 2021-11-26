import * as React from 'react'
import HorizontalLayout from '../_generic/horizontal-layout'
import ThreeColWrapper from '../_generic/three-col-wrapper'
import SnippetContainer from './SnippetContainer/SnippetContainer'
import ListCards from './SnippetsList/list-cards'

const MainContainer = () => {
  return (
    <>
      <ThreeColWrapper
        leftColContent={<ListCards title={'Snippets'} />}
        centerColContent={
          <SnippetContainer>
            <HorizontalLayout />
          </SnippetContainer>
        }
        rightColContent={<p>This is the right</p>}
        constrainedWidth={false}
        contrainedHeight={true}
      />
    </>
  )
}

export default MainContainer
