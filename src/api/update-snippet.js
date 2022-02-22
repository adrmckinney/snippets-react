import { apiUrl } from './routes'

export function updateSnippet(id, input) {
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
