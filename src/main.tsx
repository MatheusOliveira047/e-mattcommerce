
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import React from 'react'
import {Provider} from 'react-redux'
import UserContextProvider from './contexts/user.context'
import CategoryContextProvider from './contexts/category.context'
import CartContextProvider from './contexts/cart.context'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
        <CategoryContextProvider>
          <CartContextProvider>
           <App />
          </CartContextProvider>
       </CategoryContextProvider>
    </Provider>
</React.StrictMode>,
)
