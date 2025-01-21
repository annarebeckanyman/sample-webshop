import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductResponse, ProductsResponse } from '@typings/product.types'

const baseUrl = import.meta.env.VITE_WORKS_API_URL

export const booksApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
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
