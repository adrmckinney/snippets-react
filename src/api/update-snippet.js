import { apiUrl } from './routes'

export function updateSnippet(input, id) {
  return apiUrl
    .put(
      `update-snippet/${id}/`,
      input
      // {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // }
    )
    .then(res => res.data)
}
