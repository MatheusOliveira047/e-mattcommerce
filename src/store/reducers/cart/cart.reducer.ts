import CartProduct from '../../../types/cart.types'
import CartActionsTypes from './cart.action-types'

interface InitialState {
  isVisible: boolean
  products: CartProduct[]
}

const initialState: InitialState = {
  isVisible: false,
  products: [],
}

const cartReducer = (state = initialState, action:any) => {
  switch (action.type){
    case CartActionsTypes.TOGGLE_CART:
      return {...state, isVisible: !state.isVisible}
    case CartActionsTypes.ADD_PRODUCT_TO_CART:{
      const product = action.payload

      const productIsAlreadyInCart = state.products.some((item)=> item.id === product.id)

      if(productIsAlreadyInCart){
        return{
          ...state,
          products: state.products.map(item=> item.id === product.id ? {...item, quantity: item.quantity + 1}: item)
        }
      }
      return {
        ...state,
        products: [...state.products, {...product, quantity:1}]
      }
    }
    case CartActionsTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      }
    case CartActionsTypes.INCREASE_PRODUCT_QUANTITY:
      return{
        ...state,
        products: state.products.map(product=> product.id === action.payload ? {...product,quantity: product.quantity + 1} : product)
      }
    case CartActionsTypes.SUBTRACT_PRODUCT_QUANTITY:
      return{
        ...state,
        products: state.products.map(product=> product.id === action.payload ? {...product,quantity: product.quantity - 1} : product).filter(product => product.quantity > 0)
      }
    case CartActionsTypes.CLEAR_PRODUCTS:
      return{
        ...state,
        products: []
      }
    default: 
      return {
        ...state
      }
  }
}

export default cartReducer