import { USER_WALLET } from '../../constants/action-types'

export const getUserWallet = () => ({
  type: USER_WALLET.REQUEST,
})

export const getUserWalletSuccess = (payload) => ({
  type: USER_WALLET.SUCCESS,
  payload,
})

export const getUserWalletFailure = (error) => ({
  type: USER_WALLET.FAILURE,
  error,
})
