import CartActionsTypes from './cart.action-types'
import CartProduct from '../../../types/cart.types'
import Product from '../../../types/product.types'


interface ToggleCartAction {
    type: typeof CartActionsTypes.TOGGLE_CART,
}

interface AddProductToCartAction {
    type: typeof CartActionsTypes.ADD_PRODUCT_TO_CART,
    payload: Product
}

interface RemoveProductFromCartAction {
    type: typeof CartActionsTypes.REMOVE_PRODUCT_FROM_CART,
    payload: string
}
interface IncreaseProductQuantityAction {
    type: typeof CartActionsTypes.INCREASE_PRODUCT_QUANTITY,
    payload: string
}
interface SubtractProductQuantityAction {
    type: typeof CartActionsTypes.SUBTRACT_PRODUCT_QUANTITY,
    payload: string
}
interface ClearProductsAction {
    type: typeof CartActionsTypes.CLEAR_PRODUCTS
}

export const cartToggle = ():ToggleCartAction => ({
    type: CartActionsTypes.TOGGLE_CART
})

export const addProductToCart = (payload: Product):AddProductToCartAction=>({
    type: CartActionsTypes.ADD_PRODUCT_TO_CART,
    payload
})

export const removeProductFromCart = (payload: string):RemoveProductFromCartAction=>({
    type:CartActionsTypes.REMOVE_PRODUCT_FROM_CART,
    payload
})

export const increaseProductQuantity = (payload:string):IncreaseProductQuantityAction=>({
    type:CartActionsTypes.INCREASE_PRODUCT_QUANTITY,
    payload
})

export const subtractProductQuantity = (payload:string):SubtractProductQuantityAction=>({
    type:CartActionsTypes.SUBTRACT_PRODUCT_QUANTITY,
    payload
})

export const clearProducts = ():ClearProductsAction=>({
    type: CartActionsTypes.CLEAR_PRODUCTS
})


export type CartActions = ToggleCartAction | AddProductToCartAction | RemoveProductFromCartAction | IncreaseProductQuantityAction | SubtractProductQuantityAction | ClearProductsAction