import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { SportProvider } from './context/SportContext.jsx'

createRoot(document.getElementById('root')).render(
    <SportProvider>
    <App />
    </SportProvider>
  
)
