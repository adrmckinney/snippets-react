import axios from 'axios'

const apiUrl = axios.create({
  baseURL: 'http://localhost:8000/api/',
})

export function getSnippet(token, pk = 2) {
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
