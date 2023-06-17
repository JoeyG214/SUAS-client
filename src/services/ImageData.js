import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/scripts'

const capture = async () => {
  const res = await axios.get(`${baseUrl}/capture-image`)
  return res.data
}

export default {
  capture
}