import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BookItem, BooksResponse } from '@typings/book.types'

const apiKey = import.meta.env.VITE_API_KEY

const filterSellableItems = (items?: BookItem[]) => items?.filter((item) => item.saleInfo.saleability !== 'FREE') || []

const getSellableResponse = (response: BooksResponse) => {
  const items = filterSellableItems(response.items)
  return {
    kind: response.kind,
    totalItems: items.length,
    items: items,
  }
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/books/v1',
    credentials: 'omit',
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<BooksResponse, void>({
      query: () => `/volumes?q=*&maxResults=40&key=${apiKey}`,
      transformResponse: (response: BooksResponse) => getSellableResponse(response),
    }),
    getBooksBySubject: builder.query<BooksResponse, string>({
      query: (category) => `/volumes?q=*+subject:${category}&maxResults=40&key=${apiKey}`,
      transformResponse: (response: BooksResponse) => getSellableResponse(response),
    }),
    getBookById: builder.query<BookItem, string>({
      query: (id) => {
        return `/volumes/${id}&key=${apiKey}`
      },
      transformResponse: (response: BookItem) => {
        if (response.saleInfo.saleability !== 'FREE') {
          return response
        } else {
          throw new Error('Not available for sale')
        }
      },
    }),
  }),
})

export const { useGetAllBooksQuery, useGetBooksBySubjectQuery, useGetBookByIdQuery } = booksApi
