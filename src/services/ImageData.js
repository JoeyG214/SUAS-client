import axios from 'axios'

const baseUrl = '/api/scripts'

export const capture = async () => {
  const res = await axios.get(`${baseUrl}/capture-image`)
  return res.data
}