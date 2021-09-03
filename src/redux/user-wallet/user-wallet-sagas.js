import { call, put, select, takeLatest } from 'redux-saga/effects'
import { USER_WALLET } from '../../constants/action-types'
import * as userWalletApi from '../../apis/user-wallet-api'
import {
  getUserWalletSuccess,
  getUserWalletFailure,
} from './user-wallet-actions'
import { getUserWalletId } from '../authentication/authentication-selectors'

export function* getUserWalletSaga() {
  try {
    const walletId = yield select(getUserWalletId)
    const { data } = yield call(userWalletApi.getUserWallet, walletId)
    yield put(getUserWalletSuccess(data))
  } catch(e) {
    yield put(getUserWalletFailure(e))
  }
}

export default function* saga() {
  yield takeLatest(USER_WALLET.REQUEST, getUserWalletSaga)
}