export type ProductsResponse = {
  name: string
  works: Work[]
}

export type Work = {
  key: string
  title: string
  cover_id: number
  cover_edition_key: string
  subject: string[]
  authors: Author[]
  first_publish_year: number
  availability: Availability
}

type Availability = {
  isbn: string
}

export type Author = {
  key: string
  name: string
}

export type Description =
  | string
  | {
      type: string
      value: string
    }

export type ProductResponse = {
  title: string
  key: string
  authors: [
    {
      author: {
        key: string
      }
      type: {
        key: string
      }
    },
  ]
  description: Description
  first_sentence?: {
    type: string
    value: string
  }
  subjects: string[]
}

export type ProductDetails = {
  workId: string
  isbn: string
  title: string
  author: string
}

export type CartItem = {
  workId: string
  title: string
  author: string
  quantity: number
}
