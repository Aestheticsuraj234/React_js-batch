import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <main className="relative flex flex-col min-h-screen">
    <div className="flex-grow flex-1">
      <App />
    </div>
  </main>,
)
