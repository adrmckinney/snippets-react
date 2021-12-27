import { apiUrl } from './routes'

export function getSnippets(token) {
  return apiUrl
    .get(
      `snippets`
      // {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // }
    )
    .then(res => res.data)
}
