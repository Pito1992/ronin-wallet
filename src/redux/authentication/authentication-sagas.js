import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_LOGIN } from '../../constants/action-types'
import * as userApi from '../../apis/authentication-api'
import {
  userLoginSuccess,
  userLoginFailure,
} from './authentication-actions'

export function* userLoginSaga(action) {
  try {
    const { data } = yield call(userApi.login, {
      password: action.password
    })
    yield put(userLoginSuccess(data))
  } catch(e) {
    yield put(userLoginFailure(e))
  }
}

export default function* saga() {
  yield takeLatest(USER_LOGIN.REQUEST, userLoginSaga)
}