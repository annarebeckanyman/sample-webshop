export interface BooksResponse {
  kind: string
  totalItems: number
  items?: BookItem[]
}

export interface BookItem {
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
}

export interface VolumeInfo {
  title: string
  subtitle?: string
  authors?: string[]
  publisher?: string
  publishedDate?: string
  description?: string
  pageCount?: number
  printType?: string
  categories?: string[]
  averageRating?: number
  ratingsCount?: number
  maturityRating?: string
  imageLinks?: ImageLinks
  language?: string
  previewLink?: string
  infoLink?: string
  canonicalVolumeLink?: string
}

interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: Price
  retailPrice?: Price
  buyLink?: string
}

interface Price {
  amount: number
  currencyCode: string
}

interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  webReaderLink?: string
  textToSpeechPermission?: string
  epub?: EbookAvailability
  pdf?: EbookAvailability
}

interface EbookAvailability {
  isAvailable: boolean
  downloadLink?: string
}

interface ImageLinks {
  smallThumbnail?: string
  thumbnail?: string
}
