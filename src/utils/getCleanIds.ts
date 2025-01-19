export const getCleanWorkId = (key: string) => {
  return key.replace('/works/', '')
}

export const getCleanAuthorId = (key: string) => {
  return key.replace('/authors/', '')
}
