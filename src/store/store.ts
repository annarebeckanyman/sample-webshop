import { booksApi } from '@api/booksApi'
import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './slices/productsSlice'
import { uiSlice } from './slices/uiSlice'

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    products: productsSlice.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
