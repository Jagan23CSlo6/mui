// import './components/Sidebar.tsx'
import './App.css'

import SidebarMenu from './components/Sidebar.tsx'
import DriverModule from './components/DriverModule.tsx'
import TopBar from './components/Topbar.tsx'

function App() {


  return (
    <>
    <TopBar></TopBar>
    <div>
      <SidebarMenu/>
      <DriverModule/>
      </div>
    </>
  )
}

export default App
