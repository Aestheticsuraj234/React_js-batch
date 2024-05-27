import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/global/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <main className="relative flex flex-col min-h-screen">
    <div className="flex-grow flex-1">
      <Navbar/>
      <App />
    </div>
  </main>,
)
