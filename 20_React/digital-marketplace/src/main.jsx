
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar.jsx';
import { ContextProvider } from './context/GlobalContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <BrowserRouter>
    <main className='relative flex flex-col min-h-screen'>
      <div className='flex-grow flex-1'>
        <Navbar />
        {/* <ToastBar /> */}
        <App />
      </div>
    </main>
  </BrowserRouter>
  </ContextProvider>
)
