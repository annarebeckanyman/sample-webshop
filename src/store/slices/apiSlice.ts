import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductsResponse } from '@typings/products.types'

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org' }),
  endpoints: (builder) => ({
    getBooksBySubject: builder.query<ProductsResponse, string>({
      query: (subject) => `/subjects/${subject}.json`,
    }),
  }),
})

export const { useGetBooksBySubjectQuery } = bookApi
