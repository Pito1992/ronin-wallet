import axios from './fetch'
import { API_URL } from '../constants/apis'

export const getUserWallet = (walletId) => (
  axios(`${API_URL}/iam/user-wallet/${walletId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
)



