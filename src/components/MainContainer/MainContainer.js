import * as React from 'react'
import ThreeColWrapper from '../_generic/three-col-wrapper'
import ListCards from './SnippetsList/list-cards'

const MainContainer = () => {
  return (
    <>
      <ThreeColWrapper
        leftColContent={<ListCards title={'Snippets'} />}
        centerColContent={<p>This is the center</p>}
        rightColContent={<p>This is the right</p>}
        constrainedWidth={false}
        contrainedHeight={true}
      />
    </>
  )
}

export default MainContainer
