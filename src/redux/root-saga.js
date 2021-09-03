import { all, fork } from 'redux-saga/effects'

import userLoginSaga from './authentication/authentication-sagas'
import userWalletSaga from './user-wallet/user-wallet-sagas'

function* rootSaga() {
  yield all([
    fork(userLoginSaga),
    fork(userWalletSaga),
  ])
}

export default rootSaga
