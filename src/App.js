import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import MainContainer from './components/MainContainer/MainContainer'

const App = () => {
  const [showEditor, setShowEditor] = useState(false)
  return (
    <div className='App'>
      <AppHeader setShowEditor={setShowEditor} showEditor={showEditor} />
      <MainContainer showEditor={showEditor} />
    </div>
  )
}

export default App
