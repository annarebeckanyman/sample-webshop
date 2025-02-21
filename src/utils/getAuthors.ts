export const getAuthors = (authors?: string[]) => authors?.map((author) => author).join(', ') ?? 'unknown'
