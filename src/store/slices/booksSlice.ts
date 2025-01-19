import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductResponse, ProductsResponse } from '@typings/product.types'

export const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://openlibrary.org' }),
  endpoints: (builder) => ({
    getBooksBySubject: builder.query<ProductsResponse, string>({
      query: (subject) => `/subjects/${subject}.json`,
    }),
    getBookByWorkId: builder.query<ProductResponse, string>({
      query: (workId) => `/works/${workId}.json`,
    }),
  }),
})

export const { useGetBooksBySubjectQuery, useGetBookByWorkIdQuery } = booksApi
