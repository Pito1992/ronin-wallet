import axios from './fetch'
import { API_URL } from '../constants/apis'

import user from '../fixtures/user'

export const login = (credentials) => (
  // axios(`${API_URL}/iam/user-credentials`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   withCredentials: true,
  //   data: credentials,
  // })
  new Promise(res => setTimeout(() => res({ data: user }), 1500))
)



