
import { USER_LOGIN } from '../../constants/action-types'

const initialState = {
  loading: false,
  error: undefined,
  user: null,
}

function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_LOGIN.SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
        error: undefined,
        loading: false,
      }
    case USER_LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default authenticationReducer
