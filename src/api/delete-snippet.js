import { apiUrl } from './routes'

export function deleteSnippet(id) {
  return apiUrl
    .delete(
      `delete-snippet/${id}/`
      // {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // }
    )
    .then(res => res.data)
}
