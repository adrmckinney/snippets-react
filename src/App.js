import './App.css'
import MainContainer from './components/MainContainer/MainContainer'
import { withSnippetState } from './components/MainContainer/withSnippetState'
import Header from './components/NewHeader/Header'
import { withEditorState } from './components/NewHeader/withEditorState'
import SideBar from './components/SideBar/SideBar'
import VerticalLayout from './components/_generic/vertical-layout'

const App = () => {
  return (
    <div className='h-full flex'>
      <SideBar sideBarWidth={'regular'} />

      <VerticalLayout verticalPosition='start' additionalClassName={'h-full overflow-hidden'}>
        <Header />
        <MainContainer />
      </VerticalLayout>
    </div>
  )
}

export default withSnippetState(withEditorState(App))
