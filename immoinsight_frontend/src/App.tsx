import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const fontLink = document.createElement('link')
fontLink.href =
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

// import './assets/css/dashboard.css'
// import './assets/css/dashboard.rtl.css'

function App() {
  return <Layout />
}

export default App
