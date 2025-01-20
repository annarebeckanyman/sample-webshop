import { configureStore } from '@reduxjs/toolkit'
import { booksApi } from '@api/booksSlice'
import { uiSlice } from './slices/uiSlice'
import { productsSlice } from './slices/productsSlice'

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
