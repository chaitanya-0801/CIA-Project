import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {ToastContainer} from 'react-toastify'
import router from './Routes/BasicRoutes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <ToastContainer />
      {/* <App /> */}
    </RouterProvider>
  </StrictMode>,
)
