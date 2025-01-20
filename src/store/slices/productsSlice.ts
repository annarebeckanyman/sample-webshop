import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItem } from '@typings/product.types'

type ProductsState = {
  shoppingCart: CartItem[]
}

const initialState: ProductsState = {
  shoppingCart: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setShoppingCart: (state, action: PayloadAction<CartItem[]>) => {
      state.shoppingCart = action.payload
    },
  },
})

export const { setShoppingCart } = productsSlice.actions

export default productsSlice.reducer
