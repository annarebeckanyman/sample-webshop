import { filters } from '@constants/filters'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '@typings/product.types'
import { TableFilter } from '@typings/table.types'

type ProductsState = {
  cart: CartItem[]
  activeFilter: TableFilter
}

const initialState: ProductsState = {
  cart: [],
  activeFilter: filters[0],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cart = action.payload
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.cart.findIndex(({ id: workId }) => workId === action.payload.id)
      if (itemIndex >= 0) {
        const updatedItem = {
          ...state.cart[itemIndex],
          quantity: state.cart[itemIndex].quantity + 1,
        }
        state.cart = state.cart.map((item, index) => (index === itemIndex ? updatedItem : item))
      } else {
        state.cart = [...state.cart, action.payload]
      }
    },
    setActiveFilter: (state, action: PayloadAction<TableFilter>) => {
      state.activeFilter = action.payload
    },
  },
})

export const { setCart, addToCart, setActiveFilter } = productsSlice.actions

export default productsSlice.reducer
