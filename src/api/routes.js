import axios from 'axios'

export const apiUrl = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_API_URL || 'https://mckinney-snippets.herokuapp.com/api/',
  // baseURL: 'https://mckinney-snippets.herokuapp.com/api/',
})
