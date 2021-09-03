import { createSelector } from 'reselect'

export const getAuth = (state) => state.auth || {}

export const getAuthLoading = createSelector(
  getAuth,
  ({ loading }) => loading,
)

export const getAuthError = createSelector(
  getAuth,
  ({ error }) => error,
)

export const getAuthUser = createSelector(
  getAuth,
  ({ user }) => user || {},
)

export const getUserToken = createSelector(
  getAuthUser,
  ({ token }) => token,
)

export const getUserWalletId = createSelector(
  getAuthUser,
  ({ walletId }) => walletId,
)

