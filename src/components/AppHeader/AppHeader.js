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

const AppHeader = () => {
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
          title={'New Snippet'}
          buttonSize={'small'}
          buttonStatus={'primary'}
          type={'button'}
          icon={'edit'}
        />
        {/* <LoginContainer /> */}
      </HorizontalLayout>

      <MobilePopOver children={<MobileHeaderPopOverContent />} />
    </PopOverWrapper>
  )
}

export default AppHeader
