

const CartActionsTypes = {
  TOGGLE_CART: 'cart/toggleCart' as const,
  ADD_PRODUCT_TO_CART: 'cart/addProductToCart' as const,
  REMOVE_PRODUCT_FROM_CART: 'cart/removeProductFromCart',
  INCREASE_PRODUCT_QUANTITY: 'cart/incleaseProductQuantity',
  SUBTRACT_PRODUCT_QUANTITY: 'cart/subtractProductQuantity',
  CLEAR_PRODUCTS: 'cart/clearProducts'
}

export default CartActionsTypes
