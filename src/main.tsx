
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import React from 'react'
import {Provider} from 'react-redux'
//@ts-ignore
import { PersistGate } from 'redux-persist/integration/react'
import CategoryContextProvider from './contexts/category.context'
import CartContextProvider from './contexts/cart.context'
import {store, persistedStore} from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <CategoryContextProvider>
          <CartContextProvider>
           <App />
          </CartContextProvider>
       </CategoryContextProvider>
      </PersistGate>
    </Provider>
</React.StrictMode>,
)
