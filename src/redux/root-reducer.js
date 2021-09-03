import { combineReducers } from 'redux'

import auth from './authentication/authentication-reducer'
import userWallet from './user-wallet/user-wallet-reducer'

const rootReducer = combineReducers({
  auth,
  userWallet,
})

export default rootReducer