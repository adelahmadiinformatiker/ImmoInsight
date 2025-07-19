import React from 'react'
import Dashboard from '../pages/Dashboard'

interface Props {
  section: string
}

const MainContent: React.FC<Props> = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'dashboard':
        return <Dashboard />
      case 'profile':
        return <div>Profile Page</div>
      case 'signin':
        return <div>Sign In Page</div>
      case 'signup':
        return <div>Sign Up Page</div>
      case 'blank':
        return <div>Blank Page</div>
      case 'buttons':
        return <div>Buttons Page</div>
      case 'forms':
        return <div>Forms Page</div>
      case 'cards':
        return <div>Cards Page</div>
      case 'typography':
        return <div>Typography Page</div>
      case 'icons':
        return <div>Icons Page</div>
      case 'charts':
        return <div>Charts Page</div>
      case 'maps':
        return <div>Maps Page</div>
      default:
        return <div>No content available</div>
    }
  }

  const getSectionTitle = () => {
    switch (section) {
      case 'dashboard':
        return 'Analytics Dashboard'
      case 'profile':
        return 'Profile'
      case 'signin':
        return 'Sign In'
      case 'signup':
        return 'Sign Up'
      case 'blank':
        return 'Blank Page'
      case 'buttons':
        return 'Buttons'
      case 'forms':
        return 'Forms'
      case 'cards':
        return 'Cards'
      case 'typography':
        return 'Typography'
      case 'icons':
        return 'Icons'
      case 'charts':
        return 'Charts'
      case 'maps':
        return 'Maps'
      default:
        return 'No content available'
    }
  }

  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">
          <strong>{getSectionTitle()}</strong>
        </h1>
        {renderContent()}
      </div>
    </main>
  )
}

export default MainContent
