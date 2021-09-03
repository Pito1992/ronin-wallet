import axios from './fetch'
import { API_URL } from '../constants/apis'

import userWallet from '../fixtures/wallet'

export const getUserWallet = (walletId) => (
  // axios(`${API_URL}/iam/user-wallet/${walletId}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   withCredentials: true,
  // })
  new Promise(res => setTimeout(() => res({ data: userWallet }), 500))
)



