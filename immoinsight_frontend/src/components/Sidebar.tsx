import React from 'react'

interface SidebarProps {
  onSelect: (section: string) => void
  activeSection: string
  collapsed: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
  onSelect,
  activeSection,
  collapsed,
}) => {
  return (
    <nav
      id="sidebar"
      className={`sidebar js-sidebar ${collapsed ? 'collapsed' : ''}`}
    >
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="/">
          <span className="align-middle">AdminKit</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>

          <li
            className={`sidebar-item ${activeSection === 'dashboard' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('dashboard')
              }}
            >
              <i className="align-middle" data-feather="sliders"></i>{' '}
              <span className="align-middle">Dashboard</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'profile' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('profile')
              }}
            >
              <i className="align-middle" data-feather="user"></i>{' '}
              <span className="align-middle">Profile</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'signin' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('signin')
              }}
            >
              <i className="align-middle" data-feather="log-in"></i>{' '}
              <span className="align-middle">Sign In</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'signup' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('signup')
              }}
            >
              <i className="align-middle" data-feather="user-plus"></i>{' '}
              <span className="align-middle">Sign Up</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'blank' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('blank')
              }}
            >
              <i className="align-middle" data-feather="book"></i>{' '}
              <span className="align-middle">Blank</span>
            </a>
          </li>

          <li className="sidebar-header">Tools & Components</li>

          <li
            className={`sidebar-item ${activeSection === 'buttons' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('buttons')
              }}
            >
              <i className="align-middle" data-feather="square"></i>{' '}
              <span className="align-middle">Buttons</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'forms' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('forms')
              }}
            >
              <i className="align-middle" data-feather="check-square"></i>{' '}
              <span className="align-middle">Forms</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'cards' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('cards')
              }}
            >
              <i className="align-middle" data-feather="grid"></i>{' '}
              <span className="align-middle">Cards</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'typography' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('typography')
              }}
            >
              <i className="align-middle" data-feather="align-left"></i>{' '}
              <span className="align-middle">Typography</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'icons' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('icons')
              }}
            >
              <i className="align-middle" data-feather="coffee"></i>{' '}
              <span className="align-middle">Icons</span>
            </a>
          </li>

          <li className="sidebar-header">Plugins & Addons</li>

          <li
            className={`sidebar-item ${activeSection === 'charts' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('charts')
              }}
            >
              <i className="align-middle" data-feather="bar-chart-2"></i>{' '}
              <span className="align-middle">Charts</span>
            </a>
          </li>

          <li
            className={`sidebar-item ${activeSection === 'maps' ? 'active' : ''}`}
          >
            <a
              className="sidebar-link"
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onSelect('maps')
              }}
            >
              <i className="align-middle" data-feather="map"></i>{' '}
              <span className="align-middle">Maps</span>
            </a>
          </li>
        </ul>

        {/* <div className="sidebar-cta">
          <div className="sidebar-cta-content">
            <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
            <div className="mb-3 text-sm">
              Are you looking for more components? Check out our premium
              version.
            </div>
            <div className="d-grid">
              <a
                href="/"
                className="btn btn-primary"
                onClick={() => onSelect('upgrade')}
              >
                Upgrade to Pro
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  )
}

export default Sidebar
