
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { ConstextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ConstextProvider>
      <App />
    </ConstextProvider>
  </BrowserRouter>,
)
