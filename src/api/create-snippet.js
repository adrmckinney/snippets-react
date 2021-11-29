import { apiUrl } from './routes'

export function createSnippet(input) {
  return apiUrl
    .post(
      `create-snippet/`,
      input
      // {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // }
    )
    .then(res => res.data)
}
