import { apiUrl } from './routes'

export function getSnippet(pk) {
  return apiUrl
    .get(
      `edit-snippet/${pk}/`
      // {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // }
    )
    .then(res => res.data)
}
