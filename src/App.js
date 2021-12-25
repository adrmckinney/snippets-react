import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import MainContainer from './components/MainContainer/MainContainer'
import Header from './components/NewHeader/Header'
import { withEditorState } from './components/NewHeader/withEditorState'
import SideBar from './components/SideBar/SideBar'
import VerticalLayout from './components/_generic/vertical-layout'

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className='h-full flex'>
      {/* <AppHeader setShowEditor={setShowEditor} showEditor={showEditor} /> */}
      <SideBar
        sideBarWidth={'regular'}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {/* Content area */}
      <VerticalLayout additionalClassName={'overflow-hidden'}>
        <Header setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main content */}
        <MainContainer />
      </VerticalLayout>
    </div>
  )
}

export default withEditorState(App)
