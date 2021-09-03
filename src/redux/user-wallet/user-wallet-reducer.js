
import { USER_WALLET } from '../../constants/action-types'

const initialState = {
  loading: false,
  error: undefined,
  userWallet: null,
}

function userWalletReducer(state = initialState, action) {
  switch (action.type) {
    case USER_WALLET.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_WALLET.SUCCESS:
      return {
        ...state,
        userWallet: {
          ...state.userWallet,
          ...action.payload,
        },
        error: undefined,
        loading: false,
      }
    case USER_WALLET.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default userWalletReducer
