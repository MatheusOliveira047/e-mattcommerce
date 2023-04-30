import CartActionsTypes from './cart.action-types'
import CartProduct from '../../../types/cart.types'
import Product from '../../../types/product.types'


interface ToggleCartAction {
    type: typeof CartActionsTypes.TOGGLE_CART,
}

interface AddProductToCartAction {
    type: typeof CartActionsTypes.ADD_PRODUCT_TO_CART,
    payload: CartProduct[]
}

export const cartToggle = ():ToggleCartAction => ({
    type: CartActionsTypes.TOGGLE_CART
})

export const addProductToCart = (payload: Product)=>({
    type: CartActionsTypes.ADD_PRODUCT_TO_CART,
    payload
})

export const removeProductFromCart = (payload: string)=>({
    type:CartActionsTypes.REMOVE_PRODUCT_FROM_CART,
    payload
})


export type UserActions = ToggleCartAction