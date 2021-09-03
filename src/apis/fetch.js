import axios from 'axios'

import store from '../redux/root-store'
import { getUserToken } from '../redux/authentication/authentication-selectors'

axios.interceptors.request.use(
  function (config) {
    const apiConfig = { ...config }
    const state = store.getState()
    const token = getUserToken(state)

    if (token && !config.headers.Authorization) {
      apiConfig.headers.Authorization = `Bearer ${token}'`
    }
    // // Do something before request is sent
    return apiConfig
  },
  function (error) {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  },
)

export default axios
