import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import StoreContextProvider from './context/StoredContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>

 <StoreContextProvider>
 <App />
 </StoreContextProvider>
  </BrowserRouter>
   

)
