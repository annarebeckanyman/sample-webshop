export type ProductsResponse = {
  key: string
  name: string
  subject_type: string
  work_count: number
  works: Work[]
}

export type Work = {
  key: string
  title: string
  edition_count: number
  cover_id: number
  cover_edition_key: string
  subject: string[]
  ia_collection: string[]
  lendinglibrary: boolean
  printdisabled: boolean
  lending_edition: string
  lending_identifier: string
  authors: Author[]
  first_publish_year: number
  ia: string
  public_scan: boolean
  has_fulltext: boolean
  availability: Availability
}

type Author = {
  key: string
  name: string
}

type Availability = {
  status: string
  available_to_borrow: boolean
  available_to_browse: boolean
  available_to_waitlist: boolean
  is_printdisabled: boolean
  is_readable: boolean
  is_lendable: boolean
  is_previewable: boolean
  identifier: string
  isbn: string
  oclc: string | null
  openlibrary_work: string | null
  openlibrary_edition: string | null
  last_loan_date: string | null
  num_waitlist: string | null
  last_waitlist_date: null
  is_restricted: string | null
  is_browseable: string | null
}
