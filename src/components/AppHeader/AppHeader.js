// @flow

import * as React from 'react'
import PopOver from '../_generic/PopOvers/PopOver'
import MobilePopOverButton from '../_generic/PopOvers/MobilePopOverButton'
import MobilePopOver from '../_generic/PopOvers/MobilePopOver'
import PopOverWrapper from '../_generic/PopOvers/PopOverWrapper'
import PopOverGroup from '../_generic/PopOvers/PopOverGroup'
import HeaderTitle from './HeaderTitle'
import HeaderPopOverContent from './HeaderPopOverContent'
import HorizontalLayout from '../_generic/horizontal-layout'
import MobileHeaderPopOverContent from './MobileHeaderPopOverContent'
import Button from '../_generic/Button'

type Props = {
  setShowEditor: () => {},
  showEditor: Boolean,
}

const AppHeader = ({ setShowEditor, showEditor }: Props) => {
  return (
    <PopOverWrapper>
      <HeaderTitle />

      <MobilePopOverButton />

      <HorizontalLayout
        horizontalPosition={'between'}
        verticalPosition={'center'}
        mobileHidden={'hidden'}
        sizeToDisplay={'md:'}
      >
        <PopOverGroup>
          <PopOver title={'React'} children={<HeaderPopOverContent />} />
          <PopOver title={'Laravel'} children={<HeaderPopOverContent />} />
        </PopOverGroup>
        <Button
          title={showEditor ? 'View Snippets' : 'New Snippet'}
          buttonSize={'small'}
          buttonStatus={'primary'}
          type={'button'}
          icon={showEditor ? 'terminal' : 'code'}
          onClick={() => setShowEditor(!showEditor)}
        />
        {/* <LoginContainer /> */}
      </HorizontalLayout>

      <MobilePopOver children={<MobileHeaderPopOverContent />} />
    </PopOverWrapper>
  )
}

export default AppHeader
