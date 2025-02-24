import './Sidebar.tsx'
import './App.css'

import SidebarMenu from './Sidebar.tsx'
import DriverModule from './DriverModule.tsx'
import TopBar from './Topbar.tsx'

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
