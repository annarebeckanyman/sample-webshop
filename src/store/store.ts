import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './slices/uiSlice'
import { productsSlice } from './slices/productsSlice'
import { bookApi } from './slices/apiSlice'

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    products: productsSlice.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
