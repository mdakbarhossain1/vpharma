import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes.jsx';
import OrderProvider from './contexts/OrderProvider.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <OrderProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={Routes} />
        </div>
      </OrderProvider>
    </AuthProvider>
  </React.StrictMode>,
)
