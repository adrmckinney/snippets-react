import { apiUrl } from './routes'

export function getSnippet(token, pk = 27) {
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
