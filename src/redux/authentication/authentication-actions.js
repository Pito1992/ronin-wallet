import { USER_LOGIN } from '../../constants/action-types'

export const userLogin = ({ password }) => ({
  type: USER_LOGIN.REQUEST,
  password
})

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN.SUCCESS,
  payload,
})

export const userLoginFailure = (error) => ({
  type: USER_LOGIN.FAILURE,
  error,
})