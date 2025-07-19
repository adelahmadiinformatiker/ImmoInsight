import { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import MainContent from './MainContent'

declare global {
  interface Window {
    feather?: { replace: () => void }
  }
}

const Layout = () => {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('collapsed', isSidebarCollapsed)
  }, [isSidebarCollapsed])

  useEffect(() => {
    setTimeout(() => {
      if (window.feather) {
        window.feather.replace()
      }
    }, 100)
  }, [activeSection])

  return (
    <div className="wrapper">
      <Sidebar
        onSelect={setActiveSection}
        activeSection={activeSection}
        collapsed={isSidebarCollapsed}
      />
      <div className="main">
        <Header toggleSidebar={() => setIsSidebarCollapsed((prev) => !prev)} />
        <MainContent section={activeSection} />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
