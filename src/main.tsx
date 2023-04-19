
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import React from 'react'
import UserContextProvider from './contexts/user.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
)
