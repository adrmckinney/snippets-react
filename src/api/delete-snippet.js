import { apiUrl } from './routes'

export function deleteSnippet(pk) {
  return apiUrl
    .delete(
      `delete-snippet/${pk}/`
      // {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // }
    )
    .then(res => res.data)
}
