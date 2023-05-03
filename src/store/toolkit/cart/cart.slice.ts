import { createSlice } from '@reduxjs/toolkit'
import CartProduct from '../../../types/cart.types'

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
    
  }
})

export default cartSlice.reducer