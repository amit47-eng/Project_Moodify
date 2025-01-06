import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './interface/sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <> 
    <App/>
   <Sidebar/>
  
  </>
)
