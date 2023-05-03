import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import CartProduct from '../../../types/cart.types'
import Product from '../../../types/product.types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    toggle: (state)=>{
      state.isVisible = !state.isVisible
    },
    add_product_to_cart: (state,action: PayloadAction<Product>)=>{
      const product = action.payload
      const productIsAlreadyInCart = state.products.some((item)=> item.id === product.id)
      if(productIsAlreadyInCart){  
          state.products = state.products.map(item=> item.id === product.id ? {...item, quantity: item.quantity + 1}: item)
        return
      }
      state.products = [...state.products,{...product,quantity:1}]
  },
  removeProductFromCart: (state,action: PayloadAction<string>)=>{
    state.products = state.products.filter(product => product.id !== action.payload)
  },
  increaseProductQuantity: (state,action:PayloadAction<string>)=>{
    state.products = state.products.map(product=> product.id === action.payload ? {...product,quantity: product.quantity + 1} : product)
  },
  subtractProductQuantity: (state,action:PayloadAction<string>)=>{
    state.products = state.products.map(product=> product.id === action.payload ? {...product,quantity: product.quantity - 1} : product).filter(product => product.quantity > 0)
  },
  clearProducts: (state)=>{
    state.products = []
  }
}})

export const {add_product_to_cart,toggle,removeProductFromCart,increaseProductQuantity,subtractProductQuantity,clearProducts} = cartSlice.actions

export default cartSlice.reducer