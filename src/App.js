import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import MainContainer from './components/MainContainer/MainContainer'
import NewMain from './components/MainContainer/NewMain'
import Header from './components/NewHeader/Header'
import SideBar from './components/SideBar/SideBar'
import VerticalLayout from './components/_generic/vertical-layout'

const App = () => {
  const [showEditor, setShowEditor] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className='h-full flex'>
      {/* <AppHeader setShowEditor={setShowEditor} showEditor={showEditor} />
      <MainContainer showEditor={showEditor} /> */}
      <SideBar
        sideBarWidth={'regular'}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {/* Content area */}
      {/* <div className='flex-1 flex flex-col overflow-hidden'> */}
      <VerticalLayout additionalClassName={'overflow-hidden'}>
        <Header setMobileMenuOpen={setMobileMenuOpen} />

        {/* Main content */}
        <NewMain />
      </VerticalLayout>
      {/* </div> */}
    </div>
  )
}

export default App
